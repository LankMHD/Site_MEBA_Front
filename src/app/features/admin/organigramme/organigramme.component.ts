import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { Ministere, Organigramme, StructureType } from '../../../core/models/event.model';
import { MinistereService } from '../../../core/services/ministere.service';
import { ApiService } from '../../../core/services/api.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-organigramme',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './organigramme.component.html',
  styleUrls: ['./organigramme.component.scss']
})
export class OrganigrammeComponent {


    private readonly API_URL = environment.FileUrl;
  notification = signal<{ show: boolean; message: string; type: 'success' | 'error' | 'info' }>({
  show: false,
  message: '',
  type: 'success'
});



projects = signal<Ministere[]>([]);
  documents = signal<Organigramme[]>([]);
  loading = signal(true);
  showModal = signal(false);
  editingDocument = signal<Organigramme | null>(null);
  saving = signal(false);
  selectedImage: File | null = null;
  selectedFile: File | null = null;
  currentPage = signal(1);
pageSize = 7; // nombre de projets par page
totalPages = signal(1);



form: {   
  title: string;
  phone: string;
  name: string;
  acronym: string;
  structureType: string;
  ministereName: string;
  ministereId: number;
  

  niveau: string,
  
  
  email: string;
    } = {
      title: '',
      phone: '',
      name: '',
      acronym: '',
      ministereName: '',
      niveau: '',
      structureType: '',
      ministereId: 0, email: ''
     
    };


    constructor(private apiService: MinistereService, private minService: ApiService) {}




    ngOnInit(): void { this.loadDocuments(); this.loadProjects()}
      
      loadDocuments(page: number = 0): void {
        this.loading.set(true);
        this.apiService.getAllOrg(page, this.pageSize).subscribe({
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
            title: '',
      phone: '',
      name: '',
      acronym: '',
      ministereName: '',
      niveau: '',
      structureType: '',
      ministereId: 0, email: ''
         };
           this.selectedFile = null;
       
          this.editingDocument.set(null); 
          this.showModal.set(true);
        }
      
      openModal1(): void { this.form = { title: '',
      phone: '',
      name: '',
      acronym: '',
      ministereName: '',
      niveau: '',
      structureType: '',
      ministereId: 0, email: '' }; this.editingDocument.set(null); this.showModal.set(true); }
      closeModal(): void { this.showModal.set(false); this.editingDocument.set(null); }
      
      editDocument1(doc: Organigramme): void {
        this.form = { title: doc.title, name: doc.name , ministereId:doc.ministereId, ministereName:doc.ministereName,
           phone: doc.phone, acronym:doc.acronym, niveau: doc.niveau,email: doc.email,structureType: doc.structureType };
        this.editingDocument.set(doc);
        this.showModal.set(true);
      }
    
        editDocument(doc: Organigramme): void {
          this.form = { title: doc.title, name: doc.name , ministereId:doc.ministereId, ministereName:doc.ministereName,
           phone: doc.phone, acronym:doc.acronym, niveau: doc.niveau,email: doc.email,structureType: doc.structureType };
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
      if (!this.form.title) return;
      const selectedType = this.projects().find(t => t.id == this.form.ministereId);
    
      const typeName = selectedType?.nomGeneral;
    
      this.saving.set(true);
      const editing = this.editingDocument();
    
      const articleDTO = {
        title: this.form.title,
        name: this.form.name,
        phone: this.form.phone,
        email: this.form.email,
        acronym: this.form.acronym,
        ministereId:this.form.ministereId, ministereName:typeName,
        niveau:this.form.niveau,
        structureType: this.form.structureType
      };
      console.log(articleDTO);
    
      const formData = new FormData();
      formData.append('structure', new Blob([JSON.stringify(articleDTO)], { type: 'application/json' }));
      formData.append('authorId', '1');
      if (this.selectedFile) formData.append('photo', this.selectedFile);
    
      
    
    
    
      const request = editing
        ? this.apiService.updateOrg(editing.id, formData)
        : this.apiService.createOrg(formData);
    
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
    
    deleteDocument(article: Organigramme): void {
      // Ouvre le modal au lieu de confirm()
      this.openConfirmModal(`Voulez-vous vraiment supprimer l'article "${article.title}" ?`, () => {
        this.apiService.deleteOrg(article.id).subscribe({
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
