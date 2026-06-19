import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../core/models';
import { ApiService } from '../../../core/services/api.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss']
})
export class ProjetsComponent {

projects = signal<Project[]>([]);
loading = signal(true);
currentPage = signal(0);
totalPages = signal(0);
searchQuery = '';

constructor(private apiService: ApiService) {}

ngOnInit(): void {
  this.loadProjects();
}

loadProjects(): void {
  this.loading.set(true);
  this.apiService.getPublicProjects(this.currentPage(), 8).subscribe({
    next: (response) => {
      if (response.success) {
        this.projects.set(response.data.content);
        this.totalPages.set(response.data.totalPages);
      }
      this.loading.set(false);
    },
    error: () => this.loading.set(false)
  });
}

search(): void {
  if (!this.searchQuery.trim()) {
    this.loadProjects();
    return;
  }

  this.loading.set(true);
  this.apiService.searchProjects(this.searchQuery, 0, 8).subscribe({
    next: (response) => {
      if (response.success) {
        this.projects.set(response.data.content);
        this.totalPages.set(response.data.totalPages);
        this.currentPage.set(0);
      }
      this.loading.set(false);
    },
    error: () => this.loading.set(false)
  });
}

goToPage(page: number): void {
  if (page >= 0 && page < this.totalPages()) {
    this.currentPage.set(page);
    this.loadProjects();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

getPageNumbers(): number[] {
  const total = this.totalPages();
  const current = this.currentPage();
  const pages: number[] = [];

  let start = Math.max(0, current - 2);
  let end = Math.min(total - 1, current + 2);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
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

// Classe pour la barre de progression
getProgressBarClass(project: Project): string {
  if (project.progressPercentage >= 80) return 'bg-[#00843B] h-2 rounded-full';
  if (project.progressPercentage >= 50) return 'bg-[#6FCF97] h-2 rounded-full';
  if (project.progressPercentage >= 20) return 'bg-[#F2C94C] h-2 rounded-full';
  return 'bg-[#EB5757] h-2 rounded-full';
}

// Formatage des dates
formatDate(dateStr: string): string {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
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


}
