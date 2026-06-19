import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Agenda } from '../../../core/models';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-detail-agenda',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detail-agenda.component.html',
  styleUrls: ['./detail-agenda.component.scss']
})
export class DetailAgendaComponent {

  private readonly API_URL = environment.FileUrl;

  article = signal<Agenda | null>(null);
  loading = signal(true);
  agendas = signal<Agenda[]>([]);
  
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}
  
  ngOnInit(): void {

    this.loadAgendas()
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.loadArticle(+id);
    }
  }


    loadArticle(id: number): void {
    this.apiService.getPublishedAgendaeById(id).subscribe({
      next: (response) => {
        if (response.success) {
          this.article.set(response.data);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }


  loadAgendas(): void {
    this.loading.set(true);
    this.apiService.getPublishedAgendas(0, 10).subscribe({
      next: (response) => {
        if (response.success) {

          this.agendas.set(response.data.content);

          //this.articles.set(response.data.content);
          
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

  getStatusLabel(status: string) {
    const labels: Record<string, string> = { DRAFT: 'Brouillon', PENDING: 'En attente', PUBLISHED: 'Publié', ARCHIVED: 'Archivé' };
    return labels[status] || status;
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
  

}
