import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { ApiService } from '../../../../core/services/api.service';
import { Photo } from '../../../../core/models/event.model';

@Component({
  selector: 'app-photo-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './photo-form.html'
})
export class PhotoFormComponent implements OnInit {

  loading = signal(false);

  saving = signal(false);
  successMessage = signal('');

  errorMessage = signal('');
  isEdit = signal(false);

  selectedFile: File | null = null;

  preview: string | ArrayBuffer | null = null;

  photo: Photo = {

    id: undefined,

    imageUrl: ''

  };

  constructor(

    private apiService: ApiService,

    private route: ActivatedRoute,

    private router: Router

  ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {

      this.isEdit.set(true);

      this.loadPhoto(Number(id));

    }

  }

  /**
   * Charger une photo
   */
  loadPhoto(id: number): void {

    this.loading.set(true);

    (this.apiService as any).getPhotoById?.(id)?.subscribe?.({

      next: (res: any) => {

        if (res.success) {

          this.photo = res.data;

          this.preview = this.photo.imageUrl;

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
   * Sélection image
   */
  onFileSelected(event: Event): void {

    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {

      return;

    }

    this.selectedFile = input.files[0];

    const reader = new FileReader();

    reader.onload = () => {

      this.preview = reader.result;

    };

    reader.readAsDataURL(this.selectedFile);

  }

  /**
   * Enregistrer
   */
  save(): void {

  this.successMessage.set('');
  this.errorMessage.set('');

  if (!this.isEdit() && !this.selectedFile) {

    this.errorMessage.set("Veuillez sélectionner une image.");

    return;

  }

  this.saving.set(true);

  const formData = new FormData();

  formData.append(
    "photo",
    new Blob(
      [JSON.stringify(this.photo)],
      {
        type: "application/json"
      }
    )
  );

  if (this.selectedFile) {

    formData.append(
      "file",
      this.selectedFile
    );

  }

  const request = this.isEdit()
      ? this.apiService.updatePhoto(this.photo.id!, formData)
      : this.apiService.createPhoto(formData);

  request.subscribe({

    next: () => {

      this.saving.set(false);

      this.successMessage.set(

        this.isEdit()

          ? "Photo modifiée avec succès."

          : "Photo ajoutée avec succès."

      );

      // Après un ajout on vide le formulaire
      if (!this.isEdit()) {

        this.photo = {

          id: undefined,

          imageUrl: ''

        };

        this.selectedFile = null;

        this.preview = null;

      }

    },

    error: (err) => {

      console.error(err);

      this.saving.set(false);

      this.errorMessage.set(

        err?.error?.message ||

        "Une erreur est survenue."

      );

    }

  });

}

}
