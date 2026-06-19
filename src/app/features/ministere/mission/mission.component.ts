import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Ministere, Mission } from '../../../core/models/event.model';
import { ApiService } from '../../../core/services/api.service';
import { MinistereService } from '../../../core/services/ministere.service';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent {

  
 open: boolean[] = [false, false, false, false]; // 4 missions
  missions = signal<Mission[]>([]);
  articles = signal<Ministere[]>([]);
   
   ministere = signal<Ministere | null>(null); // peut être null au départ
  

  loading = signal(true);
   constructor(private apiService: ApiService, private router: Router, private min: MinistereService) {}
  
  ngOnInit(): void {
    this.loadArticles();
    this.loadMins();
    
  }

   loadArticles(): void {
      this.loading.set(true);

      this.min.getAllMissions().subscribe({
        next: (response) => {
          if (response.success) {
            // articles DEJA paginés par le backend
            this.missions.set(response.data.content);

            

          
          }
          this.loading.set(false);
        },
        error: () => {
          this.loading.set(false);
        }
      });
    }



    loadMins(): void {
      this.loading.set(true);

      this.apiService.getAllMins(0, 10).subscribe({
        next: (response) => {
          if (response.success) {
            // articles DEJA paginés par le backend
            this.articles.set(response.data.content);

            // Récupérer l'ID du premier ministère
            const articlesArray = this.articles(); // <-- important !

            if (articlesArray.length > 0) {
              const ministereId = articlesArray[0].id;
              this.loadMinistereById(ministereId);
            }

          
          }
          this.loading.set(false);
        },
        error: () => {
          this.loading.set(false);
        }
      });
    }


    loadMinistereById(id: number) {
      this.apiService.getminById(id).subscribe({
        next: (response) => {
          
          if (response.success) {
       this.ministere.set(response.data); // ✅ extraire data
        //console.log('Ministère chargé :', this.ministere);
        } else {
          console.error('Erreur :', response.message);
        }
        },
        error: (err) => {
          console.error('Erreur chargement ministère', err);
        }
      });
    }

        formatContent(content: string): string {
  if (!content) return '';
  content = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n'); // normalise
  const paragraphs = content.split(/\n+/);
  return paragraphs.map(p => `<p>${p.trim()}</p>`).join('');
}

  missions1 = [
    {
      title: "Développement des infrastructures électroniques et des communications électroniques",
      icon: "M3 12h18M3 6h18M3 18h18", // exemple icône, tu peux changer
      color: "#00843B", // couleur du pays
      description: [
       
        "Dans le domaine du développement des infrastructures électroniques et des communications électroniques",
        "de l’élaboration du cadre juridique pour le développement des réseaux et services de communications électroniques et du suivi de son application ;",
        "de la veille réglementaire en matière de télécommunications ;",
        "du suivi de la gestion des ressources rares ;",
        "du suivi de la préparation, la délivrance et la gestion des autorisations pour l’établissement et l’exploitation des réseaux de communications électroniques, la fourniture de service téléphoniques au public et la fourniture de capacité ;",
        "du suivi de la gestion des déclarations des services de communications électroniques ouverts au public ;",
        "de l’élaboration et du suivi de la mise en œuvre des projets de développement des infrastructures de communications électroniques ;",
        "de l’élaboration et du suivi de la mise en œuvre de la stratégie de développement de l’accès et du service universel des communications électronique conformément à la réglementation ;",
        "de la mise à la disposition des ministères en charge de la sécurité et de la défense du territoire une infrastructure numérique sécurisée, résiliente et redondante qui facilite le déploiement et l’exploitation de services divers en matière de surveillance du territoire, de renseignements et de contre-terrorisme tout en garantissant la souveraineté numérique du Burkina Faso ;",
        "de la coordination et du suivi des activités liées à la participation du Burkina Faso dans les institutions et organisations spécialisées dont il est membre ;",
        "de la préparation, du suivi et de la mise en œuvre des accords, traités et conventions internationaux concernant le développement des télécommunications auxquels le Burkina Faso est partie prenante ;",
        "de la diffusion des normes internationales en matière de télécommunications ;",
        "du développement de l’expertise nationale dans le domaine des télécommunications."
      ]
    },
    {
      title: "Promotion des usages du numérique",
      icon: "M12 4v16m8-8H4",
      color: "#E30613",
      description: [
        "Dans le domaine de la promotion des usages du numérique",
        "de la mise en œuvre de l’interopérabilité des bases de données d'identité des personnes à travers la mise en place d’un système d’identification fondamentale (identification fondamentale ou de base) ;",
        "de l’élaboration et de la coordination des politiques, des stratégies et des plans nationaux et sectoriels de développement des usages du numérique et de leur cohérence et de leur complémentarité ;",
        "de la prise en compte de ces politiques, stratégies et plans nationaux et sectoriels dans les différents plans de développement, et de coordonner leur mise en œuvre ;",
        "du développement, de l’administration et de la maintenance du Réseau Informatique National de l’Administration (RESINA) ;",
        "de la coordination, de la conception et de la mise en œuvre des plateformes transversales pour le e-gouvernement et la e-administration ;",
        "de la formulation et du suivi de la mise en œuvre des grands travaux de transformation digitale dans l’administration publique en collaboration avec les structures bénéficiaires ;",
        "de la coordination de l'utilisation du numérique et de l'appui aux structures publiques et parapubliques pour accélérer les objectifs en matière de rationalisation des dépenses de transparence ;",
        "de la coordination de la définition de principes, de règles, de normes, de procédures de prise de décisions et de référentiels communs, afin de garantir l’interopérabilité ;",
        "de la coordination de la mise en place du cadre juridique et institutionnel favorable au développement des usages du numérique et du suivi de son application ;",
        "de la veille règlementaire en matière d’usages du numérique ;",
        "de l'élaboration de cyberstratégies en matière de sécurité des systèmes d'information nationaux et de la mise en œuvre des instruments de cybersécurité en relation avec les structures opérationnelles ;",
        "du suivi :",
        "de l’accréditation des prestataires de services de certification électronique ;",
        "du contrôle, par l’autorité de protection, du traitement des données personnelles ;",
        "de l’enregistrement et de la modification des noms de domaines Internet sous le domaine de premier niveau « .bf » ;",
        "de l’organisation de l’octroi et du retrait d’agréments aux sociétés opérant dans le domaine de l’informatique ;",
        "du contrôle technique des services informatiques et systèmes d’information des départements ministériels et instituions d’Etat, des centres de traitement numérique, des centres de formation sur le numérique et de toutes autres structures publiques dont l’activité entre dans le cadre de ses attributions ;",
        "de la formulation d’avis sur les marchés publics relatifs au numérique ;",
        "de la sensibilisation de toutes les composantes de la société sur les enjeux liés numérique et servir de conseil à tous les niveaux de prise de décision ;",
        "de la promotion du développement de contenus numériques adaptés aux besoins locaux ;",
        "de la promotion des initiatives de réduction de la fracture numérique et l’accélération de l’usage du numérique dans tous les secteurs de la vie sociale et économique et par toutes les couches de la population ;",
        "de la préparation, de la mise en œuvre et du suivi des accords, traités et conventions internationaux relatifs à la gouvernance de l’Internet et au développement des usages du numérique auxquels le Burkina Faso est partie prenante ;",
        "de la diffusion des normes internationales en matière de numérique ;",
        "du développement de l’expertise nationale dans le domaine du numérique ;",
        "de la coordination et du suivi des activités liées à la participation du Burkina Faso dans les institutions et organisations spécialisées dont il est membre."
      ]
    },
    {
      title: "Développement d’une industrie numérique locale",
      icon: "M5 13l4 4L19 7",
      color: "#FFD700",
      description: [
        "Dans le domaine du développement d’une industrie numérique locale",
        "de l’élaboration d’une politique nationale de développement de l’industrie numérique ;",
        "de l’élaboration et du suivi de la mise en œuvre de la stratégie de développement d’une industrie numérique locale ;",
        "de la mise en place du cadre juridique et institutionnel pour le développement de l’industrie numérique et du suivi de leur application ;",
        "de la veille règlementaire en matière d’industrie numérique ;",
        "de l’élaboration et de la gestion de tout projet de développement de l’industrie numérique ;",
        "de la préparation, du suivi et de la mise en œuvre des accords, traités et conventions internationaux concernant le développement des domaines contribuant au développement de l’industrie numérique auxquels le Burkina Faso est partie prenante ;",
        "de la diffusion des normes techniques et des instruments juridiques internationaux dans le domaine de l’industrie numérique ;",
        "de la coordination et du suivi des activités liées à la participation du Burkina Faso dans les institutions et organisations spécialisées dans ce domaine dont il est membre ;",
        "du développement de l’expertise nationale permettant de contribuer à l’établissement et au développement d’une industrie numérique."
      ]
    },
    {
      title: "Secteur Postal",
      icon: "M12 8v8m4-4H8",
      color: "#00843B",
      description: [
        "En matière de poste",
        "de l’élaboration du cadre réglementaire pour le développement du secteur postal et du suivi de son application ;",
        "de la veille réglementaire en matière des postes ;",
        "de la préparation et du suivi des accords, traités et conventions internationaux concernant les postes et auxquels le Burkina Faso est partie prenante ;",
        "de la contribution à l’extension de la couverture du territoire national en services postaux et financiers, à leur modernisation et à l’inclusion financière ;",
        "du suivi de la mise en œuvre du service postal universel ;",
        "de la contribution à la veille et à l’innovation dans le secteur postal ;",
        "de l’élaboration et la mise en œuvre des projets de développement dans le secteur postal ;",
        "de la coordination et du suivi des activités liées à la participation du Burkina Faso dans les institutions et organisations spécialisées dont il est membre ;",
        "de l’émission des timbres-poste ;",
        "du développement de l’expertise nationale dans le domaine postal."
      ]
    }
  ];


}
