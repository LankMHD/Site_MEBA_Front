import {
  ArticleCategory,
  ArticleStatus
} from "./chunk-KUQWF5HF.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WCAZC6LL.js";

// src/app/features/admin/articles/admin-articles.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminArticlesComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementEnd();
  }
}
function AdminArticlesComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 12);
    \u0275\u0275element(2, "path", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 3);
    \u0275\u0275text(4, "Aucun article pour le moment");
    \u0275\u0275elementEnd()();
  }
}
function AdminArticlesComponent_Conditional_14_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 16)(3, "p", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td")(8, "span", 19);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 20);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 15)(18, "div", 21)(19, "button", 22);
    \u0275\u0275listener("click", function AdminArticlesComponent_Conditional_14_For_18_Template_button_click_19_listener() {
      const article_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editArticle(article_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 23);
    \u0275\u0275element(21, "path", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "button", 25);
    \u0275\u0275listener("click", function AdminArticlesComponent_Conditional_14_For_18_Template_button_click_22_listener() {
      const article_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteArticle(article_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 23);
    \u0275\u0275element(24, "path", 26);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const article_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(article_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(article_r2.summary);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getCategoryLabel(article_r2.category));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.getStatusBadgeClass(article_r2.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getStatusLabel(article_r2.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(article_r2.viewCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(article_r2.createdAt));
  }
}
function AdminArticlesComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "table", 14)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Titre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Vues");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 15);
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, AdminArticlesComponent_Conditional_14_For_18_Template, 25, 8, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r2.articles());
  }
}
function AdminArticlesComponent_Conditional_15_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 55);
  }
}
function AdminArticlesComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 27)(2, "div", 28)(3, "h2", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 30);
    \u0275\u0275listener("ngSubmit", function AdminArticlesComponent_Conditional_15_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveArticle());
    });
    \u0275\u0275elementStart(6, "div")(7, "label", 31);
    \u0275\u0275text(8, "Titre ");
    \u0275\u0275elementStart(9, "span", 32);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function AdminArticlesComponent_Conditional_15_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.title, $event) || (ctx_r2.form.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "label", 31);
    \u0275\u0275text(14, "R\xE9sum\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "textarea", 34);
    \u0275\u0275twoWayListener("ngModelChange", function AdminArticlesComponent_Conditional_15_Template_textarea_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.summary, $event) || (ctx_r2.form.summary = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "label", 31);
    \u0275\u0275text(18, "Contenu ");
    \u0275\u0275elementStart(19, "span", 32);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "textarea", 35);
    \u0275\u0275twoWayListener("ngModelChange", function AdminArticlesComponent_Conditional_15_Template_textarea_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.content, $event) || (ctx_r2.form.content = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 36)(23, "div")(24, "label", 31);
    \u0275\u0275text(25, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 37);
    \u0275\u0275twoWayListener("ngModelChange", function AdminArticlesComponent_Conditional_15_Template_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.category, $event) || (ctx_r2.form.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(27, "option", 38);
    \u0275\u0275text(28, "Actualit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 39);
    \u0275\u0275text(30, "Communiqu\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 40);
    \u0275\u0275text(32, "\xC9v\xE9nement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 41);
    \u0275\u0275text(34, "Projet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 42);
    \u0275\u0275text(36, "Rapport");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 43);
    \u0275\u0275text(38, "Discours");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div")(40, "label", 31);
    \u0275\u0275text(41, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "select", 44);
    \u0275\u0275twoWayListener("ngModelChange", function AdminArticlesComponent_Conditional_15_Template_select_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.status, $event) || (ctx_r2.form.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(43, "option", 45);
    \u0275\u0275text(44, "Brouillon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "option", 46);
    \u0275\u0275text(46, "En attente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "option", 47);
    \u0275\u0275text(48, "Publi\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "option", 48);
    \u0275\u0275text(50, "Archiv\xE9");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(51, "div", 49)(52, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function AdminArticlesComponent_Conditional_15_Template_input_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.featured, $event) || (ctx_r2.form.featured = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "label", 51);
    \u0275\u0275text(54, "Mettre en avant");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 52)(56, "button", 53);
    \u0275\u0275listener("click", function AdminArticlesComponent_Conditional_15_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(57, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "button", 54);
    \u0275\u0275conditionalCreate(59, AdminArticlesComponent_Conditional_15_Conditional_59_Template, 1, 0, "div", 55);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.editingArticle() ? "Modifier l'article" : "Nouvel article", " ");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.summary);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.content);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.category);
    \u0275\u0275advance(16);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.status);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.featured);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r2.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.saving() ? 59 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.editingArticle() ? "Mettre \xE0 jour" : "Cr\xE9er", " ");
  }
}
var AdminArticlesComponent = class _AdminArticlesComponent {
  apiService;
  articles = signal([], ...ngDevMode ? [{ debugName: "articles" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  showModal = signal(false, ...ngDevMode ? [{ debugName: "showModal" }] : []);
  editingArticle = signal(null, ...ngDevMode ? [{ debugName: "editingArticle" }] : []);
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  form = {
    title: "",
    summary: "",
    content: "",
    category: ArticleCategory.ACTUALITE,
    status: ArticleStatus.DRAFT,
    featured: false
  };
  constructor(apiService) {
    this.apiService = apiService;
  }
  ngOnInit() {
    this.loadArticles();
  }
  loadArticles() {
    this.apiService.getAllArticles(0, 50).subscribe({
      next: (response) => {
        if (response.success) {
          this.articles.set(response.data.content);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  openModal() {
    this.form = { title: "", summary: "", content: "", category: ArticleCategory.ACTUALITE, status: ArticleStatus.DRAFT, featured: false };
    this.editingArticle.set(null);
    this.showModal.set(true);
  }
  closeModal() {
    this.showModal.set(false);
    this.editingArticle.set(null);
  }
  editArticle(article) {
    this.form = {
      title: article.title,
      summary: article.summary || "",
      content: article.content,
      category: article.category,
      status: article.status,
      featured: article.featured
    };
    this.editingArticle.set(article);
    this.showModal.set(true);
  }
  saveArticle() {
    if (!this.form.title || !this.form.content)
      return;
    this.saving.set(true);
    const editing = this.editingArticle();
    const request = editing ? this.apiService.updateArticle(editing.id, this.form) : this.apiService.createArticle(this.form);
    request.subscribe({
      next: (response) => {
        if (response.success) {
          this.loadArticles();
          this.closeModal();
        }
        this.saving.set(false);
      },
      error: () => this.saving.set(false)
    });
  }
  deleteArticle(article) {
    if (confirm(`Supprimer l'article "${article.title}" ?`)) {
      this.apiService.deleteArticle(article.id).subscribe({
        next: () => this.loadArticles()
      });
    }
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
  getStatusLabel(status) {
    const labels = {
      "DRAFT": "Brouillon",
      "PENDING": "En attente",
      "PUBLISHED": "Publi\xE9",
      "ARCHIVED": "Archiv\xE9"
    };
    return labels[status] || status;
  }
  getStatusBadgeClass(status) {
    const classes = {
      "DRAFT": "badge bg-neutral-100 text-neutral-600",
      "PENDING": "badge-warning",
      "PUBLISHED": "badge-success",
      "ARCHIVED": "badge bg-neutral-100 text-neutral-600"
    };
    return classes[status] || "badge";
  }
  formatDate(dateStr) {
    if (!dateStr)
      return "";
    return new Date(dateStr).toLocaleDateString("fr-FR");
  }
  static \u0275fac = function AdminArticlesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminArticlesComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminArticlesComponent, selectors: [["app-admin-articles"]], decls: 16, vars: 2, consts: [[1, "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-4"], [1, "text-2xl", "font-bold", "text-neutral-900"], [1, "text-neutral-500"], [1, "btn-primary", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6v6m0 0v6m0-6h6m-6 0H6"], [1, "card", "p-0"], [1, "p-8", "text-center"], [1, "table-container"], [1, "fixed", "inset-0", "bg-black/50", "flex", "items-center", "justify-center", "z-50", "p-4"], [1, "spinner", "w-8", "h-8", "mx-auto"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-neutral-300", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"], [1, "table"], [1, "text-right"], [1, "max-w-xs"], [1, "font-medium", "text-neutral-900", "truncate"], [1, "text-xs", "text-neutral-400", "truncate"], [1, "badge-primary"], [1, "text-sm", "text-neutral-500"], [1, "flex", "justify-end", "gap-2"], ["title", "Modifier", 1, "btn-ghost", "p-2", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["title", "Supprimer", 1, "btn-ghost", "p-2", "text-secondary-500", "hover:text-secondary-600", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "bg-white", "rounded-2xl", "shadow-xl", "w-full", "max-w-2xl", "max-h-[90vh]", "overflow-y-auto"], [1, "p-6", "border-b", "border-neutral-200"], [1, "text-xl", "font-semibold", "text-neutral-900"], [1, "p-6", "space-y-5", 3, "ngSubmit"], [1, "label"], [1, "text-secondary-500"], ["type", "text", "name", "title", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], ["name", "summary", "rows", "2", 1, "input", "resize-none", 3, "ngModelChange", "ngModel"], ["name", "content", "rows", "6", "required", "", 1, "input", "resize-none", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-2", "gap-4"], ["name", "category", 1, "input", 3, "ngModelChange", "ngModel"], ["value", "ACTUALITE"], ["value", "COMMUNIQUE"], ["value", "EVENEMENT"], ["value", "PROJET"], ["value", "RAPPORT"], ["value", "DISCOURS"], ["name", "status", 1, "input", 3, "ngModelChange", "ngModel"], ["value", "DRAFT"], ["value", "PENDING"], ["value", "PUBLISHED"], ["value", "ARCHIVED"], [1, "flex", "items-center", "gap-2"], ["type", "checkbox", "name", "featured", "id", "featured", 1, "rounded", "border-neutral-300", "text-primary-500", "focus:ring-primary-500", 3, "ngModelChange", "ngModel"], ["for", "featured", 1, "text-sm", "text-neutral-700"], [1, "flex", "justify-end", "gap-3", "pt-4", "border-t", "border-neutral-200"], ["type", "button", 1, "btn-ghost", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "spinner", "w-4", "h-4", "mr-2"]], template: function AdminArticlesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Articles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "G\xE9rez les actualit\xE9s et communiqu\xE9s");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function AdminArticlesComponent_Template_button_click_7_listener() {
        return ctx.openModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 5);
      \u0275\u0275element(9, "path", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " Nouvel article ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "div", 7);
      \u0275\u0275conditionalCreate(12, AdminArticlesComponent_Conditional_12_Template, 2, 0, "div", 8)(13, AdminArticlesComponent_Conditional_13_Template, 5, 0, "div", 8)(14, AdminArticlesComponent_Conditional_14_Template, 19, 0, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(15, AdminArticlesComponent_Conditional_15_Template, 61, 10, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.loading() ? 12 : ctx.articles().length === 0 ? 13 : 14);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showModal() ? 15 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminArticlesComponent, [{
    type: Component,
    args: [{
      selector: "app-admin-articles",
      standalone: true,
      imports: [CommonModule, FormsModule],
      template: `
    <div class="space-y-6">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 class="text-2xl font-bold text-neutral-900">Articles</h1>
          <p class="text-neutral-500">G\xE9rez les actualit\xE9s et communiqu\xE9s</p>
        </div>
        <button (click)="openModal()" class="btn-primary">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Nouvel article
        </button>
      </div>
      
      <!-- Table -->
      <div class="card p-0">
        @if (loading()) {
          <div class="p-8 text-center">
            <div class="spinner w-8 h-8 mx-auto"></div>
          </div>
        } @else if (articles().length === 0) {
          <div class="p-8 text-center">
            <svg class="w-12 h-12 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
            </svg>
            <p class="text-neutral-500">Aucun article pour le moment</p>
          </div>
        } @else {
          <div class="table-container">
            <table class="table">
              <thead>
                <tr>
                  <th>Titre</th>
                  <th>Cat\xE9gorie</th>
                  <th>Statut</th>
                  <th>Vues</th>
                  <th>Date</th>
                  <th class="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                @for (article of articles(); track article.id) {
                  <tr>
                    <td>
                      <div class="max-w-xs">
                        <p class="font-medium text-neutral-900 truncate">{{ article.title }}</p>
                        <p class="text-xs text-neutral-400 truncate">{{ article.summary }}</p>
                      </div>
                    </td>
                    <td><span class="badge-primary">{{ getCategoryLabel(article.category) }}</span></td>
                    <td><span [class]="getStatusBadgeClass(article.status)">{{ getStatusLabel(article.status) }}</span></td>
                    <td>{{ article.viewCount }}</td>
                    <td class="text-sm text-neutral-500">{{ formatDate(article.createdAt) }}</td>
                    <td class="text-right">
                      <div class="flex justify-end gap-2">
                        <button (click)="editArticle(article)" class="btn-ghost p-2" title="Modifier">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                          </svg>
                        </button>
                        <button (click)="deleteArticle(article)" class="btn-ghost p-2 text-secondary-500 hover:text-secondary-600" title="Supprimer">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }
      </div>
      
      <!-- Modal -->
      @if (showModal()) {
        <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div class="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div class="p-6 border-b border-neutral-200">
              <h2 class="text-xl font-semibold text-neutral-900">
                {{ editingArticle() ? 'Modifier l\\'article' : 'Nouvel article' }}
              </h2>
            </div>
            
            <form (ngSubmit)="saveArticle()" class="p-6 space-y-5">
              <div>
                <label class="label">Titre <span class="text-secondary-500">*</span></label>
                <input type="text" [(ngModel)]="form.title" name="title" class="input" required>
              </div>
              
              <div>
                <label class="label">R\xE9sum\xE9</label>
                <textarea [(ngModel)]="form.summary" name="summary" rows="2" class="input resize-none"></textarea>
              </div>
              
              <div>
                <label class="label">Contenu <span class="text-secondary-500">*</span></label>
                <textarea [(ngModel)]="form.content" name="content" rows="6" class="input resize-none" required></textarea>
              </div>
              
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="label">Cat\xE9gorie</label>
                  <select [(ngModel)]="form.category" name="category" class="input">
                    <option value="ACTUALITE">Actualit\xE9</option>
                    <option value="COMMUNIQUE">Communiqu\xE9</option>
                    <option value="EVENEMENT">\xC9v\xE9nement</option>
                    <option value="PROJET">Projet</option>
                    <option value="RAPPORT">Rapport</option>
                    <option value="DISCOURS">Discours</option>
                  </select>
                </div>
                <div>
                  <label class="label">Statut</label>
                  <select [(ngModel)]="form.status" name="status" class="input">
                    <option value="DRAFT">Brouillon</option>
                    <option value="PENDING">En attente</option>
                    <option value="PUBLISHED">Publi\xE9</option>
                    <option value="ARCHIVED">Archiv\xE9</option>
                  </select>
                </div>
              </div>
              
              <div class="flex items-center gap-2">
                <input type="checkbox" [(ngModel)]="form.featured" name="featured" id="featured" class="rounded border-neutral-300 text-primary-500 focus:ring-primary-500">
                <label for="featured" class="text-sm text-neutral-700">Mettre en avant</label>
              </div>
              
              <div class="flex justify-end gap-3 pt-4 border-t border-neutral-200">
                <button type="button" (click)="closeModal()" class="btn-ghost">Annuler</button>
                <button type="submit" [disabled]="saving()" class="btn-primary">
                  @if (saving()) {
                    <div class="spinner w-4 h-4 mr-2"></div>
                  }
                  {{ editingArticle() ? 'Mettre \xE0 jour' : 'Cr\xE9er' }}
                </button>
              </div>
            </form>
          </div>
        </div>
      }
    </div>
  `
    }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminArticlesComponent, { className: "AdminArticlesComponent", filePath: "src/app/features/admin/articles/admin-articles.component.ts", lineNumber: 158 });
})();
export {
  AdminArticlesComponent
};
//# sourceMappingURL=chunk-SXNHADYV.js.map
