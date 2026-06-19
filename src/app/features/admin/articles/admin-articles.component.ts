import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';
import { Article, ArticleCategory, ArticleStatus } from '../../../core/models';

@Component({
  selector: 'app-admin-articles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="space-y-6">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 class="text-2xl font-bold text-neutral-900">Articles</h1>
          <p class="text-neutral-500">Gérez les actualités et communiqués</p>
        </div>
        <button (click)="openModal()" class="btn-primary">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Nouvel article
        </button>
      </div>
      
      <!-- Table -->
      <div class="card p-0">
        @if (loading()) {
          <div class="p-8 text-center">
            <div class="spinner w-8 h-8 mx-auto"></div>
          </div>
        } @else if (articles().length === 0) {
          <div class="p-8 text-center">
            <svg class="w-12 h-12 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
            </svg>
            <p class="text-neutral-500">Aucun article pour le moment</p>
          </div>
        } @else {
          <div class="table-container">
            <table class="table">
              <thead>
                <tr>
                  <th>Titre</th>
                  <th>Catégorie</th>
                  <th>Statut</th>
                  <th>Vues</th>
                  <th>Date</th>
                  <th class="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                @for (article of articles(); track article.id) {
                  <tr>
                    <td>
                      <div class="max-w-xs">
                        <p class="font-medium text-neutral-900 truncate">{{ article.title }}</p>
                        <p class="text-xs text-neutral-400 truncate">{{ article.summary }}</p>
                      </div>
                    </td>
                    <td><span class="badge-primary">{{ getCategoryLabel(article.category) }}</span></td>
                    <td><span [class]="getStatusBadgeClass(article.status)">{{ getStatusLabel(article.status) }}</span></td>
                    <td>{{ article.viewCount }}</td>
                    <td class="text-sm text-neutral-500">{{ formatDate(article.createdAt) }}</td>
                    <td class="text-right">
                      <div class="flex justify-end gap-2">
                        <button (click)="editArticle(article)" class="btn-ghost p-2" title="Modifier">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                          </svg>
                        </button>
                        <button (click)="deleteArticle(article)" class="btn-ghost p-2 text-secondary-500 hover:text-secondary-600" title="Supprimer">
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
      
      <!-- Modal -->
      @if (showModal()) {
        <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div class="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div class="p-6 border-b border-neutral-200">
              <h2 class="text-xl font-semibold text-neutral-900">
                {{ editingArticle() ? 'Modifier l\\'article' : 'Nouvel article' }}
              </h2>
            </div>
            
            <form (ngSubmit)="saveArticle()" class="p-6 space-y-5">
              <div>
                <label class="label">Titre <span class="text-secondary-500">*</span></label>
                <input type="text" [(ngModel)]="form.title" name="title" class="input" required>
              </div>
              
              <div>
                <label class="label">Résumé</label>
                <textarea [(ngModel)]="form.summary" name="summary" rows="2" class="input resize-none"></textarea>
              </div>
              
              <div>
                <label class="label">Contenu <span class="text-secondary-500">*</span></label>
                <textarea [(ngModel)]="form.content" name="content" rows="6" class="input resize-none" required></textarea>
              </div>
              
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="label">Catégorie</label>
                  <select [(ngModel)]="form.category" name="category" class="input">
                    <option value="ACTUALITE">Actualité</option>
                    <option value="COMMUNIQUE">Communiqué</option>
                    <option value="EVENEMENT">Événement</option>
                    <option value="PROJET">Projet</option>
                    <option value="RAPPORT">Rapport</option>
                    <option value="DISCOURS">Discours</option>
                  </select>
                </div>
                <div>
                  <label class="label">Statut</label>
                  <select [(ngModel)]="form.status" name="status" class="input">
                    <option value="DRAFT">Brouillon</option>
                    <option value="PENDING">En attente</option>
                    <option value="PUBLISHED">Publié</option>
                    <option value="ARCHIVED">Archivé</option>
                  </select>
                </div>
              </div>
              
              <div class="flex items-center gap-2">
                <input type="checkbox" [(ngModel)]="form.featured" name="featured" id="featured" class="rounded border-neutral-300 text-primary-500 focus:ring-primary-500">
                <label for="featured" class="text-sm text-neutral-700">Mettre en avant</label>
              </div>
              
              <div class="flex justify-end gap-3 pt-4 border-t border-neutral-200">
                <button type="button" (click)="closeModal()" class="btn-ghost">Annuler</button>
                <button type="submit" [disabled]="saving()" class="btn-primary">
                  @if (saving()) {
                    <div class="spinner w-4 h-4 mr-2"></div>
                  }
                  {{ editingArticle() ? 'Mettre à jour' : 'Créer' }}
                </button>
              </div>
            </form>
          </div>
        </div>
      }
    </div>
  `
})
export class AdminArticlesComponent implements OnInit {
  articles = signal<Article[]>([]);
  loading = signal(true);
  showModal = signal(false);
  editingArticle = signal<Article | null>(null);
  saving = signal(false);
  
  form: { title: string; summary: string; content: string; category: ArticleCategory; status: ArticleStatus; featured: boolean } = {
    title: '',
    summary: '',
    content: '',
    category: ArticleCategory.ACTUALITE,
    status: ArticleStatus.DRAFT,
    featured: false
  };
  
  constructor(private apiService: ApiService) {}
  
  ngOnInit(): void {
    this.loadArticles();
  }
  
  loadArticles(): void {
    this.apiService.getAllArticles(0, 50).subscribe({
      next: (response) => {
        if (response.success) {
          this.articles.set(response.data.content);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  
  openModal(): void {
    this.form = { title: '', summary: '', content: '', category: ArticleCategory.ACTUALITE, status: ArticleStatus.DRAFT, featured: false };
    this.editingArticle.set(null);
    this.showModal.set(true);
  }
  
  closeModal(): void {
    this.showModal.set(false);
    this.editingArticle.set(null);
  }
  
  editArticle(article: Article): void {
    this.form = {
      title: article.title,
      summary: article.summary || '',
      content: article.content,
      category: article.category,
      status: article.status,
      featured: article.featured
    };
    this.editingArticle.set(article);
    this.showModal.set(true);
  }
  
  saveArticle(): void {
    if (!this.form.title || !this.form.content) return;
    
    this.saving.set(true);
    const editing = this.editingArticle();
    
    const request = editing
      ? this.apiService.updateArticle1(editing.id, this.form)
      : this.apiService.createArticle1(this.form);
    
    request.subscribe({
      next: (response) => {
        if (response.success) {
          this.loadArticles();
          this.closeModal();
        }
        this.saving.set(false);
      },
      error: () => this.saving.set(false)
    });
  }
  
  deleteArticle(article: Article): void {
    if (confirm(`Supprimer l'article "${article.title}" ?`)) {
      this.apiService.deleteArticle(article.id).subscribe({
        next: () => this.loadArticles()
      });
    }
  }
  
  getCategoryLabel(category: string): string {
    const labels: Record<string, string> = {
      'ACTUALITE': 'Actualité', 'COMMUNIQUE': 'Communiqué', 'EVENEMENT': 'Événement',
      'PROJET': 'Projet', 'RAPPORT': 'Rapport', 'DISCOURS': 'Discours'
    };
    return labels[category] || category;
  }
  
  getStatusLabel(status: string): string {
    const labels: Record<string, string> = {
      'DRAFT': 'Brouillon', 'PENDING': 'En attente', 'PUBLISHED': 'Publié', 'ARCHIVED': 'Archivé'
    };
    return labels[status] || status;
  }
  
  getStatusBadgeClass(status: string): string {
    const classes: Record<string, string> = {
      'DRAFT': 'badge bg-neutral-100 text-neutral-600',
      'PENDING': 'badge-warning',
      'PUBLISHED': 'badge-success',
      'ARCHIVED': 'badge bg-neutral-100 text-neutral-600'
    };
    return classes[status] || 'badge';
  }
  
  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('fr-FR');
  }
}
