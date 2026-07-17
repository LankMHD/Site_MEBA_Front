import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from '../../../core/services/api.service';
import { Video } from '../../../core/models/event.model';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-list.html',
})
export class VideoListComponent implements OnInit {

  fileUrl = environment.FileUrl;

  videos = signal<Video[]>([]);

  loading = signal(true);

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.loadVideos();
  }

  /**
   * Charger toutes les vidéos
   */
  loadVideos(): void {

    this.loading.set(true);

    const getAllVideos$ = (this.apiService as any).getAllVideos?.();

    if (!getAllVideos$) {
      console.error('ApiService does not implement getAllVideos');
      this.loading.set(false);
      return;
    }

    getAllVideos$.subscribe({

      next: (res: any) => {

        console.log(res);

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
   * Recharger la liste
   */
  refresh(): void {
    this.loadVideos();
  }

  /**
   * Construire l'URL complète de la vidéo
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
   * Vérifie si la vidéo est un lien YouTube
   */
  isYoutubeVideo(video: Video): boolean {
    return !!video.youtubeUrl;
  }

}
