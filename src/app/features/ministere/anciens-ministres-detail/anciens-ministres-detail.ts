import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';
import { AncienMinistre } from '../../../core/models/event.model';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-ancien-ministre-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './anciens-ministres-detail.html',
})
export class AnciensMinistresDetail implements OnInit {

  fileUrl = environment.FileUrl;

  ministre    = signal<AncienMinistre | null>(null);
  autres      = signal<AncienMinistre[]>([]);
  loading     = signal(true);
  loadingAutres = signal(true);
  // id du ministre affiché, utile pour mise en évidence dans la sidebar
  currentId = signal<number | null>(null);

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Recharge le composant si l'ID change (navigation entre ministres)
    // this.route.paramMap.subscribe(params => {
    //   const id = Number(params.get('id'));
    //   if (id) {
    //     this.loadMinistre(id);
    //     this.loadAutres(id);
    //   }
    // });

    this.route.paramMap.subscribe(params => {
  const id = Number(params.get('id'));

  console.log('ID reçu :', id);

  if (id) {
    this.loadMinistre(id);
    this.loadAutres(id);
  }
});
  }

  // loadMinistre(id: number): void {
  //   this.loading.set(true);
  //   this.apiService.getAncienMinistresById(id).subscribe({
  //     next: (res) => {
  //       if (res.success && res.data) {
  //         this.ministre.set(res.data);
  //       }
  //       this.loading.set(false);
  //     },
  //     error: () => this.loading.set(false)
  //   });
  // }

  loadMinistre(id: number): void {

  this.loading.set(true);

  this.apiService.getAncienMinistresById(id).subscribe({

    next: (res) => {

      console.log("Réponse API :", res);

      if (res.success && res.data) {
        this.ministre.set(res.data);
        this.currentId.set(res.data.id ?? id);
      }

      this.loading.set(false);
    },

    error: (err) => {
      console.error(err);
      this.loading.set(false);
    }

  });

}

  // Sélectionner un autre ministre depuis la sidebar : met à jour l'URL
  // et recharge les données sans recharger la page entière.
  selectAutre(id: number): void {
    // mettre à jour l'URL (sans forcer reload)
    this.router.navigate(['/ministere/historique/anciens-ministres', id]);
    // recharger le ministre et la liste des autres
    this.loadMinistre(id);
    this.loadAutres(id);
    // faire défiler vers le haut du contenu si nécessaire
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  loadAutres(id: number): void {
    this.loadingAutres.set(true);
    this.apiService.getAllAnciensMinistres().subscribe({
      next: (res) => {
        if (res.success && res.data) {
          // Exclure le ministre actuellement affiché
          this.autres.set(res.data.filter(m => m.id !== id));
        }
        this.loadingAutres.set(false);
      },
      error: () => this.loadingAutres.set(false)
    });
  }

  getImageUrl(path?: string): string {
    if (!path) return 'assets/images/default-ministre.jpg';
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    const normalized = path.startsWith('/uploads/') ? path : `/uploads/${path}`;
    return `${this.fileUrl}${normalized}`;
  }
}
