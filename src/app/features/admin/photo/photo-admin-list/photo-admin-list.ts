import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import { ApiService } from '../../../../core/services/api.service';
import { Photo } from '../../../../core/models/event.model';
import { environment } from '../../../../../environments/environment';

interface PhotoListResponse {
  success: boolean;
  data?: Photo[];
}

interface DeletePhotoResponse {
  success: boolean;
}

@Component({
  selector: 'app-photo-admin-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './photo-admin-list.html'
})
export class PhotoAdminListComponent implements OnInit {

  fileUrl: string = environment.FileUrl;

  photos = signal<Photo[]>([]);

  loading = signal<boolean>(true);

  deleting = signal<number | null>(null);

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPhotos();
  }

  /**
   * Charger les photos
   */
  loadPhotos(): void {

    this.loading.set(true);

    (this.apiService as any).getPhotos().subscribe({

      next: (res: PhotoListResponse) => {

        if (res.success && res.data) {
          this.photos.set(res.data);
        }

        this.loading.set(false);

      },

      error: (err: unknown) => {

        console.error(err);

        this.loading.set(false);

      }

    });

  }

  /**
   * Ajouter une photo
   */
  addPhoto(): void {

    this.router.navigate(['/admin/photos/new']);

  }

  /**
   * Modifier une photo
   */
  editPhoto(id: number): void {

    this.router.navigate(['/admin/photos/edit', id]);

  }

  /**
   * Supprimer une photo
   */
  deletePhoto(id: number): void {

    const confirmation: boolean = confirm(
      'Voulez-vous vraiment supprimer cette photo ?'
    );

    if (!confirmation) {
      return;
    }

    this.deleting.set(id);

    (this.apiService as any).deletePhoto(id).subscribe({

      next: (res: DeletePhotoResponse) => {

        if (res.success) {

          this.photos.update((list: Photo[]) =>
            list.filter((photo: Photo) => photo.id !== id)
          );

        }

        this.deleting.set(null);

      },

      error: (err: unknown) => {

        console.error(err);

        this.deleting.set(null);

      }

    });

  }

  /**
   * URL de l'image
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

    const normalized: string = path.startsWith('/uploads/')
      ? path
      : `/uploads/${path}`;

    return `${this.fileUrl}${normalized}`;
  }

}
