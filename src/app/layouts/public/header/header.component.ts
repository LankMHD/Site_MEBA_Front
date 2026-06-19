import { Component, signal, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { Ministere } from '../../../core/models/event.model';
import { environment } from '../../../../environments/environment';
import { ApiService } from '../../../core/services/api.service';
import { MinistereService } from '../../../core/services/ministere.service';


@Component({
  selector: 'app-header',
  standalone: true,
imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  activeSection: string = '';
   loading = signal(true);
    private authService = inject(AuthService);
     private readonly API_URL = environment.FileUrl;
     private apiService = inject(ApiService);
     private etatService = inject(MinistereService);
  
  mobileMenuOpen = signal(false);
  searchOpen = signal(false);
  openSubmenu = signal<string | null>(null);

     ministeres= signal<Ministere[]>([]);
     ministere1!: Ministere;
     ministere = signal<Ministere | null>(null); 

     constructor(private router: Router) {}


      ngOnInit() {
    this.loadMinistere();
    
    
  }
  
  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
    if (!this.mobileMenuOpen()) {
      this.openSubmenu.set(null);
    }
  }
  
  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
    this.openSubmenu.set(null);
  }
  
  toggleSearch() {
    this.searchOpen.update(v => !v);
  }
  
  toggleSubmenu(menu: string) {
    this.openSubmenu.update(v => v === menu ? null : menu);
  }
  
  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth >= 1024) {
      this.mobileMenuOpen.set(false);
      this.openSubmenu.set(null);
    }
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

      getImageUrl(path?: string): string | null {
     console.log(path);
    return path ? this.API_URL + path : null;
   
  }


setActive(section: string) {
  this.activeSection = section; // pour le scroll ou menu
}

@HostListener('window:scroll', [])
onScroll(): void {
  if (this.router.url !== '/') return;

  const sections = ['hero', 'projets', 'actualites'];
  let currentSection = '';

  for (let section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      // si le haut de la section est visible ou passé
      if (rect.top <= 150) {
        currentSection = section;
      }
    }
  }

  this.activeSection = currentSection; // '' si aucune n’est passée
}

goToAccueil() {
  this.activeSection = ''; // réinitialise la section active
  this.router.navigate(['/']).then(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

goToSection(section: string) {
  this.activeSection = ''; // 🔥 Réinitialise tout avant scroll
  if (this.router.url !== '/') {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => this.scrollTo(section), 100);
    });
  } else {
    this.scrollTo(section);
  }
}

scrollTo(section: string) {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Liste de toutes les routes enfants du menu Ressources
ressourcesRoutes = ['/ressources/documents', '/ressources/politiques', '/faq'];

isRessourcesActive(): boolean {
  // Si la route actuelle contient une des routes enfants, parent devient actif
  return this.ressourcesRoutes.some(route => this.router.url.startsWith(route));
}

// Liste des routes enfants du menu Ministère
ministereRoutes = [
  '/ministere/ministre',
  '/ministere/missions',
  '/ministere/organigramme',
  '/ministere/structures'
];

// Fonction pour savoir si le parent Ministère doit être actif
isMinistereActive(): boolean {
  return this.ministereRoutes.some(route => this.router.url.startsWith(route));
}

}
