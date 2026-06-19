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
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WCAZC6LL.js";

// src/app/features/documents/documents-list.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6];
var _forTrack0 = ($index, $item) => $item.id;
function DocumentsListComponent_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "div", 15)(2, "div", 16)(3, "div", 17);
    \u0275\u0275elementEnd();
  }
}
function DocumentsListComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, DocumentsListComponent_Conditional_16_For_2_Template, 4, 0, "div", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function DocumentsListComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 18);
    \u0275\u0275element(2, "path", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 20);
    \u0275\u0275text(4, "Aucun document trouv\xE9");
    \u0275\u0275elementEnd()();
  }
}
function DocumentsListComponent_Conditional_18_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const doc_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatFileSize(doc_r1.fileSize));
  }
}
function DocumentsListComponent_Conditional_18_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 31);
    \u0275\u0275element(2, "path", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " T\xE9l\xE9charger ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const doc_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", doc_r1.fileUrl, \u0275\u0275sanitizeUrl);
  }
}
function DocumentsListComponent_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "div", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 24);
    \u0275\u0275element(4, "path", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 25)(6, "h3", 26);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 27);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 28)(11, "span", 29);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, DocumentsListComponent_Conditional_18_For_2_Conditional_13_Template, 2, 1, "span");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(14, DocumentsListComponent_Conditional_18_For_2_Conditional_14_Template, 4, 1, "a", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const doc_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(doc_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(doc_r1.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getCategoryLabel(doc_r1.category));
    \u0275\u0275advance();
    \u0275\u0275conditional(doc_r1.fileSize ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(doc_r1.fileUrl ? 14 : -1);
  }
}
function DocumentsListComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, DocumentsListComponent_Conditional_18_For_2_Template, 15, 5, "div", 21, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.documents());
  }
}
var DocumentsListComponent = class _DocumentsListComponent {
  apiService;
  documents = signal([], ...ngDevMode ? [{ debugName: "documents" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  searchQuery = "";
  constructor(apiService) {
    this.apiService = apiService;
  }
  ngOnInit() {
    this.loadDocuments();
  }
  loadDocuments() {
    this.loading.set(true);
    this.apiService.getPublicDocuments(0, 20).subscribe({
      next: (response) => {
        if (response.success)
          this.documents.set(response.data.content);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  search() {
    if (!this.searchQuery.trim()) {
      this.loadDocuments();
      return;
    }
    this.loading.set(true);
    this.apiService.searchDocuments(this.searchQuery, 0, 20).subscribe({
      next: (response) => {
        if (response.success)
          this.documents.set(response.data.content);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  getCategoryLabel(category) {
    const labels = { "RAPPORT": "Rapport", "LOI": "Loi", "DECRET": "D\xE9cret", "ARRETE": "Arr\xEAt\xE9", "CIRCULAIRE": "Circulaire", "FORMULAIRE": "Formulaire", "GUIDE": "Guide", "AUTRE": "Autre" };
    return labels[category] || category;
  }
  formatFileSize(bytes) {
    if (bytes < 1024)
      return bytes + " B";
    if (bytes < 1048576)
      return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / 1048576).toFixed(1) + " MB";
  }
  static \u0275fac = function DocumentsListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DocumentsListComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentsListComponent, selectors: [["app-documents-list"]], decls: 19, vars: 2, consts: [[1, "bg-gradient-to-br", "from-primary-600", "to-primary-700", "text-white", "py-16"], [1, "container", "mx-auto", "px-4"], [1, "text-4xl", "font-bold", "mb-4"], [1, "text-primary-100", "text-lg", "max-w-2xl"], [1, "py-12", "bg-neutral-50"], [1, "card", "mb-8"], [1, "flex", "flex-col", "md:flex-row", "gap-4"], [1, "flex-1", "relative"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-5", "h-5", "text-neutral-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Rechercher un document...", 1, "input", "pl-10", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn-primary", 3, "click"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], [1, "text-center", "py-16"], [1, "card", "animate-pulse"], [1, "h-12", "w-12", "bg-neutral-200", "rounded-xl", "mb-4"], [1, "h-5", "bg-neutral-200", "rounded", "w-3/4", "mb-2"], [1, "h-4", "bg-neutral-200", "rounded", "w-1/2"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "text-neutral-300", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"], [1, "text-lg", "font-medium", "text-neutral-700", "mb-2"], [1, "card", "group", "hover:shadow-medium", "transition-shadow"], [1, "flex", "items-start", "gap-4"], [1, "w-12", "h-12", "bg-secondary-100", "rounded-xl", "flex", "items-center", "justify-center", "flex-shrink-0"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-secondary-600"], [1, "flex-1", "min-w-0"], [1, "font-semibold", "text-neutral-900", "truncate", "group-hover:text-primary-600", "transition-colors"], [1, "text-sm", "text-neutral-500", "truncate"], [1, "flex", "items-center", "gap-3", "mt-2", "text-xs", "text-neutral-400"], [1, "badge-primary"], ["target", "_blank", 1, "btn-outline", "w-full", "mt-4", "text-sm", 3, "href"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"]], template: function DocumentsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Ressources");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, " Consultez et t\xE9l\xE9chargez les documents officiels du minist\xE8re. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "section", 4)(7, "div", 1)(8, "div", 5)(9, "div", 6)(10, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 8);
      \u0275\u0275element(12, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function DocumentsListComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function DocumentsListComponent_Template_input_keyup_enter_13_listener() {
        return ctx.search();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "button", 11);
      \u0275\u0275listener("click", function DocumentsListComponent_Template_button_click_14_listener() {
        return ctx.search();
      });
      \u0275\u0275text(15, "Rechercher");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(16, DocumentsListComponent_Conditional_16_Template, 3, 1, "div", 12)(17, DocumentsListComponent_Conditional_17_Template, 5, 0, "div", 13)(18, DocumentsListComponent_Conditional_18_Template, 3, 0, "div", 12);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 16 : ctx.documents().length === 0 ? 17 : 18);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentsListComponent, [{
    type: Component,
    args: [{
      selector: "app-documents-list",
      standalone: true,
      imports: [CommonModule, FormsModule],
      template: `
    <section class="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4">Ressources</h1>
        <p class="text-primary-100 text-lg max-w-2xl">
          Consultez et t\xE9l\xE9chargez les documents officiels du minist\xE8re.
        </p>
      </div>
    </section>
    
    <section class="py-12 bg-neutral-50">
      <div class="container mx-auto px-4">
        <div class="card mb-8">
          <div class="flex flex-col md:flex-row gap-4">
            <div class="flex-1 relative">
              <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <input type="text" [(ngModel)]="searchQuery" (keyup.enter)="search()" placeholder="Rechercher un document..." class="input pl-10">
            </div>
            <button (click)="search()" class="btn-primary">Rechercher</button>
          </div>
        </div>
        
        @if (loading()) {
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            @for (i of [1,2,3,4,5,6]; track i) {
              <div class="card animate-pulse">
                <div class="h-12 w-12 bg-neutral-200 rounded-xl mb-4"></div>
                <div class="h-5 bg-neutral-200 rounded w-3/4 mb-2"></div>
                <div class="h-4 bg-neutral-200 rounded w-1/2"></div>
              </div>
            }
          </div>
        } @else if (documents().length === 0) {
          <div class="text-center py-16">
            <svg class="w-16 h-16 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
            <h3 class="text-lg font-medium text-neutral-700 mb-2">Aucun document trouv\xE9</h3>
          </div>
        } @else {
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            @for (doc of documents(); track doc.id) {
              <div class="card group hover:shadow-medium transition-shadow">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <h3 class="font-semibold text-neutral-900 truncate group-hover:text-primary-600 transition-colors">{{ doc.title }}</h3>
                    <p class="text-sm text-neutral-500 truncate">{{ doc.description }}</p>
                    <div class="flex items-center gap-3 mt-2 text-xs text-neutral-400">
                      <span class="badge-primary">{{ getCategoryLabel(doc.category) }}</span>
                      @if (doc.fileSize) {
                        <span>{{ formatFileSize(doc.fileSize) }}</span>
                      }
                    </div>
                  </div>
                </div>
                @if (doc.fileUrl) {
                  <a [href]="doc.fileUrl" target="_blank" class="btn-outline w-full mt-4 text-sm">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                    T\xE9l\xE9charger
                  </a>
                }
              </div>
            }
          </div>
        }
      </div>
    </section>
  `
    }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentsListComponent, { className: "DocumentsListComponent", filePath: "src/app/features/documents/documents-list.component.ts", lineNumber: 89 });
})();
export {
  DocumentsListComponent
};
//# sourceMappingURL=chunk-3WOZPWLF.js.map
