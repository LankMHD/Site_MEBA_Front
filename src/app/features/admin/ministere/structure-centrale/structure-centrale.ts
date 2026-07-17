import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { ApiService } from '../../../../core/services/api.service';
import { StructureCentrale } from '../../../../core/models/event.model';


@Component({
  selector: 'app-structures-centrales',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './structure-centrale.html',
  styleUrls: ['./structure-centrale.scss']
})
export class StructuresCentralesComponent {


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
      .getAllStructuresCentrales(page,this.pageSize)
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


  onFileSelected(event:Event){

    const input =
      event.target as HTMLInputElement;


    if(!input.files || input.files.length===0){

      this.selectedImage=null;

      return;

    }


    const file=input.files[0];


    if(!file.type.startsWith('image/')){


      this.showNotification(
        "Veuillez sélectionner une image",
        "error"
      );


      input.value='';

      return;

    }


    this.selectedImage=file;

    this.fileError=false;

  }





  // ===============================
  // SAVE
  // ===============================


  saveStructure(form?:NgForm){


    if(!this.form.nom){

      return;

    }


    this.saving.set(true);



    const dto={

      sigle:this.form.sigle,

      nom:this.form.nom,

      description:this.form.description,

      datePublication:this.form.datePublication

    };



    const formData=new FormData();


    formData.append(
      'structure',
      new Blob(
        [JSON.stringify(dto)],
        {
          type:'application/json'
        }
      )
    );



    if(this.selectedImage){

      formData.append(
        'file',
        this.selectedImage
      );

    }



    const editing =
      this.editingStructure();



    const request = editing

      ? this.apiService.updateStructureCentrale(
          editing.id!,
          formData
        )

      : this.apiService.createStructureCentrale(
          formData
        );




    request.subscribe({

      next:()=>{


        this.loadStructures();

        this.closeModal(form);

        this.saving.set(false);


        this.showNotification(
          editing
          ? "Structure centrale modifiée avec succès"
          : "Structure centrale ajoutée avec succès",
          "success"
        );


      },


      error:()=>{


        this.saving.set(false);


        this.showNotification(
          "Erreur lors de l'enregistrement",
          "error"
        );


      }

    });



  }





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
export type { StructureCentrale };

