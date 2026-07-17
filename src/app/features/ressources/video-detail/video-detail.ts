import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { ApiService } from '../../../core/services/api.service';
import { Video } from '../../../core/models/event.model';
import { environment } from '../../../../environments/environment';

interface VideoApiResponse {
  success: boolean;
  data: Video | null;
}

@Component({
  selector: 'app-video-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './video-detail.html',
})
export class VideoDetailComponent implements OnInit {

  fileUrl: string = environment.FileUrl;

  video = signal<Video | null>(null);

  loading = signal<boolean>(true);

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      const id: number = Number(params.get('id'));

      if (id) {
        this.loadVideo(id);
      }

    });

  }

  /**
   * Charger une vidéo par son ID
   */
  loadVideo(id: number): void {

    this.loading.set(true);

    (this.apiService as any).getVideoById(id).subscribe({

      next: (res: VideoApiResponse) => {

        console.log(res);

        if (res.success && res.data) {
          this.video.set(res.data);
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
   * Construire l'URL de la vidéo locale
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

    const normalized: string = path.startsWith('/uploads/')
      ? path
      : `/uploads/${path}`;

    return `${this.fileUrl}${normalized}`;
  }

  /**
   * Vérifie si c'est une vidéo YouTube
   */
  isYoutubeVideo(): boolean {
    return !!this.video()?.youtubeUrl;
  }

  /**
   * Convertit un lien YouTube en URL d'intégration sécurisée
   */
  getYoutubeEmbedUrl(url?: string): SafeResourceUrl {

    if (!url) {
      return '' as unknown as SafeResourceUrl;
    }

    let videoId: string = '';

    if (url.includes('watch?v=')) {
      videoId = url.split('watch?v=')[1].split('&')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    } else {
      videoId = url;
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}`
    );
  }

}
