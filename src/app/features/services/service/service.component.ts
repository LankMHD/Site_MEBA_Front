import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EService } from '../../../core/models/event.model';
import { ApiService } from '../../../core/services/api.service';
import { Service } from '../../../core/models';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  private readonly API_URL = environment.FileUrl;
  services = signal<EService[]>([]);
  filteredServices = signal<EService[]>([]);
  loading = signal(true);
  selectedCategory = 'all';
  selectedService: EService | null = null;
  categories: string[] = ['Agrément technique', 'Licences Télécom', 'Cybersécurité', 'Services Postaux'];

  //servicesAll: Service[] = [];

  servicesAll = signal<Service[]>([]);
  //loading = signal(true);
  currentPage = signal(0);
  totalPages = signal(0);
  searchQuery = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadServices();
  }


  loadService1s() {
  this.apiService.getAllServicepublic().subscribe({
    next: (res) => {
      if (res.success) {
        //this.servicesAll = res.data.content;
        console.log(this.services)
      }
    },
    error: (err) => console.error(err)
  });
 }

 loadServices(): void {
  this.loading.set(true);
  this.apiService.getAllService(this.currentPage(), 8).subscribe({
    next: (response) => {
      if (response.success) {
        this.servicesAll.set(response.data.content);
        this.totalPages.set(response.data.totalPages);
      }
      this.loading.set(false);
    },
    error: () => this.loading.set(false)
  });
}



goToPage(page: number): void {
    if (page >= 0 && page < this.totalPages()) {
      this.currentPage.set(page);
      this.loadServices();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  
  getPageNumbers(): number[] {
    const total = this.totalPages();
    const current = this.currentPage();
    const pages: number[] = [];
    
    let start = Math.max(0, current - 2);
    let end = Math.min(total - 1, current + 2);
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    return pages;
  }

   openService(url: string) {
  window.open(url, '_blank'); // ouvre l'URL dans un nouvel onglet
}


    getImageUrl(path?: string): string | null {
     console.log(path);
    return path ? this.API_URL + path : null;
   
  }




  showServiceDetails(service: EService) {
    this.selectedService = service;
  }

  closeModal() {
    this.selectedService = null;
  }

}
