import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { ApiService } from '../../../core/services/api.service';
import { StructureCentrale } from '../../../core/models/event.model';


@Component({
  selector: 'app-structure-centrale',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './structure-centrale.html',
  styleUrls: ['./structure-centrale.scss']
})
export class StructureCentraleComponent {


  // ===============================
  // NOTIFICATION
  // ===============================

  notification = signal<{
    show:boolean;
    message:string;
    type:'success'|'error'|'info'
  }>({
    show:false,
    message:'',
    type:'success'
  });



  // ===============================
  // CONFIRMATION
  // ===============================

  confirmModal = signal<{
    show:boolean;
    message:string;
    onConfirm:()=>void
  }>({
    show:false,
    message:'',
    onConfirm:()=>{}
  });



  // ===============================
  // DATA
  // ===============================

  structures = signal<StructureCentrale[]>([]);

  loading = signal(true);

  saving = signal(false);


  showModal = signal(false);


  editingStructure = signal<StructureCentrale | null>(null);



  selectedImage: File | null = null;


  fileError = false;



  // ===============================
  // PAGINATION
  // ===============================

  currentPage = signal(1);

  pageSize = 10;

  totalPages = signal(1);



  // ===============================
  // FORMULAIRE
  // ===============================


  form = {
    sigle:'',
    nom:'',
    description:'',
    datePublication:''
  };



  constructor(
    private apiService: ApiService,
    private router: Router
  ){}



  ngOnInit(): void {

    this.loadStructures();

  }




  // ===============================
  // CHARGEMENT
  // ===============================


  loadStructures(page:number = 0):void {


    this.loading.set(true);


    this.apiService
      .getAllStructureCentrale(page,this.pageSize)
      .subscribe({

        next:(response)=>{


          if(response.success){

            this.structures.set(
              response.data.content
            );


            this.totalPages.set(
              response.data.totalPages
            );


            this.currentPage.set(page + 1);

          }


          this.loading.set(false);

        },


        error:()=>{

          this.loading.set(false);

        }

      });

  }




  nextPage(){

    if(this.currentPage() < this.totalPages()){

      this.loadStructures(this.currentPage());

    }

  }



  prevPage(){

    if(this.currentPage()>1){

      this.loadStructures(this.currentPage()-2);

    }

  }



  goToPage(page:number){

    this.loadStructures(page-1);

  }



  pages():number[]{

    return Array.from(
      {length:this.totalPages()},
      (_,i)=>i+1
    );

  }




  // ===============================
  // MODAL
  // ===============================


  openModal(){

    this.form={
      sigle:'',
      nom:'',
      description:'',
      datePublication:''
    };


    this.selectedImage=null;

    this.fileError=false;

    this.editingStructure.set(null);

    this.showModal.set(true);

  }




  closeModal(form?:NgForm){

    this.showModal.set(false);

    this.editingStructure.set(null);

    this.selectedImage=null;

    this.fileError=false;

    form?.resetForm();

  }




  editStructure(structure:StructureCentrale){


    this.form={

      sigle:structure.sigle,

      nom:structure.nom,

      description:structure.description || '',

      datePublication:
        structure.datePublication || ''

    };


    this.editingStructure.set(structure);

    this.showModal.set(true);


  }





  // ===============================
  // IMAGE
  // ===============================


  onPhotoSelected(event: Event): void {

  const input = event.target as HTMLInputElement;

  if (!input.files || input.files.length === 0) {
    this.selectedImage = null;
    return;
  }

  const file = input.files[0];

  if (!file.type.startsWith('image/')) {

    this.showNotification(
      'Veuillez sélectionner une image',
      'error'
    );

    input.value = '';
    this.selectedImage = null;
    return;
  }

  this.selectedImage = file;
}





  // ===============================
  // SAVE
  // ===============================


  saveStructure(form?: NgForm): void {

  if (!this.form.sigle || !this.form.nom) {
    this.showNotification(
      'Le sigle et le nom sont obligatoires',
      'error'
    );
    return;
  }

  this.saving.set(true);

  const formData = new FormData();

  //  Les noms doivent correspondre exactement au backend
  formData.append('sigle', this.form.sigle.trim());

  formData.append('nom', this.form.nom.trim());

  formData.append(
    'description',
    this.form.description?.trim() || ''
  );

  if (this.form.datePublication) {
    formData.append(
      'datePublication',
      this.form.datePublication
    );
  }

  if (this.selectedImage) {
    formData.append(
      'photo',
      this.selectedImage
    );
  }

  const editing = this.editingStructure();

  const request = editing
    ? this.apiService.updateStructureCentrale(
        editing.id!,
        formData
      )
    : this.apiService.createStructureCentrale(
        formData
      );

    request.subscribe({

    next: (response) => {

      this.saving.set(false);

      this.loadStructures();

      this.closeModal(form);

      this.showNotification(
        editing
          ? 'Structure centrale modifiée avec succès'
          : 'Structure centrale ajoutée avec succès',
        'success'
      );
    },

    error: (error) => {

      console.error('========== ERREUR STRUCTURE CENTRALE ==========');
      console.error('Status HTTP :', error.status);
      console.error('Erreur complète :', error);
      console.error('Réponse backend :', error.error);
      console.error('Message backend :', error.error?.message);
      console.error('==============================================');

      this.saving.set(false);

      this.showNotification(
        error.error?.message ||
        'Erreur lors de l’enregistrement',
        'error'
      );
    }

  }); // fermeture de subscribe

} // fermeture de saveStructure()



  // ===============================
  // DELETE
  // ===============================


  deleteStructure(structure:StructureCentrale){


    this.openConfirmModal(

      `Voulez-vous supprimer "${structure.nom}" ?`,

      ()=>{


        this.apiService
          .deleteStructureCentrale(structure.id!)
          .subscribe({

            next:()=>{


              this.loadStructures();


              this.closeConfirmModal();


              this.showNotification(
                "Structure supprimée avec succès",
                "success"
              );


            },


            error:()=>{


              this.showNotification(
                "Erreur suppression",
                "error"
              );


            }

          });


      }

    );


  }





  // ===============================
  // NOTIFICATION
  // ===============================


  showNotification(
    message:string,
    type:'success'|'error'|'info'='success'
  ){


    this.notification.set({

      show:true,

      message,

      type

    });


    setTimeout(()=>{

      this.notification.update(
        n=>({...n,show:false})
      );


    },2000);


  }





  // ===============================
  // CONFIRMATION
  // ===============================


  openConfirmModal(
    message:string,
    onConfirm:()=>void
  ){

    this.confirmModal.set({

      show:true,

      message,

      onConfirm

    });

  }



  closeConfirmModal(){

    this.confirmModal.update(
      c=>({
        ...c,
        show:false
      })
    );

  }



  formatDate(date:string){

    if(!date)return '';

    return new Date(date)
      .toLocaleDateString('fr-FR');

  }



  trackByStructureId(
    index:number,
    item:StructureCentrale
  ){

    return item.id;

  }



}


