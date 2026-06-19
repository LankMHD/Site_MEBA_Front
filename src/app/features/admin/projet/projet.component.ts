import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, ProjectStatus, ProjetType, TypeDocument } from '../../../core/models';
import { ApiService } from '../../../core/services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projet',
  standalone: true,
 imports: [CommonModule, FormsModule],
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent {

    notification = signal<{ show: boolean; message: string; type: 'success' | 'error' | 'info' }>({
  show: false,
  message: '',
  type: 'success'
});

projects = signal<Project[]>([]);
loading = signal(true);
showModal = signal(false);
editingProject = signal<Project | null>(null);
saving = signal(false);

currentPage = signal(1);
pageSize = 7; // nombre de projets par page
totalPages = signal(1);
types = signal<TypeDocument[]>([]);

form: {
  name: string;
  description: string;
  status: ProjectStatus;
  progressPercentage: number;
  startDate: string;
  endDate: string;
  objectives: string;
  partner: string;
  budget: number;
  categorieProjetId: number; categorieProjetName: string;  type: ProjetType;
} = {
  name: '',
  description: '',
  status: ProjectStatus.PLANIFIE,
  progressPercentage: 0,
  startDate: '',
  endDate: '',
  partner: '',
  budget: 0,
  type: ProjetType.PROJET,
        categorieProjetId: 0, categorieProjetName: '', objectives:''
};

constructor(private apiService: ApiService) {}

ngOnInit(): void {
  this.loadProjects(); this.loadTypes();
}

// Charger tous les projets
loadProjects(): void {
  this.loading.set(true);
  this.apiService.getAllProjects(0, 50).subscribe({
    next: (response) => {
      if (response.success) {
        this.projects.set(response.data.content);
        this.totalPages.set(Math.ceil(response.data.content.length / this.pageSize));
        this.currentPage.set(1);
      }
      this.loading.set(false);
    },
    error: () => this.loading.set(false)
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
  this.form = { name: '', description: '',objectives: '', type: ProjetType.PROJET,  categorieProjetId:0, categorieProjetName:'',status: ProjectStatus.PLANIFIE, progressPercentage: 0, startDate: '', endDate: '', partner: '', budget: 0 };
  this.editingProject.set(null);
  this.showModal.set(true);
}

closeModal(): void {
  this.showModal.set(false);
  this.editingProject.set(null);
}

editProject(project: Project): void {
  this.form = {
    name: project.name,
    description: project.description,
    status: project.status,
    progressPercentage: project.progressPercentage,
    startDate: project.startDate || '',
    endDate: project.endDate || '',
    partner: project.partner || '',
    budget: project.budget || 0,
    objectives: project?.objectives,
    type:project.type, categorieProjetName:project.categorieProjetName, categorieProjetId: project.categorieProjetId

  };
  this.editingProject.set(project);
  this.showModal.set(true);
}

saveProject(): void {
  if (!this.form.name || !this.form.description) return;
  
  this.saving.set(true);
  const editing = this.editingProject();
  const request = editing ? this.apiService.updateProject(editing.id, this.form) : this.apiService.createProject(this.form);
  request.subscribe({
    next: (response) => {
      if (response.success) {
        this.loadProjects();
        this.closeModal();
      }
      this.saving.set(false);
      this.showNotification(editing ? "Projet mis à jour avec succès" : "Projet créé avec succès", 'success');

    },
        error: (err) => {
      console.error('Erreur lors de la sauvegarde', err);
      this.saving.set(false);
      this.showNotification("Erreur lors de la sauvegarde", 'error');
    }
  });
}

deleteProject1(project: Project): void {
  if (confirm(`Supprimer le projet "${project.name}" ?`)) {
    this.apiService.deleteProject(project.id).subscribe({ next: () => this.loadProjects() });
  }
}

// Badges et labels
getStatusLabel(status: string): string {
  const labels: Record<string, string> = { PLANIFIE: 'Planifié', EN_COURS: 'En cours', SUSPENDU: 'Suspendu', TERMINE: 'Terminé', ANNULE: 'Annulé' };
  return labels[status] || status;
}

getStatusBadgeClass(status: string): string {
  const classes: Record<string, string> = {
    PLANIFIE: 'bg-accent-100 text-accent-800 px-2 py-1 rounded-full text-xs font-semibold',
    EN_COURS: 'bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold',
    SUSPENDU: 'bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold',
    TERMINE: 'bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold',
    ANNULE: 'bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold'
  };
  return classes[status] || 'bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-semibold';
}

// Détermine la couleur de la barre de progression
getProgressBarClass(project: Project): string {
  if (project.status === 'TERMINE' || project.progressPercentage >= 80) return 'bg-green-500';
  if (project.status === 'EN_COURS' && project.progressPercentage >= 50) return 'bg-green-300';
  if (project.status === 'EN_COURS' && project.progressPercentage > 0  && project.progressPercentage < 50 ) return 'bg-yellow-500';
  return 'bg-red-500';
}

onStartDateChange() {
  // Si la date de fin est avant la date de début, on la remet à null
  if (this.form.endDate && this.form.endDate < this.form.startDate) {
    this.form.endDate = '';
  }
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


loadTypes(): void {
  this.loading.set(true);

  this.apiService.getTypes().subscribe({
    next: (response) => {
      console.log("RESPONSE =", response); // 👈 ici le tableau
      console.log(response);

      this.types.set(response); // ✅ DIRECTEMENT
      console.log("PROJECTS =", this.types());

      //this.totalPages.set(Math.ceil(response.length / this.pageSize));
      

      this.loading.set(false);
    },
    error: (err) => {
      console.error("Erreur API", err);
      this.loading.set(false);
    }
  });
}

deleteProject(article: Project): void {
  console.log("fvfv");
  // Ouvre le modal au lieu de confirm()
  this.openConfirmModal(`Voulez-vous vraiment supprimer ce projet "${article.name}" ?`, () => {
      
    this.apiService.deleteProject(article.id).subscribe({
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
