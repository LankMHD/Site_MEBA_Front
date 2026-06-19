import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from '../../../../core/services/api.service';
import { FormsModule } from '@angular/forms';
import { Document, DocumentCategory, DocumentType, TypeDocument } from '../../../../core/models';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent {

  private readonly API_URL = environment.FileUrl;
  notification = signal<{ show: boolean; message: string; type: 'success' | 'error' | 'info' }>({
  show: false,
  message: '',
  type: 'success'
});

projects = signal<TypeDocument[]>([]);
  documents = signal<Document[]>([]);
  loading = signal(true);
  showModal = signal(false);
  editingDocument = signal<Document | null>(null);
  saving = signal(false);
  selectedImage: File | null = null;
  selectedFile: File | null = null;
  currentPage = signal(1);
pageSize = 7; // nombre de projets par page
totalPages = signal(1);

  form: { title: string; description: string; typeId: number; typeName: string;  category: DocumentCategory; typeDocument: DocumentType;  isPublic: boolean } = {
      title: '',
      description: '',
     
      category: DocumentCategory.RAPPORT,
      
      isPublic: true,
      typeDocument: DocumentType.DOCUMENT,
      typeId: 0, typeName: ''
     
    };
  
  //form: { title: string; description: string; category: DocumentCategory; fileUrl: string; isPublic: boolean } = { title: '', description: '', category: DocumentCategory.RAPPORT, fileUrl: '', isPublic: true };
  
  constructor(private apiService: ApiService) {}
  
  ngOnInit(): void { this.loadDocuments(); this.loadProjects()}
  
  loadDocuments(page: number = 0): void {
    this.loading.set(true);
    this.apiService.getAllDocuments(page, this.pageSize).subscribe({
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
        description: '', 
        category: DocumentCategory.RAPPORT, 
        typeDocument: DocumentType.DOCUMENT, 
        isPublic: true,
      typeId:0, typeName:''
     };
       this.selectedFile = null;
   
      this.editingDocument.set(null); 
      this.showModal.set(true);
    }
  
  openModal1(): void { this.form = { title: '', typeId:0, typeName:'' ,description: '', typeDocument: DocumentType.DOCUMENT, category: DocumentCategory.RAPPORT, isPublic: true }; this.editingDocument.set(null); this.showModal.set(true); }
  closeModal(): void { this.showModal.set(false); this.editingDocument.set(null); }
  
  editDocument1(doc: Document): void {
    this.form = { title: doc.title, description: doc.description || '', typeId:doc.typeId, typeName:doc.typeName, category: doc.category, typeDocument:doc.typeDocument, isPublic: doc.isPublic };
    this.editingDocument.set(doc);
    this.showModal.set(true);
  }

    editDocument(doc: Document): void {
      this.form = {
        title: doc.title,
        description: doc.description || '',
        
        typeId:doc.typeId, typeName:doc.typeName, category: doc.category, typeDocument:doc.typeDocument,
        
       isPublic: doc.isPublic
      };
      this.editingDocument.set(doc);
    this.showModal.set(true);
    }
   
    
loadProjects(): void {
  

  this.apiService.getAllTypes().subscribe({
    next: (response) => {
      console.log("RESPONSE =", response); // 👈 ici le tableau

      this.projects.set(response); // ✅ DIRECTEMENT
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
  if (file.type !== 'application/pdf') {
    alert('Veuillez sélectionner un fichier PDF');
    input.value = '';
    this.selectedFile = null;
    return;
  }
  this.selectedFile = file;
}
  
  saveDocument(): void {
  if (!this.form.title) return;
  const selectedType = this.projects().find(t => t.id == this.form.typeId);

  const typeName = selectedType?.name;

  this.saving.set(true);
  const editing = this.editingDocument();

  const articleDTO = {
    title: this.form.title,
    description: this.form.description,
    
    category: this.form.category,
    typeDocument: this.form.typeDocument,
    typeId:this.form.typeId, typeName:typeName,
    
    isPublic: this.form.isPublic
  };
  console.log(articleDTO);

  const formData = new FormData();
  formData.append('document', new Blob([JSON.stringify(articleDTO)], { type: 'application/json' }));
  //formData.append('authorId', '1');
  if (this.selectedFile) formData.append('file', this.selectedFile);

  



  const request = editing
    ? this.apiService.updateDocument(editing.id, formData)
    : this.apiService.createDocument(formData);

  request.subscribe({
    next: (response) => {
      if (response.success) {
        this.loadDocuments();
        this.closeModal();
      }
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

  
  deleteDocument1(doc: Document): void {
    if (confirm(`Supprimer le document "${doc.title}" ?`)) {
      this.apiService.deleteDocument(doc.id).subscribe({ next: () => this.loadDocuments() });
    }
  }
  
  getCategoryLabel(category: string): string {
    const labels: Record<string, string> = { 'RAPPORT': 'Rapport', 'LOI': 'Loi', 'DECRET': 'Décret', 'ARRETE': 'Arrêté', 'CIRCULAIRE': 'Circulaire', 'FORMULAIRE': 'Formulaire', 'GUIDE': 'Guide', 'AUTRE': 'Autre' };
    return labels[category] || category;
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

deleteDocument(article: Document): void {
  // Ouvre le modal au lieu de confirm()
  this.openConfirmModal(`Voulez-vous vraiment supprimer l'article "${article.title}" ?`, () => {
    this.apiService.deleteDocument(article.id).subscribe({
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
