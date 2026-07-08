import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';
import { AncienMinistre } from '../../../core/models/event.model';

@Component({
  selector: 'app-anciens-ministres',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './anciens-ministres.html'
})
export class AnciensMinistresComponent {
loading() {
throw new Error('Method not implemented.');
}
openModal() {
throw new Error('Method not implemented.');
}
notification() {
throw new Error('Method not implemented.');
}

  selectedFile: File | null = null;

  ancienMinistre: AncienMinistre = {
    nom: '',
    prenom: '',
    dateDebut: null,
    dateFin: null,
    description: '',
    photo: '',
    id: 0
  };

  constructor(private apiService: ApiService) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  enregistrer() {
    const payload: AncienMinistre = {
      ...this.ancienMinistre,
      nom: this.ancienMinistre.nom?.trim() || '',
      prenom: this.ancienMinistre.prenom?.trim() || '',
      description: this.ancienMinistre.description?.trim() || '',
      photo: this.ancienMinistre.photo?.trim() || '',
      dateDebut: this.ancienMinistre.dateDebut?.trim() ? this.ancienMinistre.dateDebut : null,
      dateFin: this.ancienMinistre.dateFin?.trim() ? this.ancienMinistre.dateFin : null
    };

    const formData = new FormData();
    formData.append('nom', payload.nom);
    formData.append('prenom', payload.prenom);
    formData.append('description', payload.description);
    if (payload.dateDebut) {
      formData.append('dateDebut', payload.dateDebut);
    }
    if (payload.dateFin) {
      formData.append('dateFin', payload.dateFin);
    }
    if (this.selectedFile) {
      formData.append('photo', this.selectedFile, this.selectedFile.name);
    }

    this.apiService.ajouterAncienMinistre(formData)
      .subscribe({

        next: () => {
          alert("Ancien ministre enregistré avec succès.");

          this.ancienMinistre = {
            nom: '',
            prenom: '',
            dateDebut: null,
            dateFin: null,
            description: '',
            photo: '',
            id: 0
          };
        },

        error: (err: any) => {
          console.error("les données de l'ancien ministre:", payload);
          console.error("Erreur lors de l'enregistrement:", err);
          console.error("Status:", err.status);
          console.error("Message:", err.message);
          console.error("Erreur complète:", err.error);
          alert(`Erreur lors de l'enregistrement. ${err?.error?.message || err?.message || 'Veuillez vérifier les données saisies.'}`);
        }
      });
  }
}

