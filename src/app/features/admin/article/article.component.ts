import { Component, ChangeDetectorRef, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Article, ArticleCategory, Articlemage, ArticleStatus } from '../../../core/models';
import { ApiService } from '../../../core/services/api.service';
import { Router, RouterModule } from '@angular/router';
import { EditorModule } from 'primeng/editor';
import { ThemeSwitcher } from "./themeswitcher"; // Importez EditorModule

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EditorModule, ThemeSwitcher],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  // ---------------- NOTIFICATION MODAL ----------------
notification = signal<{ show: boolean; message: string; type: 'success' | 'error' | 'info' }>({
  show: false,
  message: '',
  type: 'success'
});

    text: string | undefined;

selectedImages: File[] = []; // pour ACTUALITE
selectedFile: File | null = null; // pour PDF


  articles = signal<Article[]>([]);
  loading = signal(true);
  showModal = signal(false);
  editingArticle = signal<Article | null>(null);
  saving = signal(false);
  selectedImage: File | null = null;
  fileError = false;
  currentPage = signal(1);
pageSize = 7; // nombre de projets par page
totalPages = signal(1);
  form: { title: string; summary: string; content: string; category: ArticleCategory; status: ArticleStatus; featured: boolean, images: Articlemage[]; } = {
    title: '',
    summary: '',
    content: '',
    category: ArticleCategory.ACTUALITE,
    status: ArticleStatus.DRAFT,
    featured: false,
    images: []
  };
  
  constructor(private apiService: ApiService, private router: Router) {}
  
  ngOnInit(): void {
    this.loadArticles();
  }
  
  loadArticles(page: number = 0): void {
  this.loading.set(true);

  this.apiService.getAllArticles(page, this.pageSize).subscribe({
    next: (response) => {
      if (response.success) {
        // articles DEJA paginés par le backend
        this.articles.set(response.data.content);

        // totalPages vient du backend
        this.totalPages.set(response.data.totalPages);

        // page backend commence à 0, UI à 1
        this.currentPage.set(page + 1);
      }
      this.loading.set(false);
    },
    error: () => {
      this.loading.set(false);
    }
  });
}



nextPage() {
  if (this.currentPage() < this.totalPages()) {
    this.loadArticles(this.currentPage());
  }
}

prevPage() {
  if (this.currentPage() > 1) {
    this.loadArticles(this.currentPage() - 2);
  }
}

goToPage(page: number) {
  this.loadArticles(page - 1);
}

pages(): number[] {
  return Array.from({ length: this.totalPages() }, (_, i) => i + 1);
}

  
  openModal(): void {
    this.form = { title: '', summary: '', content: '', category: ArticleCategory.ACTUALITE, status: ArticleStatus.DRAFT, featured: false,  images: [] };
     this.selectedImage = null;
     this.selectedImages= [];
    this.selectedFile= null;
  this.fileError = false;
    this.editingArticle.set(null);
    this.showModal.set(true);
    
  }
  
  closeModal(form?: NgForm): void {
    this.showModal.set(false);
    this.editingArticle.set(null);
    this.selectedImage = null;
     this.selectedImages= [];
    this.selectedFile= null;
    this.fileError = false;
    form?.resetForm();
  }


  

  
  onFileSelected1(event: Event): void {
  const input = event.target as HTMLInputElement;

  if (!input.files || input.files.length === 0) {
    this.selectedImage = null;
    return;
  }

  const file = input.files[0];

  if (this.form.category === 'ACTUALITE') {
    if (!file.type.startsWith('image/')) {
      alert('Pour une actualité, veuillez sélectionner une image');
      input.value = '';
      this.selectedImage = null;
      return;
    }
  } else {
    if (file.type !== 'application/pdf') {
      alert('Veuillez sélectionner un fichier PDF');
      input.value = '';
      this.selectedImage = null;
      return;
    }
  }

  this.selectedImage = file;
  this.fileError = false;
}

extractImagesFromContent(content: string): string[] {
  const div = document.createElement('div');
  div.innerHTML = content || '';

  return Array.from(div.querySelectorAll('img'))
    .map(img => img.getAttribute('src') || '')
    .filter(src => src !== '');
}


async urlToFile(url: string, index: number): Promise<File> {
  const response = await fetch(url);
  const blob = await response.blob();

  return new File([blob], `image-${index}.jpg`, {
    type: blob.type || 'image/jpeg'
  });
}

async updateSelectedImagesFromEditor() {
  const urls = this.extractImagesFromContent(this.form.content);

  this.selectedImages = await Promise.all(
    urls.map((url, i) => this.urlToFile(url, i))
  );
}


async save() {
  await this.updateSelectedImagesFromEditor();

  console.log(this.selectedImages); // File[]

  const formData = new FormData();

  this.selectedImages.forEach(file => {
    formData.append('files', file);
  });

  
}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    

    if (!input.files || input.files.length === 0) {
      this.selectedImages = [];
      return;
    }

    const files = Array.from(input.files);

    // =====================
    // CAS ACTUALITE → IMAGES MULTIPLES
    // =====================
    if (this.form.category === 'ACTUALITE') {
      const validImages = files.filter(file => file.type.startsWith('image/'));

      if (validImages.length !== files.length) {
        alert('Certains fichiers ne sont pas des images');
      }

      if (validImages.length === 0) {
        input.value = '';
        this.selectedImages = [];
        this.fileError = true;
        return;
      }

      this.selectedImages = validImages;
    }

    // =====================
    // AUTRES → UN SEUL PDF
    // =====================
    else {
      const file = files[0];

      if (file.type !== 'application/pdf') {
        alert('Veuillez sélectionner un fichier PDF');
        input.value = '';
        this.selectedImages = [];
        this.fileError = true;
        return;
      }

      this.selectedImages = [file]; // toujours un tableau
    }

    this.fileError = false;
  }



  onFileSelected2(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      this.selectedImages = [];
      this.selectedFile = null;
      return;
    }

    const files = Array.from(input.files);

    // =====================
    // CAS ACTUALITE → IMAGES MULTIPLES
    // =====================
    if (this.form.category === 'ACTUALITE') {
      const validImages: File[] = [];

      for (const file of files) {
        if (!file.type.startsWith('image/')) {
          alert(`Le fichier ${file.name} n'est pas une image`);
          continue;
        }
        validImages.push(file);
      }

      if (validImages.length === 0) {
        input.value = '';
        this.selectedImages = [];
        this.fileError = true;
        return;
      }

      this.selectedImages = validImages;
      this.selectedFile = null; // reset PDF
    }

    // =====================
    // AUTRES → UN SEUL PDF
    // =====================
    else {
      const file = files[0];

      if (file.type !== 'application/pdf') {
        alert('Veuillez sélectionner un fichier PDF');
        input.value = '';
        this.selectedFile = null;
        this.fileError = true;
        return;
      }

      this.selectedFile = file;
      this.selectedImages = []; // reset images
    }

    this.fileError = false;
  }


// Fonction viewArticle
viewArticle(article: Article): void {
  this.router.navigate([`/admin/Articles`, article.id]);
}

  
  editArticle(article: Article): void {
    this.form = {
      title: article.title,
      summary: article.summary || '',
      content: article.content,
      category: article.category,
      status: article.status,
      featured: article.featured,
      images: article.images || []
    };
    this.selectedImages = [];
    this.selectedFile=null;
    this.editingArticle.set(article);
    this.showModal.set(true);
  }
  
saveArticle(form?: NgForm): void {
   // sécurité supplémentaire
  if (!this.form.title || !this.form.content) return;

  // image obligatoire pour ACTUALITE
  if (this.form.category === 'ACTUALITE' && !this.selectedImages) {
    this.fileError = true;
    return;
  }

  this.saving.set(true);
  const editing = this.editingArticle();

  const articleDTO = {
    title: this.form.title,
    summary: this.form.summary,
    content: this.form.content,
    category: this.form.category,
    status: this.form.status,
    featured: this.form.featured
  };

  const formData = new FormData();
  formData.append('article', new Blob([JSON.stringify(articleDTO)], { type: 'application/json' }));
  formData.append('authorId', '1');

   // ✅ MULTI IMAGES
  this.selectedImages.forEach(file => {
    formData.append('file', file); // backend: List<MultipartFile> images
  });
  //if (this.selectedImage) formData.append('file', this.selectedImage);

  const request = editing
    ? this.apiService.updateArticle(editing.id, formData)
    : this.apiService.createArticle(formData);

  request.subscribe({
    next: (response) => {
      // ✅ même si response.success est undefined, on considère que le backend a répondu correctement
      this.loadArticles();
      this.closeModal(form);
      this.saving.set(false);
      this.showNotification(editing ? "Article mis à jour avec succès" : "Article créé avec succès", 'success');

    },
    error: (err) => {
      console.error('Erreur lors de la sauvegarde', err);
      this.saving.set(false);
      this.showNotification("Erreur lors de la sauvegarde", 'error');
    }
  });
}

  
  deleteArticle1(article: Article): void {
    if (confirm(`Supprimer l'article "${article.title}" ?`)) {
      this.apiService.deleteArticle(article.id).subscribe({
        next: () => this.loadArticles()
      });
    }
  }
  
  getCategoryLabel(category: string): string {
    const labels: Record<string, string> = {
      'ACTUALITE': 'Actualité', 'COMMUNIQUE': 'Communiqué', 'EVENEMENT': 'Événement',
      'PROJET': 'Projet', 'RAPPORT': 'Rapport', 'DISCOURS': 'Discours'
    };
    return labels[category] || category;
  }
  
getStatusLabel(status: string) {
    const labels: Record<string, string> = { DRAFT: 'Brouillon', PENDING: 'En attente', PUBLISHED: 'Publié', ARCHIVED: 'Archivé' };
    return labels[status] || status;
  }

  getStatusBadgeClass(status: string) {
    const classes: Record<string, string> = {
      DRAFT: 'badge bg-neutral-100 text-neutral-700 ring-1 ring-neutral-300',
      PENDING: 'badge bg-yellow-50 text-yellow-700 ring-1 ring-yellow-200',
      PUBLISHED: 'badge bg-green-50 text-green-700 ring-1 ring-green-200',
      ARCHIVED: 'badge bg-red-50 text-red-700 ring-1 ring-red-200'
    };
    return classes[status] || 'badge bg-neutral-100 text-neutral-600';
  }
  
  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('fr-FR');
  }

  // ----------------- HELPERS -----------------
  
  trackByArticleId(index: number, article: Article) { return article.id; }

  // ----------------- NOTIFICATIONS -----------------
  showNotification(message: string, type: 'success' | 'error' | 'info' = 'success', duration = 2000) {
  this.notification.set({ show: true, message, type });
  setTimeout(() => this.notification.update(n => ({ ...n, show: false })), duration);


}



// ----------------- CONFIRMATION MODAL -----------------
confirmModal = signal<{ show: boolean; message: string; onConfirm: () => void }>({
  show: false,
  message: '',
  onConfirm: () => {}
});

openConfirmModal(message: string, onConfirm: () => void) {
  this.confirmModal.set({ show: true, message, onConfirm });
}

closeConfirmModal() {
  this.confirmModal.update(c => ({ ...c, show: false }));
}

deleteArticle(article: Article): void {
  // Ouvre le modal au lieu de confirm()
  this.openConfirmModal(`Voulez-vous vraiment supprimer l'article "${article.title}" ?`, () => {
    this.apiService.deleteArticle(article.id).subscribe({
      next: () => {
        this.loadArticles();
        this.closeConfirmModal(); // ferme le modal après suppression
        this.showNotification('Article supprimé avec succès', 'success'); // toast succès
      },
      error: () => {
        this.showNotification("Erreur lors de la suppression", "error");
        this.closeConfirmModal();
      }
    });
  });
}



  
}
