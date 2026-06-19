import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../core/services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    form = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };
  
  loading = signal(false);
  success = signal(false);
  error = signal('');
  
  constructor(private apiService: ApiService) {}
  
  onSubmit(): void {
    if (!this.form.name || !this.form.email || !this.form.subject || !this.form.message) {
      this.error.set('Veuillez remplir tous les champs obligatoires');
      return;
    }
    
    this.loading.set(true);
    this.error.set('');
    this.success.set(false);
    
    this.apiService.submitContact(this.form).subscribe({
      next: (response) => {
        if (response.success) {
          this.success.set(true);
          this.form = { name: '', email: '', phone: '', subject: '', message: '' };
        } else {
          this.error.set(response.message || 'Une erreur est survenue');
        }
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.error?.message || 'Une erreur est survenue lors de l\'envoi');
        this.loading.set(false);
      }
    });
  }

}
