import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import { ApiService } from '../../../../core/services/api.service';
import { Video } from '../../../../core/models/event.model';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-video-admin-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './video-admin-list.html'
})
export class VideoAdminListComponent implements OnInit {

  fileUrl = environment.FileUrl;

  videos = signal<Video[]>([]);

  loading = signal(true);

  deleting = signal<number | null>(null);

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadVideos();
  }

  /**
   * Charger toutes les vidéos
   */
  loadVideos(): void {

    this.loading.set(true);

    (this.apiService as any).getAllVideos().subscribe({

      next: (res: any) => {

        if (res.success && res.data) {
          this.videos.set(res.data);
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
   * Ajouter une vidéo
   */
  addVideo(): void {

    this.router.navigate(['/admin/videos/new']);

  }

  /**
   * Modifier une vidéo
   */
  editVideo(id: number): void {

    this.router.navigate(['/admin/videos/edit', id]);

  }

  /**
   * Supprimer une vidéo
   */
  deleteVideo(id: number): void {

    const confirmation = confirm(
      'Voulez-vous vraiment supprimer cette vidéo ?'
    );

    if (!confirmation) {
      return;
    }

    this.deleting.set(id);

    (this.apiService as any).deleteVideo(id).subscribe({

      next: (res: any) => {

        if (res.success) {

          this.videos.update(list =>
            list.filter(video => video.id !== id)
          );

        }

        this.deleting.set(null);

      },

      error: (err: any) => {

        console.error(err);

        this.deleting.set(null);

      }

    });

  }

  /**
   * Construire l'URL complète d'une vidéo locale
   */
  getVideoUrl(path?: string): string {

    if (!path) {
      return '';
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

  /**
   * Vérifie si la vidéo est une vidéo YouTube
   */
  isYoutube(video: Video): boolean {

    return !!video.youtubeUrl;

  }

}
