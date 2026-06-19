import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-structures',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Bannière -->
    <div class="bg-gradient-to-r from-green-700 to-green-600 py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold text-white mb-2">Structures Rattachées</h1>
        <nav class="text-green-100 text-sm">
          <a routerLink="/" class="hover:text-white">Accueil</a>
          <span class="mx-2">›</span>
          <a routerLink="/ministere/ministre" class="hover:text-white">Ministère</a>
          <span class="mx-2">›</span>
          <span class="text-white">Structures Rattachées</span>
        </nav>
      </div>
    </div>
    
    <!-- Contenu principal -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="grid gap-8">
            @for (structure of structures; track structure.acronym) {
              <div class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                <div class="p-6">
                  <div class="flex items-start gap-6">
                    <div class="w-20 h-20 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0">
                      <span class="text-white font-bold text-lg">{{ structure.acronym }}</span>
                    </div>
                    <div class="flex-1">
                      <h3 class="text-xl font-bold text-gray-800 mb-2">{{ structure.name }}</h3>
                      <p class="text-gray-600 leading-relaxed mb-4">{{ structure.description }}</p>
                      <div class="flex flex-wrap gap-4">
                        @if (structure.website) {
                          <a [href]="structure.website" target="_blank" 
                             class="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                            </svg>
                            Site web
                          </a>
                        }
                        @if (structure.phone) {
                          <a [href]="'tel:' + structure.phone" 
                             class="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            {{ structure.phone }}
                          </a>
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-6 py-4 border-t border-gray-100">
                  <div class="flex flex-wrap gap-2">
                    @for (mission of structure.missions; track mission) {
                      <span class="px-3 py-1 bg-white text-gray-600 text-sm rounded-full border border-gray-200">
                        {{ mission }}
                      </span>
                    }
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `
})
export class StructuresComponent {
  structures = [
    {
      name: 'Agence Nationale de Promotion des TIC',
      acronym: 'ANPTIC',
      description: 'L\'ANPTIC est l\'agence gouvernementale chargée de promouvoir et développer l\'utilisation des Technologies de l\'Information et de la Communication au Burkina Faso. Elle accompagne la transformation digitale de l\'administration publique et des entreprises.',
      website: 'https://www.anptic.gov.bf',
      phone: '+226 25 30 85 00',
      missions: ['E-gouvernement', 'Formation TIC', 'Infrastructure numérique', 'Innovation']
    },
    {
      name: 'Agence Nationale de Sécurité des Systèmes d\'Information',
      acronym: 'ANSSI',
      description: 'L\'ANSSI est l\'autorité nationale en matière de cybersécurité. Elle assure la protection des systèmes d\'information de l\'État et accompagne les entreprises dans la sécurisation de leurs infrastructures numériques.',
      website: 'https://www.anssi.gov.bf',
      phone: '+226 25 30 85 01',
      missions: ['Cybersécurité', 'Protection des données', 'Audit sécurité', 'Veille technologique']
    },
    {
      name: 'Autorité de Régulation des Communications Électroniques et des Postes',
      acronym: 'ARCEP',
      description: 'L\'ARCEP est l\'autorité de régulation du secteur des communications électroniques et des postes. Elle veille au respect de la concurrence et à la protection des consommateurs.',
      website: 'https://www.arcep.bf',
      phone: '+226 25 37 53 60',
      missions: ['Régulation', 'Licences', 'Protection consommateurs', 'Concurrence']
    },
    {
      name: 'Société Nationale des Postes',
      acronym: 'SONAPOST',
      description: 'La SONAPOST est l\'opérateur postal national du Burkina Faso. Elle assure les services postaux traditionnels et développe de nouveaux services adaptés aux besoins de la population.',
      website: 'https://www.sonapost.bf',
      phone: '+226 25 30 67 00',
      missions: ['Services postaux', 'Colis', 'Services financiers', 'E-commerce']
    }
  ];
}
