import { Component, OnInit, OnDestroy, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';



import { interval, Subscription } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Agenda, ApiResponse, Article, Page, Project, Service } from '../../../core/models';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { environment } from '../../../../environments/environment';
import { Etats, Ministere } from '../../../core/models/event.model';
import { MinistereService } from '../../../core/services/ministere.service';

registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  
  styleUrls: ['./home.component.scss'],
  
  styles: [`
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .animate-fadeIn {
      animation: fadeIn 0.5s ease-out forwards;
    }
  `]
})
export class HomeComponent {
private apiService = inject(ApiService);
private etatService = inject(MinistereService);
  private refreshSubscription?: Subscription;
  private previousArticleIds: Set<number> = new Set();
  private readonly API_URL = environment.FileUrl;

   ministeres= signal<Ministere[]>([]);
   ministere1!: Ministere;
   ministere = signal<Ministere | null>(null); 

  articles = signal<Article[]>([]);
  allActualites = signal<Article[]>([]);
  communiques = signal<Article[]>([]);
  projects = signal<Project[]>([]);
  isLoading = signal(false);
  lastUpdate = signal(new Date());
  etats: Etats[] = [];
   loading = signal(true);
  newArticleIds = signal<Map<number, Date>>(new Map()); // pour garder la date de nouveauté

  private readonly REFRESH_INTERVAL = 30000; // 30 sec


// Signals pour gérer l'état
  
  showAll = signal(false);
  currentPage = signal(1);
  pageSizeReduced = 6;
  pageSizeFull = 9;
  totalPages = signal(1);
  pageSize = 9; 

  // Signaux pour Communiqués

commCurrentPage = signal(1);
commPageSize = 6; // 6 communiqués par page
commTotalPages = signal(1);
commShowAll = signal(false); // true = mode voir tous


// =======================
latestAgendas: Agenda[] = [];   // Derniers 3 agendas
agendas = signal<Agenda[]>([]); // Tous les agendas pour pagination
showAllAgendas = signal(false); // Affichage complet ou réduit
currentAgendaPage = signal(1);  // Page actuelle
pageSizeAgenda = 6;             // Nombre par page
totalAgendaPages = signal(1);   // Total de pages
isLoadingAgendas = signal(false);


showAllProjects = signal(false);
currentProjectPage = signal(1);
pageSizeProject = 6;
totalProjectPages = signal(1);

  ngOnInit() {
    this.loadMinistere();
    this.loadData();
    this.startAutoRefresh();

    
  }

  ngOnDestroy() {
    this.stopAutoRefresh();
  }

  loadData() {
    this.loadMinistere();
    this.loadArticles();
    this.loadProjects();
    this.loadLatestAgendas();
    this.loadServices();
    this.loadStats();
    this.loadCommuniquesInitial();
    this.loadAgendas();

  }


    loadMinistere(): void {
      this.loading.set(true);

      this.apiService.getAllMins(0, 10).subscribe({
        next: (response) => {
          if (response.success) {
            // articles DEJA paginés par le backend
            this.ministeres.set(response.data.content);

            // Récupérer l'ID du premier ministère
            const articlesArray = this.ministeres(); // <-- important !

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
        console.log('Ministère chargé :', this.ministere);
        } else {
          console.error('Erreur :', response.message);
        }
        },
        error: (err) => {
          console.error('Erreur chargement ministère', err);
        }
      });
    }

  loadArticles1() {
    this.isLoading.set(true);
    this.apiService.getPublishedArticles().subscribe({
      next: (response: any) => {
        // Sécuriser la récupération de data
        console.log("daa",response.data)
        const allData: Article[] = Array.isArray(response?.data.content) ? response.data.content : Array.isArray(response) ? response : [];
         console.log("daa",allData)
        if (!allData.length) {
          this.articles.set([]);
          this.isLoading.set(false);
          return;
        }

       

        const now = new Date();
        const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);

        // Filtrer les actualités récentes (3 jours) et catégorie ACTUALITE
        const recentArticles = allData.filter(a => 
          a.category === 'ACTUALITE' &&
          new Date(a.createdAt) >= threeDaysAgo
        );

        // Détecter les nouveaux articles
        const currentIds = new Set<number>(recentArticles.map(a => a.id));
        const newIdsMap = new Map<number, Date>(this.newArticleIds());

        currentIds.forEach(id => {
          if (!this.previousArticleIds.has(id)) {
            newIdsMap.set(id, new Date()); // nouvelle entrée avec timestamp
          }
        });

        this.previousArticleIds = currentIds;
        this.articles.set(recentArticles);
        this.newArticleIds.set(newIdsMap);
        this.lastUpdate.set(new Date());
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Erreur chargement articles:', err);
        this.isLoading.set(false);
      }
    });
  }
loadArticles(page: number = 0) {
  this.isLoading.set(true);
  const size = this.showAll() ? this.pageSizeFull : this.pageSizeReduced;

  this.apiService.getArticlesByCategory('ACTUALITE', page, size).subscribe({
    next: (response: any) => {
      // récupérer le contenu de la page
      const data: Article[] = Array.isArray(response?.data?.content)
        ? response.data.content
        : [];

      this.articles.set(data);

      // mettre à jour la pagination
      this.totalPages.set(response.data.totalPages || 1);
      this.currentPage.set(page + 1); // backend commence à 0

      this.lastUpdate.set(new Date());
      this.isLoading.set(false);
    },
    error: (err) => {
      console.error('Erreur chargement actualités:', err);
      this.isLoading.set(false);
    }
  });
}

  voirToutesActualites() {
    this.showAll.set(true);
    this.loadArticles(0); // page 0 côté backend
  }

  reduireArticles() {
    this.showAll.set(false);
    this.loadArticles(0); // récupère les 6 derniers
  }

  nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.loadArticles(this.currentPage()); // page index = currentPage (0-based)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  prevPage() {
    if (this.currentPage() > 1) {
      this.loadArticles(this.currentPage() - 2); // page index = currentPage - 2
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  
// Chargement initial (mode réduit, 3 communiqués)
// Chargement initial : 3 communiqués
loadCommuniquesInitial() {
  this.isLoading.set(true);
  this.apiService.getArticlesByCategory('COMMUNIQUE', 0, 3)
    .subscribe({
      next: (res: ApiResponse<Page<Article>>) => {
        this.communiques.set(res.data.content);
        this.commTotalPages.set(res.data.totalPages || 1);
        this.commCurrentPage.set(1);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Erreur chargement communiqués', err);
        this.isLoading.set(false);
      }
    });
}

// Voir tous les communiqués (6 par page)
voirTousCommuniques(page: number = 0) {
  this.isLoading.set(true);
  this.commShowAll.set(true);

  this.apiService.getArticlesByCategory('COMMUNIQUE', page, this.commPageSize)
    .subscribe({
      next: (res: ApiResponse<Page<Article>>) => {
        this.communiques.set(res.data.content);
        this.commTotalPages.set(res.data.totalPages || 1);
        this.commCurrentPage.set(page + 1);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Erreur chargement communiqués', err);
        this.isLoading.set(false);
      }
    });
}

// Pagination
nextCommPage() {
  if (this.commCurrentPage() < this.commTotalPages()) {
    this.voirTousCommuniques(this.commCurrentPage());
  }
}

prevCommPage() {
  if (this.commCurrentPage() > 1) {
    this.voirTousCommuniques(this.commCurrentPage() - 2);
  }
}



  loadArticles2() {
  this.isLoading.set(true);
  this.apiService.getPublishedArticles().subscribe({
    next: (response: any) => {
      const allData: Article[] = Array.isArray(response?.data?.content) ? response.data.content : Array.isArray(response) ? response : [];
      
      if (!allData.length) {
        this.articles.set([]);
        this.isLoading.set(false);
        return;
      }

      // Filtrer les articles ACTUALITE
      const recentArticles = allData
        .filter(a => a.category === 'ACTUALITE')
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 6); // seulement les 6 derniers


      // Filtrer les articles communqiues
      const recentCommuniques = allData
        .filter(a => a.category === 'COMMUNIQUE')
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 2); // seulement les 6 derniers

      this.articles.set(recentArticles);
       this.communiques.set(recentCommuniques);
      this.lastUpdate.set(new Date());
      this.isLoading.set(false);
    },
    error: (err) => {
      console.error('Erreur chargement articles:', err);
      this.isLoading.set(false);
    }
  });
}


  trackById(index: number, item: any): number {
  return item.id;
}
  loadProjects1() {
    this.apiService.getPublicProjects().subscribe({
      next: (response: any) => {
        const data: Project[] = Array.isArray(response?.data.content) ? response.data.content : Array.isArray(response) ? response : [];
        this.projects.set(data);
      },
      error: (err) => console.error('Erreur chargement projets:', err)
    });
  }

  // Charger les 3 projets récents
loadProjects() {
  this.apiService.getPublicProjects().subscribe({
    next: (response: any) => {
      const allData: Project[] = Array.isArray(response?.data?.content) 
        ? response.data.content 
        : Array.isArray(response) 
          ? response 
          : [];

      // Trier par date décroissante
      const sortedProjects = allData.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

      if (this.showAllProjects()) {
        // Pagination si on affiche tous
        this.totalProjectPages.set(Math.ceil(sortedProjects.length / this.pageSizeProject));
        const start = (this.currentProjectPage() - 1) * this.pageSizeProject;
        const end = start + this.pageSizeProject;
        this.projects.set(sortedProjects.slice(start, end));
      } else {
        // Sinon juste les 3 premiers
        this.projects.set(sortedProjects.slice(0, 4));
      }
    },
    error: (err) => console.error('Erreur chargement projets:', err)
  });
}

// Voir tous les projets avec pagination
voirTousProjets() {
  this.showAllProjects.set(true);
  this.currentProjectPage.set(1);
  this.loadProjects();
}

// Pagination : page suivante
nextProjectPage() {
  if (this.currentProjectPage() < this.totalProjectPages()) {
    this.currentProjectPage.set(this.currentProjectPage() + 1);
    this.loadProjects();
  }
}

// Pagination : page précédente
prevProjectPage() {
  if (this.currentProjectPage() > 1) {
    this.currentProjectPage.set(this.currentProjectPage() - 1);
    this.loadProjects();
  }
}
  loadProjects2() {
  this.apiService.getPublicProjects().subscribe({
    next: (response: any) => {
      // Sécuriser la récupération de data
      const allData: Project[] = Array.isArray(response?.data.content) 
        ? response.data.content 
        : Array.isArray(response) 
          ? response 
          : [];

      // Trier par date décroissante (les plus récents en premier)
      const sortedProjects = allData.sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return dateB - dateA; // décroissant
      });

      // Prendre les 3 premiers
      const recentProjects = sortedProjects.slice(0, 3);

      this.projects.set(recentProjects);
    },
    error: (err) => console.error('Erreur chargement projets:', err)
  });
}

//latestAgendas: Agenda[] = [];
service: Service[] = [];

loadLatestAgendas() {
  this.apiService.getPublishedAgendasLatest().subscribe({
    next: (res) => {
      if (res.success) {
        this.latestAgendas = res.data.slice(0, 3); // juste les 3 derniers
      }
    },
    error: (err) => console.error(err)
  });
}


// =======================
// Charger tous les agendas avec pagination
// =======================
// Charger tous les agendas avec pagination
loadAgendas(page: number = 0) {
  this.isLoadingAgendas.set(true);

  this.apiService.getPublishedAgendas(page, this.pageSizeAgenda).subscribe({
    next: (res) => {
      if (res.success) {
        this.agendas.set(res.data.content || []);
        this.totalAgendaPages.set(res.data.totalPages || 1);
        this.currentAgendaPage.set(page + 1); // backend pages start at 0
      }
      this.isLoadingAgendas.set(false);
    },
    error: (err) => {
      console.error('Erreur chargement agendas:', err);
      this.isLoadingAgendas.set(false);
    }
  });
}

// =======================
// Afficher tous les agendas
// =======================
voirTousAgendas() {
  this.showAllAgendas.set(true);
  this.loadAgendas(0);
}

// =======================
// Pagination
// =======================
nextAgendaPage() {
  if (this.currentAgendaPage() < this.totalAgendaPages()) {
    this.loadAgendas(this.currentAgendaPage());
  }
}

prevAgendaPage() {
  if (this.currentAgendaPage() > 1) {
    this.loadAgendas(this.currentAgendaPage() - 2);
  }
}

loadStats() {
  this.etatService.getAllEtatPub().subscribe({
    next: (res) => {
      console.log(res);
      if (res.success) {
        this.etats = res.data.content;
        console.log(this.etats)
      }
    },
    error: (err) => console.error(err)
  });
}

// Services
services = signal<Service[]>([]);
allServices = signal<Service[]>([]);

showAllServices = signal(false);
currentServicePage = signal(1);
totalServicePages = signal(1);

pageSizeInitial = 4; // affichage accueil
pageSizeFulls = 8;    // pagination


// Charger tous les services
loadServices() {
  this.apiService.getAllServicepublic().subscribe({
    next: (res) => {
      if (res.success) {
        const data: Service[] = res.data.content || [];

        this.allServices.set(data);

        // calcul pages
        this.totalServicePages.set(
          Math.ceil(data.length / this.pageSizeFulls)
        );

        this.updateDisplayedServices();
      }
    },
    error: (err) => console.error(err)
  });
}

// Mise à jour affichage
updateDisplayedServices() {
  if (this.showAllServices()) {
    const start = (this.currentServicePage() - 1) * this.pageSizeFulls;
    const end = start + this.pageSizeFulls;

    this.services.set(this.allServices().slice(start, end));
  } else {
    this.services.set(this.allServices().slice(0, this.pageSizeInitial));
  }
}

// Voir tous
voirTousServices() {
  this.showAllServices.set(true);
  this.currentServicePage.set(1);
  this.updateDisplayedServices();
}

// Pagination
nextServicePage() {
  if (this.currentServicePage() < this.totalServicePages()) {
    this.currentServicePage.set(this.currentServicePage() + 1);
    this.updateDisplayedServices();
  }
}

prevServicePage() {
  if (this.currentServicePage() > 1) {
    this.currentServicePage.set(this.currentServicePage() - 1);
    this.updateDisplayedServices();
  }
}

loadServices1() {
  this.apiService.getAllServicepublic().subscribe({
    next: (res) => {
      if (res.success) {
        this.service = res.data.content;
        console.log(this.services)
      }
    },
    error: (err) => console.error(err)
  });
}



  getStatusBadgeClass1(status: string): string {
  const classes: Record<string, string> = {
    'PLANIFIE': 'bg-accent-100 text-accent-800 px-2 py-1 rounded-full text-xs font-semibold',
    'EN_COURS': 'bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold',
    'SUSPENDU': 'bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold',
    'TERMINE': 'bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold',
    'ANNULE': 'bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold'
  };
  return classes[status] || 'bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-semibold';
}


// Labels pour les statuts
getStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    'PLANIFIE': 'Planifié',
    'EN_COURS': 'En cours',
    'SUSPENDU': 'Suspendu',
    'TERMINE': 'Terminé',
    'ANNULE': 'Annulé'
  };
  return labels[status] || status;
}

// Couleurs des badges
getStatusBadgeClass(status: string): string {
  const classes: Record<string, string> = {
    'PLANIFIE': 'bg-accent-100 text-accent-800 px-2 py-1 rounded-full text-xs font-semibold',
    'EN_COURS': 'bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold',
    'SUSPENDU': 'bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold',
    'TERMINE': 'bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold',
    'ANNULE': 'bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold'
  };
  return classes[status] || 'bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-semibold';
}

// Couleur barre de progression
// Retourne la couleur hex de la barre de progression
getProgressBarColor(project: Project): string {
  if (project.progressPercentage >= 80) return '#00843B';   // vert foncé
  if (project.progressPercentage >= 50) return '#6FCF97';   // vert clair
  if (project.progressPercentage >= 20) return '#F2C94C';   // jaune
  return '#EB5757';                                         // rouge
}

// Retourne une couleur de texte contrastée (blanc ou noir)
getContrastTextColor(hexColor: string): string {
  const c = hexColor.substring(1);
  const rgb = parseInt(c, 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = rgb & 0xff;

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6 ? '#000000' : '#FFFFFF';
}

getProgressBarClass(project: Project): string {
  if (project.progressPercentage >= 80) return 'bg-[#00843B] h-2 rounded-full';
  if (project.progressPercentage >= 50) return 'bg-[#6FCF97] h-2 rounded-full';
  if (project.progressPercentage >= 20) return 'bg-[#F2C94C] h-2 rounded-full';
  return 'bg-[#EB5757] h-2 rounded-full';
}

// Formatage budget
formatBudget(budget: number): string {
  if (budget >= 1000000000) {
    return (budget / 1000000000).toFixed(1) + ' Mds FCFA';
  } else if (budget >= 1000000) {
    return (budget / 1000000).toFixed(0) + ' M FCFA';
  }
  return budget.toLocaleString('fr-FR') + ' FCFA';
}


  refreshArticles() {
    this.loadArticles();
  }

  startAutoRefresh() {
    this.refreshSubscription = interval(this.REFRESH_INTERVAL).subscribe(() => {
      this.loadArticles();
    });
  }

  stopAutoRefresh() {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }

  isNewArticle(id: number): boolean {
    const map = this.newArticleIds();
    const createdAt = map.get(id);
    if (!createdAt) return false;

    // Badge NOUVEAU valable 24h
    const now = new Date();
    const diff = now.getTime() - createdAt.getTime();
    if (diff > 24 * 60 * 60 * 1000) {
      map.delete(id);
      this.newArticleIds.set(map);
      return false;
    }
    return true;
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

    getImageUrl(path?: string): string | null {
     console.log(path);
    return path ? this.API_URL + path : null;
   
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  openService(url: string) {
  window.open(url, '_blank'); // ouvre l'URL dans un nouvel onglet
}
}
