import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Agenda } from '../../core/models';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-agendas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './agendas.component.html',
  styleUrls: ['./agendas.component.scss']
})
export class AgendasComponent {

   agendas = signal<Agenda[]>([]);
   loading = signal(true);
   currentPage = 0; // page actuelle (0-indexed)
  pageSize = 10;   // nombre d'agendas par page
  totalPages = 0;

   constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}
  
  ngOnInit(): void {

    this.loadAgendas()
    
  }


 // Fonction pour charger les agendas avec pagination
  loadAgendas(page: number = 0): void {
    this.loading.set(true);

    this.apiService.getPublishedAgendas(page, this.pageSize).subscribe({
      next: (response) => {
        if (response.success) {
          // Mettre à jour les agendas
          this.agendas.set(response.data.content);

          // Mettre à jour la pagination
          this.currentPage = page;
          this.totalPages = response.data.totalPages; // si ton backend renvoie totalPages
        }
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des agendas', err);
        this.loading.set(false);
      }
    });
  }

  // Passer à la page suivante
  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.loadAgendas(this.currentPage + 1);
    }
  }

  // Revenir à la page précédente
  prevPage() {
    if (this.currentPage > 0) {
      this.loadAgendas(this.currentPage - 1);
    }
  }

}
