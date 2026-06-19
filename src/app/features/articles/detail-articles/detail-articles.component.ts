import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Article } from '../../../core/models';
import { ApiService } from '../../../core/services/api.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-detail-articles',
  standalone: true,
  imports: [CommonModule, RouterModule, ],
  templateUrl: './detail-articles.component.html',
  styleUrls: ['./detail-articles.component.scss']
})
export class DetailArticlesComponent {

  private readonly API_URL = environment.FileUrl;

  article = signal<Article | null>(null);
  loading = signal(true);
  agendas = signal<Article[]>([]);
  
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}
  
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.loadArticle(+id);
    }

    this.loadArticles();
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
  
  formatContent1(content: string): string {
    // Simple formatting - convert line breaks to paragraphs
    if (!content) return '';
    return content.split('\n\n').map(p => `<p>${p}</p>`).join('');
  }

formatContent(content: string): string {
  if (!content) return '';
  content = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n'); // normalise
  const paragraphs = content.split(/\n+/);
  return paragraphs.map(p => `<p>${p.trim()}</p>`).join('');
}

 getImageUrl(path?: string): string | null {
     console.log(path);
    return path ? this.API_URL + path : null;
   
  }


  loadArticles(): void {
  this.loading.set(true);
  this.apiService.getPublishedArticles().subscribe({
    next: (response) => {
      if (response.success) {

        const actualiteArticles = response.data.content
          .filter((article: any) => article.category === 'ACTUALITE')
          .sort((a: any, b: any) => 
            new Date(b.createdAt).getTime() - new Date(a.publishedAt).getTime()
          )
          .slice(0, 5);

        this.agendas.set(actualiteArticles);
      }

      this.loading.set(false);
    },
    error: () => this.loading.set(false)
  });
}

 
   loadArticles1(): void {
    this.loading.set(true);
    this.apiService.getPublishedArticles().subscribe({
      next: (response) => {
        if (response.success) {

          const actualiteArticles = response.data.content.filter(
          (article: any) => article.category === 'ACTUALITE'
          );
          this.agendas.set(actualiteArticles);

          //this.articles.set(response.data.content);
         // console.log(this.articles());
          
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }





}
