import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-YDHKLCGD.js";
import {
  ApiService
} from "./chunk-ECCWOC2D.js";
import "./chunk-DGOPQNLS.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-WCAZC6LL.js";

// src/app/features/projects/project-detail.component.ts
function ProjectDetailComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2)(2, "div", 3);
    \u0275\u0275element(3, "div", 4)(4, "div", 5);
    \u0275\u0275elementStart(5, "div", 6);
    \u0275\u0275element(6, "div", 7)(7, "div", 7);
    \u0275\u0275elementEnd()()()();
  }
}
function ProjectDetailComponent_Conditional_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 31);
    \u0275\u0275element(2, "path", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Partenaire: ", ctx_r0.project().partner, " ");
  }
}
function ProjectDetailComponent_Conditional_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 31);
    \u0275\u0275element(2, "path", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.project().responsibleDepartment, " ");
  }
}
function ProjectDetailComponent_Conditional_1_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "h2", 21);
    \u0275\u0275text(2, "Objectifs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.project().objectives);
  }
}
function ProjectDetailComponent_Conditional_1_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 30)(1, "span", 34);
    \u0275\u0275text(2, "Budget");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.formatBudget(ctx_r0.project().budget));
  }
}
function ProjectDetailComponent_Conditional_1_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 30)(1, "span", 34);
    \u0275\u0275text(2, "D\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(ctx_r0.project().startDate));
  }
}
function ProjectDetailComponent_Conditional_1_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 30)(1, "span", 34);
    \u0275\u0275text(2, "Fin pr\xE9vue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(ctx_r0.project().endDate));
  }
}
function ProjectDetailComponent_Conditional_1_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 30)(1, "span", 34);
    \u0275\u0275text(2, "Responsable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.project().managerName);
  }
}
function ProjectDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 8)(1, "div", 2)(2, "div", 9)(3, "a", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 11);
    \u0275\u0275element(5, "path", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Retour aux projets ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h1", 13);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 14);
    \u0275\u0275conditionalCreate(12, ProjectDetailComponent_Conditional_1_Conditional_12_Template, 4, 1, "span", 15);
    \u0275\u0275conditionalCreate(13, ProjectDetailComponent_Conditional_1_Conditional_13_Template, 4, 1, "span", 15);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "section", 16)(15, "div", 2)(16, "div", 17)(17, "div", 18)(18, "div", 19)(19, "div", 20)(20, "h2", 21);
    \u0275\u0275text(21, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 22);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(24, ProjectDetailComponent_Conditional_1_Conditional_24_Template, 5, 1, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 23)(26, "div", 20)(27, "h3", 24);
    \u0275\u0275text(28, "Progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 25)(30, "span", 26);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 27);
    \u0275\u0275element(33, "div", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 20)(35, "h3", 24);
    \u0275\u0275text(36, "Informations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "ul", 29);
    \u0275\u0275conditionalCreate(38, ProjectDetailComponent_Conditional_1_Conditional_38_Template, 5, 1, "li", 30);
    \u0275\u0275conditionalCreate(39, ProjectDetailComponent_Conditional_1_Conditional_39_Template, 5, 1, "li", 30);
    \u0275\u0275conditionalCreate(40, ProjectDetailComponent_Conditional_1_Conditional_40_Template, 5, 1, "li", 30);
    \u0275\u0275conditionalCreate(41, ProjectDetailComponent_Conditional_1_Conditional_41_Template, 5, 1, "li", 30);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275classMap(ctx_r0.getStatusBadgeClass(ctx_r0.project().status) + " mb-4");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getStatusLabel(ctx_r0.project().status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.project().name);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.project().partner ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.project().responsibleDepartment ? 13 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.project().description);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.project().objectives ? 24 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r0.project().progressPercentage, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.project().progressPercentage, "%");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.project().budget ? 38 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.project().startDate ? 39 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.project().endDate ? 40 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.project().managerName ? 41 : -1);
  }
}
function ProjectDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h2", 36);
    \u0275\u0275text(2, "Projet non trouv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 37);
    \u0275\u0275text(4, "Voir tous les projets");
    \u0275\u0275elementEnd()();
  }
}
var ProjectDetailComponent = class _ProjectDetailComponent {
  route;
  apiService;
  project = signal(null, ...ngDevMode ? [{ debugName: "project" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  constructor(route, apiService) {
    this.route = route;
    this.apiService = apiService;
  }
  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.apiService.getPublicProjectById(+id).subscribe({
        next: (response) => {
          if (response.success)
            this.project.set(response.data);
          this.loading.set(false);
        },
        error: () => this.loading.set(false)
      });
    }
  }
  getStatusLabel(status) {
    const labels = { "PLANIFIE": "Planifi\xE9", "EN_COURS": "En cours", "SUSPENDU": "Suspendu", "TERMINE": "Termin\xE9", "ANNULE": "Annul\xE9" };
    return labels[status] || status;
  }
  getStatusBadgeClass(status) {
    const classes = { "PLANIFIE": "badge bg-white/20 text-white", "EN_COURS": "badge bg-white/20 text-white", "SUSPENDU": "badge-warning", "TERMINE": "badge-success", "ANNULE": "badge-error" };
    return classes[status] || "badge";
  }
  formatDate(dateStr) {
    if (!dateStr)
      return "";
    return new Date(dateStr).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
  }
  formatBudget(budget) {
    if (budget >= 1e9)
      return (budget / 1e9).toFixed(1) + " Mds FCFA";
    if (budget >= 1e6)
      return (budget / 1e6).toFixed(0) + " M FCFA";
    return budget.toLocaleString("fr-FR") + " FCFA";
  }
  static \u0275fac = function ProjectDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectDetailComponent, selectors: [["app-project-detail"]], decls: 3, vars: 1, consts: [[1, "py-20"], [1, "py-20", "text-center"], [1, "container", "mx-auto", "px-4"], [1, "max-w-3xl", "mx-auto", "animate-pulse"], [1, "h-8", "bg-neutral-200", "rounded", "w-1/4", "mb-4"], [1, "h-12", "bg-neutral-200", "rounded", "w-3/4", "mb-6"], [1, "space-y-4"], [1, "h-4", "bg-neutral-200", "rounded", "w-full"], [1, "bg-gradient-to-br", "from-primary-600", "to-primary-700", "text-white", "py-12"], [1, "max-w-4xl"], ["routerLink", "/projects", 1, "inline-flex", "items-center", "text-primary-200", "hover:text-white", "mb-4", "transition-colors"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10 19l-7-7m0 0l7-7m-7 7h18"], [1, "text-3xl", "lg:text-4xl", "font-bold", "mb-4"], [1, "flex", "flex-wrap", "items-center", "gap-4", "text-primary-200"], [1, "flex", "items-center", "gap-1"], [1, "py-12", "bg-neutral-50"], [1, "max-w-4xl", "mx-auto"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-8"], [1, "lg:col-span-2", "space-y-8"], [1, "card"], [1, "text-xl", "font-semibold", "text-neutral-900", "mb-4"], [1, "text-neutral-600", "leading-relaxed"], [1, "space-y-6"], [1, "text-lg", "font-semibold", "text-neutral-900", "mb-4"], [1, "text-center", "mb-4"], [1, "text-4xl", "font-bold", "text-primary-600"], [1, "w-full", "bg-neutral-200", "rounded-full", "h-3"], [1, "bg-primary-500", "h-3", "rounded-full", "transition-all", "duration-500"], [1, "space-y-3", "text-sm"], [1, "flex", "justify-between"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"], [1, "text-neutral-500"], [1, "font-medium", "text-neutral-900"], [1, "text-xl", "font-semibold", "text-neutral-700", "mb-2"], ["routerLink", "/projects", 1, "btn-primary", "mt-4"]], template: function ProjectDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ProjectDetailComponent_Conditional_0_Template, 8, 0, "div", 0)(1, ProjectDetailComponent_Conditional_1_Template, 42, 15)(2, ProjectDetailComponent_Conditional_2_Template, 5, 0, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.loading() ? 0 : ctx.project() ? 1 : 2);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectDetailComponent, [{
    type: Component,
    args: [{
      selector: "app-project-detail",
      standalone: true,
      imports: [CommonModule, RouterModule],
      template: `
    @if (loading()) {
      <div class="py-20">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto animate-pulse">
            <div class="h-8 bg-neutral-200 rounded w-1/4 mb-4"></div>
            <div class="h-12 bg-neutral-200 rounded w-3/4 mb-6"></div>
            <div class="space-y-4">
              <div class="h-4 bg-neutral-200 rounded w-full"></div>
              <div class="h-4 bg-neutral-200 rounded w-full"></div>
            </div>
          </div>
        </div>
      </div>
    } @else if (project()) {
      <section class="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-12">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl">
            <a routerLink="/projects" class="inline-flex items-center text-primary-200 hover:text-white mb-4 transition-colors">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Retour aux projets
            </a>
            <span [class]="getStatusBadgeClass(project()!.status) + ' mb-4'">{{ getStatusLabel(project()!.status) }}</span>
            <h1 class="text-3xl lg:text-4xl font-bold mb-4">{{ project()!.name }}</h1>
            <div class="flex flex-wrap items-center gap-4 text-primary-200">
              @if (project()!.partner) {
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  Partenaire: {{ project()!.partner }}
                </span>
              }
              @if (project()!.responsibleDepartment) {
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                  {{ project()!.responsibleDepartment }}
                </span>
              }
            </div>
          </div>
        </div>
      </section>
      
      <section class="py-12 bg-neutral-50">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div class="lg:col-span-2 space-y-8">
                <div class="card">
                  <h2 class="text-xl font-semibold text-neutral-900 mb-4">Description</h2>
                  <p class="text-neutral-600 leading-relaxed">{{ project()!.description }}</p>
                </div>
                
                @if (project()!.objectives) {
                  <div class="card">
                    <h2 class="text-xl font-semibold text-neutral-900 mb-4">Objectifs</h2>
                    <p class="text-neutral-600 leading-relaxed">{{ project()!.objectives }}</p>
                  </div>
                }
              </div>
              
              <div class="space-y-6">
                <div class="card">
                  <h3 class="text-lg font-semibold text-neutral-900 mb-4">Progression</h3>
                  <div class="text-center mb-4">
                    <span class="text-4xl font-bold text-primary-600">{{ project()!.progressPercentage }}%</span>
                  </div>
                  <div class="w-full bg-neutral-200 rounded-full h-3">
                    <div class="bg-primary-500 h-3 rounded-full transition-all duration-500" [style.width.%]="project()!.progressPercentage"></div>
                  </div>
                </div>
                
                <div class="card">
                  <h3 class="text-lg font-semibold text-neutral-900 mb-4">Informations</h3>
                  <ul class="space-y-3 text-sm">
                    @if (project()!.budget) {
                      <li class="flex justify-between">
                        <span class="text-neutral-500">Budget</span>
                        <span class="font-medium text-neutral-900">{{ formatBudget(project()!.budget!) }}</span>
                      </li>
                    }
                    @if (project()!.startDate) {
                      <li class="flex justify-between">
                        <span class="text-neutral-500">D\xE9but</span>
                        <span class="font-medium text-neutral-900">{{ formatDate(project()!.startDate!) }}</span>
                      </li>
                    }
                    @if (project()!.endDate) {
                      <li class="flex justify-between">
                        <span class="text-neutral-500">Fin pr\xE9vue</span>
                        <span class="font-medium text-neutral-900">{{ formatDate(project()!.endDate!) }}</span>
                      </li>
                    }
                    @if (project()!.managerName) {
                      <li class="flex justify-between">
                        <span class="text-neutral-500">Responsable</span>
                        <span class="font-medium text-neutral-900">{{ project()!.managerName }}</span>
                      </li>
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    } @else {
      <div class="py-20 text-center">
        <h2 class="text-xl font-semibold text-neutral-700 mb-2">Projet non trouv\xE9</h2>
        <a routerLink="/projects" class="btn-primary mt-4">Voir tous les projets</a>
      </div>
    }
  `
    }]
  }], () => [{ type: ActivatedRoute }, { type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectDetailComponent, { className: "ProjectDetailComponent", filePath: "src/app/features/projects/project-detail.component.ts", lineNumber: 130 });
})();
export {
  ProjectDetailComponent
};
//# sourceMappingURL=chunk-2JCPZ66Y.js.map
