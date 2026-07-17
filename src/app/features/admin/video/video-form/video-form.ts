import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ApiService } from '../../../../core/services/api.service';
import { Video } from '../../../../core/models/event.model';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-video-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './video-form.html'
})
export class VideoFormComponent implements OnInit {

  fileUrl = environment.FileUrl;

  video: Video = {
    videoUrl: '',
    youtubeUrl: ''
  };

  selectedFile: File | null = null;

  preview = '';

  loading = signal(false);

  saving = signal(false);

  isEdit = signal(false);

  videoId!: number;

  /**
   * Mode :
   * local = upload vidéo
   * youtube = lien YouTube
   */
  mode = signal<'local' | 'youtube'>('youtube');

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {

      this.videoId = +id;

      this.isEdit.set(true);

      this.loadVideo();
    }

  }

  private getVideoById(id: number): any {
    return (this.apiService as any).getVideoById(id);
  }

  loadVideo(): void {

    this.loading.set(true);

    this.getVideoById(this.videoId).subscribe({

      next: (res: any) => {

        if (res.success && res.data) {

          this.video = res.data;

          if (this.video.youtubeUrl) {

            this.mode.set('youtube');

          } else {

            this.mode.set('local');

            this.preview = this.getVideoUrl(this.video.videoUrl);

          }

        }

        this.loading.set(false);

      },

      error: () => {

        this.loading.set(false);

      }

    });

  }

  changeMode(value: 'local' | 'youtube') {

    this.mode.set(value);

    this.selectedFile = null;

    this.preview = '';

    this.video.videoUrl = '';

    this.video.youtubeUrl = '';

  }

  onFileSelected(event: any): void {

    const file = event.target.files[0];

    if (!file) {

      return;

    }

    this.selectedFile = file;

    this.preview = URL.createObjectURL(file);

  }

  save(): void {

    this.saving.set(true);

    const formData = new FormData();

    const dto = {

      videoUrl: this.mode() === 'local'
        ? this.video.videoUrl
        : null,

      youtubeUrl: this.mode() === 'youtube'
        ? this.video.youtubeUrl
        : null

    };

    formData.append(
      'video',
      new Blob(
        [JSON.stringify(dto)],
        { type: 'application/json' }
      )
    );

    if (this.selectedFile) {

      formData.append(
        'file',
        this.selectedFile
      );

    }

    if (this.isEdit()) {

      (this.apiService as any)
        .updateVideo(this.videoId, formData)
        .subscribe({

          next: () => {

            this.router.navigate(['/admin/videos']);

          },

          error: (err: unknown) => {

            console.error(err);

            this.saving.set(false);

          }

        });

    } else {

      (this.apiService as any)
        .createVideo(formData)
        .subscribe({

          next: () => {

            this.router.navigate(['/admin/videos']);

          },

          error: (err: unknown) => {

            console.error(err);

            this.saving.set(false);

          }

        });

    }

  }

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

}
