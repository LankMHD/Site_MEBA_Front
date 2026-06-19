import {
  DocumentCategory
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

// src/app/features/admin/documents/admin-documents.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminDocumentsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementEnd();
  }
}
function AdminDocumentsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 12);
    \u0275\u0275element(2, "path", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 3);
    \u0275\u0275text(4, "Aucun document pour le moment");
    \u0275\u0275elementEnd()();
  }
}
function AdminDocumentsComponent_Conditional_14_For_16_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "Oui");
    \u0275\u0275elementEnd();
  }
}
function AdminDocumentsComponent_Conditional_14_For_16_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "Non");
    \u0275\u0275elementEnd();
  }
}
function AdminDocumentsComponent_Conditional_14_For_16_Template(rf, ctx) {
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
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275conditionalCreate(11, AdminDocumentsComponent_Conditional_14_For_16_Conditional_11_Template, 2, 0, "span", 20)(12, AdminDocumentsComponent_Conditional_14_For_16_Conditional_12_Template, 2, 0, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 22);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 15)(16, "div", 23)(17, "button", 24);
    \u0275\u0275listener("click", function AdminDocumentsComponent_Conditional_14_For_16_Template_button_click_17_listener() {
      const doc_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editDocument(doc_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 25);
    \u0275\u0275element(19, "path", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "button", 27);
    \u0275\u0275listener("click", function AdminDocumentsComponent_Conditional_14_For_16_Template_button_click_20_listener() {
      const doc_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteDocument(doc_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 25);
    \u0275\u0275element(22, "path", 28);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const doc_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(doc_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(doc_r2.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getCategoryLabel(doc_r2.category));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(doc_r2.isPublic ? 11 : 12);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(doc_r2.createdAt));
  }
}
function AdminDocumentsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "table", 14)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Titre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Public");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 15);
    \u0275\u0275text(13, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, AdminDocumentsComponent_Conditional_14_For_16_Template, 23, 5, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r2.documents());
  }
}
function AdminDocumentsComponent_Conditional_15_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 53);
  }
}
function AdminDocumentsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 29)(2, "div", 30)(3, "h2", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 32);
    \u0275\u0275listener("ngSubmit", function AdminDocumentsComponent_Conditional_15_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveDocument());
    });
    \u0275\u0275elementStart(6, "div")(7, "label", 33);
    \u0275\u0275text(8, "Titre ");
    \u0275\u0275elementStart(9, "span", 34);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDocumentsComponent_Conditional_15_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.title, $event) || (ctx_r2.form.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "label", 33);
    \u0275\u0275text(14, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "textarea", 36);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDocumentsComponent_Conditional_15_Template_textarea_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.description, $event) || (ctx_r2.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "label", 33);
    \u0275\u0275text(18, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 37);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDocumentsComponent_Conditional_15_Template_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.category, $event) || (ctx_r2.form.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(20, "option", 38);
    \u0275\u0275text(21, "Rapport");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 39);
    \u0275\u0275text(23, "Loi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 40);
    \u0275\u0275text(25, "D\xE9cret");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 41);
    \u0275\u0275text(27, "Arr\xEAt\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 42);
    \u0275\u0275text(29, "Circulaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 43);
    \u0275\u0275text(31, "Formulaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 44);
    \u0275\u0275text(33, "Guide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 45);
    \u0275\u0275text(35, "Autre");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div")(37, "label", 33);
    \u0275\u0275text(38, "URL du fichier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDocumentsComponent_Conditional_15_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.fileUrl, $event) || (ctx_r2.form.fileUrl = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 47)(41, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDocumentsComponent_Conditional_15_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.isPublic, $event) || (ctx_r2.form.isPublic = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "label", 49);
    \u0275\u0275text(43, "Document public");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 50)(45, "button", 51);
    \u0275\u0275listener("click", function AdminDocumentsComponent_Conditional_15_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(46, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 52);
    \u0275\u0275conditionalCreate(48, AdminDocumentsComponent_Conditional_15_Conditional_48_Template, 1, 0, "div", 53);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.editingDocument() ? "Modifier le document" : "Nouveau document");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.description);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.category);
    \u0275\u0275advance(20);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.fileUrl);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.isPublic);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r2.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.saving() ? 48 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.editingDocument() ? "Mettre \xE0 jour" : "Cr\xE9er", " ");
  }
}
var AdminDocumentsComponent = class _AdminDocumentsComponent {
  apiService;
  documents = signal([], ...ngDevMode ? [{ debugName: "documents" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  showModal = signal(false, ...ngDevMode ? [{ debugName: "showModal" }] : []);
  editingDocument = signal(null, ...ngDevMode ? [{ debugName: "editingDocument" }] : []);
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  form = { title: "", description: "", category: DocumentCategory.RAPPORT, fileUrl: "", isPublic: true };
  constructor(apiService) {
    this.apiService = apiService;
  }
  ngOnInit() {
    this.loadDocuments();
  }
  loadDocuments() {
    this.apiService.getAllDocuments(0, 50).subscribe({
      next: (response) => {
        if (response.success)
          this.documents.set(response.data.content);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  openModal() {
    this.form = { title: "", description: "", category: DocumentCategory.RAPPORT, fileUrl: "", isPublic: true };
    this.editingDocument.set(null);
    this.showModal.set(true);
  }
  closeModal() {
    this.showModal.set(false);
    this.editingDocument.set(null);
  }
  editDocument(doc) {
    this.form = { title: doc.title, description: doc.description || "", category: doc.category, fileUrl: doc.fileUrl || "", isPublic: doc.isPublic };
    this.editingDocument.set(doc);
    this.showModal.set(true);
  }
  saveDocument() {
    if (!this.form.title)
      return;
    this.saving.set(true);
    const editing = this.editingDocument();
    const request = editing ? this.apiService.updateDocument(editing.id, this.form) : this.apiService.createDocument(this.form);
    request.subscribe({
      next: (response) => {
        if (response.success) {
          this.loadDocuments();
          this.closeModal();
        }
        this.saving.set(false);
      },
      error: () => this.saving.set(false)
    });
  }
  deleteDocument(doc) {
    if (confirm(`Supprimer le document "${doc.title}" ?`)) {
      this.apiService.deleteDocument(doc.id).subscribe({ next: () => this.loadDocuments() });
    }
  }
  getCategoryLabel(category) {
    const labels = { "RAPPORT": "Rapport", "LOI": "Loi", "DECRET": "D\xE9cret", "ARRETE": "Arr\xEAt\xE9", "CIRCULAIRE": "Circulaire", "FORMULAIRE": "Formulaire", "GUIDE": "Guide", "AUTRE": "Autre" };
    return labels[category] || category;
  }
  formatDate(dateStr) {
    return dateStr ? new Date(dateStr).toLocaleDateString("fr-FR") : "";
  }
  static \u0275fac = function AdminDocumentsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminDocumentsComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDocumentsComponent, selectors: [["app-admin-documents"]], decls: 16, vars: 2, consts: [[1, "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-4"], [1, "text-2xl", "font-bold", "text-neutral-900"], [1, "text-neutral-500"], [1, "btn-primary", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6v6m0 0v6m0-6h6m-6 0H6"], [1, "card", "p-0"], [1, "p-8", "text-center"], [1, "table-container"], [1, "fixed", "inset-0", "bg-black/50", "flex", "items-center", "justify-center", "z-50", "p-4"], [1, "spinner", "w-8", "h-8", "mx-auto"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-neutral-300", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"], [1, "table"], [1, "text-right"], [1, "max-w-xs"], [1, "font-medium", "text-neutral-900", "truncate"], [1, "text-xs", "text-neutral-400", "truncate"], [1, "badge-primary"], [1, "badge-success"], [1, "badge", "bg-neutral-100", "text-neutral-600"], [1, "text-sm", "text-neutral-500"], [1, "flex", "justify-end", "gap-2"], ["title", "Modifier", 1, "btn-ghost", "p-2", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["title", "Supprimer", 1, "btn-ghost", "p-2", "text-secondary-500", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "bg-white", "rounded-2xl", "shadow-xl", "w-full", "max-w-lg", "max-h-[90vh]", "overflow-y-auto"], [1, "p-6", "border-b", "border-neutral-200"], [1, "text-xl", "font-semibold", "text-neutral-900"], [1, "p-6", "space-y-5", 3, "ngSubmit"], [1, "label"], [1, "text-secondary-500"], ["type", "text", "name", "title", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], ["name", "description", "rows", "2", 1, "input", "resize-none", 3, "ngModelChange", "ngModel"], ["name", "category", 1, "input", 3, "ngModelChange", "ngModel"], ["value", "RAPPORT"], ["value", "LOI"], ["value", "DECRET"], ["value", "ARRETE"], ["value", "CIRCULAIRE"], ["value", "FORMULAIRE"], ["value", "GUIDE"], ["value", "AUTRE"], ["type", "url", "name", "fileUrl", "placeholder", "https://...", 1, "input", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "gap-2"], ["type", "checkbox", "name", "isPublic", "id", "isPublic", 1, "rounded", "border-neutral-300", "text-primary-500", "focus:ring-primary-500", 3, "ngModelChange", "ngModel"], ["for", "isPublic", 1, "text-sm", "text-neutral-700"], [1, "flex", "justify-end", "gap-3", "pt-4", "border-t", "border-neutral-200"], ["type", "button", 1, "btn-ghost", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "spinner", "w-4", "h-4", "mr-2"]], template: function AdminDocumentsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Documents");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "G\xE9rez les ressources documentaires");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function AdminDocumentsComponent_Template_button_click_7_listener() {
        return ctx.openModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 5);
      \u0275\u0275element(9, "path", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " Nouveau document ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "div", 7);
      \u0275\u0275conditionalCreate(12, AdminDocumentsComponent_Conditional_12_Template, 2, 0, "div", 8)(13, AdminDocumentsComponent_Conditional_13_Template, 5, 0, "div", 8)(14, AdminDocumentsComponent_Conditional_14_Template, 17, 0, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(15, AdminDocumentsComponent_Conditional_15_Template, 50, 9, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.loading() ? 12 : ctx.documents().length === 0 ? 13 : 14);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showModal() ? 15 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDocumentsComponent, [{
    type: Component,
    args: [{
      selector: "app-admin-documents",
      standalone: true,
      imports: [CommonModule, FormsModule],
      template: `
    <div class="space-y-6">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 class="text-2xl font-bold text-neutral-900">Documents</h1>
          <p class="text-neutral-500">G\xE9rez les ressources documentaires</p>
        </div>
        <button (click)="openModal()" class="btn-primary">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Nouveau document
        </button>
      </div>
      
      <div class="card p-0">
        @if (loading()) {
          <div class="p-8 text-center"><div class="spinner w-8 h-8 mx-auto"></div></div>
        } @else if (documents().length === 0) {
          <div class="p-8 text-center">
            <svg class="w-12 h-12 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
            <p class="text-neutral-500">Aucun document pour le moment</p>
          </div>
        } @else {
          <div class="table-container">
            <table class="table">
              <thead>
                <tr>
                  <th>Titre</th>
                  <th>Cat\xE9gorie</th>
                  <th>Public</th>
                  <th>Date</th>
                  <th class="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                @for (doc of documents(); track doc.id) {
                  <tr>
                    <td>
                      <div class="max-w-xs">
                        <p class="font-medium text-neutral-900 truncate">{{ doc.title }}</p>
                        <p class="text-xs text-neutral-400 truncate">{{ doc.description }}</p>
                      </div>
                    </td>
                    <td><span class="badge-primary">{{ getCategoryLabel(doc.category) }}</span></td>
                    <td>
                      @if (doc.isPublic) {
                        <span class="badge-success">Oui</span>
                      } @else {
                        <span class="badge bg-neutral-100 text-neutral-600">Non</span>
                      }
                    </td>
                    <td class="text-sm text-neutral-500">{{ formatDate(doc.createdAt) }}</td>
                    <td class="text-right">
                      <div class="flex justify-end gap-2">
                        <button (click)="editDocument(doc)" class="btn-ghost p-2" title="Modifier">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                          </svg>
                        </button>
                        <button (click)="deleteDocument(doc)" class="btn-ghost p-2 text-secondary-500" title="Supprimer">
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
      
      @if (showModal()) {
        <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div class="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div class="p-6 border-b border-neutral-200">
              <h2 class="text-xl font-semibold text-neutral-900">{{ editingDocument() ? 'Modifier le document' : 'Nouveau document' }}</h2>
            </div>
            <form (ngSubmit)="saveDocument()" class="p-6 space-y-5">
              <div>
                <label class="label">Titre <span class="text-secondary-500">*</span></label>
                <input type="text" [(ngModel)]="form.title" name="title" class="input" required>
              </div>
              <div>
                <label class="label">Description</label>
                <textarea [(ngModel)]="form.description" name="description" rows="2" class="input resize-none"></textarea>
              </div>
              <div>
                <label class="label">Cat\xE9gorie</label>
                <select [(ngModel)]="form.category" name="category" class="input">
                  <option value="RAPPORT">Rapport</option>
                  <option value="LOI">Loi</option>
                  <option value="DECRET">D\xE9cret</option>
                  <option value="ARRETE">Arr\xEAt\xE9</option>
                  <option value="CIRCULAIRE">Circulaire</option>
                  <option value="FORMULAIRE">Formulaire</option>
                  <option value="GUIDE">Guide</option>
                  <option value="AUTRE">Autre</option>
                </select>
              </div>
              <div>
                <label class="label">URL du fichier</label>
                <input type="url" [(ngModel)]="form.fileUrl" name="fileUrl" class="input" placeholder="https://...">
              </div>
              <div class="flex items-center gap-2">
                <input type="checkbox" [(ngModel)]="form.isPublic" name="isPublic" id="isPublic" class="rounded border-neutral-300 text-primary-500 focus:ring-primary-500">
                <label for="isPublic" class="text-sm text-neutral-700">Document public</label>
              </div>
              <div class="flex justify-end gap-3 pt-4 border-t border-neutral-200">
                <button type="button" (click)="closeModal()" class="btn-ghost">Annuler</button>
                <button type="submit" [disabled]="saving()" class="btn-primary">
                  @if (saving()) { <div class="spinner w-4 h-4 mr-2"></div> }
                  {{ editingDocument() ? 'Mettre \xE0 jour' : 'Cr\xE9er' }}
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDocumentsComponent, { className: "AdminDocumentsComponent", filePath: "src/app/features/admin/documents/admin-documents.component.ts", lineNumber: 138 });
})();
export {
  AdminDocumentsComponent
};
//# sourceMappingURL=chunk-PP37XJI3.js.map
