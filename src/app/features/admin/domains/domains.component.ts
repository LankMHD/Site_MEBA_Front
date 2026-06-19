import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Domains } from '../../../core/models/event.model';
import { MinistereService } from '../../../core/services/ministere.service';

@Component({
  selector: 'app-domains',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.scss']
})
export class DomainsComponent {


   notification = signal<{ show: boolean; message: string; type: 'success' | 'error' | 'info' }>({
  show: false,
  message: '',
  type: 'success'
});

projects = signal<Domains[]>([]);
loading = signal(true);
showModal = signal(false);
editingProject = signal<Domains | null>(null);
saving = signal(false);

currentPage = signal(1);
pageSize = 7; // nombre de projets par page
totalPages = signal(1);

form: {
  nom: string;
  
  
} = {
  nom: '',
  
  
};

constructor(private apiService: MinistereService) {}

ngOnInit(): void {
  this.loadProjects();
}


// Charger tous les projets
loadProjects(): void {
  this.loading.set(true);

  this.apiService.getAllTypes().subscribe({
    next: (response) => {
      console.log("RESPONSE =", response); // 👈 ici le tableau

      this.projects.set(response.data.content); // ✅ DIRECTEMENT
      console.log("PROJECTS =", this.projects());

      this.totalPages.set(Math.ceil(response.data.content.length / this.pageSize));
      this.currentPage.set(1);

      this.loading.set(false);
    },
    error: (err) => {
      console.error("Erreur API", err);
      this.loading.set(false);
    }
  });
}


// Retourne uniquement les projets de la page actuelle
paginatedProjects() {
  const all = this.projects();
  const start = (this.currentPage() - 1) * this.pageSize;
  return all.slice(start, start + this.pageSize);
}

// Pagination
nextPage() {
  if (this.currentPage() < this.totalPages()) {
    this.currentPage.update(p => p + 1);
  }
}

prevPage() {
  if (this.currentPage() > 1) {
    this.currentPage.update(p => p - 1);
  }
}

// Modal et CRUD
openModal(): void {
  this.form = { nom: '' };
  this.editingProject.set(null);
  this.showModal.set(true);
}

closeModal(): void {
  this.showModal.set(false);
  this.editingProject.set(null);
}


editProject(project: Domains): void {
  this.form = {
    nom: project.nom,
    
    
  };
  this.editingProject.set(project);
  this.showModal.set(true);
}

saveProject(): void {
  if (!this.form.nom ) return;
  this.saving.set(true);
  const editing = this.editingProject();
  const request = editing ? this.apiService.updateTypes(editing.id, this.form) : this.apiService.createTypes(this.form);
  request.subscribe({
    next: (response) => {
      console.log("API response =", response);
      
        this.loadProjects();
        this.closeModal();
      
      this.saving.set(false);
      this.showNotification(editing ? "Type Document mis à jour avec succès" : "Type Document créé avec succès", 'success');

    },
        error: (err) => {
      console.error('Erreur lors de la sauvegarde', err);
      this.saving.set(false);
      this.showNotification("Erreur lors de la sauvegarde", 'error');
    }
  });
}

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


deleteProject(article: Domains): void {
  console.log("fvfv");
  // Ouvre le modal au lieu de confirm()
  this.openConfirmModal(`Voulez-vous vraiment supprimer ce type de document "${article.nom}" ?`, () => {
      
    this.apiService.deleteTypes(article.id).subscribe({
      next: () => {
        this.loadProjects();
        this.closeConfirmModal(); // ferme le modal après suppression
        this.showNotification('Projet supprimé avec succès', 'success'); // toast succès
      },
      error: () => {
        this.showNotification("Erreur lors de la suppression", "error");
        this.closeConfirmModal();
      }
    });
  });
}


}
