import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';
import { Project, ProjectStatus } from '../../../core/models';

@Component({
  selector: 'app-admin-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="space-y-6">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 class="text-2xl font-bold text-neutral-900">Projets</h1>
          <p class="text-neutral-500">Gérez les projets et programmes</p>
        </div>
        <button (click)="openModal()" class="btn-primary">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Nouveau projet
        </button>
      </div>
      
      <div class="card p-0">
        @if (loading()) {
          <div class="p-8 text-center"><div class="spinner w-8 h-8 mx-auto"></div></div>
        } @else if (projects().length === 0) {
          <div class="p-8 text-center">
            <svg class="w-12 h-12 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
            <p class="text-neutral-500">Aucun projet pour le moment</p>
          </div>
        } @else {
          <div class="table-container">
            <table class="table">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Statut</th>
                  <th>Progression</th>
                  <th>Partenaire</th>
                  <th class="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                @for (project of projects(); track project.id) {
                  <tr>
                    <td>
                      <div class="max-w-xs">
                        <p class="font-medium text-neutral-900 truncate">{{ project.name }}</p>
                        <p class="text-xs text-neutral-400 truncate">{{ project.description }}</p>
                      </div>
                    </td>
                    <td><span [class]="getStatusBadgeClass(project.status)">{{ getStatusLabel(project.status) }}</span></td>
                    <td>
                      <div class="flex items-center gap-2">
                        <div class="w-20 bg-neutral-200 rounded-full h-2">
                          <div class="bg-primary-500 h-2 rounded-full" [style.width.%]="project.progressPercentage"></div>
                        </div>
                        <span class="text-sm text-neutral-600">{{ project.progressPercentage }}%</span>
                      </div>
                    </td>
                    <td class="text-sm text-neutral-500">{{ project.partner || '-' }}</td>
                    <td class="text-right">
                      <div class="flex justify-end gap-2">
                        <button (click)="editProject(project)" class="btn-ghost p-2" title="Modifier">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                          </svg>
                        </button>
                        <button (click)="deleteProject(project)" class="btn-ghost p-2 text-secondary-500" title="Supprimer">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }
      </div>
      
      @if (showModal()) {
        <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div class="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div class="p-6 border-b border-neutral-200">
              <h2 class="text-xl font-semibold text-neutral-900">{{ editingProject() ? 'Modifier le projet' : 'Nouveau projet' }}</h2>
            </div>
            <form (ngSubmit)="saveProject()" class="p-6 space-y-5">
              <div>
                <label class="label">Nom <span class="text-secondary-500">*</span></label>
                <input type="text" [(ngModel)]="form.name" name="name" class="input" required>
              </div>
              <div>
                <label class="label">Description <span class="text-secondary-500">*</span></label>
                <textarea [(ngModel)]="form.description" name="description" rows="3" class="input resize-none" required></textarea>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="label">Statut</label>
                  <select [(ngModel)]="form.status" name="status" class="input">
                    <option value="PLANIFIE">Planifié</option>
                    <option value="EN_COURS">En cours</option>
                    <option value="SUSPENDU">Suspendu</option>
                    <option value="TERMINE">Terminé</option>
                    <option value="ANNULE">Annulé</option>
                  </select>
                </div>
                <div>
                  <label class="label">Progression (%)</label>
                  <input type="number" [(ngModel)]="form.progressPercentage" name="progressPercentage" min="0" max="100" class="input">
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="label">Date début</label>
                  <input type="date" [(ngModel)]="form.startDate" name="startDate" class="input">
                </div>
                <div>
                  <label class="label">Date fin</label>
                  <input type="date" [(ngModel)]="form.endDate" name="endDate" class="input">
                </div>
              </div>
              <div>
                <label class="label">Partenaire</label>
                <input type="text" [(ngModel)]="form.partner" name="partner" class="input">
              </div>
              <div>
                <label class="label">Budget (FCFA)</label>
                <input type="number" [(ngModel)]="form.budget" name="budget" class="input">
              </div>
              <div class="flex justify-end gap-3 pt-4 border-t border-neutral-200">
                <button type="button" (click)="closeModal()" class="btn-ghost">Annuler</button>
                <button type="submit" [disabled]="saving()" class="btn-primary">
                  @if (saving()) { <div class="spinner w-4 h-4 mr-2"></div> }
                  {{ editingProject() ? 'Mettre à jour' : 'Créer' }}
                </button>
              </div>
            </form>
          </div>
        </div>
      }
    </div>
  `
})
export class AdminProjectsComponent implements OnInit {
  projects = signal<Project[]>([]);
  loading = signal(true);
  showModal = signal(false);
  editingProject = signal<Project | null>(null);
  saving = signal(false);
  
  form: { name: string; description: string; status: ProjectStatus; progressPercentage: number; startDate: string; endDate: string; partner: string; budget: number } = { name: '', description: '', status: ProjectStatus.PLANIFIE, progressPercentage: 0, startDate: '', endDate: '', partner: '', budget: 0 };
  
  constructor(private apiService: ApiService) {}
  
  ngOnInit(): void { this.loadProjects(); }
  
  loadProjects(): void {
    this.apiService.getAllProjects(0, 50).subscribe({
      next: (response) => { if (response.success) this.projects.set(response.data.content); this.loading.set(false); },
      error: () => this.loading.set(false)
    });
  }
  
  openModal(): void { this.form = { name: '', description: '', status: ProjectStatus.PLANIFIE, progressPercentage: 0, startDate: '', endDate: '', partner: '', budget: 0 }; this.editingProject.set(null); this.showModal.set(true); }
  closeModal(): void { this.showModal.set(false); this.editingProject.set(null); }
  
  editProject(project: Project): void {
    this.form = { name: project.name, description: project.description, status: project.status, progressPercentage: project.progressPercentage, startDate: project.startDate || '', endDate: project.endDate || '', partner: project.partner || '', budget: project.budget || 0 };
    this.editingProject.set(project);
    this.showModal.set(true);
  }
  
  saveProject(): void {
    if (!this.form.name || !this.form.description) return;
    this.saving.set(true);
    const editing = this.editingProject();
    const request = editing ? this.apiService.updateProject(editing.id, this.form) : this.apiService.createProject(this.form);
    request.subscribe({
      next: (response) => { if (response.success) { this.loadProjects(); this.closeModal(); } this.saving.set(false); },
      error: () => this.saving.set(false)
    });
  }
  
  deleteProject(project: Project): void {
    if (confirm(`Supprimer le projet "${project.name}" ?`)) {
      this.apiService.deleteProject(project.id).subscribe({ next: () => this.loadProjects() });
    }
  }
  
  getStatusLabel(status: string): string {
    const labels: Record<string, string> = { 'PLANIFIE': 'Planifié', 'EN_COURS': 'En cours', 'SUSPENDU': 'Suspendu', 'TERMINE': 'Terminé', 'ANNULE': 'Annulé' };
    return labels[status] || status;
  }
  
  getStatusBadgeClass(status: string): string {
    const classes: Record<string, string> = { 'PLANIFIE': 'badge-accent', 'EN_COURS': 'badge-primary', 'SUSPENDU': 'badge-warning', 'TERMINE': 'badge-success', 'ANNULE': 'badge-error' };
    return classes[status] || 'badge';
  }
}
