import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardStats } from '../../../../core/models';
import { ApiService } from '../../../../core/services/api.service';

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent {
  stats = signal<DashboardStats | null>(null);
  loading = signal(true);
  
  constructor(private apiService: ApiService) {}
  
  ngOnInit(): void {
    this.loadStats();
  }
  
  loadStats(): void {
    this.apiService.getDashboardStats().subscribe({
      next: (response) => {
        if (response.success) {
          this.stats.set(response.data);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

}
