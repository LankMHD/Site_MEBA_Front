// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { ApiService } from '../../../core/services/api.service';
// import { AncienMinistre } from '../../../core/models/event.model';

// @Component({
//   selector: 'app-anciens-ministres',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './anciens-ministres.html'
// })
// export class AnciensMinistresComponent {
// loading() {
// throw new Error('Method not implemented.');
// }
// openModal() {
// throw new Error('Method not implemented.');
// }
// notification() {
// throw new Error('Method not implemented.');
// }

//   selectedFile: File | null = null;

//   ancienMinistre: AncienMinistre = {
//     nom: '',
//     prenom: '',
//     dateDebut: null,
//     dateFin: null,
//     description: '',
//     photo: '',
//     id: 0
//   };

//   constructor(private apiService: ApiService) {}

//   onFileSelected(event: Event): void {
//     const input = event.target as HTMLInputElement;
//     if (input.files && input.files.length > 0) {
//       this.selectedFile = input.files[0];
//     }
//   }

//   enregistrer() {
//     const payload: AncienMinistre = {
//       ...this.ancienMinistre,
//       nom: this.ancienMinistre.nom?.trim() || '',
//       prenom: this.ancienMinistre.prenom?.trim() || '',
//       description: this.ancienMinistre.description?.trim() || '',
//       photo: this.ancienMinistre.photo?.trim() || '',
//       dateDebut: this.ancienMinistre.dateDebut?.trim() ? this.ancienMinistre.dateDebut : null,
//       dateFin: this.ancienMinistre.dateFin?.trim() ? this.ancienMinistre.dateFin : null
//     };

//     const formData = new FormData();
//     formData.append('nom', payload.nom);
//     formData.append('prenom', payload.prenom);
//     formData.append('description', payload.description);
//     if (payload.dateDebut) {
//       formData.append('dateDebut', payload.dateDebut);
//     }
//     if (payload.dateFin) {
//       formData.append('dateFin', payload.dateFin);
//     }
//     if (this.selectedFile) {
//       formData.append('photo', this.selectedFile, this.selectedFile.name);
//     }

//     this.apiService.ajouterAncienMinistre(formData)
//       .subscribe({

//         next: () => {
//           alert("Ancien ministre enregistré avec succès.");

//           this.ancienMinistre = {
//             nom: '',
//             prenom: '',
//             dateDebut: null,
//             dateFin: null,
//             description: '',
//             photo: '',
//             id: 0
//           };
//         },

//         error: (err: any) => {
//           console.error("les données de l'ancien ministre:", payload);
//           console.error("Erreur lors de l'enregistrement:", err);
//           console.error("Status:", err.status);
//           console.error("Message:", err.message);
//           console.error("Erreur complète:", err.error);
//           alert(`Erreur lors de l'enregistrement. ${err?.error?.message || err?.message || 'Veuillez vérifier les données saisies.'}`);
//         }
//       });
//   }
// }

import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';
import { AncienMinistre } from '../../../core/models/event.model';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-anciens-ministres',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './anciens-ministres.html',
})
export class AnciensMinistresComponent implements OnInit {

  fileUrl = environment.FileUrl;

  // ── Liste ──────────────────────────────────────────────────────────────
  documents = signal<AncienMinistre[]>([]);
  loading   = signal(true);
  saving    = signal(false);

  // ── Modal ──────────────────────────────────────────────────────────────
  showModal       = signal(false);
  editingDocument = signal<AncienMinistre | null>(null);

  form = {
    nom: '',
    prenom: '',
    dateDebut: '' as string | null,
    dateFin:   '' as string | null,
    description: '',
    // isActif: false,
  };

  selectedFile: File | null = null;

  // ── Pagination ─────────────────────────────────────────────────────────
  currentPage = signal(1);
  pageSize    = 10;
  totalItems  = signal(0);
  totalPages  = computed(() =>
    Math.max(1, Math.ceil(this.totalItems() / this.pageSize))
  );
  pages = computed(() =>
    Array.from({ length: this.totalPages() }, (_, i) => i + 1)
  );

  // ── Notification ───────────────────────────────────────────────────────
  notification = signal<{ show: boolean; type: string; message: string }>({
    show: false, type: 'success', message: ''
  });

  // ── Confirmation suppression ───────────────────────────────────────────
  confirmModal = signal<{
    show: boolean;
    message: string;
    onConfirm: () => void;
  }>({
    show: false, message: '', onConfirm: () => {}
  });

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadDocuments();
  }

  // ── Chargement de la liste ─────────────────────────────────────────────
  loadDocuments(): void {
    this.loading.set(true);
    this.apiService.getAllAnciensMinistres().subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.documents.set(res.data);
          this.totalItems.set(res.data.length);
        }
        this.loading.set(false);
      },
      error: () => {
        this.showNotif('error', 'Erreur lors du chargement des données');
        this.loading.set(false);
      }
    });
  }

  // ── Ouverture / fermeture modal ────────────────────────────────────────
  openModal(): void {
    this.editingDocument.set(null);
    this.resetForm();
    this.showModal.set(true);
  }

  editDocument(doc: AncienMinistre): void {
    this.editingDocument.set(doc);
    this.form = {
      nom:         doc.nom         ?? '',
      prenom:      doc.prenom      ?? '',
      dateDebut:   doc.dateDebut   ?? '',
      dateFin:     doc.dateFin     ?? '',
      description: doc.description ?? '',
      // isActif:     (doc as any).isActif ?? false,
    };
    this.selectedFile = null;
    this.showModal.set(true);
  }

  closeModal(): void {
    this.showModal.set(false);
    this.resetForm();
  }

  resetForm(): void {
    this.form = {
      nom: '', prenom: '',
      dateDebut: '', dateFin: '',
      description: '',
      // isActif: false,
    };
    this.selectedFile = null;
  }

  // ── Sélection fichier ──────────────────────────────────────────────────
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.selectedFile = input.files[0];
    }
  }

  // ── Sauvegarde (création ou modification) ─────────────────────────────
  saveDocument(): void {
    this.saving.set(true);

    const formData = new FormData();
    formData.append('nom',         this.form.nom.trim());
    formData.append('prenom',      this.form.prenom.trim());
    formData.append('description', this.form.description.trim());
    // formData.append('isActif',     String(this.form.isActif));

    if (this.form.dateDebut) {
      formData.append('dateDebut', this.form.dateDebut);
    }
    if (this.form.dateFin) {
      formData.append('dateFin', this.form.dateFin);
    }
    if (this.selectedFile) {
      formData.append('photo', this.selectedFile, this.selectedFile.name);
    }

    const editing = this.editingDocument();

    // Modification
    if (editing) {
      this.apiService.updateAncienMinistre(editing.id, formData).subscribe({
        next: (res) => {
          const updatedSuccessfully = res?.success === undefined ? true : res.success;
          if (updatedSuccessfully) {
            this.showNotif('success', 'Ancien ministre modifié avec succès');
            this.closeModal();
            this.loadDocuments();
          } else {
            this.showNotif('error', res?.message || 'Erreur lors de la modification');
          }
          this.saving.set(false);
        },
        error: (err) => {
          console.error('Erreur modification :', err);
          this.showNotif('error', err?.error?.message || 'Erreur lors de la modification');
          this.saving.set(false);
        }
      });
      return;
    }

    // Création
    this.apiService.ajouterAncienMinistre(formData).subscribe({
      next: () => {
        this.showNotif('success', 'Ancien ministre enregistré avec succès');
        this.closeModal();
        this.loadDocuments();
        this.saving.set(false);
      },
      error: (err) => {
        console.error('Erreur création :', err);
        this.showNotif('error', err?.error?.message || 'Erreur lors de l\'enregistrement');
        this.saving.set(false);
      }
    });
  }

  // ── Suppression ────────────────────────────────────────────────────────
  deleteDocument(doc: AncienMinistre): void {
    this.confirmModal.set({
      show: true,
      message: `Voulez-vous vraiment supprimer ${doc.nom} ${doc.prenom} ?`,
      onConfirm: () => {
        this.apiService.deleteAncienMinistre(doc.id).subscribe({
          next: () => {
            this.showNotif('success', 'Ancien ministre supprimé avec succès');
            this.closeConfirmModal();
            this.loadDocuments();
          },
          error: () => {
            this.showNotif('error', 'Erreur lors de la suppression');
            this.closeConfirmModal();
          }
        });
      }
    });
  }

  closeConfirmModal(): void {
    this.confirmModal.set({ show: false, message: '', onConfirm: () => {} });
  }

  // ── Pagination ─────────────────────────────────────────────────────────
  goToPage(page: number): void {
    this.currentPage.set(page);
  }

  prevPage(): void {
    if (this.currentPage() > 1) {
      this.currentPage.update(p => p - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update(p => p + 1);
    }
  }

  // ── Notification ───────────────────────────────────────────────────────
  showNotif(type: string, message: string): void {
    this.notification.set({ show: true, type, message });
    setTimeout(() => {
      this.notification.set({ show: false, type: '', message: '' });
    }, 4000);
  }

  // ── Image ──────────────────────────────────────────────────────────────
  getImageUrl(path?: string): string {
    if (!path) return 'assets/images/default-ministre.jpg';
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    const normalized = path.startsWith('/uploads/') ? path : `/uploads/${path}`;
    return `${this.fileUrl}${normalized}`;
  }
}
