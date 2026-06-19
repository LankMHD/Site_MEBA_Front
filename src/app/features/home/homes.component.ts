import { Component, OnInit, OnDestroy, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { Article, Project } from '../../core/models';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section - Design soft et épuré -->
    <section class="relative bg-white py-16 md:py-24 overflow-hidden">
      <!-- Décoration subtile -->
      <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50 to-transparent"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-accent-50 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 opacity-50"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-600 text-sm font-medium rounded-full mb-6">
              <span class="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
              Ministère de la Transition Digitale
            </div>
            <h1 class="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
              Votre portail pour la 
              <span class="text-primary-500">transformation digitale</span> 
              du Burkina Faso
            </h1>
            <p class="text-lg text-slate-600 mb-8 leading-relaxed">
              Le Ministère de la Transition Digitale, des Postes et des Communications Électroniques 
              œuvre pour le développement de l'économie numérique et la modernisation des services publics.
            </p>
            <div class="flex flex-wrap gap-4">
              <a routerLink="/actualites" class="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors shadow-sm">
                Découvrir les actualités
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
              <a routerLink="/contact" class="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors">
                Nous contacter
              </a>
            </div>
          </div>
          
          <!-- Illustration -->
          <div class="hidden lg:block">
            <div class="relative">
              <div class="w-full h-80 bg-gradient-to-br from-primary-100 to-accent-50 rounded-2xl flex items-center justify-center">
                <svg class="w-48 h-48 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-100 rounded-xl flex items-center justify-center">
                <svg class="w-12 h-12 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Cards - Style soft -->
    <section class="py-16 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-2xl font-bold text-slate-800 mb-2">Nos Services</h2>
          <p class="text-slate-600">Accédez rapidement aux services du ministère</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Card 1 -->
          <div class="bg-white p-6 rounded-xl border border-slate-100 hover:border-primary-200 hover:shadow-soft transition-all">
            <div class="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <h3 class="font-semibold text-slate-800 mb-2">Agrément Technique</h3>
            <p class="text-sm text-slate-600 mb-4">Demande d'agrément pour les entreprises du secteur informatique</p>
            <a routerLink="/services" class="text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors">
              En savoir plus →
            </a>
          </div>
          
          <!-- Card 2 -->
          <div class="bg-white p-6 rounded-xl border border-slate-100 hover:border-accent-200 hover:shadow-soft transition-all">
            <div class="w-12 h-12 bg-accent-50 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/>
              </svg>
            </div>
            <h3 class="font-semibold text-slate-800 mb-2">Licences Télécom</h3>
            <p class="text-sm text-slate-600 mb-4">Procédures d'obtention des licences de télécommunication</p>
            <a routerLink="/services" class="text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors">
              En savoir plus →
            </a>
          </div>
          
          <!-- Card 3 -->
          <div class="bg-white p-6 rounded-xl border border-slate-100 hover:border-primary-200 hover:shadow-soft transition-all">
            <div class="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h3 class="font-semibold text-slate-800 mb-2">Cybersécurité</h3>
            <p class="text-sm text-slate-600 mb-4">Protection des systèmes d'information et données</p>
            <a routerLink="/services" class="text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors">
              En savoir plus →
            </a>
          </div>
          
          <!-- Card 4 -->
          <div class="bg-white p-6 rounded-xl border border-slate-100 hover:border-accent-200 hover:shadow-soft transition-all">
            <div class="w-12 h-12 bg-accent-50 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 class="font-semibold text-slate-800 mb-2">Services Postaux</h3>
            <p class="text-sm text-slate-600 mb-4">Développement et modernisation du secteur postal</p>
            <a routerLink="/services" class="text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors">
              En savoir plus →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Section La Ministre -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-5 gap-12 items-start">
          <!-- Photo et infos -->
          <div class="lg:col-span-2">
            <div class="bg-slate-50 rounded-2xl p-8">
              <div class="w-32 h-32 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <span class="text-4xl font-bold text-primary-600">AZ</span>
              </div>
              <div class="text-center mb-6">
                <span class="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full mb-3">
                  La Ministre
                </span>
                <h3 class="text-xl font-bold text-slate-800">Dr Aminata ZERBO/SABANE</h3>
                <p class="text-primary-600 text-sm font-medium">Ministre de la Transition Digitale</p>
              </div>
              <div class="space-y-3 text-sm">
                <div class="flex justify-between py-2 border-b border-slate-200">
                  <span class="text-slate-500">Nom</span>
                  <span class="font-medium text-slate-700">ZERBO/SABANE</span>
                </div>
                <div class="flex justify-between py-2 border-b border-slate-200">
                  <span class="text-slate-500">Prénom</span>
                  <span class="font-medium text-slate-700">Aminata</span>
                </div>
                <div class="flex justify-between py-2">
                  <span class="text-slate-500">Profession</span>
                  <span class="font-medium text-slate-700">Enseignante en Informatique</span>
                </div>
              </div>
              <a routerLink="/ministere/ministre" class="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors">
                Voir la biographie
              </a>
            </div>
          </div>
          
          <!-- Description du ministère -->
          <div class="lg:col-span-3">
            <h2 class="text-2xl font-bold text-slate-800 mb-6">Le Ministère</h2>
            <div class="prose prose-slate max-w-none">
              <p class="text-slate-600 leading-relaxed mb-4">
                Le Ministère de la Transition Digitale, des Postes et des Communications Électroniques 
                assure la mise en œuvre et le suivi de la politique du gouvernement en matière de 
                développement de l'économie numérique, des postes et de la transformation digitale.
              </p>
              <p class="text-slate-600 leading-relaxed mb-4">
                À ce titre et en relation avec les départements ministériels compétents, il est chargé 
                entre autres du développement des infrastructures des communications électroniques, 
                de l'accompagnement, de la promotion des usages des TIC, du développement des services 
                en ligne et des contenus locaux.
              </p>
              <p class="text-slate-600 leading-relaxed">
                Le Ministère œuvre également pour le développement d'une industrie locale basée sur les TIC, 
                ainsi que pour la modernisation et le développement du secteur postal au Burkina Faso.
              </p>
            </div>
            
            <!-- Statistiques -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div class="text-center p-4 bg-slate-50 rounded-xl">
                <p class="text-2xl font-bold text-primary-600">500+</p>
                <p class="text-xs text-slate-500 mt-1">Km Fibre Optique</p>
              </div>
              <div class="text-center p-4 bg-slate-50 rounded-xl">
                <p class="text-2xl font-bold text-accent-600">20</p>
                <p class="text-xs text-slate-500 mt-1">Centres Numériques</p>
              </div>
              <div class="text-center p-4 bg-slate-50 rounded-xl">
                <p class="text-2xl font-bold text-primary-600">5000+</p>
                <p class="text-xs text-slate-500 mt-1">Agents Formés</p>
              </div>
              <div class="text-center p-4 bg-slate-50 rounded-xl">
                <p class="text-2xl font-bold text-accent-600">90%</p>
                <p class="text-xs text-slate-500 mt-1">Couverture 4G</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Actualités Dynamiques avec Auto-Refresh -->
    <section class="py-16 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-8">
          <div>
            <div class="flex items-center gap-3">
              <h2 class="text-2xl font-bold text-slate-800">Actualités récentes</h2>
              @if (isLoading()) {
                <div class="flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-600 text-xs font-medium rounded-full">
                  <svg class="w-3 h-3 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Mise à jour...
                </div>
              } @else {
                <div class="flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-600 text-xs font-medium rounded-full">
                  <span class="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                  En direct
                </div>
              }
            </div>
            <p class="text-slate-600 mt-1">Restez informé des dernières nouvelles • Mise à jour automatique toutes les 30 secondes</p>
          </div>
          <div class="hidden sm:flex items-center gap-4">
            <button (click)="refreshArticles()" 
                    class="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-600 font-medium rounded-lg hover:bg-slate-50 transition-colors"
                    [disabled]="isLoading()">
              <svg class="w-4 h-4" [class.animate-spin]="isLoading()" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
              Actualiser
            </button>
            <a routerLink="/actualites" class="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors">
              Voir toutes
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Grille d'actualités -->
        @if (articles().length === 0 && !isLoading()) {
          <div class="text-center py-12 bg-white rounded-xl border border-slate-100">
            <svg class="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
            </svg>
            <h3 class="text-lg font-semibold text-slate-700 mb-2">Aucune actualité disponible</h3>
            <p class="text-slate-500">Les actualités seront affichées ici dès leur publication.</p>
          </div>
        } @else {
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            @for (article of articles().slice(0, 8); track article.id; let i = $index) {
              <article class="bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-soft hover:border-slate-200 transition-all group"
                       [class.animate-fadeIn]="isNewArticle(article.id)"
                       [style.animation-delay.ms]="i * 100">
                <!-- Image ou placeholder -->
                <div class="h-40 bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center relative overflow-hidden">
                  @if (article.featuredImage) {
                    <img [src]="article.featuredImage" [alt]="article.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                  } @else {
                    <svg class="w-12 h-12 text-primary-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                    </svg>
                  }
                  <!-- Badge nouveau -->
                  @if (isNewArticle(article.id)) {
                    <div class="absolute top-2 right-2 px-2 py-1 bg-accent-500 text-white text-xs font-bold rounded">
                      NOUVEAU
                    </div>
                  }
                </div>
                <div class="p-4">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="inline-block px-2 py-0.5 text-xs font-medium rounded"
                          [class]="getCategoryClass(article.category)">
                      {{ getCategoryLabel(article.category) }}
                    </span>
                    @if (article.featured) {
                      <span class="inline-block px-2 py-0.5 bg-accent-50 text-accent-600 text-xs font-medium rounded">
                        À la une
                      </span>
                    }
                  </div>
                  <h3 class="font-semibold text-slate-800 mb-2 line-clamp-2 text-sm group-hover:text-primary-600 transition-colors">
                    <a [routerLink]="['/actualites', article.id]">{{ article.title }}</a>
                  </h3>
                  <p class="text-xs text-slate-500 line-clamp-2 mb-3">{{ article.summary }}</p>
                  <div class="flex items-center justify-between text-xs text-slate-400">
                    <span class="flex items-center gap-1">
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      {{ article.createdAt | date:'dd MMM yyyy':'':'fr' }}
                    </span>
                    <span class="flex items-center gap-1">
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                      </svg>
                      {{ article.viewCount }} vues
                    </span>
                  </div>
                </div>
              </article>
            }
          </div>
        }
        
        <!-- Dernière mise à jour -->
        <div class="flex items-center justify-between mt-6 pt-4 border-t border-slate-200">
          <p class="text-xs text-slate-400">
            Dernière mise à jour : {{ lastUpdate() | date:'dd/MM/yyyy à HH:mm:ss':'':'fr' }}
          </p>
          <div class="sm:hidden">
            <a routerLink="/actualites" class="inline-flex items-center gap-2 px-4 py-2 bg-primary-500 text-white text-sm font-medium rounded-lg hover:bg-primary-600 transition-colors">
              Voir toutes les actualités
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Projets -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-8">
          <div>
            <h2 class="text-2xl font-bold text-slate-800">Projets et Programmes</h2>
            <p class="text-slate-600 mt-1">Nos initiatives pour la transformation digitale</p>
          </div>
          <a routerLink="/projets" class="hidden sm:inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors">
            Voir tous
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (project of projects().slice(0, 3); track project.id) {
            <div class="bg-white rounded-xl border border-slate-100 p-6 hover:shadow-soft hover:border-slate-200 transition-all">
              <div class="w-12 h-12 bg-accent-50 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 class="font-semibold text-slate-800 mb-2">{{ project.name }}</h3>
              <p class="text-sm text-slate-600 mb-4 line-clamp-2">{{ project.description }}</p>
              <div class="space-y-2">
                <div class="flex items-center justify-between text-sm">
                  <span class="text-slate-500">Progression</span>
                  <span class="font-medium text-primary-600">{{ project.progressPercentage }}%</span>
                </div>
                <div class="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div class="h-full bg-primary-500 rounded-full transition-all duration-500" [style.width.%]="project.progressPercentage"></div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- CTA Newsletter -->
    <section class="py-16 bg-primary-500">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Restez informé</h2>
        <p class="text-primary-100 mb-8 max-w-2xl mx-auto">
          Inscrivez-vous à notre newsletter pour recevoir les dernières actualités du ministère.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <input type="email" placeholder="Votre adresse email" 
                 class="flex-1 px-4 py-3 rounded-lg border-0 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50">
          <button class="px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors">
            S'abonner
          </button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .animate-fadeIn {
      animation: fadeIn 0.5s ease-out forwards;
    }
  `]
})
export class HomeComponent implements OnInit, OnDestroy {
  private apiService = inject(ApiService);
  private refreshSubscription?: Subscription;
  private previousArticleIds: Set<number> = new Set();
  
  articles = signal<Article[]>([]);
  projects = signal<Project[]>([]);
  isLoading = signal(false);
  lastUpdate = signal(new Date());
  newArticleIds = signal<Set<number>>(new Set());
  
  // Intervalle de rafraîchissement en millisecondes (30 secondes)
  private readonly REFRESH_INTERVAL = 30000;
  
  ngOnInit() {
    this.loadData();
    this.startAutoRefresh();
  }
  
  ngOnDestroy() {
    this.stopAutoRefresh();
  }
  
  loadData() {
    this.loadArticles();
    this.loadProjects();
  }
  
  loadArticles() {
    this.isLoading.set(true);
    this.apiService.getPublishedArticles().subscribe({
      next: (response: any) => {
        const data = response.content || response || [];
        
        // Détecter les nouveaux articles
        const currentIds = new Set<number>(data.map((a: Article) => a.id));
        const newIds = new Set<number>();
        
        if (this.previousArticleIds.size > 0) {
          currentIds.forEach((id) => {
            if (!this.previousArticleIds.has(id)) {
              newIds.add(id);
            }
          });
        }
        
        this.newArticleIds.set(newIds);
        this.previousArticleIds = currentIds;
        this.articles.set(data);
        this.lastUpdate.set(new Date());
        this.isLoading.set(false);
        
        // Effacer le badge "nouveau" après 10 secondes
        if (newIds.size > 0) {
          setTimeout(() => {
            this.newArticleIds.set(new Set());
          }, 10000);
        }
      },
      error: (err: any) => {
        console.error('Erreur chargement articles:', err);
        this.isLoading.set(false);
      }
    });
  }
  
  loadProjects() {
    this.apiService.getPublicProjects().subscribe({
      next: (response: any) => {
        const data = response.content || response || [];
        this.projects.set(data);
      },
      error: (err: any) => console.error('Erreur chargement projets:', err)
    });
  }
  
  refreshArticles() {
    this.loadArticles();
  }
  
  startAutoRefresh() {
    this.refreshSubscription = interval(this.REFRESH_INTERVAL).subscribe(() => {
      this.loadArticles();
    });
  }
  
  stopAutoRefresh() {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }
  
  isNewArticle(id: number): boolean {
    return this.newArticleIds().has(id);
  }
  
  getCategoryClass(category: string): string {
    const classes: Record<string, string> = {
      'ACTUALITE': 'bg-primary-50 text-primary-600',
      'COMMUNIQUE': 'bg-blue-50 text-blue-600',
      'EVENEMENT': 'bg-purple-50 text-purple-600',
      'PROJET': 'bg-accent-50 text-accent-600',
      'RAPPORT': 'bg-slate-100 text-slate-600',
      'DISCOURS': 'bg-rose-50 text-rose-600'
    };
    return classes[category] || 'bg-slate-100 text-slate-600';
  }
  
  getCategoryLabel(category: string): string {
    const labels: Record<string, string> = {
      'ACTUALITE': 'Actualité',
      'COMMUNIQUE': 'Communiqué',
      'EVENEMENT': 'Événement',
      'PROJET': 'Projet',
      'RAPPORT': 'Rapport',
      'DISCOURS': 'Discours'
    };
    return labels[category] || category;
  }
}
