import {
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
  DecimalPipe,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-WCAZC6LL.js";

// src/app/features/admin/dashboard/dashboard.component.ts
var _c0 = () => [1, 2, 3, 4];
var _c1 = () => ({ action: "new" });
function AdminDashboardComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 5)(2, "div", 6)(3, "div", 7);
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, AdminDashboardComponent_Conditional_6_For_2_Template, 4, 0, "div", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function AdminDashboardComponent_Conditional_7_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.stats().pendingContacts, " en attente");
  }
}
function AdminDashboardComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 8)(2, "div", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 10);
    \u0275\u0275element(4, "path", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 12)(6, "p", 1);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 13);
    \u0275\u0275text(9, "Articles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 14);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 8)(13, "div", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 10);
    \u0275\u0275element(15, "path", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "div", 12)(17, "p", 1);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 13);
    \u0275\u0275text(20, "Projets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 17);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 8)(24, "div", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 10);
    \u0275\u0275element(26, "path", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "div", 12)(28, "p", 1);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p", 13);
    \u0275\u0275text(31, "Documents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 20);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 8)(35, "div", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(36, "svg", 10);
    \u0275\u0275element(37, "path", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(38, "div", 12)(39, "p", 1);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p", 13);
    \u0275\u0275text(42, "Messages");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(43, AdminDashboardComponent_Conditional_7_Conditional_43_Template, 2, 1, "p", 20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 22)(45, "div", 23)(46, "h3", 24);
    \u0275\u0275text(47, "Progression des projets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 25)(49, "div", 26);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(50, "svg", 27);
    \u0275\u0275element(51, "circle", 28)(52, "circle", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(53, "div", 30)(54, "span", 31);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 12)(58, "p", 32);
    \u0275\u0275text(59, "Progression moyenne des projets en cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 33)(61, "span", 34);
    \u0275\u0275element(62, "span", 35);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "span", 34);
    \u0275\u0275element(65, "span", 36);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(67, "div", 23)(68, "h3", 24);
    \u0275\u0275text(69, "Utilisateurs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 25)(71, "div", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(72, "svg", 38);
    \u0275\u0275element(73, "path", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(74, "div", 12)(75, "p", 40);
    \u0275\u0275text(76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "p", 2);
    \u0275\u0275text(78, "Utilisateurs enregistr\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "p", 41);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(81, "div", 23)(82, "h3", 24);
    \u0275\u0275text(83, "Actions rapides");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div", 42)(85, "a", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(86, "svg", 44);
    \u0275\u0275element(87, "path", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(88, "p", 46);
    \u0275\u0275text(89, "Nouvel article");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "a", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(91, "svg", 48);
    \u0275\u0275element(92, "path", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(93, "p", 49);
    \u0275\u0275text(94, "Nouveau projet");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "a", 50);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(96, "svg", 51);
    \u0275\u0275element(97, "path", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(98, "p", 53);
    \u0275\u0275text(99, "Ajouter document");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "a", 54);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(101, "svg", 55);
    \u0275\u0275element(102, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(103, "p", 56);
    \u0275\u0275text(104, "Voir messages");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.stats().totalArticles);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.stats().publishedArticles, " publi\xE9s");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.stats().totalProjects);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.stats().activeProjects, " en cours");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.stats().totalDocuments);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.stats().publicDocuments, " publics");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.stats().totalContacts);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.stats().pendingContacts > 0 ? 43 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275attribute("stroke-dasharray", 251.2)("stroke-dashoffset", 251.2 - 251.2 * (ctx_r0.stats().averageProjectProgress || 0) / 100);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(56, 18, ctx_r0.stats().averageProjectProgress || 0, "1.0-0"), "%");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r0.stats().activeProjects, " en cours ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.stats().completedProjects, " termin\xE9s ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.stats().totalUsers);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.stats().activeUsers, " actifs");
    \u0275\u0275advance(5);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(21, _c1));
    \u0275\u0275advance(5);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(22, _c1));
    \u0275\u0275advance(5);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(23, _c1));
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  apiService;
  stats = signal(null, ...ngDevMode ? [{ debugName: "stats" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  constructor(apiService) {
    this.apiService = apiService;
  }
  ngOnInit() {
    this.loadStats();
  }
  loadStats() {
    this.apiService.getDashboardStats().subscribe({
      next: (response) => {
        if (response.success) {
          this.stats.set(response.data);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  static \u0275fac = function AdminDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminDashboardComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], decls: 8, vars: 1, consts: [[1, "space-y-6"], [1, "text-2xl", "font-bold", "text-neutral-900"], [1, "text-neutral-500"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-4", "gap-6"], [1, "card", "animate-pulse"], [1, "h-12", "w-12", "bg-neutral-200", "rounded-xl", "mb-4"], [1, "h-8", "bg-neutral-200", "rounded", "w-1/2", "mb-2"], [1, "h-4", "bg-neutral-200", "rounded", "w-3/4"], [1, "stat-card"], [1, "stat-icon-primary"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"], [1, "flex-1"], [1, "text-sm", "text-neutral-500"], [1, "text-xs", "text-primary-600"], [1, "stat-icon-accent"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"], [1, "text-xs", "text-accent-600"], [1, "stat-icon-secondary"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"], [1, "text-xs", "text-secondary-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-6"], [1, "card"], [1, "text-lg", "font-semibold", "text-neutral-900", "mb-4"], [1, "flex", "items-center", "gap-4"], [1, "relative", "w-24", "h-24"], [1, "w-24", "h-24", "transform", "-rotate-90"], ["cx", "48", "cy", "48", "r", "40", "stroke", "#e5e5e5", "stroke-width", "8", "fill", "none"], ["cx", "48", "cy", "48", "r", "40", "stroke", "#009E49", "stroke-width", "8", "fill", "none", "stroke-linecap", "round"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center"], [1, "text-xl", "font-bold", "text-neutral-900"], [1, "text-neutral-600", "mb-2"], [1, "flex", "gap-4", "text-sm"], [1, "flex", "items-center", "gap-1"], [1, "w-3", "h-3", "rounded-full", "bg-primary-500"], [1, "w-3", "h-3", "rounded-full", "bg-green-500"], [1, "stat-icon-primary", "w-16", "h-16"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"], [1, "text-3xl", "font-bold", "text-neutral-900"], [1, "text-sm", "text-primary-600"], [1, "grid", "grid-cols-2", "md:grid-cols-4", "gap-4"], ["routerLink", "/admin/articles", 1, "p-4", "bg-primary-50", "rounded-xl", "text-center", "hover:bg-primary-100", "transition-colors", 3, "queryParams"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-primary-600", "mx-auto", "mb-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6v6m0 0v6m0-6h6m-6 0H6"], [1, "text-sm", "font-medium", "text-primary-700"], ["routerLink", "/admin/projects", 1, "p-4", "bg-accent-50", "rounded-xl", "text-center", "hover:bg-accent-100", "transition-colors", 3, "queryParams"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-accent-600", "mx-auto", "mb-2"], [1, "text-sm", "font-medium", "text-accent-700"], ["routerLink", "/admin/documents", 1, "p-4", "bg-secondary-50", "rounded-xl", "text-center", "hover:bg-secondary-100", "transition-colors", 3, "queryParams"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-secondary-600", "mx-auto", "mb-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"], [1, "text-sm", "font-medium", "text-secondary-700"], ["routerLink", "/admin/contacts", 1, "p-4", "bg-neutral-100", "rounded-xl", "text-center", "hover:bg-neutral-200", "transition-colors"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-neutral-600", "mx-auto", "mb-2"], [1, "text-sm", "font-medium", "text-neutral-700"]], template: function AdminDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Tableau de bord");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Vue d'ensemble de l'activit\xE9 du portail");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, AdminDashboardComponent_Conditional_6_Template, 3, 1, "div", 3)(7, AdminDashboardComponent_Conditional_7_Template, 105, 24);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loading() ? 6 : ctx.stats() ? 7 : -1);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDashboardComponent, [{
    type: Component,
    args: [{
      selector: "app-admin-dashboard",
      standalone: true,
      imports: [CommonModule, RouterModule],
      template: `
    <div class="space-y-6">
      <!-- Header -->
      <div>
        <h1 class="text-2xl font-bold text-neutral-900">Tableau de bord</h1>
        <p class="text-neutral-500">Vue d'ensemble de l'activit\xE9 du portail</p>
      </div>
      
      @if (loading()) {
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (i of [1,2,3,4]; track i) {
            <div class="card animate-pulse">
              <div class="h-12 w-12 bg-neutral-200 rounded-xl mb-4"></div>
              <div class="h-8 bg-neutral-200 rounded w-1/2 mb-2"></div>
              <div class="h-4 bg-neutral-200 rounded w-3/4"></div>
            </div>
          }
        </div>
      } @else if (stats()) {
        <!-- Stats Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="stat-card">
            <div class="stat-icon-primary">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
              </svg>
            </div>
            <div class="flex-1">
              <p class="text-2xl font-bold text-neutral-900">{{ stats()!.totalArticles }}</p>
              <p class="text-sm text-neutral-500">Articles</p>
              <p class="text-xs text-primary-600">{{ stats()!.publishedArticles }} publi\xE9s</p>
            </div>
          </div>
          
          <div class="stat-card">
            <div class="stat-icon-accent">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
              </svg>
            </div>
            <div class="flex-1">
              <p class="text-2xl font-bold text-neutral-900">{{ stats()!.totalProjects }}</p>
              <p class="text-sm text-neutral-500">Projets</p>
              <p class="text-xs text-accent-600">{{ stats()!.activeProjects }} en cours</p>
            </div>
          </div>
          
          <div class="stat-card">
            <div class="stat-icon-secondary">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div class="flex-1">
              <p class="text-2xl font-bold text-neutral-900">{{ stats()!.totalDocuments }}</p>
              <p class="text-sm text-neutral-500">Documents</p>
              <p class="text-xs text-secondary-600">{{ stats()!.publicDocuments }} publics</p>
            </div>
          </div>
          
          <div class="stat-card">
            <div class="stat-icon-primary">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div class="flex-1">
              <p class="text-2xl font-bold text-neutral-900">{{ stats()!.totalContacts }}</p>
              <p class="text-sm text-neutral-500">Messages</p>
              @if (stats()!.pendingContacts > 0) {
                <p class="text-xs text-secondary-600">{{ stats()!.pendingContacts }} en attente</p>
              }
            </div>
          </div>
        </div>
        
        <!-- Second row -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Progress Card -->
          <div class="card">
            <h3 class="text-lg font-semibold text-neutral-900 mb-4">Progression des projets</h3>
            <div class="flex items-center gap-4">
              <div class="relative w-24 h-24">
                <svg class="w-24 h-24 transform -rotate-90">
                  <circle cx="48" cy="48" r="40" stroke="#e5e5e5" stroke-width="8" fill="none"/>
                  <circle cx="48" cy="48" r="40" stroke="#009E49" stroke-width="8" fill="none"
                    [attr.stroke-dasharray]="251.2"
                    [attr.stroke-dashoffset]="251.2 - (251.2 * (stats()!.averageProjectProgress || 0) / 100)"
                    stroke-linecap="round"/>
                </svg>
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="text-xl font-bold text-neutral-900">{{ (stats()!.averageProjectProgress || 0) | number:'1.0-0' }}%</span>
                </div>
              </div>
              <div class="flex-1">
                <p class="text-neutral-600 mb-2">Progression moyenne des projets en cours</p>
                <div class="flex gap-4 text-sm">
                  <span class="flex items-center gap-1">
                    <span class="w-3 h-3 rounded-full bg-primary-500"></span>
                    {{ stats()!.activeProjects }} en cours
                  </span>
                  <span class="flex items-center gap-1">
                    <span class="w-3 h-3 rounded-full bg-green-500"></span>
                    {{ stats()!.completedProjects }} termin\xE9s
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Users Card -->
          <div class="card">
            <h3 class="text-lg font-semibold text-neutral-900 mb-4">Utilisateurs</h3>
            <div class="flex items-center gap-4">
              <div class="stat-icon-primary w-16 h-16">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <p class="text-3xl font-bold text-neutral-900">{{ stats()!.totalUsers }}</p>
                <p class="text-neutral-500">Utilisateurs enregistr\xE9s</p>
                <p class="text-sm text-primary-600">{{ stats()!.activeUsers }} actifs</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Quick Actions -->
        <div class="card">
          <h3 class="text-lg font-semibold text-neutral-900 mb-4">Actions rapides</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a routerLink="/admin/articles" [queryParams]="{action: 'new'}" class="p-4 bg-primary-50 rounded-xl text-center hover:bg-primary-100 transition-colors">
              <svg class="w-8 h-8 text-primary-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              <p class="text-sm font-medium text-primary-700">Nouvel article</p>
            </a>
            <a routerLink="/admin/projects" [queryParams]="{action: 'new'}" class="p-4 bg-accent-50 rounded-xl text-center hover:bg-accent-100 transition-colors">
              <svg class="w-8 h-8 text-accent-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              <p class="text-sm font-medium text-accent-700">Nouveau projet</p>
            </a>
            <a routerLink="/admin/documents" [queryParams]="{action: 'new'}" class="p-4 bg-secondary-50 rounded-xl text-center hover:bg-secondary-100 transition-colors">
              <svg class="w-8 h-8 text-secondary-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
              </svg>
              <p class="text-sm font-medium text-secondary-700">Ajouter document</p>
            </a>
            <a routerLink="/admin/contacts" class="p-4 bg-neutral-100 rounded-xl text-center hover:bg-neutral-200 transition-colors">
              <svg class="w-8 h-8 text-neutral-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <p class="text-sm font-medium text-neutral-700">Voir messages</p>
            </a>
          </div>
        </div>
      }
    </div>
  `
    }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src/app/features/admin/dashboard/dashboard.component.ts", lineNumber: 173 });
})();
export {
  AdminDashboardComponent
};
//# sourceMappingURL=chunk-YWZS2F2H.js.map
