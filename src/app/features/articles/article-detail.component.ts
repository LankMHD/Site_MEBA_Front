import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { Article } from '../../core/models';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    @if (loading()) {
      <div class="py-20">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto animate-pulse">
            <div class="h-8 bg-neutral-200 rounded w-1/4 mb-4"></div>
            <div class="h-12 bg-neutral-200 rounded w-3/4 mb-6"></div>
            <div class="h-64 bg-neutral-200 rounded-xl mb-8"></div>
            <div class="space-y-4">
              <div class="h-4 bg-neutral-200 rounded w-full"></div>
              <div class="h-4 bg-neutral-200 rounded w-full"></div>
              <div class="h-4 bg-neutral-200 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    } @else if (article()) {
      <!-- Hero -->
      <section class="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-12">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl">
            <a routerLink="/articles" class="inline-flex items-center text-primary-200 hover:text-white mb-4 transition-colors">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Retour aux actualités
            </a>
            <span class="badge bg-white/20 text-white mb-4">{{ getCategoryLabel(article()!.category) }}</span>
            <h1 class="text-3xl lg:text-4xl font-bold mb-4">{{ article()!.title }}</h1>
            <div class="flex flex-wrap items-center gap-4 text-primary-200">
              @if (article()!.authorName) {
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  {{ article()!.authorName }}
                </span>
              }
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                {{ formatDate(article()!.publishedAt || article()!.createdAt) }}
              </span>
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
                {{ article()!.viewCount }} vues
              </span>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Content -->
      <section class="py-12 bg-neutral-50">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto">
            @if (article()!.featuredImage) {
              <div class="rounded-xl overflow-hidden shadow-medium mb-8">
                <img [src]="article()!.featuredImage" [alt]="article()!.title" class="w-full h-auto">
              </div>
            }
            
            @if (article()!.summary) {
              <div class="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-xl mb-8">
                <p class="text-primary-800 text-lg font-medium">{{ article()!.summary }}</p>
              </div>
            }
            
            <article class="prose prose-lg max-w-none">
              <div [innerHTML]="formatContent(article()!.content)"></div>
            </article>
            
            <!-- Share -->
            <div class="mt-12 pt-8 border-t border-neutral-200">
              <h3 class="text-lg font-semibold text-neutral-900 mb-4">Partager cet article</h3>
              <div class="flex gap-3">
                <button class="btn-ghost">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button class="btn-ghost">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </button>
                <button class="btn-ghost">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    } @else {
      <div class="py-20 text-center">
        <svg class="w-16 h-16 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h2 class="text-xl font-semibold text-neutral-700 mb-2">Article non trouvé</h2>
        <p class="text-neutral-500 mb-6">L'article que vous recherchez n'existe pas ou a été supprimé.</p>
        <a routerLink="/articles" class="btn-primary">Voir toutes les actualités</a>
      </div>
    }
  `
})
export class ArticleDetailComponent implements OnInit {
  article = signal<Article | null>(null);
  loading = signal(true);
  
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}
  
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.loadArticle(+id);
    }
  }
  
  loadArticle(id: number): void {
    this.apiService.getPublishedArticleById(id).subscribe({
      next: (response) => {
        if (response.success) {
          this.article.set(response.data);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
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
  
  formatContent(content: string): string {
    // Simple formatting - convert line breaks to paragraphs
    if (!content) return '';
    return content.split('\n\n').map(p => `<p>${p}</p>`).join('');
  }
}
