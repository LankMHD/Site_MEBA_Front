import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Domains, Ministere, Structure } from '../../../core/models/event.model';
import { MinistereService } from '../../../core/services/ministere.service';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-structure-rattaches',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './structure-rattaches.component.html',
  styleUrls: ['./structure-rattaches.component.scss']
})
export class StructureRattachesComponent {


    private readonly API_URL = environment.FileUrl;
  notification = signal<{ show: boolean; message: string; type: 'success' | 'error' | 'info' }>({
  show: false,
  message: '',
  type: 'success'
});



projects = signal<Ministere[]>([]);
domains = signal<Domains[]>([]);
  documents = signal<Structure[]>([]);
  loading = signal(true);
  showModal = signal(false);
  editingDocument = signal<Structure | null>(null);
  saving = signal(false);
  selectedImage: File | null = null;
  selectedFile: File | null = null;
  currentPage = signal(1);
pageSize = 7; // nombre de projets par page
totalPages = signal(1);



form: {   
  type: string;
  phone: string;
  name: string;
  acronym: string;
  description: string;
  address: string;
  ministereId: number;
  domaineIds: number[];
  

  website: string,
  
  
  email: string;
    } = {
      type: '',
      phone: '',
      name: '',
      acronym: '',
      description: '',
      address: '',
      website: '',
      ministereId: 0, email: '', domaineIds:[]
     
    };


    constructor(private apiService: MinistereService, private minService: ApiService) {}




    ngOnInit(): void { this.loadDocuments(); this.loadProjects(); this.loadDomaines()}
      
      loadDocuments(page: number = 0): void {
        this.loading.set(true);
        this.apiService.getAlltruc(page, this.pageSize).subscribe({
          next: (response) => { 
            if (response.success) {
              this.documents.set(response.data.content); 
               // totalPages vient du backend
            this.totalPages.set(response.data.totalPages);
    
            // page backend commence à 0, UI à 1
            this.currentPage.set(page + 1);
               
            }
            this.loading.set(false); 
          },
          error: () => this.loading.set(false)
        });
      }
    
    
    nextPage() {
      if (this.currentPage() < this.totalPages()) {
        this.loadDocuments(this.currentPage());
      }
    }
    
    prevPage() {
      if (this.currentPage() > 1) {
        this.loadDocuments(this.currentPage() - 2);
      }
    }
    
    goToPage(page: number) {
      this.loadDocuments(page - 1);
    }
    
    pages(): number[] {
      return Array.from({ length: this.totalPages() }, (_, i) => i + 1);
    }
    
      openModal(): void {
          this.form = { 
            type: '',
      phone: '',
      name: '',
      acronym: '',
      description: '',
      address: '',
      website: '',
      ministereId: 0, email: '', domaineIds:[]
         };
           this.selectedFile = null;
       
          this.editingDocument.set(null); 
          this.showModal.set(true);
        }
      
      openModal1(): void { this.form = {  type: '',
      phone: '',
      name: '',
      acronym: '',
      description: '',
      address: '',
      website: '',
      ministereId: 0, email: '', domaineIds:[]}; this.editingDocument.set(null); this.showModal.set(true); }
      closeModal(): void { this.showModal.set(false); this.editingDocument.set(null); }
      
      editDocument1(doc: Structure): void {
        this.form = { type: doc.type, name: doc.name , ministereId:doc.ministereId, address:doc.address,description:doc.description,
           phone: doc.phone, acronym:doc.acronym, website: doc.website,email: doc.email,domaineIds: doc.domaineIds };
        this.editingDocument.set(doc);
        this.showModal.set(true);
      }
    
        editDocument(doc: Structure): void {
          this.form = { type: doc.type, name: doc.name , ministereId:doc.ministereId, address:doc.address,description:doc.description,
           phone: doc.phone, acronym:doc.acronym, website: doc.website,email: doc.email,domaineIds: doc.domaineIds };
          this.editingDocument.set(doc);
        this.showModal.set(true);
        }
       
        
    loadProjects(): void {
      
    
      this.minService.getAllMins().subscribe({
        next: (response) => {
          console.log("RESPONSE =", response); // 👈 ici le tableau
    
          this.projects.set(response.data.content); // ✅ DIRECTEMENT
          console.log("PROJECTS =", this.projects());
    
          
        },
        error: (err) => {
          console.error("Erreur API", err);
          
        }
      });
    }
    
      loadDomaines(): void {
  this.loading.set(true);

  this.apiService.getAllTypes().subscribe({
    next: (response) => {
      console.log("RESPONSE =", response); // 👈 ici le tableau

      this.domains.set(response.data.content); // ✅ DIRECTEMENT
      console.log("PROJECTS =", this.domains());

      this.totalPages.set(Math.ceil(response.data.content.length / this.pageSize));
      this.currentPage.set(1);

      this.loading.set(false);
    },
    error: (err) => {
      console.error("Erreur API", err);
      this.loading.set(false);
    }
  });
}
    

getDomainName(id: number) {
  const d = this.domains().find(dom => dom.id === id);
  return d ? d.nom : '';
}

// Supprime un domaine si clic sur la croix
removeDomain(id: number) {
  this.form.domaineIds = this.form.domaineIds.filter(d => d !== id);
}
    onFileSelected(event: Event) {
      const input = event.target as HTMLInputElement;
      if (!input.files || input.files.length === 0) {
        this.selectedFile = null;
        return;
      }
      const file = input.files[0];
      
    if (!file.type.startsWith('image/')) {
      alert('Pour une actualité, veuillez sélectionner une image');
      input.value = '';
      this.selectedFile = null;
      return;
    }
      this.selectedFile = file;
      //this.fileError = false;
    }
      
      saveDocument(): void {
      if (!this.form.name) return;
      const selectedType = this.projects().find(t => t.id == this.form.ministereId);
    
      const typeName = selectedType?.nomGeneral;
    
      this.saving.set(true);
      const editing = this.editingDocument();
    
      const articleDTO = {
        type: this.form.type,
        name: this.form.name,
        phone: this.form.phone,
        email: this.form.email,
        acronym: this.form.acronym,
        ministereId:this.form.ministereId, 
        address:this.form.address,
        website:this.form.website,
        description:this.form.description,
        domaineIds:this.form.domaineIds,
      };
      console.log(articleDTO);
    
      const formData = new FormData();
      formData.append('structure', new Blob([JSON.stringify(articleDTO)], { type: 'application/json' }));
      //formData.append('authorId', '1');
      if (this.selectedFile) formData.append('logo', this.selectedFile);
    
      
    
    
    
      const request = editing
        ? this.apiService.updatetruc(editing.id, formData)
        : this.apiService.createStruc(formData);
    
      request.subscribe({
        next: (response) => {
          //if (response.success) {
            this.loadDocuments();
            this.closeModal();
          //}
          this.saving.set(false);
          this.showNotification(editing ? "Document mis à jour avec succès" : "Document créé avec succès", 'success');
    
        },
        error: (err) => {
          console.error('Erreur lors de la sauvegarde', err);
          this.saving.set(false);
          this.showNotification("Erreur lors de la sauvegarde", 'error');
        }
      });
    }
    
 
      
    
      formatDate(dateStr: string): string { return dateStr ? new Date(dateStr).toLocaleDateString('fr-FR') : ''; }
    
      showNotification(message: string, type: 'success' | 'error' | 'info' = 'success', duration = 2000) {
      this.notification.set({ show: true, message, type });
      setTimeout(() => this.notification.update(n => ({ ...n, show: false })), duration);
    
    
    }
    
    
    // ----------------- CONFIRMATION MODAL -----------------
    confirmModal = signal<{ show: boolean; message: string; onConfirm: () => void }>({
      show: false,
      message: '',
      onConfirm: () => {}
    });
    
    openConfirmModal(message: string, onConfirm: () => void) {
      this.confirmModal.set({ show: true, message, onConfirm });
    }
    
    closeConfirmModal() {
      this.confirmModal.update(c => ({ ...c, show: false }));
    }
    
    deleteDocument(article: Structure): void {
      // Ouvre le modal au lieu de confirm()
      this.openConfirmModal(`Voulez-vous vraiment supprimer l'article "${article.name}" ?`, () => {
        this.apiService.deletetruc(article.id).subscribe({
          next: () => {
            this.loadDocuments();
            this.closeConfirmModal(); // ferme le modal après suppression
            this.showNotification('Article supprimé avec succès', 'success'); // toast succès
          },
          error: () => {
            this.showNotification("Erreur lors de la suppression", "error");
            this.closeConfirmModal();
          }
        });
      });
    }
    
    
     getImageUrl(path?: string): string | null {
         console.log(path);
        return path ? this.API_URL + path : null;
       
      }

}
