import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Agenda, AgendaImage, ArticleStatus } from '../../../../core/models';
import { ApiService } from '../../../../core/services/api.service';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent {

    // ---------------- NOTIFICATION MODAL ----------------
notification = signal<{ show: boolean; message: string; type: 'success' | 'error' | 'info' }>({
  show: false,
  message: '',
  type: 'success'
});



articles = signal<Agenda[]>([]);
  loading = signal(true);
  showModal = signal(false);
  editingArticle = signal<Agenda | null>(null);
  saving = signal(false);
  selectedImages: File[] = [];
  //selectedImage: File | null = null;
  fileError = false;
  currentPage = signal(1);
pageSize = 7; // nombre de projets par page
totalPages = signal(1);
  form: { title: string; summary: string; lieux:string; datePublication: Date; content: string;  status: ArticleStatus; images: AgendaImage[]; } = {
    title: '',
    summary: '',
    content: '',
    lieux: '',
    datePublication:new Date(),
    status: ArticleStatus.DRAFT,
    images: []
  };


  constructor(private apiService: ApiService, private router: Router) {}
  
  ngOnInit(): void {
    this.loadArticles();
  }


    loadArticles(page: number = 0): void {
  this.loading.set(true);

  this.apiService.getAllAgendas(page, this.pageSize).subscribe({
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
  this.form = {
    title: '',
    summary: '',
    content: '',
    lieux:'',
    datePublication:new Date(),
    status: ArticleStatus.DRAFT,
    images: [] // ✅ important
  };

  this.selectedImages = []; // multiple images
  this.fileError = false;
  this.editingArticle.set(null);
  this.showModal.set(true);
}



closeModal(form?: NgForm): void {
  this.showModal.set(false);
  this.editingArticle.set(null);
  this.selectedImages = [];
  this.fileError = false;
  form?.resetForm();
}

  


onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;

  if (!input.files || input.files.length === 0) {
    this.selectedImages = [];
    return;
  }

  this.selectedImages = Array.from(input.files); // ✅ convert FileList → File[]
  this.fileError = false;
}
  

  
editArticle(article: Agenda): void {
  this.form = {
    title: article.title,
    summary: article.summary || '',
    content: article.content,
    status: article.status,
    lieux: article.lieux,
    datePublication: article.datePublication,
    images: article.images || [] // ✅ IMPORTANT
  };

  // reset images sélectionnées
  this.selectedImages = [];
  this.editingArticle.set(article);
  this.showModal.set(true);
}

  
saveArticle(form?: NgForm): void {
  console.log(this.form)
  if (!this.form.title || !this.form.content) return;

  // image obligatoire seulement si création
  if (!this.editingArticle() && (!this.selectedImages || this.selectedImages.length === 0)) {
    this.fileError = true;
    return;
  }

  this.saving.set(true);
  const editing = this.editingArticle();

  const articleDTO = {
    title: this.form.title,
    summary: this.form.summary,
    content: this.form.content,
    status: this.form.status,
    lieux: this.form.lieux,
     datePublication: this.form.datePublication,

  };

  const formData = new FormData();
  formData.append('agenda', new Blob([JSON.stringify(articleDTO)], { type: 'application/json' }));
  formData.append('authorId', '1');

  // ✅ MULTI IMAGES
  this.selectedImages.forEach(file => {
    formData.append('files', file); // backend: List<MultipartFile> images
  });

  const request = editing
    ? this.apiService.updateAgendas(editing.id, formData)
    : this.apiService.createAgendas(formData);

  request.subscribe({
    next: () => {
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
  
  trackByArticleId(index: number, article: Agenda) { return article.id; }

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


deleteArticle(article: Agenda): void {
  // Ouvre le modal au lieu de confirm()
  this.openConfirmModal(`Voulez-vous vraiment supprimer l'article "${article.title}" ?`, () => {
    this.apiService.deleteAgendas(article.id).subscribe({
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
