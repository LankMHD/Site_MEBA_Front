import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Article } from '../../core/models';
import { ApiService } from '../../core/services/api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-communiques',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './communiques.component.html',
  styleUrls: ['./communiques.component.scss']
})
export class CommuniquesComponent {
private readonly API_URL = environment.FileUrl;
  
  agendas = signal<Article[]>([]);
   loading = signal(true);
   currentPage = 0; // page actuelle (0-indexed)
  pageSize = 10;   // nombre d'agendas par page
  totalPages = 0;

   constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}
  
  ngOnInit(): void {

    this.loadArticles()
    
  }


   loadArticles(page: number = 0): void {
    this.loading.set(true);
    this.apiService.getPublishedArticles(page, this.pageSize).subscribe({
      next: (response) => {
        if (response.success) {

          const actualiteArticles = response.data.content.filter(
          (article: any) => article.category === 'COMMUNIQUE'
          );
          this.agendas.set(actualiteArticles);

          this.currentPage = page;
          this.totalPages = response.data.totalPages;
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

 

  // Passer à la page suivante
  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.loadArticles(this.currentPage + 1);
    }
  }

  // Revenir à la page précédente
  prevPage() {
    if (this.currentPage > 0) {
      this.loadArticles(this.currentPage - 1);
    }
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

   getCategoryClass(category: string): string {
    const classes: Record<string, string> = {
      'ACTUALITE': 'bg-primary-50 text-primary-600',
      'COMMUNIQUE': 'bg-blue-50 text-blue-600',
      'EVENEMENT': 'bg-purple-50 text-purple-600',
      'PROJET': 'bg-accent-50 text-accent-600',
      'RAPPORT': 'bg-slate-100 text-slate-600',
      'DISCOURS': 'bg-rose-50 text-rose-600'
    };
    return classes[category] || 'bg-slate-100 text-slate-600';
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

}
