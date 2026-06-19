import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Organigramme } from '../../../core/models/event.model';
import { MinistereService } from '../../../core/services/ministere.service';
import { ApiService } from '../../../core/services/api.service';
import { environment } from '../../../../environments/environment';


interface Direction {
  id: number;
  name: string;
  acronym: string;
  niveau: string;
}

@Component({
  selector: 'app-organigramme',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './organigramme.component.html',
  styleUrls: ['./organigramme.component.scss']
})
export class OrganigrammeComponent {
    private readonly API_URL = environment.FileUrl;
  

  directions: Direction[] = [
  { id: 1, name: 'Direction Générale de la Transition Digitale', acronym: 'DGTD', niveau: "niveau 1" },
  { id: 2, name: 'Direction Générale des Communications Électroniques', acronym: 'DGCE', niveau: "niveau 2" },
  { id: 3, name: 'Direction Générale de la Poste', acronym: 'DGP', niveau: "niveau 2" },
  { id: 4, name: 'Direction des Affaires Juridiques', acronym: 'DAJ', niveau: "niveau 2" },
  { id: 5, name: 'Direction des Ressources Humaines', acronym: 'DRH', niveau: "niveau 2" },
  { id: 6, name: "Direction de l'Administration et des Finances", acronym: 'DAF', niveau: "niveau 3" },
  { id: 7, name: 'Direction des Études et de la Planification', acronym: 'DEP', niveau: "niveau 3" },
  { id: 8, name: 'Direction de la Communication', acronym: 'DCOM', niveau: "niveau 3" },
  { id: 9, name: 'Direction des Marchés Publics', acronym: 'DMP', niveau: "niveau 3" },
  { id: 10, name: 'Direction des Archives et de la Documentation', acronym: 'DAD', niveau: "niveau 3" }
];

  niveaux4 = [
    { name: 'Direction Générale de la Transition Digitale', acronym: 'DGTD' },
    { name: 'Direction Générale des Communications Électroniques', acronym: 'DGCE' },
    { name: 'Direction Générale de la Poste', acronym: 'DGP' },
    { name: 'Direction des Affaires Juridiques', acronym: 'DAJ' },
    { name: 'Direction des Ressources Humaines', acronym: 'DRH' },
    { name: 'Direction de l\'Administration et des Finances', acronym: 'DAF' },
    { name: 'Direction des Études et de la Planification', acronym: 'DEP' },
    { name: 'Direction de la Communication', acronym: 'DCOM' },
    { name: 'Direction des Marchés Publics', acronym: 'DMP' },
    { name: 'Direction des Archives et de la Documentation', acronym: 'DAD' }
  ];
  
  structures = [
    { name: 'Agence Nationale de Promotion des TIC', acronym: 'ANPTIC' },
    { name: 'Agence Nationale de Sécurité des Systèmes d\'Information', acronym: 'ANSSI' },
    { name: 'Autorité de Régulation des Communications Électroniques', acronym: 'ARCEP' },
    { name: 'Société Nationale des Postes', acronym: 'SONAPOST' }
  ];


groupedDirections1: { [niveau: string]: Organigramme[] } = {};
  niveaux1: string[] = [];
  
  loading1 = signal(true);
  organigrammes1: Organigramme[] = [];

  groupedDirections = signal<{ [niveau: string]: Organigramme[] }>({});
niveaux = signal<string[]>([]);
loading = signal(true);
organigrammes = signal<Organigramme[]>([]);


      constructor(private apiService: MinistereService, private minService: ApiService) {}
  
  

  ngOnInit(): void {

    this.loadOrgas();
   
  }



 





  loadOrgas(): void {
  this.loading.set(true);

  this.apiService.getAllOrgPub().subscribe({
    next: (response) => {
      if (response.success && response.data) {
        const data = response.data.content ?? response.data;
        this.organigrammes.set(data);

        // Regroupement par niveau
        const grouped: { [niveau: string]: Organigramme[] } = {};
        data.forEach(org => {
          if (!org.niveau) return;
          const niveau = org.niveau.trim();
          if (!grouped[niveau]) grouped[niveau] = [];
          grouped[niveau].push(org);
        });
        this.groupedDirections.set(grouped);

        // Tri des niveaux
        const niveauxSorted = Object.keys(grouped)
          .sort((a, b) => {
            const nA = parseInt(a.replace(/\D/g, '')) || 0;
            const nB = parseInt(b.replace(/\D/g, '')) || 0;
            return nA - nB;
          });
        this.niveaux.set(niveauxSorted);
      }
      this.loading.set(false);
    },
    error: (err) => {
      console.error(err);
      this.loading.set(false);
    }
  });
}

  getImageUrl(path?: string): string | null {
     console.log(path);
    return path ? this.API_URL + path : null;
   
  }
}
