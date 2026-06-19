import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Events } from '../../../core/models/event.model';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-evenements',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.scss']
})
export class EvenementsComponent {

  events = signal<Events[]>([]);
  filteredEvents = signal<Events[]>([]);
  loading = signal(true);
  selectedStatus = 'all';

    currentPage = signal(0);
  totalPages = signal(0);
  pageSize = 4;
  searchQuery = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadEvents();
  }



  loadEvents() {
    this.loading.set(true);
    this.apiService.getPublicEvents().subscribe({
      next: (response) => {
        console.log(response);
        
          const eventsList = response.content || [];
          this.events.set(eventsList);
          this.filteredEvents.set(eventsList);
           //this.totalPages.set(response.totalPages);
        
        this.loading.set(false);
      },
      error: () => {
        // Données de démonstration
       
        this.loading.set(false);
      }
    });
  }





  




  filterByStatus(status: string) {
    this.selectedStatus = status;
    if (status === 'all') {
      this.filteredEvents.set(this.events());
    } else {
      this.filteredEvents.set(this.events().filter(e => e.statut === status));
    }
  }

  getDay(dateStr: string): string {
    return new Date(dateStr).getDate().toString().padStart(2, '0');
  }

  getMonth(dateStr: string): string {
    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
    return months[new Date(dateStr).getMonth()];
  }

  getYear(dateStr: string): string {
    return new Date(dateStr).getFullYear().toString();
  }

  formatTime(dateStr: string): string {
    return new Date(dateStr).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'UPCOMING': return 'bg-blue-100 text-blue-700';
      case 'ONGOING': return 'bg-green-100 text-green-700';
      case 'COMPLETED': return 'bg-gray-100 text-gray-700';
      case 'CANCELLED': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'UPCOMING': return 'À venir';
      case 'ONGOING': return 'En cours';
      case 'COMPLETED': return 'Terminé';
      case 'CANCELLED': return 'Annulé';
      default: return status;
    }
  }

   formatDate(dateStr: string): string {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('fr-FR');
  }

}
