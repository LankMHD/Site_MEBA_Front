import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-missions',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Bannière -->
    <div class="bg-gradient-to-r from-green-700 to-green-600 py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold text-white mb-2">Missions</h1>
        <nav class="text-green-100 text-sm">
          <a routerLink="/" class="hover:text-white">Accueil</a>
          <span class="mx-2">›</span>
          <a routerLink="/ministere/ministre" class="hover:text-white">Ministère</a>
          <span class="mx-2">›</span>
          <span class="text-white">Missions</span>
        </nav>
      </div>
    </div>
    
    <!-- Contenu principal -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <!-- Introduction -->
          <div class="mb-10">
            <div class="flex items-center gap-2 mb-4">
              <div class="w-1 h-8 bg-green-600 rounded"></div>
              <h2 class="text-2xl font-bold text-gray-800">Nos Missions</h2>
            </div>
            <p class="text-gray-600 leading-relaxed">
              Le Ministère de la Transition Digitale, des Postes et des Communications Électroniques assure la mise en œuvre et le suivi de la politique du gouvernement en matière de développement de l'économie numérique, des postes et de la transformation digitale.
            </p>
          </div>
          
          <!-- Liste des missions -->
          <div class="grid gap-6">
            @for (mission of missions; track mission.title) {
              <div class="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="mission.icon"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ mission.title }}</h3>
                    <p class="text-gray-600 leading-relaxed">{{ mission.description }}</p>
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
export class MissionsComponent {
  missions = [
    {
      title: 'Développement des infrastructures des communications électroniques',
      description: 'Assurer le développement et la modernisation des infrastructures de télécommunications sur l\'ensemble du territoire national pour garantir une connectivité optimale.',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
    },
    {
      title: 'Accompagnement et promotion des usages des TIC',
      description: 'Promouvoir l\'utilisation des technologies de l\'information et de la communication auprès des citoyens, des entreprises et des administrations publiques.',
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    },
    {
      title: 'Développement des services en ligne et des contenus locaux',
      description: 'Favoriser la création et le déploiement de services numériques adaptés aux besoins des citoyens et promouvoir les contenus locaux.',
      icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
    },
    {
      title: 'Développement d\'une industrie locale basée sur les TIC',
      description: 'Encourager et soutenir le développement d\'une industrie numérique locale créatrice d\'emplois et de valeur ajoutée.',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
    },
    {
      title: 'Développement du secteur postal',
      description: 'Moderniser et développer les services postaux pour répondre aux besoins de la population et accompagner le développement du commerce électronique.',
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    },
    {
      title: 'Transformation digitale de l\'administration',
      description: 'Accompagner la transformation digitale des administrations publiques pour améliorer l\'efficacité des services rendus aux citoyens.',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    },
    {
      title: 'Cybersécurité et protection des données',
      description: 'Assurer la sécurité des systèmes d\'information et la protection des données personnelles des citoyens.',
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
    }
  ];
}
