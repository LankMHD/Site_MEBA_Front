import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-organigramme',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Bannière -->
    <div class="bg-gradient-to-r from-green-700 to-green-600 py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold text-white mb-2">Organigramme</h1>
        <nav class="text-green-100 text-sm">
          <a routerLink="/" class="hover:text-white">Accueil</a>
          <span class="mx-2">›</span>
          <a routerLink="/ministere/ministre" class="hover:text-white">Ministère</a>
          <span class="mx-2">›</span>
          <span class="text-white">Organigramme</span>
        </nav>
      </div>
    </div>
    
    <!-- Contenu principal -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <!-- Ministre -->
          <div class="flex justify-center mb-8">
            <div class="bg-green-600 text-white rounded-xl p-6 shadow-lg text-center min-w-64">
              <div class="w-20 h-20 mx-auto mb-3 rounded-full bg-white/20 flex items-center justify-center">
                <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 class="font-bold text-lg">MINISTRE</h3>
              <p class="text-green-100 text-sm">Dr Aminata ZERBO/SABANE</p>
            </div>
          </div>
          
          <!-- Ligne de connexion -->
          <div class="flex justify-center mb-8">
            <div class="w-px h-12 bg-gray-300"></div>
          </div>
          
          <!-- Cabinet -->
          <div class="flex justify-center mb-8">
            <div class="bg-yellow-500 text-white rounded-xl p-5 shadow-lg text-center min-w-56">
              <h3 class="font-bold">CABINET</h3>
              <p class="text-yellow-100 text-sm">Directeur de Cabinet</p>
            </div>
          </div>
          
          <!-- Ligne de connexion -->
          <div class="flex justify-center mb-8">
            <div class="w-px h-12 bg-gray-300"></div>
          </div>
          
          <!-- Secrétariat Général -->
          <div class="flex justify-center mb-8">
            <div class="bg-red-600 text-white rounded-xl p-5 shadow-lg text-center min-w-56">
              <h3 class="font-bold">SECRÉTARIAT GÉNÉRAL</h3>
              <p class="text-red-100 text-sm">Secrétaire Général</p>
            </div>
          </div>
          
          <!-- Ligne de connexion horizontale -->
          <div class="flex justify-center mb-8">
            <div class="w-3/4 h-px bg-gray-300 relative">
              <div class="absolute left-0 top-0 w-px h-8 bg-gray-300"></div>
              <div class="absolute left-1/4 top-0 w-px h-8 bg-gray-300"></div>
              <div class="absolute left-1/2 top-0 w-px h-8 bg-gray-300 -translate-x-1/2"></div>
              <div class="absolute left-3/4 top-0 w-px h-8 bg-gray-300"></div>
              <div class="absolute right-0 top-0 w-px h-8 bg-gray-300"></div>
            </div>
          </div>
          
          <!-- Directions -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            @for (direction of directions; track direction.name) {
              <div class="bg-white rounded-xl p-4 shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-green-100 flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
                <h4 class="font-semibold text-gray-800 text-sm">{{ direction.name }}</h4>
                <p class="text-gray-500 text-xs mt-1">{{ direction.acronym }}</p>
              </div>
            }
          </div>
          
          <!-- Structures rattachées -->
          <div class="mt-12">
            <div class="flex items-center gap-2 mb-6">
              <div class="w-1 h-8 bg-green-600 rounded"></div>
              <h2 class="text-xl font-bold text-gray-800">Structures Rattachées</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              @for (structure of structures; track structure.name) {
                <div class="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                      <svg class="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-800 text-sm">{{ structure.name }}</h4>
                      <p class="text-gray-500 text-xs">{{ structure.acronym }}</p>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class OrganigrammeComponent {
  directions = [
    { name: 'Direction Générale de la Transition Digitale', acronym: 'DGTD' },
    { name: 'Direction Générale des Communications Électroniques', acronym: 'DGCE' },
    { name: 'Direction Générale de la Poste', acronym: 'DGP' },
    { name: 'Direction des Affaires Juridiques', acronym: 'DAJ' },
    { name: 'Direction des Ressources Humaines', acronym: 'DRH' },
    { name: 'Direction de l\'Administration et des Finances', acronym: 'DAF' },
    { name: 'Direction des Études et de la Planification', acronym: 'DEP' },
    { name: 'Direction de la Communication', acronym: 'DCOM' },
    { name: 'Direction des Marchés Publics', acronym: 'DMP' },
    { name: 'Direction des Archives et de la Documentation', acronym: 'DAD' }
  ];
  
  structures = [
    { name: 'Agence Nationale de Promotion des TIC', acronym: 'ANPTIC' },
    { name: 'Agence Nationale de Sécurité des Systèmes d\'Information', acronym: 'ANSSI' },
    { name: 'Autorité de Régulation des Communications Électroniques', acronym: 'ARCEP' },
    { name: 'Société Nationale des Postes', acronym: 'SONAPOST' }
  ];
}
