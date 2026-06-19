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
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WCAZC6LL.js";

// src/app/features/articles/articles-list.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6];
var _c1 = (a0) => ["/articles", a0];
var _forTrack0 = ($index, $item) => $item.id;
function ArticlesListComponent_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "div", 15)(2, "div", 16)(3, "div", 17)(4, "div", 18);
    \u0275\u0275elementEnd();
  }
}
function ArticlesListComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, ArticlesListComponent_Conditional_16_For_2_Template, 5, 0, "div", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function ArticlesListComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 19);
    \u0275\u0275element(2, "path", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 21);
    \u0275\u0275text(4, "Aucun article trouv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 22);
    \u0275\u0275text(6, "Essayez de modifier vos crit\xE8res de recherche");
    \u0275\u0275elementEnd()();
  }
}
function ArticlesListComponent_Conditional_18_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 26);
  }
  if (rf & 2) {
    const article_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", article_r1.featuredImage, \u0275\u0275sanitizeUrl)("alt", article_r1.title);
  }
}
function ArticlesListComponent_Conditional_18_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 27);
    \u0275\u0275element(1, "path", 20);
    \u0275\u0275elementEnd();
  }
}
function ArticlesListComponent_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 23)(1, "div", 25);
    \u0275\u0275conditionalCreate(2, ArticlesListComponent_Conditional_18_For_2_Conditional_2_Template, 1, 2, "img", 26)(3, ArticlesListComponent_Conditional_18_For_2_Conditional_3_Template, 2, 0, ":svg:svg", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3", 29);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 30);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 31)(11, "span", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 33);
    \u0275\u0275element(13, "path", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "span", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 33);
    \u0275\u0275element(17, "path", 35)(18, "path", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const article_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c1, article_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(article_r1.featuredImage ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getCategoryLabel(article_r1.category));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", article_r1.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(article_r1.summary);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(article_r1.publishedAt || article_r1.createdAt), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", article_r1.viewCount, " vues ");
  }
}
function ArticlesListComponent_Conditional_18_Conditional_3_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function ArticlesListComponent_Conditional_18_Conditional_3_For_6_Template_button_click_0_listener() {
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
function ArticlesListComponent_Conditional_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "nav", 37)(2, "button", 38);
    \u0275\u0275listener("click", function ArticlesListComponent_Conditional_18_Conditional_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage() - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 39);
    \u0275\u0275element(4, "path", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(5, ArticlesListComponent_Conditional_18_Conditional_3_For_6_Template, 2, 3, "button", 41, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "button", 38);
    \u0275\u0275listener("click", function ArticlesListComponent_Conditional_18_Conditional_3_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage() + 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 39);
    \u0275\u0275element(9, "path", 42);
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
function ArticlesListComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, ArticlesListComponent_Conditional_18_For_2_Template, 20, 9, "a", 23, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ArticlesListComponent_Conditional_18_Conditional_3_Template, 10, 2, "div", 24);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.articles());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.totalPages() > 1 ? 3 : -1);
  }
}
var ArticlesListComponent = class _ArticlesListComponent {
  apiService;
  articles = signal([], ...ngDevMode ? [{ debugName: "articles" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  currentPage = signal(0, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
  totalPages = signal(0, ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  searchQuery = "";
  constructor(apiService) {
    this.apiService = apiService;
  }
  ngOnInit() {
    this.loadArticles();
  }
  loadArticles() {
    this.loading.set(true);
    this.apiService.getPublishedArticles(this.currentPage(), 9).subscribe({
      next: (response) => {
        if (response.success) {
          this.articles.set(response.data.content);
          this.totalPages.set(response.data.totalPages);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  search() {
    if (!this.searchQuery.trim()) {
      this.loadArticles();
      return;
    }
    this.loading.set(true);
    this.apiService.searchArticles(this.searchQuery, 0, 9).subscribe({
      next: (response) => {
        if (response.success) {
          this.articles.set(response.data.content);
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
      this.loadArticles();
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
  getCategoryLabel(category) {
    const labels = {
      "ACTUALITE": "Actualit\xE9",
      "COMMUNIQUE": "Communiqu\xE9",
      "EVENEMENT": "\xC9v\xE9nement",
      "PROJET": "Projet",
      "RAPPORT": "Rapport",
      "DISCOURS": "Discours"
    };
    return labels[category] || category;
  }
  formatDate(dateStr) {
    if (!dateStr)
      return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
  }
  static \u0275fac = function ArticlesListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ArticlesListComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArticlesListComponent, selectors: [["app-articles-list"]], decls: 19, vars: 2, consts: [[1, "bg-gradient-to-br", "from-primary-600", "to-primary-700", "text-white", "py-16"], [1, "container", "mx-auto", "px-4"], [1, "text-4xl", "font-bold", "mb-4"], [1, "text-primary-100", "text-lg", "max-w-2xl"], [1, "py-12", "bg-neutral-50"], [1, "card", "mb-8"], [1, "flex", "flex-col", "md:flex-row", "gap-4"], [1, "flex-1", "relative"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-5", "h-5", "text-neutral-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Rechercher un article...", 1, "input", "pl-10", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn-primary", 3, "click"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], [1, "text-center", "py-16"], [1, "card", "animate-pulse"], [1, "h-48", "bg-neutral-200", "rounded-lg", "mb-4"], [1, "h-4", "bg-neutral-200", "rounded", "w-1/4", "mb-3"], [1, "h-6", "bg-neutral-200", "rounded", "w-3/4", "mb-2"], [1, "h-4", "bg-neutral-200", "rounded", "w-full"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "text-neutral-300", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"], [1, "text-lg", "font-medium", "text-neutral-700", "mb-2"], [1, "text-neutral-500"], [1, "card", "group", "cursor-pointer", 3, "routerLink"], [1, "flex", "justify-center", "mt-10"], [1, "h-48", "bg-gradient-to-br", "from-primary-100", "to-primary-50", "rounded-lg", "mb-4", "flex", "items-center", "justify-center", "overflow-hidden"], [1, "w-full", "h-full", "object-cover", "group-hover:scale-105", "transition-transform", "duration-300", 3, "src", "alt"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "text-primary-300"], [1, "badge-primary", "mb-3"], [1, "text-lg", "font-semibold", "text-neutral-900", "mb-2", "group-hover:text-primary-600", "transition-colors", "line-clamp-2"], [1, "text-neutral-500", "text-sm", "line-clamp-2", "mb-4"], [1, "flex", "items-center", "justify-between", "text-sm", "text-neutral-400"], [1, "flex", "items-center", "gap-1"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], [1, "flex", "items-center", "gap-2"], [1, "btn-ghost", "disabled:opacity-50", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "w-10", "h-10", 3, "class"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "w-10", "h-10", 3, "click"]], template: function ArticlesListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Actualit\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, " Retrouvez toutes les actualit\xE9s, communiqu\xE9s et \xE9v\xE9nements du Minist\xE8re de la Transition Digitale. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "section", 4)(7, "div", 1)(8, "div", 5)(9, "div", 6)(10, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 8);
      \u0275\u0275element(12, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function ArticlesListComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function ArticlesListComponent_Template_input_keyup_enter_13_listener() {
        return ctx.search();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "button", 11);
      \u0275\u0275listener("click", function ArticlesListComponent_Template_button_click_14_listener() {
        return ctx.search();
      });
      \u0275\u0275text(15, " Rechercher ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(16, ArticlesListComponent_Conditional_16_Template, 3, 1, "div", 12)(17, ArticlesListComponent_Conditional_17_Template, 7, 0, "div", 13)(18, ArticlesListComponent_Conditional_18_Template, 4, 1);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 16 : ctx.articles().length === 0 ? 17 : 18);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArticlesListComponent, [{
    type: Component,
    args: [{
      selector: "app-articles-list",
      standalone: true,
      imports: [CommonModule, RouterModule, FormsModule],
      template: `
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4">Actualit\xE9s</h1>
        <p class="text-primary-100 text-lg max-w-2xl">
          Retrouvez toutes les actualit\xE9s, communiqu\xE9s et \xE9v\xE9nements du Minist\xE8re de la Transition Digitale.
        </p>
      </div>
    </section>
    
    <!-- Content -->
    <section class="py-12 bg-neutral-50">
      <div class="container mx-auto px-4">
        <!-- Search & Filter -->
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
                placeholder="Rechercher un article..."
                class="input pl-10">
            </div>
            <button (click)="search()" class="btn-primary">
              Rechercher
            </button>
          </div>
        </div>
        
        <!-- Articles Grid -->
        @if (loading()) {
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            @for (i of [1,2,3,4,5,6]; track i) {
              <div class="card animate-pulse">
                <div class="h-48 bg-neutral-200 rounded-lg mb-4"></div>
                <div class="h-4 bg-neutral-200 rounded w-1/4 mb-3"></div>
                <div class="h-6 bg-neutral-200 rounded w-3/4 mb-2"></div>
                <div class="h-4 bg-neutral-200 rounded w-full"></div>
              </div>
            }
          </div>
        } @else if (articles().length === 0) {
          <div class="text-center py-16">
            <svg class="w-16 h-16 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
            </svg>
            <h3 class="text-lg font-medium text-neutral-700 mb-2">Aucun article trouv\xE9</h3>
            <p class="text-neutral-500">Essayez de modifier vos crit\xE8res de recherche</p>
          </div>
        } @else {
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            @for (article of articles(); track article.id) {
              <a [routerLink]="['/articles', article.id]" class="card group cursor-pointer">
                <div class="h-48 bg-gradient-to-br from-primary-100 to-primary-50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  @if (article.featuredImage) {
                    <img [src]="article.featuredImage" [alt]="article.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                  } @else {
                    <svg class="w-16 h-16 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                    </svg>
                  }
                </div>
                <span class="badge-primary mb-3">{{ getCategoryLabel(article.category) }}</span>
                <h3 class="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {{ article.title }}
                </h3>
                <p class="text-neutral-500 text-sm line-clamp-2 mb-4">{{ article.summary }}</p>
                <div class="flex items-center justify-between text-sm text-neutral-400">
                  <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    {{ formatDate(article.publishedAt || article.createdAt) }}
                  </span>
                  <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                    {{ article.viewCount }} vues
                  </span>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArticlesListComponent, { className: "ArticlesListComponent", filePath: "src/app/features/articles/articles-list.component.ts", lineNumber: 139 });
})();
export {
  ArticlesListComponent
};
//# sourceMappingURL=chunk-TV2D32QA.js.map
