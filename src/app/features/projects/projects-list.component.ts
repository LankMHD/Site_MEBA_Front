import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { Project } from '../../core/models';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4">Projets & Programmes</h1>
        <p class="text-primary-100 text-lg max-w-2xl">
          Découvrez les projets et programmes du ministère pour la transformation digitale du Burkina Faso.
        </p>
      </div>
    </section>
    
    <!-- Content -->
    <section class="py-12 bg-neutral-50">
      <div class="container mx-auto px-4">
        <!-- Search -->
        <div class="card mb-8">
          <div class="flex flex-col md:flex-row gap-4">
            <div class="flex-1 relative">
              <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <input 
                type="text" 
                [(ngModel)]="searchQuery"
                (keyup.enter)="search()"
                placeholder="Rechercher un projet..."
                class="input pl-10">
            </div>
            <button (click)="search()" class="btn-primary">
              Rechercher
            </button>
          </div>
        </div>
        
        <!-- Projects Grid -->
        @if (loading()) {
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            @for (i of [1,2,3,4]; track i) {
              <div class="card animate-pulse">
                <div class="h-6 bg-neutral-200 rounded w-3/4 mb-4"></div>
                <div class="h-4 bg-neutral-200 rounded w-full mb-2"></div>
                <div class="h-4 bg-neutral-200 rounded w-2/3"></div>
              </div>
            }
          </div>
        } @else if (projects().length === 0) {
          <div class="text-center py-16">
            <svg class="w-16 h-16 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
            <h3 class="text-lg font-medium text-neutral-700 mb-2">Aucun projet trouvé</h3>
            <p class="text-neutral-500">Essayez de modifier vos critères de recherche</p>
          </div>
        } @else {
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            @for (project of projects(); track project.id) {
              <a [routerLink]="['/projects', project.id]" class="card group cursor-pointer">
                <div class="flex items-start justify-between mb-4">
                  <div class="flex-1">
                    <span [class]="getStatusBadgeClass(project.status)">{{ getStatusLabel(project.status) }}</span>
                    <h3 class="text-xl font-semibold text-neutral-900 mt-2 group-hover:text-primary-600 transition-colors">
                      {{ project.name }}
                    </h3>
                  </div>
                  <div class="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0 ml-4">
                    <span class="text-2xl font-bold text-primary-600">{{ project.progressPercentage }}%</span>
                  </div>
                </div>
                <p class="text-neutral-500 mb-4 line-clamp-2">{{ project.description }}</p>
                <div class="w-full bg-neutral-200 rounded-full h-2 mb-4">
                  <div class="bg-primary-500 h-2 rounded-full transition-all duration-500" [style.width.%]="project.progressPercentage"></div>
                </div>
                <div class="flex flex-wrap items-center gap-4 text-sm text-neutral-400">
                  @if (project.partner) {
                    <span class="flex items-center gap-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                      {{ project.partner }}
                    </span>
                  }
                  @if (project.budget) {
                    <span class="flex items-center gap-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      {{ formatBudget(project.budget) }}
                    </span>
                  }
                  @if (project.endDate) {
                    <span class="flex items-center gap-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      {{ formatDate(project.endDate) }}
                    </span>
                  }
                </div>
              </a>
            }
          </div>
          
          <!-- Pagination -->
          @if (totalPages() > 1) {
            <div class="flex justify-center mt-10">
              <nav class="flex items-center gap-2">
                <button 
                  (click)="goToPage(currentPage() - 1)"
                  [disabled]="currentPage() === 0"
                  class="btn-ghost disabled:opacity-50">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
                @for (page of getPageNumbers(); track page) {
                  <button 
                    (click)="goToPage(page)"
                    [class]="page === currentPage() ? 'btn-primary' : 'btn-ghost'"
                    class="w-10 h-10">
                    {{ page + 1 }}
                  </button>
                }
                <button 
                  (click)="goToPage(currentPage() + 1)"
                  [disabled]="currentPage() === totalPages() - 1"
                  class="btn-ghost disabled:opacity-50">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </nav>
            </div>
          }
        }
      </div>
    </section>
  `
})
export class ProjectsListComponent implements OnInit {
  projects = signal<Project[]>([]);
  loading = signal(true);
  currentPage = signal(0);
  totalPages = signal(0);
  searchQuery = '';
  
  constructor(private apiService: ApiService) {}
  
  ngOnInit(): void {
    this.loadProjects();
  }
  
  loadProjects(): void {
    this.loading.set(true);
    this.apiService.getPublicProjects(this.currentPage(), 8).subscribe({
      next: (response) => {
        if (response.success) {
          this.projects.set(response.data.content);
          this.totalPages.set(response.data.totalPages);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  
  search(): void {
    if (!this.searchQuery.trim()) {
      this.loadProjects();
      return;
    }
    
    this.loading.set(true);
    this.apiService.searchProjects(this.searchQuery, 0, 8).subscribe({
      next: (response) => {
        if (response.success) {
          this.projects.set(response.data.content);
          this.totalPages.set(response.data.totalPages);
          this.currentPage.set(0);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  
  goToPage(page: number): void {
    if (page >= 0 && page < this.totalPages()) {
      this.currentPage.set(page);
      this.loadProjects();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  
  getPageNumbers(): number[] {
    const total = this.totalPages();
    const current = this.currentPage();
    const pages: number[] = [];
    
    let start = Math.max(0, current - 2);
    let end = Math.min(total - 1, current + 2);
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    return pages;
  }
  
  getStatusLabel(status: string): string {
    const labels: Record<string, string> = {
      'PLANIFIE': 'Planifié',
      'EN_COURS': 'En cours',
      'SUSPENDU': 'Suspendu',
      'TERMINE': 'Terminé',
      'ANNULE': 'Annulé'
    };
    return labels[status] || status;
  }
  
  getStatusBadgeClass(status: string): string {
    const classes: Record<string, string> = {
      'PLANIFIE': 'badge-accent',
      'EN_COURS': 'badge-primary',
      'SUSPENDU': 'badge-warning',
      'TERMINE': 'badge-success',
      'ANNULE': 'badge-error'
    };
    return classes[status] || 'badge';
  }
  
  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
  }
  
  formatBudget(budget: number): string {
    if (budget >= 1000000000) {
      return (budget / 1000000000).toFixed(1) + ' Mds FCFA';
    } else if (budget >= 1000000) {
      return (budget / 1000000).toFixed(0) + ' M FCFA';
    }
    return budget.toLocaleString('fr-FR') + ' FCFA';
  }
}
