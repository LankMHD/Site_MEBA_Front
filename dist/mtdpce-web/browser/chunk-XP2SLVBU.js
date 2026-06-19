import {
  RouterLink
} from "./chunk-YDHKLCGD.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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

// src/app/features/ministere/organigramme.component.ts
var _forTrack0 = ($index, $item) => $item.name;
function OrganigrammeComponent_For_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 37);
    \u0275\u0275element(3, "path", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h4", 39);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 40);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const direction_r1 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(direction_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(direction_r1.acronym);
  }
}
function OrganigrammeComponent_For_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 41)(2, "div", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 43);
    \u0275\u0275element(4, "path", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div")(6, "h4", 39);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 45);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const structure_r2 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(structure_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(structure_r2.acronym);
  }
}
var OrganigrammeComponent = class _OrganigrammeComponent {
  directions = [
    { name: "Direction G\xE9n\xE9rale de la Transition Digitale", acronym: "DGTD" },
    { name: "Direction G\xE9n\xE9rale des Communications \xC9lectroniques", acronym: "DGCE" },
    { name: "Direction G\xE9n\xE9rale de la Poste", acronym: "DGP" },
    { name: "Direction des Affaires Juridiques", acronym: "DAJ" },
    { name: "Direction des Ressources Humaines", acronym: "DRH" },
    { name: "Direction de l'Administration et des Finances", acronym: "DAF" },
    { name: "Direction des \xC9tudes et de la Planification", acronym: "DEP" },
    { name: "Direction de la Communication", acronym: "DCOM" },
    { name: "Direction des March\xE9s Publics", acronym: "DMP" },
    { name: "Direction des Archives et de la Documentation", acronym: "DAD" }
  ];
  structures = [
    { name: "Agence Nationale de Promotion des TIC", acronym: "ANPTIC" },
    { name: "Agence Nationale de S\xE9curit\xE9 des Syst\xE8mes d'Information", acronym: "ANSSI" },
    { name: "Autorit\xE9 de R\xE9gulation des Communications \xC9lectroniques", acronym: "ARCEP" },
    { name: "Soci\xE9t\xE9 Nationale des Postes", acronym: "SONAPOST" }
  ];
  static \u0275fac = function OrganigrammeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrganigrammeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrganigrammeComponent, selectors: [["app-organigramme"]], decls: 61, vars: 0, consts: [[1, "bg-gradient-to-r", "from-green-700", "to-green-600", "py-12"], [1, "container", "mx-auto", "px-4"], [1, "text-3xl", "font-bold", "text-white", "mb-2"], [1, "text-green-100", "text-sm"], ["routerLink", "/", 1, "hover:text-white"], [1, "mx-2"], ["routerLink", "/ministere/ministre", 1, "hover:text-white"], [1, "text-white"], [1, "py-12", "bg-gray-50"], [1, "max-w-6xl", "mx-auto"], [1, "flex", "justify-center", "mb-8"], [1, "bg-green-600", "text-white", "rounded-xl", "p-6", "shadow-lg", "text-center", "min-w-64"], [1, "w-20", "h-20", "mx-auto", "mb-3", "rounded-full", "bg-white/20", "flex", "items-center", "justify-center"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-10", "h-10"], ["d", "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"], [1, "font-bold", "text-lg"], [1, "w-px", "h-12", "bg-gray-300"], [1, "bg-yellow-500", "text-white", "rounded-xl", "p-5", "shadow-lg", "text-center", "min-w-56"], [1, "font-bold"], [1, "text-yellow-100", "text-sm"], [1, "bg-red-600", "text-white", "rounded-xl", "p-5", "shadow-lg", "text-center", "min-w-56"], [1, "text-red-100", "text-sm"], [1, "w-3/4", "h-px", "bg-gray-300", "relative"], [1, "absolute", "left-0", "top-0", "w-px", "h-8", "bg-gray-300"], [1, "absolute", "left-1/4", "top-0", "w-px", "h-8", "bg-gray-300"], [1, "absolute", "left-1/2", "top-0", "w-px", "h-8", "bg-gray-300", "-translate-x-1/2"], [1, "absolute", "left-3/4", "top-0", "w-px", "h-8", "bg-gray-300"], [1, "absolute", "right-0", "top-0", "w-px", "h-8", "bg-gray-300"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-5", "gap-4"], [1, "bg-white", "rounded-xl", "p-4", "shadow-md", "border", "border-gray-100", "text-center", "hover:shadow-lg", "transition-shadow"], [1, "mt-12"], [1, "flex", "items-center", "gap-2", "mb-6"], [1, "w-1", "h-8", "bg-green-600", "rounded"], [1, "text-xl", "font-bold", "text-gray-800"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-4", "gap-4"], [1, "bg-white", "rounded-xl", "p-4", "shadow-md", "border", "border-gray-100", "hover:shadow-lg", "transition-shadow"], [1, "w-12", "h-12", "mx-auto", "mb-3", "rounded-full", "bg-green-100", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-green-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"], [1, "font-semibold", "text-gray-800", "text-sm"], [1, "text-gray-500", "text-xs", "mt-1"], [1, "flex", "items-center", "gap-3"], [1, "w-10", "h-10", "rounded-lg", "bg-yellow-100", "flex", "items-center", "justify-center", "flex-shrink-0"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-yellow-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], [1, "text-gray-500", "text-xs"]], template: function OrganigrammeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Organigramme");
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
      \u0275\u0275text(14, "Organigramme");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "section", 8)(16, "div", 1)(17, "div", 9)(18, "div", 10)(19, "div", 11)(20, "div", 12);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(21, "svg", 13);
      \u0275\u0275element(22, "path", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(23, "h3", 15);
      \u0275\u0275text(24, "MINISTRE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "p", 3);
      \u0275\u0275text(26, "Dr Aminata ZERBO/SABANE");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 10);
      \u0275\u0275element(28, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 10)(30, "div", 17)(31, "h3", 18);
      \u0275\u0275text(32, "CABINET");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "p", 19);
      \u0275\u0275text(34, "Directeur de Cabinet");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 10);
      \u0275\u0275element(36, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 10)(38, "div", 20)(39, "h3", 18);
      \u0275\u0275text(40, "SECR\xC9TARIAT G\xC9N\xC9RAL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "p", 21);
      \u0275\u0275text(42, "Secr\xE9taire G\xE9n\xE9ral");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "div", 10)(44, "div", 22);
      \u0275\u0275element(45, "div", 23)(46, "div", 24)(47, "div", 25)(48, "div", 26)(49, "div", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 28);
      \u0275\u0275repeaterCreate(51, OrganigrammeComponent_For_52_Template, 8, 2, "div", 29, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 30)(54, "div", 31);
      \u0275\u0275element(55, "div", 32);
      \u0275\u0275elementStart(56, "h2", 33);
      \u0275\u0275text(57, "Structures Rattach\xE9es");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 34);
      \u0275\u0275repeaterCreate(59, OrganigrammeComponent_For_60_Template, 10, 2, "div", 35, _forTrack0);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(51);
      \u0275\u0275repeater(ctx.directions);
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.structures);
    }
  }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganigrammeComponent, [{
    type: Component,
    args: [{
      selector: "app-organigramme",
      standalone: true,
      imports: [CommonModule, RouterLink],
      template: `
    <!-- Banni\xE8re -->
    <div class="bg-gradient-to-r from-green-700 to-green-600 py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold text-white mb-2">Organigramme</h1>
        <nav class="text-green-100 text-sm">
          <a routerLink="/" class="hover:text-white">Accueil</a>
          <span class="mx-2">\u203A</span>
          <a routerLink="/ministere/ministre" class="hover:text-white">Minist\xE8re</a>
          <span class="mx-2">\u203A</span>
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
          
          <!-- Secr\xE9tariat G\xE9n\xE9ral -->
          <div class="flex justify-center mb-8">
            <div class="bg-red-600 text-white rounded-xl p-5 shadow-lg text-center min-w-56">
              <h3 class="font-bold">SECR\xC9TARIAT G\xC9N\xC9RAL</h3>
              <p class="text-red-100 text-sm">Secr\xE9taire G\xE9n\xE9ral</p>
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
          
          <!-- Structures rattach\xE9es -->
          <div class="mt-12">
            <div class="flex items-center gap-2 mb-6">
              <div class="w-1 h-8 bg-green-600 rounded"></div>
              <h2 class="text-xl font-bold text-gray-800">Structures Rattach\xE9es</h2>
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
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrganigrammeComponent, { className: "OrganigrammeComponent", filePath: "src/app/features/ministere/organigramme.component.ts", lineNumber: 122 });
})();
export {
  OrganigrammeComponent
};
//# sourceMappingURL=chunk-XP2SLVBU.js.map
