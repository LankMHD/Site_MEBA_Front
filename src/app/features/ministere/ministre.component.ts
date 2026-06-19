import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ministre',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Bannière -->
    <div class="bg-gradient-to-r from-green-700 to-green-600 py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold text-white mb-2">Ministre</h1>
        <nav class="text-green-100 text-sm">
          <a routerLink="/" class="hover:text-white">Accueil</a>
          <span class="mx-2">›</span>
          <a routerLink="/ministere/ministre" class="hover:text-white">Ministère</a>
          <span class="mx-2">›</span>
          <span class="text-white">Ministre</span>
        </nav>
      </div>
    </div>
    
    <!-- Contenu principal -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Colonne gauche - Photo et infos -->
          <div class="bg-gradient-to-b from-green-50 to-white rounded-2xl p-6 shadow-lg border border-green-100">
            <div class="text-center mb-6">
              <span class="inline-block px-4 py-1 bg-green-600 text-white text-sm font-medium rounded-full mb-4">
                LA MINISTRE
              </span>
              <h2 class="text-2xl font-bold text-gray-800">Aminata ZERBO/SABANE</h2>
            </div>
            
            <div class="relative mb-6">
              <div class="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-green-500 shadow-xl">
                <img src="assets/images/ministre.jpg" alt="Dr Aminata ZERBO/SABANE" 
                     class="w-full h-full object-cover"
                     onerror="this.src='https://ui-avatars.com/api/?name=Aminata+ZERBO&background=009E49&color=fff&size=200'">
              </div>
            </div>
            
            <div class="space-y-3 text-sm">
              <div class="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                <div>
                  <span class="text-gray-500">Nom :</span>
                  <span class="font-medium text-gray-800 ml-1">ZERBO/SABANE</span>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div>
                  <span class="text-gray-500">Prénom :</span>
                  <span class="font-medium text-gray-800 ml-1">Aminata</span>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
                <div>
                  <span class="text-gray-500">Situation de famille :</span>
                  <span class="font-medium text-gray-800 ml-1">Mariée</span>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <div>
                  <span class="text-gray-500">Profession :</span>
                  <span class="font-medium text-gray-800 ml-1">Enseignante en Informatique</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Colonne droite - Description -->
          <div class="md:col-span-2">
            <!-- Section Le Ministère -->
            <div class="mb-8">
              <div class="flex items-center gap-2 mb-4">
                <div class="w-1 h-8 bg-green-600 rounded"></div>
                <h3 class="text-xl font-bold text-gray-800">LE MINISTÈRE</h3>
                <div class="flex-1 h-px bg-gray-200 ml-4"></div>
              </div>
              <div class="prose prose-gray max-w-none">
                <p class="text-gray-600 leading-relaxed">
                  Le Ministère de la Transition Digitale, des Postes et des Communications Électroniques assure la mise en œuvre et le suivi de la politique du gouvernement en matière de développement de l'économie numérique, des postes et de la transformation digitale. À ce titre et en relation avec les départements ministériels compétents, il est chargé entre autres du développement des infrastructures des communications électroniques, de l'accompagnement, de la promotion des usages des TIC, du développement des services en ligne et des contenus locaux, du développement d'une industrie locale basée sur les TIC, ainsi que du développement du secteur postal.
                </p>
                <p class="text-gray-600 leading-relaxed mt-4">
                  Le Ministère de la Transition Digitale, des Postes et des Communications Électroniques est dirigé par Madame Aminata ZERBO/SABANE.
                </p>
              </div>
            </div>
            
            <!-- Section Biographie -->
            <div>
              <div class="flex items-center gap-2 mb-4">
                <div class="w-1 h-8 bg-yellow-500 rounded"></div>
                <h3 class="text-xl font-bold text-gray-800">BIOGRAPHIE</h3>
                <div class="flex-1 h-px bg-gray-200 ml-4"></div>
              </div>
              <div class="prose prose-gray max-w-none space-y-4">
                <p class="text-gray-600 leading-relaxed">
                  Après avoir obtenu son Baccalauréat Série Scientifique (Bac E) en 2000 au Lycée Technique d'Abidjan (Côte d'Ivoire), Madame Aminata ZERBO/SABANE a poursuivi ses études à l'École Supérieure d'Informatique (Burkina Faso) où elle obtient son Diplôme d'Ingénieur de Travaux Informatique / Option Analyste Programmeur en 2003, puis le Diplôme d'Ingénieur de Conception Informatique en 2006.
                </p>
                <p class="text-gray-600 leading-relaxed">
                  Après une brève escale professionnelle, Madame ZERBO/SABANE reprend le chemin de la formation après avoir obtenu une inscription à l'École Polytechnique de Montréal au Canada d'où elle décrochera un PhD en Génie Informatique en 2015.
                </p>
                <p class="text-gray-600 leading-relaxed">
                  Devenue Docteure-Ingénieure en Informatique, Madame Aminata ZERBO/SABANE est de retour au Faso où elle a intégré depuis 2017 l'Université Joseph Ki-ZERBO en tant qu'Enseignante-chercheuse en Informatique. Depuis lors, Docteure ZERBO/SABANE est fortement engagée dans la formation et l'encadrement des étudiants.
                </p>
                <p class="text-gray-600 leading-relaxed">
                  Docteure ZERBO/SABANE a une riche carrière professionnelle car ayant occupé des postes de responsabilité variés aussi bien dans l'administration publique que dans le privé.
                </p>
                <p class="text-gray-600 leading-relaxed">
                  Experte en maturation de projets d'innovation dans le numérique et de la transformation digitale, Madame Aminata ZERBO/SABANE qui vient d'être nommée Ministre de la Transition Digitale, des Postes et des Communications Électroniques n'est pas une inconnue dans l'écosystème numérique du Burkina Faso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class MinistreComponent {}
