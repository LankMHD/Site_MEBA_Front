import { Component, OnInit, AfterViewInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';
import { AncienMinistre } from '../../../core/models/event.model';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-historique',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './historique.html',
  styleUrls: ['./historique.scss'],
})
export class Historique implements OnInit, AfterViewInit {

  fileUrl = environment.FileUrl;
  anciensMinistres = signal<AncienMinistre[]>([]);
  loading = signal(true);

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute // pour le fragment (#anciens, #historique, #attributions) defiler de section à section
  ) {}

  ngOnInit(): void {
    this.loadAnciensMinistres();
  }

  // pour gérer le défilement vers les sections lorsque l'utilisateur clique sur un lien avec un fragment
  ngAfterViewInit(): void {
    this.route.fragment.subscribe((fragment: string | null) => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 50);
      }
    });
  }

  // ****************** fin de la gestion du défilement vers les sections ******************

  loadAnciensMinistres(): void {
    this.loading.set(true);
    this.apiService.getAllAnciensMinistres().subscribe({
      next: (response) => {
        console.log('***Réponse de l\'API pour les anciens ministres:', response);
        if (response.success && response.data) {
          this.anciensMinistres.set(response.data);
        }
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des anciens ministres:', err);
        this.loading.set(false);
      }
    });
  }

  getImageUrl(path?: string): string | null {
    if (!path) return null;
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    const normalizedPath = path.startsWith('/uploads/') ? path : `/uploads/${path}`;
    return `${this.fileUrl}${normalizedPath}`;
  }
}
