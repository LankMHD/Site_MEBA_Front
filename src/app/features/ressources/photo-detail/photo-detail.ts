import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { ApiService } from '../../../core/services/api.service';
import { Photo } from '../../../core/models/event.model';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-photo-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './photo-detail.html',
})
export class PhotoDetailComponent implements OnInit {

  fileUrl = environment.FileUrl;

  photo = signal<Photo | null>(null);

  loading = signal(true);

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      const id = Number(params.get('id'));

      if (id) {
        this.loadPhoto(id);
      }

    });

  }

  /**
   * Charger une photo par son ID
   */
  loadPhoto(id: number): void {

    this.loading.set(true);

    (this.apiService as any).getPhotoById(id).subscribe({

      next: (res: any) => {

        console.log(res);

        if (res.success && res.data) {
          this.photo.set(res.data);
        }

        this.loading.set(false);

      },

      error: (err: any) => {

        console.error(err);

        this.loading.set(false);

      }

    });

  }

  /**
   * Construire l'URL de l'image
   */
  getImageUrl(path?: string): string {

    if (!path) {
      return 'assets/images/no-image.png';
    }

    if (
      path.startsWith('http://') ||
      path.startsWith('https://')
    ) {
      return path;
    }

    const normalized = path.startsWith('/uploads/')
      ? path
      : `/uploads/${path}`;

    return `${this.fileUrl}${normalized}`;
  }

}
