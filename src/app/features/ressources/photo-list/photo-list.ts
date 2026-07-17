import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from '../../../core/services/api.service';
import { Photo } from '../../../core/models/event.model';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-photo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo-list.html',
})
export class PhotoListComponent implements OnInit {

  fileUrl = environment.FileUrl;

  photos = signal<Photo[]>([]);

  loading = signal(true);

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.loadPhotos();
  }

  loadPhotos(): void {

    this.loading.set(true);

    const api = this.apiService as any;
    const photos$ = api.getAllPhotos?.() ?? api.getPhotos?.();

    if (!photos$) {
      console.error('Photo retrieval method not found on ApiService.');
      this.loading.set(false);
      return;
    }

    photos$.subscribe({

      next: (res: any) => {

        console.log(res);

        if (res?.success && res?.data) {
          this.photos.set(res.data);
        }

        this.loading.set(false);

      },

      error: (err: any) => {

        console.error(err);

        this.loading.set(false);

      }

    });

  }

  refresh(): void {
    this.loadPhotos();
  }

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
