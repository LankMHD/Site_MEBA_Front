import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../../core/models';
import { ApiService } from '../../../../core/services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  notification = signal<{ show: boolean; message: string; type: 'success' | 'error' | 'info' }>({
  show: false,
  message: '',
  type: 'success'
});

  users = signal<User[]>([]);
  loading = signal(true);
  showModal = signal(false);
  editingUser = signal<User | null>(null);
  saving = signal(false);

  currentPage = signal(1);
pageSize = 7; // nombre de projets par page
totalPages = signal(1);
  
  form = { firstName: '', lastName: '', username: '', email: '', password: '', role: 'ROLE_USER' };
  
  constructor(private apiService: ApiService) {}
  
  ngOnInit(): void { this.loadUsers(); }
  
  loadUsers(page: number = 0): void {
    this.apiService.getAllUsers(page, this.pageSize).subscribe({
      next: (response) => { if (response.success) {
          this.users.set(response.data.content); 
           // totalPages vient du backend
        this.totalPages.set(response.data.totalPages);

        // page backend commence à 0, UI à 1
        this.currentPage.set(page + 1);
           
        } this.loading.set(false); },
      error: () => this.loading.set(false)
    });
  }


  nextPage() {
  if (this.currentPage() < this.totalPages()) {
    this.loadUsers(this.currentPage());
  }
}

prevPage() {
  if (this.currentPage() > 1) {
    this.loadUsers(this.currentPage() - 2);
  }
}

goToPage(page: number) {
  this.loadUsers(page - 1);
}

pages(): number[] {
  return Array.from({ length: this.totalPages() }, (_, i) => i + 1);
}
  
  openModal(): void { this.form = { firstName: '', lastName: '', username: '', email: '', password: '', role: 'ROLE_USER' }; this.editingUser.set(null); this.showModal.set(true); }
  closeModal(): void { this.showModal.set(false); this.editingUser.set(null); }
  
  editUser1(user: User): void {
    this.form = { firstName: user.firstName || '', lastName: user.lastName || '', username: user.username, email: user.email, password: '', role: user.roles[0] || 'ROLE_USER' };
    this.editingUser.set(user);
    this.showModal.set(true);
  }

editUser(user: User): void {
  const role =
    Array.isArray(user.roles) && user.roles.length > 0
      ? String(user.roles[0])
      : 'ROLE_USER';

  this.form = {
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    username: user.username,
    email: user.email,
    password: '',
    role: role
  };

  this.editingUser.set(user);
  this.showModal.set(true);
}


  
  saveUser(): void {
    if (!this.form.firstName || !this.form.lastName || !this.form.username || !this.form.email) return;
    this.saving.set(true);
    const editing = this.editingUser();
    
    if (editing) {
      this.apiService.updateUser(editing.id, { firstName: this.form.firstName, lastName: this.form.lastName, email: this.form.email, roles: [this.form.role] }).subscribe({
        next: (response) => { if (response.success) { this.loadUsers(); this.closeModal(); } this.saving.set(false);  this.showNotification(  "Utilisateur mis à avec succès", 'success');
},
       error: (err) => {
          console.error('Erreur lors de la sauvegarde', err);
          this.saving.set(false);
          this.showNotification("Erreur lors de la sauvegarde", 'error');
        }
      });
    } else {
      this.apiService.createUser({ ...this.form, roles: [this.form.role] }).subscribe({
        next: (response) => { if (response.success) { this.loadUsers(); this.closeModal(); } this.saving.set(false); this.showNotification("Utilisateur mis à avec succès", 'success');},
       error: (err) => {
          console.error('Erreur lors de la sauvegarde', err);
          this.saving.set(false);
          this.showNotification("Erreur lors de la sauvegarde", 'error');
        }
      });
    }
  }
  
  toggleUserStatus(user: User): void {
    const action = user.enabled ? 'désactiver' : 'activer';
    if (confirm(`Voulez-vous ${action} l'utilisateur "${user.username}" ?`)) {
      this.apiService.toggleUserStatus(user.id).subscribe({ next: () => this.loadUsers() });
    }
  }
  
  getRoleLabel(role: string): string {
    const labels: Record<string, string> = { 'ROLE_USER': 'Utilisateur', 'ROLE_MODERATOR': 'Modérateur', 'ROLE_ADMIN': 'Admin', 'ROLE_SUPER_ADMIN': 'Super Admin' };
    return labels[role] || role;
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

  deleteUser(user: User): void {
    // Ouvre le modal au lieu de confirm()
    this.openConfirmModal(`Voulez-vous vraiment supprimer l'utilisateur "${user.username}" ?`, () => {
      this.apiService.deleteUser(user.id).subscribe({
        next: () => {
          this.loadUsers();
          this.closeConfirmModal(); // ferme le modal après suppression
          this.showNotification('Utilisateur supprimé avec succès', 'success'); // toast succès
        },
        error: () => {
          this.showNotification("Erreur lors de la suppression", "error");
          this.closeConfirmModal();
        }
      });
    });
  }

    showNotification(message: string, type: 'success' | 'error' | 'info' = 'success', duration = 2000) {
  this.notification.set({ show: true, message, type });
  setTimeout(() => this.notification.update(n => ({ ...n, show: false })), duration);


}

}
