import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domains, Structure } from '../../../core/models/event.model';
import { MinistereService } from '../../../core/services/ministere.service';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-structurerattaches',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './structurerattaches.component.html',
  styleUrls: ['./structurerattaches.component.scss']
})
export class StructurerattachesComponent {
private readonly API_URL = environment.FileUrl;
  
   structures1: Structure[] = [];   // 🔹 Variable pour stocker la liste
   domaines1: Domains[] = [];
  loading1 = false;

  structures = signal<Structure[]>([]);  // 🔹 Signal pour les structures
  domaines = signal<Domains[]>([]);      // 🔹 Signal pour les domaines
  loading = signal(true);

  constructor(private structureService: MinistereService) {}

  ngOnInit(): void {
    this.loadStructures(); this.loadDomaines()
  }


loadDomaines() {
    this.loading.set(true);
    this.structureService.getAllDomaines().subscribe({
      next: (response: any) => {
        this.domaines.set(response.data.content || []);
        console.log('Domaines:', this.domaines());
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Erreur lors du chargement', err);
        this.loading.set(false);
      }
    });
  }

  getDomaineName(id: number): string {
    const domaine = this.domaines().find(d => d.id === id);
    return domaine ? domaine.nom : '—';
  }


 loadStructures() {
    this.loading.set(true);
    this.structureService.getAllTruc().subscribe({
      next: (response: any) => {
        this.structures.set(response.data.content || []);
        console.log('Structures:', this.structures());
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Erreur lors du chargement', err);
        this.loading.set(false);
      }
    });
  }

trackByAcronym(index: number, item: Structure) {
  return item.acronym;
}
getImageUrl(path?: string): string | null {
     console.log(path);
    return path ? this.API_URL + path : null;
   
  }
}
