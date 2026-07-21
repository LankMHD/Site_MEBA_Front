import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { ApiService } from '../../../core/services/api.service';
import { StructureCentrale } from '../../../core/models/event.model';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-structure-centrale-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './structure-centrale-detail.html',
  styleUrls: ['./structure-centrale-detail.scss']
})
export class StructureCentraleDetailComponent implements OnInit {

  fileUrl = environment.FileUrl;
  structure = signal<StructureCentrale | null>(null);

  autresStructures = signal<StructureCentrale[]>([]);

  loading = signal(true);

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));

      if (id) {
        this.loadStructure(id);
      }
    });
  }

  loadStructure(id: number): void {

    this.loading.set(true);

    this.apiService
      .getStructureCentraleById(id)
      .subscribe({

        next: (response) => {

          if (response.success) {

            this.structure.set(response.data);

            if (response.data?.id != null) {
              this.loadAutresStructures(response.data.id);
            }

          }

          this.loading.set(false);

        },

        error: (error) => {

          console.error(
            'Erreur lors du chargement de la structure centrale',
            error
          );

          this.loading.set(false);

        }

      });

  }

  loadAutresStructures(id: number): void {

    this.apiService
      .getAllStructureCentrale()
      .subscribe({

        next: (response) => {

          if (response.success) {

            const page = response.data as {
              items?: StructureCentrale[];
              content?: StructureCentrale[];
            };

            const structures = page.items ?? page.content ?? [];
            const autres = structures.filter(
              structure => structure.id !== id
            );

            this.autresStructures.set(autres);

          }

        },

        error: (error) => {

          console.error(
            'Erreur lors du chargement des autres structures',
            error
          );

        }

      });

  }

  getImageUrl(path?: string): string {
    if (!path) {
      return '';
    }

    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }

    const cleanPath = path.replace(/^\/+/, '').replace(/^uploads\//i, '');
    const normalizedPath = `/uploads/${cleanPath}`;
    return `${this.fileUrl}${normalizedPath}`;
  }

  formatDate(date?: string): string {

    if (!date) {
      return '';
    }

    return new Date(date)
      .toLocaleDateString('fr-FR');

  }

  formatContent(content?: string): string {
    if (!content) return '';
    content = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    const paragraphs = content.split(/\n+/);
    return paragraphs.map(p => `<p>${p.trim()}</p>`).join('');
  }

}
