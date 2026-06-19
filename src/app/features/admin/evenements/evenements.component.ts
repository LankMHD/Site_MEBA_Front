import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Events, EventStatus } from '../../../core/models/event.model';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-evenements',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.scss']
})
export class EvenementsComponent {

    // ---------------- NOTIFICATION MODAL ----------------
notification = signal<{ show: boolean; message: string; type: 'success' | 'error' | 'info' }>({
  show: false,
  message: '',
  type: 'success'
});


articles = signal<Events[]>([]);
  loading = signal(true);
  showModal = signal(false);
  editingArticle = signal<Events | null>(null);
  saving = signal(false);
  selectedImage: File | null = null;
    selectedImages: File[] = [];
  fileError = false;
  currentPage = signal(1);
pageSize = 7; // nombre de projets par page
totalPages = signal(1);
  form: { title: string; description: string; content: string; startDate: string; endDate: string; statut: EventStatus; location: string, category:string , isPublic:boolean, maxParticipants: number, currentParticipants:number} = {
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    category: '',
    statut: 'UPCOMING',
    location: '',
    content: '',
    isPublic:false, maxParticipants: 0, currentParticipants:0,
    
  };


    constructor(private apiService: ApiService, private router: Router) {}
  
  ngOnInit(): void {
    this.loadevents();
  }


    loadevents(page: number = 0): void {
  this.loading.set(true);

  this.apiService.getAllEvents(page, this.pageSize).subscribe({
    next: (response) => {
      
        // articles DEJA paginés par le backend
        this.articles.set(response.content);

        // totalPages vient du backend
        this.totalPages.set(response.totalPages);

        // page backend commence à 0, UI à 1
        this.currentPage.set(page + 1);
      
      this.loading.set(false);
    },
    error: () => {
      this.loading.set(false);
    }
  });
}



nextPage() {
  if (this.currentPage() < this.totalPages()) {
    this.loadevents(this.currentPage());
  }
}

prevPage() {
  if (this.currentPage() > 1) {
    this.loadevents(this.currentPage() - 2);
  }
}

goToPage(page: number) {
  this.loadevents(page - 1);
}

pages(): number[] {
  return Array.from({ length: this.totalPages() }, (_, i) => i + 1);
}


  openModal(): void {
    this.form = { title: '',
    description: '',
    startDate: '',
    endDate: '',
     content: '',
    category: '',
    statut: 'UPCOMING',
    location: '',
    isPublic:false, maxParticipants: 0, currentParticipants:0, };
     this.selectedImage = null;
  this.fileError = false;
    this.editingArticle.set(null);
    this.showModal.set(true);
  }
  
  closeModal(form?: NgForm): void {
    this.showModal.set(false);
    this.editingArticle.set(null);
    this.selectedImage = null;
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


// Fonction viewArticle
viewArticle(article: Events): void {
  this.router.navigate([`/admin/evenement`, article.id]);
}

  
  editArticle(article: Events): void {
    this.form = {
      title: article.title,
      description: article.description,
    startDate: article.startDate,
    endDate: article.endDate,
     content: article.content,
    category: article.category,
    statut: article.statut,
    location: article.location,
    isPublic:article.isPublic, maxParticipants: article.maxParticipants, currentParticipants:article.currentParticipants,
     
    };
    this.editingArticle.set(article);
    this.showModal.set(true);
  }


  saveArticle(form?: NgForm): void {
   // sécurité supplémentaire
  if (!this.form.title || !this.form.description) return;

  // image obligatoire pour ACTUALITE
   if (!this.editingArticle() && (!this.selectedImages || this.selectedImages.length === 0)) {
    this.fileError = true;
    return;
  }

  this.saving.set(true);
  const editing = this.editingArticle();

  const articleDTO = {
    title: this.form.title,
       content: this.form.content,
      description: this.form.description,
    startDate: this.form.startDate,
    endDate: this.form.endDate,
    category: this.form.category,
    statut: this.form.statut,
    location: this.form.location,
    isPublic:this.form.isPublic, maxParticipants: this.form.maxParticipants, currentParticipants:this.form.currentParticipants,
     
  };

  const formData = new FormData();
  formData.append('evenement', new Blob([JSON.stringify(articleDTO)], { type: 'application/json' }));
  //formData.append('authorId', '1');
  this.selectedImages.forEach(file => {
    formData.append('file', file); // backend: List<MultipartFile> images
  });

  const request = editing
    ? this.apiService.updateEvent(editing.id, formData)
    : this.apiService.createEvent(formData);

  request.subscribe({
    next: (response) => {
      // ✅ même si response.success est undefined, on considère que le backend a répondu correctement
      this.loadevents();
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


  getDay(dateStr: string): string {
    return new Date(dateStr).getDate().toString().padStart(2, '0');
  }

  getMonth(dateStr: string): string {
    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
    return months[new Date(dateStr).getMonth()];
  }

  getYear(dateStr: string): string {
    return new Date(dateStr).getFullYear().toString();
  }

  formatTime(dateStr: string): string {
    return new Date(dateStr).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'UPCOMING': return 'bg-blue-100 text-blue-700';
      case 'ONGOING': return 'bg-green-100 text-green-700';
      case 'COMPLETED': return 'bg-gray-100 text-gray-700';
      case 'CANCELLED': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'UPCOMING': return 'À venir';
      case 'ONGOING': return 'En cours';
      case 'COMPLETED': return 'Terminé';
      case 'CANCELLED': return 'Annulé';
      default: return status;
    }
  }



  // ----------------- HELPERS -----------------
  
  trackByArticleId(index: number, article: Events) { return article.id; }

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

deleteArticle(article: Events): void {
  // Ouvre le modal au lieu de confirm()
  this.openConfirmModal(`Voulez-vous vraiment supprimer l'article "${article.title}" ?`, () => {
    this.apiService.deleteEvent(article.id).subscribe({
      next: () => {
        this.loadevents();
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

 formatDate(dateStr: string): string {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('fr-FR');
  }




}
