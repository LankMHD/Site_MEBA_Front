import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';
import { RadioEducative } from '../../../core/models/event.model';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-radio-educative-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './radio-educative.html',
})
export class RadioEducativeComponent implements OnInit {

  fileUrl = environment.FileUrl;

  audio = signal<RadioEducative | null>(null);

  loading = signal(true);
  saving = signal(false);

  selectedFile: File | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadAudio();
  }

  loadAudio(): void {
    // Nous écrirons cette méthode juste après
    this.loading.set(true);

  this.apiService.getRadioEducative().subscribe({

    next: (res) => {

      if (res.success) {
        const page = res.data as any;
        const audioItem = page.content?.[0] ?? page.data?.[0] ?? null;
        this.audio.set(audioItem);
      }

      this.loading.set(false);

    },

    error: (err) => {

      console.error(err);

      this.loading.set(false);

    }

  });

  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  saveAudio(): void {
    // Nous écrirons cette méthode après

    if (!this.selectedFile) {
      alert("Veuillez sélectionner un fichier audio.");
      return;
    }

    const formData = new FormData();

  formData.append("audio", this.selectedFile);

  this.saving.set(true);

  this.apiService.saveOrUpdateRadioEducative(formData).subscribe({

    next: (res) => {

      this.audio.set(res.data);

      this.selectedFile = null;

      this.saving.set(false);

      alert("Audio enregistré avec succès.");

      this.loadAudio();

    },

    error: (err) => {

      console.error("Erreur lors de l'enregistrement audio:", err);

      this.saving.set(false);

      alert("Erreur lors de l'enregistrement.");

    }

  });
  }

  deleteAudio(): void {
    // Nous écrirons cette méthode après

    if (!confirm("Voulez-vous vraiment supprimer cet audio ?")) {
      return;
    }

    const audioId = this.audio()?.id;
    if (!audioId) {
      alert("Aucun audio trouvé à supprimer.");
      return;
    }

    this.apiService.deleteRadioEducative(audioId).subscribe({

      next: () => {

        this.audio.set(null);

        alert("Audio supprimé.");

      },

      error: (err) => {

        console.error(err);

        alert("Erreur lors de la suppression.");

      }

    });
  }

  getAudioUrl(path?: string): string {

    if (!path) return '';

    if (path.startsWith('http')) {
      return path;
    }

    return `${this.fileUrl}/uploads/${path}`;

  }

}
