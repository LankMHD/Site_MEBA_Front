import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';
import { Ministere, Ministre } from '../../../core/models/event.model';
import { MinistereService } from '../../../core/services/ministere.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-ministre',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './ministre.component.html',
  styleUrls: ['./ministre.component.scss']
})
export class MinistreComponent {

  private readonly API_URL = environment.FileUrl;

articles = signal<Ministere[]>([]);
 ministere1!: Ministere;
 ministere = signal<Ministere | null>(null); // peut être null au départ


 ministres = signal<Ministre[]>([]);
 ministre= signal<Ministre | null>(null);
  loading = signal(true);
   constructor(private apiService: ApiService, private router: Router, private min: MinistereService) {}
  
  ngOnInit(): void {
    this.loadArticles();
    this.loadMinistres();
  }


    loadArticles(): void {
      this.loading.set(true);

      this.apiService.getAllMins(0, 10).subscribe({
        next: (response) => {
          if (response.success) {
            // articles DEJA paginés par le backend
            this.articles.set(response.data.content);

            // Récupérer l'ID du premier ministère
            const articlesArray = this.articles(); // <-- important !

            if (articlesArray.length > 0) {
              const ministereId = articlesArray[0].id;
              this.loadMinistereById(ministereId);
            }

          
          }
          this.loading.set(false);
        },
        error: () => {
          this.loading.set(false);
        }
      });
    }


    loadMinistereById(id: number) {
      this.apiService.getminById(id).subscribe({
        next: (response) => {
          
          if (response.success) {
       this.ministere.set(response.data); // ✅ extraire data
        //console.log('Ministère chargé :', this.ministere);
        } else {
          console.error('Erreur :', response.message);
        }
        },
        error: (err) => {
          console.error('Erreur chargement ministère', err);
        }
      });
    }


     loadMinistres(): void {
      this.loading.set(true);

      this.min.getAllMinistre(0, 10).subscribe({
        next: (response) => {
          if (response.success) {
            // articles DEJA paginés par le backend
            this.ministres.set(response.data.content);

            // Récupérer l'ID du premier ministère
            const ministreIdsArray = this.ministres(); // <-- important !

            if (ministreIdsArray.length > 0) {
              const ministreId = ministreIdsArray[0].id;
              this.loadMinistreById(ministreId);
            }

          
          }
          this.loading.set(false);
        },
        error: () => {
          this.loading.set(false);
        }
      });
    }


    loadMinistreById(id: number) {
      this.min.getMinistreById(id).subscribe({
        next: (response) => {
          
          if (response.success) {
        this.ministre.set(response.data); // ✅ extraire data
        console.log('Ministère chargé :', this.ministre);
        } else {
          console.error('Erreur :', response.message);
        }
        },
        error: (err) => {
          console.error('Erreur chargement ministère', err);
        }
      });
    }

    formatContent(content: string): string {
  if (!content) return '';
  content = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n'); // normalise
  const paragraphs = content.split(/\n+/);
  return paragraphs.map(p => `<p>${p.trim()}</p>`).join('');
}


formatContentTailwind(content: string): string {
  if (!content) return '';

  // Normalisation des retours à la ligne
  content = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  // Sépare les blocs par double saut de ligne (\n\n)
  const paragraphs = content.split(/\n{2,}/);

  // Transforme chaque bloc en <p> avec Tailwind pour l'espacement
  return paragraphs
    .map(block => {
      // remplace les simples sauts de ligne par <br>
      const withLineBreaks = block.replace(/\n/g, '<br>');
      // ajoute les classes Tailwind pour paragraphes
      return `<p class="mb-4 leading-relaxed">${withLineBreaks.trim()}</p>`;
    })
    .join('');
}

  getImageUrl(path?: string): string | null {
     console.log(path);
    return path ? this.API_URL + path : null;
   
  }


}
