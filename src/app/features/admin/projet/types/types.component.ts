import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeDocument } from '../../../../core/models';
import { ApiService } from '../../../../core/services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-types',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent {
  notification = signal<{ show: boolean; message: string; type: 'success' | 'error' | 'info' }>({
  show: false,
  message: '',
  type: 'success'
});


projects = signal<TypeDocument[]>([]);
loading = signal(true);
showModal = signal(false);
editingProject = signal<TypeDocument | null>(null);
saving = signal(false);

currentPage = signal(1);
pageSize = 7; // nombre de projets par page
totalPages = signal(1);

form: {
  name: string;
  description: string;
  
} = {
  name: '',
  description: '',
  
};


constructor(private apiService: ApiService) {}

ngOnInit(): void {
  this.loadProjects();
}


// Charger tous les projets
loadProjects(): void {
  this.loading.set(true);

  this.apiService.getTypes().subscribe({
    next: (response) => {
      console.log("RESPONSE =", response); // 👈 ici le tableau
      console.log(response);

      this.projects.set(response); // ✅ DIRECTEMENT
      console.log("PROJECTS =", this.projects());

      this.totalPages.set(Math.ceil(response.length / this.pageSize));
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
  this.form = { name: '', description: '' };
  this.editingProject.set(null);
  this.showModal.set(true);
}

closeModal(): void {
  this.showModal.set(false);
  this.editingProject.set(null);
}


editProject(project: TypeDocument): void {
  this.form = {
    name: project.name,
    description: project.description,
    
  };
  this.editingProject.set(project);
  this.showModal.set(true);
}

saveProject(): void {
  if (!this.form.name || !this.form.description) return;
  this.saving.set(true);
  const editing = this.editingProject();
  const request = editing ? this.apiService.updateTypesProjets(editing.id, this.form) : this.apiService.createTypesProjets(this.form);
  request.subscribe({
    next: (response) => {
      console.log("API response =", response);
      
        this.loadProjects();
        this.closeModal();
      
      this.saving.set(false);
      this.showNotification(editing ? "Type Projet mis à jour avec succès" : "Type Projet créé avec succès", 'success');

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


deleteProject(article: TypeDocument): void {
  console.log("fvfv");
  // Ouvre le modal au lieu de confirm()
  this.openConfirmModal(`Voulez-vous vraiment supprimer ce type de Projet "${article.name}" ?`, () => {
      
    this.apiService.deleteTypesProjets(article.id).subscribe({
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
