import {
  RouterLink
} from "./chunk-YDHKLCGD.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-WCAZC6LL.js";

// src/app/features/ministere/structures.component.ts
var _forTrack0 = ($index, $item) => $item.acronym;
function StructuresComponent_For_20_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 25);
    \u0275\u0275element(2, "path", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Site web ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const structure_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", structure_r1.website, \u0275\u0275sanitizeUrl);
  }
}
function StructuresComponent_For_20_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 25);
    \u0275\u0275element(2, "path", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const structure_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", "tel:" + structure_r1.phone, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", structure_r1.phone, " ");
  }
}
function StructuresComponent_For_20_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mission_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mission_r2, " ");
  }
}
function StructuresComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "span", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 16)(7, "h3", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 18);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 19);
    \u0275\u0275conditionalCreate(12, StructuresComponent_For_20_Conditional_12_Template, 4, 1, "a", 20);
    \u0275\u0275conditionalCreate(13, StructuresComponent_For_20_Conditional_13_Template, 4, 2, "a", 21);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "div", 22)(15, "div", 23);
    \u0275\u0275repeaterCreate(16, StructuresComponent_For_20_For_17_Template, 2, 1, "span", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const structure_r1 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(structure_r1.acronym);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(structure_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(structure_r1.description);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(structure_r1.website ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(structure_r1.phone ? 13 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(structure_r1.missions);
  }
}
var StructuresComponent = class _StructuresComponent {
  structures = [
    {
      name: "Agence Nationale de Promotion des TIC",
      acronym: "ANPTIC",
      description: "L'ANPTIC est l'agence gouvernementale charg\xE9e de promouvoir et d\xE9velopper l'utilisation des Technologies de l'Information et de la Communication au Burkina Faso. Elle accompagne la transformation digitale de l'administration publique et des entreprises.",
      website: "https://www.anptic.gov.bf",
      phone: "+226 25 30 85 00",
      missions: ["E-gouvernement", "Formation TIC", "Infrastructure num\xE9rique", "Innovation"]
    },
    {
      name: "Agence Nationale de S\xE9curit\xE9 des Syst\xE8mes d'Information",
      acronym: "ANSSI",
      description: "L'ANSSI est l'autorit\xE9 nationale en mati\xE8re de cybers\xE9curit\xE9. Elle assure la protection des syst\xE8mes d'information de l'\xC9tat et accompagne les entreprises dans la s\xE9curisation de leurs infrastructures num\xE9riques.",
      website: "https://www.anssi.gov.bf",
      phone: "+226 25 30 85 01",
      missions: ["Cybers\xE9curit\xE9", "Protection des donn\xE9es", "Audit s\xE9curit\xE9", "Veille technologique"]
    },
    {
      name: "Autorit\xE9 de R\xE9gulation des Communications \xC9lectroniques et des Postes",
      acronym: "ARCEP",
      description: "L'ARCEP est l'autorit\xE9 de r\xE9gulation du secteur des communications \xE9lectroniques et des postes. Elle veille au respect de la concurrence et \xE0 la protection des consommateurs.",
      website: "https://www.arcep.bf",
      phone: "+226 25 37 53 60",
      missions: ["R\xE9gulation", "Licences", "Protection consommateurs", "Concurrence"]
    },
    {
      name: "Soci\xE9t\xE9 Nationale des Postes",
      acronym: "SONAPOST",
      description: "La SONAPOST est l'op\xE9rateur postal national du Burkina Faso. Elle assure les services postaux traditionnels et d\xE9veloppe de nouveaux services adapt\xE9s aux besoins de la population.",
      website: "https://www.sonapost.bf",
      phone: "+226 25 30 67 00",
      missions: ["Services postaux", "Colis", "Services financiers", "E-commerce"]
    }
  ];
  static \u0275fac = function StructuresComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StructuresComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StructuresComponent, selectors: [["app-structures"]], decls: 21, vars: 0, consts: [[1, "bg-gradient-to-r", "from-green-700", "to-green-600", "py-12"], [1, "container", "mx-auto", "px-4"], [1, "text-3xl", "font-bold", "text-white", "mb-2"], [1, "text-green-100", "text-sm"], ["routerLink", "/", 1, "hover:text-white"], [1, "mx-2"], ["routerLink", "/ministere/ministre", 1, "hover:text-white"], [1, "text-white"], [1, "py-12", "bg-white"], [1, "max-w-5xl", "mx-auto"], [1, "grid", "gap-8"], [1, "bg-white", "rounded-2xl", "shadow-lg", "border", "border-gray-100", "overflow-hidden", "hover:shadow-xl", "transition-shadow"], [1, "p-6"], [1, "flex", "items-start", "gap-6"], [1, "w-20", "h-20", "rounded-xl", "bg-gradient-to-br", "from-green-500", "to-green-600", "flex", "items-center", "justify-center", "flex-shrink-0"], [1, "text-white", "font-bold", "text-lg"], [1, "flex-1"], [1, "text-xl", "font-bold", "text-gray-800", "mb-2"], [1, "text-gray-600", "leading-relaxed", "mb-4"], [1, "flex", "flex-wrap", "gap-4"], ["target", "_blank", 1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "bg-green-50", "text-green-700", "rounded-lg", "hover:bg-green-100", "transition-colors", 3, "href"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "bg-gray-50", "text-gray-700", "rounded-lg", "hover:bg-gray-100", "transition-colors", 3, "href"], [1, "bg-gray-50", "px-6", "py-4", "border-t", "border-gray-100"], [1, "flex", "flex-wrap", "gap-2"], [1, "px-3", "py-1", "bg-white", "text-gray-600", "text-sm", "rounded-full", "border", "border-gray-200"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"]], template: function StructuresComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Structures Rattach\xE9es");
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
      \u0275\u0275text(14, "Structures Rattach\xE9es");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "section", 8)(16, "div", 1)(17, "div", 9)(18, "div", 10);
      \u0275\u0275repeaterCreate(19, StructuresComponent_For_20_Template, 18, 5, "div", 11, _forTrack0);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(19);
      \u0275\u0275repeater(ctx.structures);
    }
  }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StructuresComponent, [{
    type: Component,
    args: [{
      selector: "app-structures",
      standalone: true,
      imports: [CommonModule, RouterLink],
      template: `
    <!-- Banni\xE8re -->
    <div class="bg-gradient-to-r from-green-700 to-green-600 py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold text-white mb-2">Structures Rattach\xE9es</h1>
        <nav class="text-green-100 text-sm">
          <a routerLink="/" class="hover:text-white">Accueil</a>
          <span class="mx-2">\u203A</span>
          <a routerLink="/ministere/ministre" class="hover:text-white">Minist\xE8re</a>
          <span class="mx-2">\u203A</span>
          <span class="text-white">Structures Rattach\xE9es</span>
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
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StructuresComponent, { className: "StructuresComponent", filePath: "src/app/features/ministere/structures.component.ts", lineNumber: 79 });
})();
export {
  StructuresComponent
};
//# sourceMappingURL=chunk-VQD6VVEE.js.map
