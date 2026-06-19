import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { Project } from '../../core/models';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    @if (loading()) {
      <div class="py-20">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto animate-pulse">
            <div class="h-8 bg-neutral-200 rounded w-1/4 mb-4"></div>
            <div class="h-12 bg-neutral-200 rounded w-3/4 mb-6"></div>
            <div class="space-y-4">
              <div class="h-4 bg-neutral-200 rounded w-full"></div>
              <div class="h-4 bg-neutral-200 rounded w-full"></div>
            </div>
          </div>
        </div>
      </div>
    } @else if (project()) {
      <section class="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-12">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl">
            <a routerLink="/projects" class="inline-flex items-center text-primary-200 hover:text-white mb-4 transition-colors">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Retour aux projets
            </a>
            <span [class]="getStatusBadgeClass(project()!.status) + ' mb-4'">{{ getStatusLabel(project()!.status) }}</span>
            <h1 class="text-3xl lg:text-4xl font-bold mb-4">{{ project()!.name }}</h1>
            <div class="flex flex-wrap items-center gap-4 text-primary-200">
              @if (project()!.partner) {
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  Partenaire: {{ project()!.partner }}
                </span>
              }
              @if (project()!.responsibleDepartment) {
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                  {{ project()!.responsibleDepartment }}
                </span>
              }
            </div>
          </div>
        </div>
      </section>
      
      <section class="py-12 bg-neutral-50">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div class="lg:col-span-2 space-y-8">
                <div class="card">
                  <h2 class="text-xl font-semibold text-neutral-900 mb-4">Description</h2>
                  <p class="text-neutral-600 leading-relaxed">{{ project()!.description }}</p>
                </div>
                
                @if (project()!.objectives) {
                  <div class="card">
                    <h2 class="text-xl font-semibold text-neutral-900 mb-4">Objectifs</h2>
                    <p class="text-neutral-600 leading-relaxed">{{ project()!.objectives }}</p>
                  </div>
                }
              </div>
              
              <div class="space-y-6">
                <div class="card">
                  <h3 class="text-lg font-semibold text-neutral-900 mb-4">Progression</h3>
                  <div class="text-center mb-4">
                    <span class="text-4xl font-bold text-primary-600">{{ project()!.progressPercentage }}%</span>
                  </div>
                  <div class="w-full bg-neutral-200 rounded-full h-3">
                    <div class="bg-primary-500 h-3 rounded-full transition-all duration-500" [style.width.%]="project()!.progressPercentage"></div>
                  </div>
                </div>
                
                <div class="card">
                  <h3 class="text-lg font-semibold text-neutral-900 mb-4">Informations</h3>
                  <ul class="space-y-3 text-sm">
                    @if (project()!.budget) {
                      <li class="flex justify-between">
                        <span class="text-neutral-500">Budget</span>
                        <span class="font-medium text-neutral-900">{{ formatBudget(project()!.budget!) }}</span>
                      </li>
                    }
                    @if (project()!.startDate) {
                      <li class="flex justify-between">
                        <span class="text-neutral-500">Début</span>
                        <span class="font-medium text-neutral-900">{{ formatDate(project()!.startDate!) }}</span>
                      </li>
                    }
                    @if (project()!.endDate) {
                      <li class="flex justify-between">
                        <span class="text-neutral-500">Fin prévue</span>
                        <span class="font-medium text-neutral-900">{{ formatDate(project()!.endDate!) }}</span>
                      </li>
                    }
                    @if (project()!.managerName) {
                      <li class="flex justify-between">
                        <span class="text-neutral-500">Responsable</span>
                        <span class="font-medium text-neutral-900">{{ project()!.managerName }}</span>
                      </li>
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    } @else {
      <div class="py-20 text-center">
        <h2 class="text-xl font-semibold text-neutral-700 mb-2">Projet non trouvé</h2>
        <a routerLink="/projects" class="btn-primary mt-4">Voir tous les projets</a>
      </div>
    }
  `
})
export class ProjectDetailComponent implements OnInit {
  project = signal<Project | null>(null);
  loading = signal(true);
  
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}
  
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.apiService.getPublicProjectById(+id).subscribe({
        next: (response) => {
          if (response.success) this.project.set(response.data);
          this.loading.set(false);
        },
        error: () => this.loading.set(false)
      });
    }
  }
  
  getStatusLabel(status: string): string {
    const labels: Record<string, string> = { 'PLANIFIE': 'Planifié', 'EN_COURS': 'En cours', 'SUSPENDU': 'Suspendu', 'TERMINE': 'Terminé', 'ANNULE': 'Annulé' };
    return labels[status] || status;
  }
  
  getStatusBadgeClass(status: string): string {
    const classes: Record<string, string> = { 'PLANIFIE': 'badge bg-white/20 text-white', 'EN_COURS': 'badge bg-white/20 text-white', 'SUSPENDU': 'badge-warning', 'TERMINE': 'badge-success', 'ANNULE': 'badge-error' };
    return classes[status] || 'badge';
  }
  
  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  }
  
  formatBudget(budget: number): string {
    if (budget >= 1000000000) return (budget / 1000000000).toFixed(1) + ' Mds FCFA';
    if (budget >= 1000000) return (budget / 1000000).toFixed(0) + ' M FCFA';
    return budget.toLocaleString('fr-FR') + ' FCFA';
  }
}
