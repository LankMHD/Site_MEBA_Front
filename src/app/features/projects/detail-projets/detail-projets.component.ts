import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Project } from '../../../core/models';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-detail-projets',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detail-projets.component.html',
  styleUrls: ['./detail-projets.component.scss']
})
export class DetailProjetsComponent {

    project = signal<Project | null>(null);
  loading = signal(true);

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.apiService.getPublicProjectById(+id).subscribe({
        next: res => {
          if (res.success) this.project.set(res.data);
          this.loading.set(false);
        },
        error: () => this.loading.set(false)
      });
    }
  }

  /* ================= STATUS ================= */

  getStatusLabel(status: string): string {
    const labels: Record<string, string> = {
      PLANIFIE: 'Planifié',
      EN_COURS: 'En cours',
      SUSPENDU: 'Suspendu',
      TERMINE: 'Terminé',
      ANNULE: 'Annulé'
    };
    return labels[status] || status;
  }

  getStatusBadgeClass(status: string): string {
    const base = 'px-3 py-1 rounded-full text-xs font-semibold';
    const map: Record<string, string> = {
      PLANIFIE: `${base} bg-white/20 text-white`,
      EN_COURS: `${base} bg-yellow-100 text-yellow-800`,
      SUSPENDU: `${base} bg-red-100 text-red-800`,
      TERMINE: `${base} bg-green-100 text-green-800`,
      ANNULE: `${base} bg-red-200 text-red-900`
    };
    return map[status] || base;
  }

  /* ================= PROGRESSION ================= */

  getProgressColor(project: Project): string {
    const p = project.progressPercentage;
    if (p >= 80) return '#00843B';
    if (p >= 50) return '#6FCF97';
    if (p >= 20) return '#F2C94C';
    return '#EB5757';
  }

  getContrastTextColor(hex: string): string {
    const c = hex.substring(1);
    const rgb = parseInt(c, 16);
    const r = (rgb >> 16) & 255;
    const g = (rgb >> 8) & 255;
    const b = rgb & 255;
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.6 ? '#000000' : '#FFFFFF';
  }

  /* ================= FORMAT ================= */

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }

  formatBudget(budget: number): string {
    if (budget >= 1_000_000_000) return (budget / 1_000_000_000).toFixed(1) + ' Mds FCFA';
    if (budget >= 1_000_000) return (budget / 1_000_000).toFixed(0) + ' M FCFA';
    return budget.toLocaleString('fr-FR') + ' FCFA';
  }

}
