import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, MinValidator, NgForm } from '@angular/forms';
import { Ministere } from '../../../core/models/event.model';
import { ApiService } from '../../../core/services/api.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-ministere',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './ministere.component.html',
  styleUrls: ['./ministere.component.scss']
})
export class MinistereComponent {


    // ---------------- NOTIFICATION MODAL ----------------
notification = signal<{ show: boolean; message: string; type: 'success' | 'error' | 'info' }>({
  show: false,
  message: '',
  type: 'success'
});




  articles = signal<Ministere[]>([]);
  loading = signal(true);
  showModal = signal(false);
  editingArticle = signal<Ministere | null>(null);
  saving = signal(false);
  selectedImage: File | null = null;
   selectedImage1: File | null = null;
  fileError = false;
    fileError1 = false;
  currentPage = signal(1);
pageSize = 7; // nombre de projets par page
totalPages = signal(1);
  form: { nomGeneral: string;
  nomReel: string;
  acronyme: string; missionGeneral: string; presentationSynthetique: string; presentationGlobale: string;} = {
    nomGeneral: '',
    nomReel: '',
    acronyme: '',
    missionGeneral: '',
    presentationSynthetique:'',
    presentationGlobale:'',

   
  };
  
  constructor(private apiService: ApiService, private router: Router) {}
  
  ngOnInit(): void {
    this.loadArticles();
  }
  
  loadArticles(page: number = 0): void {
  this.loading.set(true);

  this.apiService.getAllMins(page, this.pageSize).subscribe({
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
    this.form = { nomGeneral: '', nomReel: '', acronyme: '' , missionGeneral:'', presentationGlobale:'',presentationSynthetique:''};
     this.selectedImage = null;
     this.selectedImage1 = null;
  this.fileError = false;
  this.fileError1 = false;
    this.editingArticle.set(null);
    this.showModal.set(true);
  }
  
  closeModal(form?: NgForm): void {
    this.showModal.set(false);
    this.editingArticle.set(null);
    this.selectedImage = null;
     this.selectedImage1 = null;
    this.fileError = false;
    this.fileError1 = false;
    form?.resetForm();
  }


  
  onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;

  if (!input.files || input.files.length === 0) {
    this.selectedImage = null;
    return;
  }

  const file = input.files[0];


    if (!file.type.startsWith('image/')) {
      alert('Pour une actualité, veuillez sélectionner une image');
      input.value = '';
      this.selectedImage = null;
      return;
    }
  

  this.selectedImage = file;
  this.fileError = false;
}

  onFileSelected1(event: Event): void {
  const input = event.target as HTMLInputElement;

  if (!input.files || input.files.length === 0) {
    this.selectedImage1 = null;
    return;
  }

  const file = input.files[0];


    if (!file.type.startsWith('image/')) {
      alert('Pour une actualité, veuillez sélectionner une image');
      input.value = '';
      this.selectedImage1 = null;
      return;
    }
  

  this.selectedImage1 = file;
  this.fileError1 = false;
}


// Fonction viewArticle
viewArticle(article: Ministere): void {
  this.router.navigate([`/admin/ministere`, article.id]);
}

  
  editArticle(article: Ministere): void {
    this.form = {
      nomGeneral: article.nomGeneral,
      nomReel: article.nomReel,
      acronyme: article.acronyme,
       missionGeneral: article.missionGeneral,
       presentationGlobale:article.presentationGlobale,
       presentationSynthetique:article.presentationSynthetique
      
    };
    this.editingArticle.set(article);
    this.showModal.set(true);
  }
  
saveArticle(form?: NgForm): void {
   // sécurité supplémentaire
  if (!this.form.nomGeneral || !this.form.nomReel) return;

  // image obligatoire pour ACTUALITE
  

  this.saving.set(true);
  const editing = this.editingArticle();

  const articleDTO = {
    nomGeneral: this.form.nomGeneral,
    nomReel: this.form.nomReel,
    acronyme: this.form.acronyme,
     missionGeneral: this.form.missionGeneral,
     presentationGlobale: this.form.presentationGlobale,
     presentationSynthetique: this.form.presentationSynthetique,
    
  };

  const formData = new FormData();
  formData.append('ministere', new Blob([JSON.stringify(articleDTO)], { type: 'application/json' }));
  formData.append('authorId', '1');
  if (this.selectedImage) formData.append('logo', this.selectedImage);
    if (this.selectedImage1) formData.append('image', this.selectedImage1);

  const request = editing
    ? this.apiService.updatemin(editing.id, formData)
    : this.apiService.createmin(formData);

  request.subscribe({
    next: (response) => {
      // ✅ même si response.success est undefined, on considère que le backend a répondu correctement
      this.loadArticles();
      this.closeModal(form);
      this.saving.set(false);
      this.showNotification(editing ? "Ministère mis à jour avec succès" : "Ministère créé avec succès", 'success');

    },
    error: (err) => {
      console.error('Erreur lors de la sauvegarde', err);
      this.saving.set(false);
      this.showNotification("Erreur lors de la sauvegarde", 'error');
    }
  });
}

  
  deleteArticle1(article: Ministere): void {
    if (confirm(`Supprimer l'article "${article.nomGeneral}" ?`)) {
      this.apiService.deleteArticle(article.id).subscribe({
        next: () => this.loadArticles()
      });
    }
  }
  

  


  // ----------------- HELPERS -----------------
  
  trackByArticleId(index: number, article: Ministere) { return article.id; }

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

deleteArticle(article: Ministere): void {
  // Ouvre le modal au lieu de confirm()
  this.openConfirmModal(`Voulez-vous vraiment supprimer l'article "${article.nomGeneral}" ?`, () => {
    this.apiService.deleteMin(article.id).subscribe({
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
