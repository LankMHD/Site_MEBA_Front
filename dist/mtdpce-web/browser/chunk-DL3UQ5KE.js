import {
  RouterLink
} from "./chunk-YDHKLCGD.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-WCAZC6LL.js";

// src/app/features/ministere/missions.component.ts
var _forTrack0 = ($index, $item) => $item.title;
function MissionsComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 19);
    \u0275\u0275element(4, "path", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div")(6, "h3", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 14);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const mission_r1 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275attribute("d", mission_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(mission_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(mission_r1.description);
  }
}
var MissionsComponent = class _MissionsComponent {
  missions = [
    {
      title: "D\xE9veloppement des infrastructures des communications \xE9lectroniques",
      description: "Assurer le d\xE9veloppement et la modernisation des infrastructures de t\xE9l\xE9communications sur l'ensemble du territoire national pour garantir une connectivit\xE9 optimale.",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    },
    {
      title: "Accompagnement et promotion des usages des TIC",
      description: "Promouvoir l'utilisation des technologies de l'information et de la communication aupr\xE8s des citoyens, des entreprises et des administrations publiques.",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    },
    {
      title: "D\xE9veloppement des services en ligne et des contenus locaux",
      description: "Favoriser la cr\xE9ation et le d\xE9ploiement de services num\xE9riques adapt\xE9s aux besoins des citoyens et promouvoir les contenus locaux.",
      icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    },
    {
      title: "D\xE9veloppement d'une industrie locale bas\xE9e sur les TIC",
      description: "Encourager et soutenir le d\xE9veloppement d'une industrie num\xE9rique locale cr\xE9atrice d'emplois et de valeur ajout\xE9e.",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    },
    {
      title: "D\xE9veloppement du secteur postal",
      description: "Moderniser et d\xE9velopper les services postaux pour r\xE9pondre aux besoins de la population et accompagner le d\xE9veloppement du commerce \xE9lectronique.",
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    },
    {
      title: "Transformation digitale de l'administration",
      description: "Accompagner la transformation digitale des administrations publiques pour am\xE9liorer l'efficacit\xE9 des services rendus aux citoyens.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    },
    {
      title: "Cybers\xE9curit\xE9 et protection des donn\xE9es",
      description: "Assurer la s\xE9curit\xE9 des syst\xE8mes d'information et la protection des donn\xE9es personnelles des citoyens.",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    }
  ];
  static \u0275fac = function MissionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MissionsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MissionsComponent, selectors: [["app-missions"]], decls: 28, vars: 0, consts: [[1, "bg-gradient-to-r", "from-green-700", "to-green-600", "py-12"], [1, "container", "mx-auto", "px-4"], [1, "text-3xl", "font-bold", "text-white", "mb-2"], [1, "text-green-100", "text-sm"], ["routerLink", "/", 1, "hover:text-white"], [1, "mx-2"], ["routerLink", "/ministere/ministre", 1, "hover:text-white"], [1, "text-white"], [1, "py-12", "bg-white"], [1, "max-w-4xl", "mx-auto"], [1, "mb-10"], [1, "flex", "items-center", "gap-2", "mb-4"], [1, "w-1", "h-8", "bg-green-600", "rounded"], [1, "text-2xl", "font-bold", "text-gray-800"], [1, "text-gray-600", "leading-relaxed"], [1, "grid", "gap-6"], [1, "bg-white", "rounded-xl", "shadow-md", "border", "border-gray-100", "p-6", "hover:shadow-lg", "transition-shadow"], [1, "flex", "items-start", "gap-4"], [1, "w-12", "h-12", "bg-green-100", "rounded-xl", "flex", "items-center", "justify-center", "flex-shrink-0"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-green-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2"], [1, "text-lg", "font-semibold", "text-gray-800", "mb-2"]], template: function MissionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Missions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "nav", 3)(5, "a", 4);
      \u0275\u0275text(6, "Accueil");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 5);
      \u0275\u0275text(8, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "a", 6);
      \u0275\u0275text(10, "Minist\xE8re");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span", 5);
      \u0275\u0275text(12, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span", 7);
      \u0275\u0275text(14, "Missions");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "section", 8)(16, "div", 1)(17, "div", 9)(18, "div", 10)(19, "div", 11);
      \u0275\u0275element(20, "div", 12);
      \u0275\u0275elementStart(21, "h2", 13);
      \u0275\u0275text(22, "Nos Missions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "p", 14);
      \u0275\u0275text(24, " Le Minist\xE8re de la Transition Digitale, des Postes et des Communications \xC9lectroniques assure la mise en \u0153uvre et le suivi de la politique du gouvernement en mati\xE8re de d\xE9veloppement de l'\xE9conomie num\xE9rique, des postes et de la transformation digitale. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 15);
      \u0275\u0275repeaterCreate(26, MissionsComponent_For_27_Template, 10, 3, "div", 16, _forTrack0);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(26);
      \u0275\u0275repeater(ctx.missions);
    }
  }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MissionsComponent, [{
    type: Component,
    args: [{
      selector: "app-missions",
      standalone: true,
      imports: [CommonModule, RouterLink],
      template: `
    <!-- Banni\xE8re -->
    <div class="bg-gradient-to-r from-green-700 to-green-600 py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold text-white mb-2">Missions</h1>
        <nav class="text-green-100 text-sm">
          <a routerLink="/" class="hover:text-white">Accueil</a>
          <span class="mx-2">\u203A</span>
          <a routerLink="/ministere/ministre" class="hover:text-white">Minist\xE8re</a>
          <span class="mx-2">\u203A</span>
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
              Le Minist\xE8re de la Transition Digitale, des Postes et des Communications \xC9lectroniques assure la mise en \u0153uvre et le suivi de la politique du gouvernement en mati\xE8re de d\xE9veloppement de l'\xE9conomie num\xE9rique, des postes et de la transformation digitale.
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
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MissionsComponent, { className: "MissionsComponent", filePath: "src/app/features/ministere/missions.component.ts", lineNumber: 62 });
})();
export {
  MissionsComponent
};
//# sourceMappingURL=chunk-DL3UQ5KE.js.map
