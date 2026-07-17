import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Article } from '../../../core/models';
import { ApiService } from '../../../core/services/api.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-detail-articles',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detail-articles.component.html',
  styleUrls: ['./detail-articles.component.scss']
})
export class DetailArticlesComponent {

  private readonly API_URL =
    (environment as any).fileUrl ||
    (environment as any).FileUrl ||
    'http://localhost:8096';

  article = signal<Article | null>(null);
  loading = signal(true);
  agendas = signal<Article[]>([]);

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (id) {
        this.loadArticle(id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    this.loadArticles();
  }

  loadArticle(id: number): void {
    this.loading.set(true);

    this.apiService.getPublishedArticleById(id).subscribe({
      next: (response) => {
        if (response.success) {
          this.article.set(response.data);
        } else {
          this.article.set(null);
        }
        this.loading.set(false);
      },
      error: () => {
        this.article.set(null);
        this.loading.set(false);
      }
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
    if (!content) return '';
    content = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    const paragraphs = content.split(/\n+/);
    return paragraphs.map(p => `<p>${p.trim()}</p>`).join('');
  }

  getImageUrl(path?: string): string | null {
    if (!path) return null;

    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }

    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${this.API_URL.replace(/\/$/, '')}${cleanPath}`;
  }

  loadArticles(): void {
    this.apiService.getPublishedArticles().subscribe({
      next: (response) => {
        if (response.success) {
          const actualiteArticles = response.data.content
            .filter((article: any) => article.category === 'ACTUALITE')
            .slice(0, 5);

          this.agendas.set(actualiteArticles);
        }
      }
    });
  }
}
