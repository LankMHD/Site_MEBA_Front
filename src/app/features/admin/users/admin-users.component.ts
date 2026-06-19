import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';
import { User } from '../../../core/models';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="space-y-6">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 class="text-2xl font-bold text-neutral-900">Utilisateurs</h1>
          <p class="text-neutral-500">Gérez les comptes utilisateurs</p>
        </div>
        <button (click)="openModal()" class="btn-primary">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Nouvel utilisateur
        </button>
      </div>
      
      <div class="card p-0">
        @if (loading()) {
          <div class="p-8 text-center"><div class="spinner w-8 h-8 mx-auto"></div></div>
        } @else if (users().length === 0) {
          <div class="p-8 text-center">
            <svg class="w-12 h-12 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
            <p class="text-neutral-500">Aucun utilisateur</p>
          </div>
        } @else {
          <div class="table-container">
            <table class="table">
              <thead>
                <tr>
                  <th>Utilisateur</th>
                  <th>Email</th>
                  <th>Rôles</th>
                  <th>Statut</th>
                  <th class="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                @for (user of users(); track user.id) {
                  <tr>
                    <td>
                      <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                          <span class="text-primary-600 font-medium">{{ user.firstName?.charAt(0) || 'U' }}</span>
                        </div>
                        <div>
                          <p class="font-medium text-neutral-900">{{ user.firstName }} {{ user.lastName }}</p>
                          <p class="text-xs text-neutral-400">{{ user.username }}</p>
                        </div>
                      </div>
                    </td>
                    <td class="text-sm text-neutral-600">{{ user.email }}</td>
                    <td>
                      @for (role of user.roles; track role) {
                        <span class="badge-primary mr-1">{{ getRoleLabel(role) }}</span>
                      }
                    </td>
                    <td>
                      @if (user.active) {
                        <span class="badge-success">Actif</span>
                      } @else {
                        <span class="badge bg-neutral-100 text-neutral-600">Inactif</span>
                      }
                    </td>
                    <td class="text-right">
                      <div class="flex justify-end gap-2">
                        <button (click)="editUser(user)" class="btn-ghost p-2" title="Modifier">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                          </svg>
                        </button>
                        <button (click)="toggleUserStatus(user)" class="btn-ghost p-2" [title]="user.active ? 'Désactiver' : 'Activer'">
                          @if (user.active) {
                            <svg class="w-4 h-4 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                            </svg>
                          } @else {
                            <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                          }
                        </button>
                      </div>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }
      </div>
      
      @if (showModal()) {
        <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div class="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div class="p-6 border-b border-neutral-200">
              <h2 class="text-xl font-semibold text-neutral-900">{{ editingUser() ? 'Modifier l\\'utilisateur' : 'Nouvel utilisateur' }}</h2>
            </div>
            <form (ngSubmit)="saveUser()" class="p-6 space-y-5">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="label">Prénom <span class="text-secondary-500">*</span></label>
                  <input type="text" [(ngModel)]="form.firstName" name="firstName" class="input" required>
                </div>
                <div>
                  <label class="label">Nom <span class="text-secondary-500">*</span></label>
                  <input type="text" [(ngModel)]="form.lastName" name="lastName" class="input" required>
                </div>
              </div>
              <div>
                <label class="label">Nom d'utilisateur <span class="text-secondary-500">*</span></label>
                <input type="text" [(ngModel)]="form.username" name="username" class="input" required [disabled]="!!editingUser()">
              </div>
              <div>
                <label class="label">Email <span class="text-secondary-500">*</span></label>
                <input type="email" [(ngModel)]="form.email" name="email" class="input" required>
              </div>
              @if (!editingUser()) {
                <div>
                  <label class="label">Mot de passe <span class="text-secondary-500">*</span></label>
                  <input type="password" [(ngModel)]="form.password" name="password" class="input" required>
                </div>
              }
              <div>
                <label class="label">Rôle</label>
                <select [(ngModel)]="form.role" name="role" class="input">
                  <option value="ROLE_USER">Utilisateur</option>
                  <option value="ROLE_MODERATOR">Modérateur</option>
                  <option value="ROLE_ADMIN">Administrateur</option>
                </select>
              </div>
              <div class="flex justify-end gap-3 pt-4 border-t border-neutral-200">
                <button type="button" (click)="closeModal()" class="btn-ghost">Annuler</button>
                <button type="submit" [disabled]="saving()" class="btn-primary">
                  @if (saving()) { <div class="spinner w-4 h-4 mr-2"></div> }
                  {{ editingUser() ? 'Mettre à jour' : 'Créer' }}
                </button>
              </div>
            </form>
          </div>
        </div>
      }
    </div>
  `
})
export class AdminUsersComponent implements OnInit {
  users = signal<User[]>([]);
  loading = signal(true);
  showModal = signal(false);
  editingUser = signal<User | null>(null);
  saving = signal(false);
  
  form = { firstName: '', lastName: '', username: '', email: '', password: '', role: 'ROLE_USER' };
  
  constructor(private apiService: ApiService) {}
  
  ngOnInit(): void { this.loadUsers(); }
  
  loadUsers(): void {
    this.apiService.getAllUsers(0, 50).subscribe({
      next: (response) => { if (response.success) this.users.set(response.data.content); this.loading.set(false); },
      error: () => this.loading.set(false)
    });
  }
  
  openModal(): void { this.form = { firstName: '', lastName: '', username: '', email: '', password: '', role: 'ROLE_USER' }; this.editingUser.set(null); this.showModal.set(true); }
  closeModal(): void { this.showModal.set(false); this.editingUser.set(null); }
  
  editUser(user: User): void {
    this.form = { firstName: user.firstName || '', lastName: user.lastName || '', username: user.username, email: user.email, password: '', role: user.roles[0] || 'ROLE_USER' };
    this.editingUser.set(user);
    this.showModal.set(true);
  }
  
  saveUser(): void {
    if (!this.form.firstName || !this.form.lastName || !this.form.username || !this.form.email) return;
    this.saving.set(true);
    const editing = this.editingUser();
    
    if (editing) {
      this.apiService.updateUser(editing.id, { firstName: this.form.firstName, lastName: this.form.lastName, email: this.form.email, roles: [this.form.role] }).subscribe({
        next: (response) => { if (response.success) { this.loadUsers(); this.closeModal(); } this.saving.set(false); },
        error: () => this.saving.set(false)
      });
    } else {
      this.apiService.createUser({ ...this.form, roles: [this.form.role] }).subscribe({
        next: (response) => { if (response.success) { this.loadUsers(); this.closeModal(); } this.saving.set(false); },
        error: () => this.saving.set(false)
      });
    }
  }
  
  toggleUserStatus(user: User): void {
    const action = user.active ? 'désactiver' : 'activer';
    if (confirm(`Voulez-vous ${action} l'utilisateur "${user.username}" ?`)) {
      this.apiService.toggleUserStatus(user.id).subscribe({ next: () => this.loadUsers() });
    }
  }
  
  getRoleLabel(role: string): string {
    const labels: Record<string, string> = { 'ROLE_USER': 'Utilisateur', 'ROLE_MODERATOR': 'Modérateur', 'ROLE_ADMIN': 'Admin', 'ROLE_SUPER_ADMIN': 'Super Admin' };
    return labels[role] || role;
  }
}
