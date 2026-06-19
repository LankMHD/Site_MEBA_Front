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
  ɵɵproperty,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-WCAZC6LL.js";

// src/app/features/articles/article-detail.component.ts
function ArticleDetailComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2)(2, "div", 3);
    \u0275\u0275element(3, "div", 4)(4, "div", 5)(5, "div", 6);
    \u0275\u0275elementStart(6, "div", 7);
    \u0275\u0275element(7, "div", 8)(8, "div", 8)(9, "div", 9);
    \u0275\u0275elementEnd()()()();
  }
}
function ArticleDetailComponent_Conditional_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 19);
    \u0275\u0275element(2, "path", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.article().authorName, " ");
  }
}
function ArticleDetailComponent_Conditional_1_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "img", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.article().featuredImage, \u0275\u0275sanitizeUrl)("alt", ctx_r0.article().title);
  }
}
function ArticleDetailComponent_Conditional_1_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "p", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.article().summary);
  }
}
function ArticleDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 10)(1, "div", 2)(2, "div", 11)(3, "a", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 13);
    \u0275\u0275element(5, "path", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Retour aux actualit\xE9s ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "span", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h1", 16);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 17);
    \u0275\u0275conditionalCreate(12, ArticleDetailComponent_Conditional_1_Conditional_12_Template, 4, 1, "span", 18);
    \u0275\u0275elementStart(13, "span", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 19);
    \u0275\u0275element(15, "path", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "span", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 19);
    \u0275\u0275element(19, "path", 21)(20, "path", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "section", 23)(23, "div", 2)(24, "div", 24);
    \u0275\u0275conditionalCreate(25, ArticleDetailComponent_Conditional_1_Conditional_25_Template, 2, 2, "div", 25);
    \u0275\u0275conditionalCreate(26, ArticleDetailComponent_Conditional_1_Conditional_26_Template, 3, 1, "div", 26);
    \u0275\u0275elementStart(27, "article", 27);
    \u0275\u0275element(28, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 29)(30, "h3", 30);
    \u0275\u0275text(31, "Partager cet article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 31)(33, "button", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(34, "svg", 33);
    \u0275\u0275element(35, "path", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(36, "button", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 33);
    \u0275\u0275element(38, "path", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(39, "button", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(40, "svg", 33);
    \u0275\u0275element(41, "path", 36);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.getCategoryLabel(ctx_r0.article().category));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.article().title);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.article().authorName ? 12 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDate(ctx_r0.article().publishedAt || ctx_r0.article().createdAt), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.article().viewCount, " vues ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.article().featuredImage ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.article().summary ? 26 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", ctx_r0.formatContent(ctx_r0.article().content), \u0275\u0275sanitizeHtml);
  }
}
function ArticleDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 40);
    \u0275\u0275element(2, "path", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h2", 42);
    \u0275\u0275text(4, "Article non trouv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 43);
    \u0275\u0275text(6, "L'article que vous recherchez n'existe pas ou a \xE9t\xE9 supprim\xE9.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 44);
    \u0275\u0275text(8, "Voir toutes les actualit\xE9s");
    \u0275\u0275elementEnd()();
  }
}
var ArticleDetailComponent = class _ArticleDetailComponent {
  route;
  apiService;
  article = signal(null, ...ngDevMode ? [{ debugName: "article" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  constructor(route, apiService) {
    this.route = route;
    this.apiService = apiService;
  }
  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.loadArticle(+id);
    }
  }
  loadArticle(id) {
    this.apiService.getPublishedArticleById(id).subscribe({
      next: (response) => {
        if (response.success) {
          this.article.set(response.data);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
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
  formatContent(content) {
    if (!content)
      return "";
    return content.split("\n\n").map((p) => `<p>${p}</p>`).join("");
  }
  static \u0275fac = function ArticleDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ArticleDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArticleDetailComponent, selectors: [["app-article-detail"]], decls: 3, vars: 1, consts: [[1, "py-20"], [1, "py-20", "text-center"], [1, "container", "mx-auto", "px-4"], [1, "max-w-3xl", "mx-auto", "animate-pulse"], [1, "h-8", "bg-neutral-200", "rounded", "w-1/4", "mb-4"], [1, "h-12", "bg-neutral-200", "rounded", "w-3/4", "mb-6"], [1, "h-64", "bg-neutral-200", "rounded-xl", "mb-8"], [1, "space-y-4"], [1, "h-4", "bg-neutral-200", "rounded", "w-full"], [1, "h-4", "bg-neutral-200", "rounded", "w-2/3"], [1, "bg-gradient-to-br", "from-primary-600", "to-primary-700", "text-white", "py-12"], [1, "max-w-3xl"], ["routerLink", "/articles", 1, "inline-flex", "items-center", "text-primary-200", "hover:text-white", "mb-4", "transition-colors"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10 19l-7-7m0 0l7-7m-7 7h18"], [1, "badge", "bg-white/20", "text-white", "mb-4"], [1, "text-3xl", "lg:text-4xl", "font-bold", "mb-4"], [1, "flex", "flex-wrap", "items-center", "gap-4", "text-primary-200"], [1, "flex", "items-center", "gap-1"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], [1, "py-12", "bg-neutral-50"], [1, "max-w-3xl", "mx-auto"], [1, "rounded-xl", "overflow-hidden", "shadow-medium", "mb-8"], [1, "bg-primary-50", "border-l-4", "border-primary-500", "p-6", "rounded-r-xl", "mb-8"], [1, "prose", "prose-lg", "max-w-none"], [3, "innerHTML"], [1, "mt-12", "pt-8", "border-t", "border-neutral-200"], [1, "text-lg", "font-semibold", "text-neutral-900", "mb-4"], [1, "flex", "gap-3"], [1, "btn-ghost"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["d", "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"], ["d", "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"], ["d", "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], [1, "w-full", "h-auto", 3, "src", "alt"], [1, "text-primary-800", "text-lg", "font-medium"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "text-neutral-300", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-xl", "font-semibold", "text-neutral-700", "mb-2"], [1, "text-neutral-500", "mb-6"], ["routerLink", "/articles", 1, "btn-primary"]], template: function ArticleDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ArticleDetailComponent_Conditional_0_Template, 10, 0, "div", 0)(1, ArticleDetailComponent_Conditional_1_Template, 42, 8)(2, ArticleDetailComponent_Conditional_2_Template, 9, 0, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.loading() ? 0 : ctx.article() ? 1 : 2);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArticleDetailComponent, [{
    type: Component,
    args: [{
      selector: "app-article-detail",
      standalone: true,
      imports: [CommonModule, RouterModule],
      template: `
    @if (loading()) {
      <div class="py-20">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto animate-pulse">
            <div class="h-8 bg-neutral-200 rounded w-1/4 mb-4"></div>
            <div class="h-12 bg-neutral-200 rounded w-3/4 mb-6"></div>
            <div class="h-64 bg-neutral-200 rounded-xl mb-8"></div>
            <div class="space-y-4">
              <div class="h-4 bg-neutral-200 rounded w-full"></div>
              <div class="h-4 bg-neutral-200 rounded w-full"></div>
              <div class="h-4 bg-neutral-200 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    } @else if (article()) {
      <!-- Hero -->
      <section class="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-12">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl">
            <a routerLink="/articles" class="inline-flex items-center text-primary-200 hover:text-white mb-4 transition-colors">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Retour aux actualit\xE9s
            </a>
            <span class="badge bg-white/20 text-white mb-4">{{ getCategoryLabel(article()!.category) }}</span>
            <h1 class="text-3xl lg:text-4xl font-bold mb-4">{{ article()!.title }}</h1>
            <div class="flex flex-wrap items-center gap-4 text-primary-200">
              @if (article()!.authorName) {
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  {{ article()!.authorName }}
                </span>
              }
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                {{ formatDate(article()!.publishedAt || article()!.createdAt) }}
              </span>
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
                {{ article()!.viewCount }} vues
              </span>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Content -->
      <section class="py-12 bg-neutral-50">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto">
            @if (article()!.featuredImage) {
              <div class="rounded-xl overflow-hidden shadow-medium mb-8">
                <img [src]="article()!.featuredImage" [alt]="article()!.title" class="w-full h-auto">
              </div>
            }
            
            @if (article()!.summary) {
              <div class="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-xl mb-8">
                <p class="text-primary-800 text-lg font-medium">{{ article()!.summary }}</p>
              </div>
            }
            
            <article class="prose prose-lg max-w-none">
              <div [innerHTML]="formatContent(article()!.content)"></div>
            </article>
            
            <!-- Share -->
            <div class="mt-12 pt-8 border-t border-neutral-200">
              <h3 class="text-lg font-semibold text-neutral-900 mb-4">Partager cet article</h3>
              <div class="flex gap-3">
                <button class="btn-ghost">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button class="btn-ghost">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </button>
                <button class="btn-ghost">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    } @else {
      <div class="py-20 text-center">
        <svg class="w-16 h-16 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h2 class="text-xl font-semibold text-neutral-700 mb-2">Article non trouv\xE9</h2>
        <p class="text-neutral-500 mb-6">L'article que vous recherchez n'existe pas ou a \xE9t\xE9 supprim\xE9.</p>
        <a routerLink="/articles" class="btn-primary">Voir toutes les actualit\xE9s</a>
      </div>
    }
  `
    }]
  }], () => [{ type: ActivatedRoute }, { type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArticleDetailComponent, { className: "ArticleDetailComponent", filePath: "src/app/features/articles/article-detail.component.ts", lineNumber: 123 });
})();
export {
  ArticleDetailComponent
};
//# sourceMappingURL=chunk-CEUOSQ3E.js.map
