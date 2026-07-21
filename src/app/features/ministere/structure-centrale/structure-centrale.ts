import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from '../../../core/services/api.service';
import { StructureCentrale } from '../../../core/models/event.model';
import { RouterModule } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-structure-centrale',
  standalone: true,
  imports: [
  CommonModule,
  RouterModule
],
  templateUrl: './structure-centrale.html',
  styleUrls: ['./structure-centrale.scss']
})
export class StructureCentraleComponent implements OnInit {

  fileUrl = environment.FileUrl;
  structuresCentrales = signal<StructureCentrale[]>([]);

  loading = signal(true);

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.loadStructuresCentrales();
  }

  loadStructuresCentrales(): void {

    this.loading.set(true);

    this.apiService.getPublicStructureCentrale().subscribe({

      next: (response) => {

        if (response.success) {

          this.structuresCentrales.set(response.data);

        }

        this.loading.set(false);

      },

      error: (error) => {

        console.error(
          'Erreur lors du chargement des structures centrales',
          error
        );

        this.loading.set(false);

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

  formatContent(content?: string): string {
    if (!content) return '';
    content = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    const paragraphs = content.split(/\n+/);
    return paragraphs.map(p => `<p>${p.trim()}</p>`).join('');
  }

}
