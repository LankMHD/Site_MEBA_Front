import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Organigramme } from '../../../core/models/event.model';
import { MinistereService } from '../../../core/services/ministere.service';
import { ApiService } from '../../../core/services/api.service';
import { environment } from '../../../../environments/environment';


interface LegendeItem {
  sigle: string;
  definition: string;
}


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

    // Request a larger page size to retrieve more items (backend uses 10 by default)
    const PAGE = 0;
    const SIZE = 1000; // adjust if you expect more items or implement server-side endpoint 'all'

    this.apiService.getAllOrg(PAGE, SIZE, 'id', 'asc').subscribe({
      next: (response) => {
        if (response?.success && response.data) {
          // response.data peut être une Page ou un tableau direct selon l'endpoint
          let data: Organigramme[] = [];
          if (Array.isArray(response.data)) {
            data = response.data as Organigramme[];
          } else if ((response.data as any).content) {
            data = (response.data as any).content as Organigramme[];
          } else if ((response.data as any).items) {
            data = (response.data as any).items as Organigramme[];
          }

          data = data ?? [];
          data.sort((a, b) => (a.id ?? 0) - (b.id ?? 0));
          this.organigrammes.set(data);
          console.log('Organigrammes triées par id :', data);

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




// ---------------------- LEGENDE ----------------------



  legendeOuverte = false;

toggleLegende(): void {
  this.legendeOuverte = !this.legendeOuverte;
}

  legendeGauche: LegendeItem[] = [
    { sigle: 'CT', definition: 'Conseillers Techniques' },
    { sigle: 'ITS', definition: 'Inspection technique des services' },
    { sigle: 'CCM', definition: 'Cellule des Chargés de Missions' },
    { sigle: 'ST', definition: 'Secretariats Techniques' },
    { sigle: 'SP', definition: 'Secretariat Particulier' },
    {
      sigle: 'SP/PDSEB',
      definition:
        "Secrétariat permanent du Programme de développement stratégique de l'éducation de base",
    },
    { sigle: 'SQE', definition: 'Service des questions environnementales' },
    { sigle: 'BE', definition: "Bureau d'etude" },
    { sigle: 'SCC', definition: 'Service central du courrier' },
    { sigle: 'SAI', definition: "Service d'Accueil et d'Information" },
    {
      sigle: 'DRENA',
      definition:
        "Directions régionales de l'Education nationale et de l'alphabétisation",
    },
    {
      sigle: 'DPNA',
      definition:
        "Directions provinciales de l'Education nationale et de l'alphabétisation",
    },
    {
      sigle: 'ENEP',
      definition: 'Ecoles nationales des Enseignants du Primaire',
    },
    {
      sigle: 'CENAMAFS',
      definition: 'Centre national des Manuels et Fournitures scolaires',
    },
    {
      sigle: 'CNBS',
      definition: 'Commission nationale des Bourses scolaires',
    },
    {
      sigle: 'CNPS',
      definition: 'Commission nationale des Programmes scolaires',
    },
    {
      sigle: 'CEP',
      definition: "Commission de l'Enseignement privé",
    },
    {
      sigle: 'CAADES',
      definition:
        "Commission d'Attribution des Autorisations de diriger, d'enseigner et de surveiller",
    },
    {
      sigle: 'CNPVE',
      definition:
        "Conseil national pour la prévention de la violence à l'école",
    },
    {
      sigle: 'CMLS',
      definition: 'Comité ministériel de lutte contre le VIH/SIDA',
    },
  ];

  legendeDroite: LegendeItem[] = [
    {
      sigle: 'DGEF',
      definition: "Direction générale de l'Education formelle",
    },
    {
      sigle: 'DGEFTP',
      definition:
        "Direction générale de l'Enseignement et la Formation techniques et professionnels",
    },
    {
      sigle: 'DGREIP',
      definition:
        "Direction générale de la Recherche en Education et de l'Innovation pédagogique",
    },
    {
      sigle: 'DGEPFIC',
      definition:
        "Direction générale de l'Encadrement pédagogique et de la Formation initiale et continue",
    },
    {
      sigle: 'DGEC',
      definition: 'Direction générale des Examens et Concours',
    },
    {
      sigle: 'DAENF',
      definition: "Direction de l'Alphabétisation et de l'Education non formelle",
    },
    {
      sigle: 'DSCLE',
      definition:
        "Direction des Sports, de la Culture et des Loisirs de l'Education",
    },
    {
      sigle: 'DIOSPB',
      definition:
        "Direction de l'Information, de l'Orientation scolaire, professionnelle et des Bourses",
    },
    {
      sigle: 'DAMSSE',
      definition:
        "Direction de l'Allocation des Moyens spécifiques aux Structures éducatives",
    },
    {
      sigle: 'DEGP',
      definition: "Direction de l'Enseignement général privé",
    },
    {
      sigle: 'DAJC',
      definition: 'Direction des Affaires juridiques et du Contentieux',
    },
    {
      sigle: 'DGESS',
      definition: 'Direction générale des Etudes et des Statistiques sectorielles',
    },
    {
      sigle: 'DAF',
      definition: "Direction de l'Administration et des Finances",
    },
    {
      sigle: 'DMP',
      definition: 'Direction des Marchés publics',
    },
    {
      sigle: 'DRH',
      definition: 'Direction des Ressources humaines',
    },
    {
      sigle: 'DDII',
      definition: "Direction du Développement institutionnel et de l'Innovation",
    },
    {
      sigle: 'DCPM',
      definition: 'Direction de la Communication et de la Presse ministérielle',
    },
    {
      sigle: 'DAD',
      definition: 'Direction des Archives et de la Documentation',
    },
    {
      sigle: 'DSI',
      definition: 'Direction des Services informatiques',
    },
  ];

}
