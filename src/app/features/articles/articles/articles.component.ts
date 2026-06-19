import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from '../../../core/models';
import { ApiService } from '../../../core/services/api.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-articles',
  standalone: true,
 imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {

  articles = signal<Article[]>([]);
  loading = signal(true);
  currentPage = signal(0);
  totalPages = signal(0);
  searchQuery = '';

  private readonly API_URL = environment.FileUrl;
  
  constructor(private apiService: ApiService) {}
  
  ngOnInit(): void {
    this.loadArticles();
  }
  
  loadArticles(): void {
    this.loading.set(true);
    this.apiService.getPublishedArticles(this.currentPage(), 9).subscribe({
      next: (response) => {
        if (response.success) {

          const actualiteArticles = response.data.content.filter(
          (article: any) => article.category === 'ACTUALITE'
          );
          this.articles.set(actualiteArticles);

          //this.articles.set(response.data.content);
          console.log(this.articles());
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


  getImageUrl(path?: string): string | null {
     console.log(path);
    return path ? this.API_URL + path : null;
   
  }
}
