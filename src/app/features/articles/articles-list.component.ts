import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { Article, Page } from '../../core/models';

@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4">Actualités</h1>
        <p class="text-primary-100 text-lg max-w-2xl">
          Retrouvez toutes les actualités, communiqués et événements du Ministère de la Transition Digitale.
        </p>
      </div>
    </section>
    
    <!-- Content -->
    <section class="py-12 bg-neutral-50">
      <div class="container mx-auto px-4">
        <!-- Search & Filter -->
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
                placeholder="Rechercher un article..."
                class="input pl-10">
            </div>
            <button (click)="search()" class="btn-primary">
              Rechercher
            </button>
          </div>
        </div>
        
        <!-- Articles Grid -->
        @if (loading()) {
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            @for (i of [1,2,3,4,5,6]; track i) {
              <div class="card animate-pulse">
                <div class="h-48 bg-neutral-200 rounded-lg mb-4"></div>
                <div class="h-4 bg-neutral-200 rounded w-1/4 mb-3"></div>
                <div class="h-6 bg-neutral-200 rounded w-3/4 mb-2"></div>
                <div class="h-4 bg-neutral-200 rounded w-full"></div>
              </div>
            }
          </div>
        } @else if (articles().length === 0) {
          <div class="text-center py-16">
            <svg class="w-16 h-16 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
            </svg>
            <h3 class="text-lg font-medium text-neutral-700 mb-2">Aucun article trouvé</h3>
            <p class="text-neutral-500">Essayez de modifier vos critères de recherche</p>
          </div>
        } @else {
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            @for (article of articles(); track article.id) {
              <a [routerLink]="['/articles', article.id]" class="card group cursor-pointer">
                <div class="h-48 bg-gradient-to-br from-primary-100 to-primary-50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  @if (article.featuredImage) {
                    <img [src]="article.featuredImage" [alt]="article.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                  } @else {
                    <svg class="w-16 h-16 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                    </svg>
                  }
                </div>
                <span class="badge-primary mb-3">{{ getCategoryLabel(article.category) }}</span>
                <h3 class="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {{ article.title }}
                </h3>
                <p class="text-neutral-500 text-sm line-clamp-2 mb-4">{{ article.summary }}</p>
                <div class="flex items-center justify-between text-sm text-neutral-400">
                  <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    {{ formatDate(article.publishedAt || article.createdAt) }}
                  </span>
                  <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                    {{ article.viewCount }} vues
                  </span>
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
export class ArticlesListComponent implements OnInit {
  articles = signal<Article[]>([]);
  loading = signal(true);
  currentPage = signal(0);
  totalPages = signal(0);
  searchQuery = '';
  
  constructor(private apiService: ApiService) {}
  
  ngOnInit(): void {
    this.loadArticles();
  }
  
  loadArticles(): void {
    this.loading.set(true);
    this.apiService.getPublishedArticles(this.currentPage(), 9).subscribe({
      next: (response) => {
        if (response.success) {
          this.articles.set(response.data.content);
          this.totalPages.set(response.data.totalPages);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  
  search(): void {
    if (!this.searchQuery.trim()) {
      this.loadArticles();
      return;
    }
    
    this.loading.set(true);
    this.apiService.searchArticles(this.searchQuery, 0, 9).subscribe({
      next: (response) => {
        if (response.success) {
          this.articles.set(response.data.content);
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
      this.loadArticles();
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
  
  getCategoryLabel(category: string): string {
    const labels: Record<string, string> = {
      'ACTUALITE': 'Actualité',
      'COMMUNIQUE': 'Communiqué',
      'EVENEMENT': 'Événement',
      'PROJET': 'Projet',
      'RAPPORT': 'Rapport',
      'DISCOURS': 'Discours'
    };
    return labels[category] || category;
  }
  
  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  }
}
