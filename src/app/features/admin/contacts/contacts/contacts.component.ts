import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact, ContactStatus } from '../../../../core/models';
import { ApiService } from '../../../../core/services/api.service';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

contacts = signal<Contact[]>([]);
  loading = signal(true);
  selectedContact = signal<Contact | null>(null);
  ContactStatus = ContactStatus;
  
  constructor(private apiService: ApiService) {}
  
  ngOnInit(): void { this.loadContacts(); }
  
  loadContacts(): void {
    this.apiService.getAllContacts(0, 50).subscribe({
      next: (response) => { if (response.success) this.contacts.set(response.data.content); this.loading.set(false); },
      error: () => this.loading.set(false)
    });
  }
  
  viewContact(contact: Contact): void { this.selectedContact.set(contact); }
  
  markAsRead(contact: Contact): void {
    this.apiService.updateContactStatus(contact.id, 'LU').subscribe({
      next: () => { this.loadContacts(); this.selectedContact.set(null); }
    });
  }
  
  markAsProcessed(contact: Contact): void {
    this.apiService.updateContactStatus(contact.id, 'TRAITE').subscribe({
      next: () => { this.loadContacts(); this.selectedContact.set(null); }
    });
  }
  
  deleteContact(contact: Contact): void {
    if (confirm(`Supprimer le message de "${contact.name}" ?`)) {
      this.apiService.deleteContact(contact.id).subscribe({ next: () => this.loadContacts() });
    }
  }
  
  getStatusLabel(status: string): string {
    const labels: Record<string, string> = { 'NOUVEAU': 'Nouveau', 'LU': 'Lu', 'EN_COURS': 'En cours', 'TRAITE': 'Traité' };
    return labels[status] || status;
  }
  
  getStatusBadgeClass(status: string): string {
    const classes: Record<string, string> = { 'NOUVEAU': 'badge-primary', 'LU': 'badge bg-neutral-100 text-neutral-600', 'EN_COURS': 'badge-warning', 'TRAITE': 'badge-success' };
    return classes[status] || 'badge';
  }
  
  formatDate(dateStr: string): string { return dateStr ? new Date(dateStr).toLocaleDateString('fr-FR') : ''; }
}

