import {
  RouterLink,
  RouterModule
} from "./chunk-YDHKLCGD.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-4JYODSSI.js";
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WCAZC6LL.js";

// src/app/features/projects/projects-list.component.ts
var _c0 = () => [1, 2, 3, 4];
var _c1 = (a0) => ["/projects", a0];
var _forTrack0 = ($index, $item) => $item.id;
function ProjectsListComponent_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "div", 15)(2, "div", 16)(3, "div", 17);
    \u0275\u0275elementEnd();
  }
}
function ProjectsListComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, ProjectsListComponent_Conditional_16_For_2_Template, 4, 0, "div", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function ProjectsListComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 18);
    \u0275\u0275element(2, "path", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 20);
    \u0275\u0275text(4, "Aucun projet trouv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 21);
    \u0275\u0275text(6, "Essayez de modifier vos crit\xE8res de recherche");
    \u0275\u0275elementEnd()();
  }
}
function ProjectsListComponent_Conditional_18_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 34);
    \u0275\u0275element(2, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", project_r1.partner, " ");
  }
}
function ProjectsListComponent_Conditional_18_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 34);
    \u0275\u0275element(2, "path", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatBudget(project_r1.budget), " ");
  }
}
function ProjectsListComponent_Conditional_18_For_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 34);
    \u0275\u0275element(2, "path", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(project_r1.endDate), " ");
  }
}
function ProjectsListComponent_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 22)(1, "div", 24)(2, "div", 25)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3", 26);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 27)(8, "span", 28);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "p", 29);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 30);
    \u0275\u0275element(13, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 32);
    \u0275\u0275conditionalCreate(15, ProjectsListComponent_Conditional_18_For_2_Conditional_15_Template, 4, 1, "span", 33);
    \u0275\u0275conditionalCreate(16, ProjectsListComponent_Conditional_18_For_2_Conditional_16_Template, 4, 1, "span", 33);
    \u0275\u0275conditionalCreate(17, ProjectsListComponent_Conditional_18_For_2_Conditional_17_Template, 4, 1, "span", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const project_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c1, project_r1.id));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getStatusBadgeClass(project_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatusLabel(project_r1.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", project_r1.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", project_r1.progressPercentage, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r1.description);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", project_r1.progressPercentage, "%");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(project_r1.partner ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(project_r1.budget ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(project_r1.endDate ? 17 : -1);
  }
}
function ProjectsListComponent_Conditional_18_Conditional_3_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function ProjectsListComponent_Conditional_18_Conditional_3_For_6_Template_button_click_0_listener() {
      const page_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage(page_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(page_r5 === ctx_r1.currentPage() ? "btn-primary" : "btn-ghost");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r5 + 1, " ");
  }
}
function ProjectsListComponent_Conditional_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "nav", 38)(2, "button", 39);
    \u0275\u0275listener("click", function ProjectsListComponent_Conditional_18_Conditional_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage() - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 40);
    \u0275\u0275element(4, "path", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(5, ProjectsListComponent_Conditional_18_Conditional_3_For_6_Template, 2, 3, "button", 42, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "button", 39);
    \u0275\u0275listener("click", function ProjectsListComponent_Conditional_18_Conditional_3_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage() + 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 40);
    \u0275\u0275element(9, "path", 43);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage() === 0);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.getPageNumbers());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage() === ctx_r1.totalPages() - 1);
  }
}
function ProjectsListComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, ProjectsListComponent_Conditional_18_For_2_Template, 18, 14, "a", 22, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ProjectsListComponent_Conditional_18_Conditional_3_Template, 10, 2, "div", 23);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.projects());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.totalPages() > 1 ? 3 : -1);
  }
}
var ProjectsListComponent = class _ProjectsListComponent {
  apiService;
  projects = signal([], ...ngDevMode ? [{ debugName: "projects" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  currentPage = signal(0, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
  totalPages = signal(0, ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  searchQuery = "";
  constructor(apiService) {
    this.apiService = apiService;
  }
  ngOnInit() {
    this.loadProjects();
  }
  loadProjects() {
    this.loading.set(true);
    this.apiService.getPublicProjects(this.currentPage(), 8).subscribe({
      next: (response) => {
        if (response.success) {
          this.projects.set(response.data.content);
          this.totalPages.set(response.data.totalPages);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  search() {
    if (!this.searchQuery.trim()) {
      this.loadProjects();
      return;
    }
    this.loading.set(true);
    this.apiService.searchProjects(this.searchQuery, 0, 8).subscribe({
      next: (response) => {
        if (response.success) {
          this.projects.set(response.data.content);
          this.totalPages.set(response.data.totalPages);
          this.currentPage.set(0);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  goToPage(page) {
    if (page >= 0 && page < this.totalPages()) {
      this.currentPage.set(page);
      this.loadProjects();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  getPageNumbers() {
    const total = this.totalPages();
    const current = this.currentPage();
    const pages = [];
    let start = Math.max(0, current - 2);
    let end = Math.min(total - 1, current + 2);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }
  getStatusLabel(status) {
    const labels = {
      "PLANIFIE": "Planifi\xE9",
      "EN_COURS": "En cours",
      "SUSPENDU": "Suspendu",
      "TERMINE": "Termin\xE9",
      "ANNULE": "Annul\xE9"
    };
    return labels[status] || status;
  }
  getStatusBadgeClass(status) {
    const classes = {
      "PLANIFIE": "badge-accent",
      "EN_COURS": "badge-primary",
      "SUSPENDU": "badge-warning",
      "TERMINE": "badge-success",
      "ANNULE": "badge-error"
    };
    return classes[status] || "badge";
  }
  formatDate(dateStr) {
    if (!dateStr)
      return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" });
  }
  formatBudget(budget) {
    if (budget >= 1e9) {
      return (budget / 1e9).toFixed(1) + " Mds FCFA";
    } else if (budget >= 1e6) {
      return (budget / 1e6).toFixed(0) + " M FCFA";
    }
    return budget.toLocaleString("fr-FR") + " FCFA";
  }
  static \u0275fac = function ProjectsListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectsListComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectsListComponent, selectors: [["app-projects-list"]], decls: 19, vars: 2, consts: [[1, "bg-gradient-to-br", "from-primary-600", "to-primary-700", "text-white", "py-16"], [1, "container", "mx-auto", "px-4"], [1, "text-4xl", "font-bold", "mb-4"], [1, "text-primary-100", "text-lg", "max-w-2xl"], [1, "py-12", "bg-neutral-50"], [1, "card", "mb-8"], [1, "flex", "flex-col", "md:flex-row", "gap-4"], [1, "flex-1", "relative"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-5", "h-5", "text-neutral-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Rechercher un projet...", 1, "input", "pl-10", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn-primary", 3, "click"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-6"], [1, "text-center", "py-16"], [1, "card", "animate-pulse"], [1, "h-6", "bg-neutral-200", "rounded", "w-3/4", "mb-4"], [1, "h-4", "bg-neutral-200", "rounded", "w-full", "mb-2"], [1, "h-4", "bg-neutral-200", "rounded", "w-2/3"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "text-neutral-300", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"], [1, "text-lg", "font-medium", "text-neutral-700", "mb-2"], [1, "text-neutral-500"], [1, "card", "group", "cursor-pointer", 3, "routerLink"], [1, "flex", "justify-center", "mt-10"], [1, "flex", "items-start", "justify-between", "mb-4"], [1, "flex-1"], [1, "text-xl", "font-semibold", "text-neutral-900", "mt-2", "group-hover:text-primary-600", "transition-colors"], [1, "w-16", "h-16", "bg-primary-50", "rounded-xl", "flex", "items-center", "justify-center", "flex-shrink-0", "ml-4"], [1, "text-2xl", "font-bold", "text-primary-600"], [1, "text-neutral-500", "mb-4", "line-clamp-2"], [1, "w-full", "bg-neutral-200", "rounded-full", "h-2", "mb-4"], [1, "bg-primary-500", "h-2", "rounded-full", "transition-all", "duration-500"], [1, "flex", "flex-wrap", "items-center", "gap-4", "text-sm", "text-neutral-400"], [1, "flex", "items-center", "gap-1"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "flex", "items-center", "gap-2"], [1, "btn-ghost", "disabled:opacity-50", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "w-10", "h-10", 3, "class"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "w-10", "h-10", 3, "click"]], template: function ProjectsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Projets & Programmes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, " D\xE9couvrez les projets et programmes du minist\xE8re pour la transformation digitale du Burkina Faso. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "section", 4)(7, "div", 1)(8, "div", 5)(9, "div", 6)(10, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 8);
      \u0275\u0275element(12, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function ProjectsListComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function ProjectsListComponent_Template_input_keyup_enter_13_listener() {
        return ctx.search();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "button", 11);
      \u0275\u0275listener("click", function ProjectsListComponent_Template_button_click_14_listener() {
        return ctx.search();
      });
      \u0275\u0275text(15, " Rechercher ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(16, ProjectsListComponent_Conditional_16_Template, 3, 1, "div", 12)(17, ProjectsListComponent_Conditional_17_Template, 7, 0, "div", 13)(18, ProjectsListComponent_Conditional_18_Template, 4, 1);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 16 : ctx.projects().length === 0 ? 17 : 18);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectsListComponent, [{
    type: Component,
    args: [{
      selector: "app-projects-list",
      standalone: true,
      imports: [CommonModule, RouterModule, FormsModule],
      template: `
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4">Projets & Programmes</h1>
        <p class="text-primary-100 text-lg max-w-2xl">
          D\xE9couvrez les projets et programmes du minist\xE8re pour la transformation digitale du Burkina Faso.
        </p>
      </div>
    </section>
    
    <!-- Content -->
    <section class="py-12 bg-neutral-50">
      <div class="container mx-auto px-4">
        <!-- Search -->
        <div class="card mb-8">
          <div class="flex flex-col md:flex-row gap-4">
            <div class="flex-1 relative">
              <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <input 
                type="text" 
                [(ngModel)]="searchQuery"
                (keyup.enter)="search()"
                placeholder="Rechercher un projet..."
                class="input pl-10">
            </div>
            <button (click)="search()" class="btn-primary">
              Rechercher
            </button>
          </div>
        </div>
        
        <!-- Projects Grid -->
        @if (loading()) {
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            @for (i of [1,2,3,4]; track i) {
              <div class="card animate-pulse">
                <div class="h-6 bg-neutral-200 rounded w-3/4 mb-4"></div>
                <div class="h-4 bg-neutral-200 rounded w-full mb-2"></div>
                <div class="h-4 bg-neutral-200 rounded w-2/3"></div>
              </div>
            }
          </div>
        } @else if (projects().length === 0) {
          <div class="text-center py-16">
            <svg class="w-16 h-16 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
            <h3 class="text-lg font-medium text-neutral-700 mb-2">Aucun projet trouv\xE9</h3>
            <p class="text-neutral-500">Essayez de modifier vos crit\xE8res de recherche</p>
          </div>
        } @else {
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            @for (project of projects(); track project.id) {
              <a [routerLink]="['/projects', project.id]" class="card group cursor-pointer">
                <div class="flex items-start justify-between mb-4">
                  <div class="flex-1">
                    <span [class]="getStatusBadgeClass(project.status)">{{ getStatusLabel(project.status) }}</span>
                    <h3 class="text-xl font-semibold text-neutral-900 mt-2 group-hover:text-primary-600 transition-colors">
                      {{ project.name }}
                    </h3>
                  </div>
                  <div class="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0 ml-4">
                    <span class="text-2xl font-bold text-primary-600">{{ project.progressPercentage }}%</span>
                  </div>
                </div>
                <p class="text-neutral-500 mb-4 line-clamp-2">{{ project.description }}</p>
                <div class="w-full bg-neutral-200 rounded-full h-2 mb-4">
                  <div class="bg-primary-500 h-2 rounded-full transition-all duration-500" [style.width.%]="project.progressPercentage"></div>
                </div>
                <div class="flex flex-wrap items-center gap-4 text-sm text-neutral-400">
                  @if (project.partner) {
                    <span class="flex items-center gap-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                      {{ project.partner }}
                    </span>
                  }
                  @if (project.budget) {
                    <span class="flex items-center gap-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      {{ formatBudget(project.budget) }}
                    </span>
                  }
                  @if (project.endDate) {
                    <span class="flex items-center gap-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      {{ formatDate(project.endDate) }}
                    </span>
                  }
                </div>
              </a>
            }
          </div>
          
          <!-- Pagination -->
          @if (totalPages() > 1) {
            <div class="flex justify-center mt-10">
              <nav class="flex items-center gap-2">
                <button 
                  (click)="goToPage(currentPage() - 1)"
                  [disabled]="currentPage() === 0"
                  class="btn-ghost disabled:opacity-50">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
                @for (page of getPageNumbers(); track page) {
                  <button 
                    (click)="goToPage(page)"
                    [class]="page === currentPage() ? 'btn-primary' : 'btn-ghost'"
                    class="w-10 h-10">
                    {{ page + 1 }}
                  </button>
                }
                <button 
                  (click)="goToPage(currentPage() + 1)"
                  [disabled]="currentPage() === totalPages() - 1"
                  class="btn-ghost disabled:opacity-50">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </nav>
            </div>
          }
        }
      </div>
    </section>
  `
    }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectsListComponent, { className: "ProjectsListComponent", filePath: "src/app/features/projects/projects-list.component.ts", lineNumber: 150 });
})();
export {
  ProjectsListComponent
};
//# sourceMappingURL=chunk-6EQB2HMJ.js.map
