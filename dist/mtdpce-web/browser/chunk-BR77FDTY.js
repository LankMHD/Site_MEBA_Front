import {
  ProjectStatus
} from "./chunk-KUQWF5HF.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
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
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WCAZC6LL.js";

// src/app/features/admin/projects/admin-projects.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminProjectsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementEnd();
  }
}
function AdminProjectsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 12);
    \u0275\u0275element(2, "path", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 3);
    \u0275\u0275text(4, "Aucun projet pour le moment");
    \u0275\u0275elementEnd()();
  }
}
function AdminProjectsComponent_Conditional_14_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 16)(3, "p", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td")(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "div", 19)(12, "div", 20);
    \u0275\u0275element(13, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 22);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "td", 23);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 15)(19, "div", 24)(20, "button", 25);
    \u0275\u0275listener("click", function AdminProjectsComponent_Conditional_14_For_16_Template_button_click_20_listener() {
      const project_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editProject(project_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 26);
    \u0275\u0275element(22, "path", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "button", 28);
    \u0275\u0275listener("click", function AdminProjectsComponent_Conditional_14_For_16_Template_button_click_23_listener() {
      const project_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteProject(project_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 26);
    \u0275\u0275element(25, "path", 29);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const project_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(project_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.getStatusBadgeClass(project_r2.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getStatusLabel(project_r2.status));
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", project_r2.progressPercentage, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", project_r2.progressPercentage, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r2.partner || "-");
  }
}
function AdminProjectsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "table", 14)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Partenaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 15);
    \u0275\u0275text(13, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, AdminProjectsComponent_Conditional_14_For_16_Template, 26, 9, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r2.projects());
  }
}
function AdminProjectsComponent_Conditional_15_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 53);
  }
}
function AdminProjectsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 30)(2, "div", 31)(3, "h2", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 33);
    \u0275\u0275listener("ngSubmit", function AdminProjectsComponent_Conditional_15_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveProject());
    });
    \u0275\u0275elementStart(6, "div")(7, "label", 34);
    \u0275\u0275text(8, "Nom ");
    \u0275\u0275elementStart(9, "span", 35);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProjectsComponent_Conditional_15_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.name, $event) || (ctx_r2.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "label", 34);
    \u0275\u0275text(14, "Description ");
    \u0275\u0275elementStart(15, "span", 35);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "textarea", 37);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProjectsComponent_Conditional_15_Template_textarea_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.description, $event) || (ctx_r2.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 38)(19, "div")(20, "label", 34);
    \u0275\u0275text(21, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 39);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProjectsComponent_Conditional_15_Template_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.status, $event) || (ctx_r2.form.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(23, "option", 40);
    \u0275\u0275text(24, "Planifi\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 41);
    \u0275\u0275text(26, "En cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 42);
    \u0275\u0275text(28, "Suspendu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 43);
    \u0275\u0275text(30, "Termin\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 44);
    \u0275\u0275text(32, "Annul\xE9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div")(34, "label", 34);
    \u0275\u0275text(35, "Progression (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProjectsComponent_Conditional_15_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.progressPercentage, $event) || (ctx_r2.form.progressPercentage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 38)(38, "div")(39, "label", 34);
    \u0275\u0275text(40, "Date d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProjectsComponent_Conditional_15_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.startDate, $event) || (ctx_r2.form.startDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div")(43, "label", 34);
    \u0275\u0275text(44, "Date fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProjectsComponent_Conditional_15_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.endDate, $event) || (ctx_r2.form.endDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div")(47, "label", 34);
    \u0275\u0275text(48, "Partenaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProjectsComponent_Conditional_15_Template_input_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.partner, $event) || (ctx_r2.form.partner = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div")(51, "label", 34);
    \u0275\u0275text(52, "Budget (FCFA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProjectsComponent_Conditional_15_Template_input_ngModelChange_53_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.budget, $event) || (ctx_r2.form.budget = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 50)(55, "button", 51);
    \u0275\u0275listener("click", function AdminProjectsComponent_Conditional_15_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(56, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "button", 52);
    \u0275\u0275conditionalCreate(58, AdminProjectsComponent_Conditional_15_Conditional_58_Template, 1, 0, "div", 53);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.editingProject() ? "Modifier le projet" : "Nouveau projet");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.name);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.description);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.status);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.progressPercentage);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.startDate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.endDate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.partner);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.budget);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.saving() ? 58 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.editingProject() ? "Mettre \xE0 jour" : "Cr\xE9er", " ");
  }
}
var AdminProjectsComponent = class _AdminProjectsComponent {
  apiService;
  projects = signal([], ...ngDevMode ? [{ debugName: "projects" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  showModal = signal(false, ...ngDevMode ? [{ debugName: "showModal" }] : []);
  editingProject = signal(null, ...ngDevMode ? [{ debugName: "editingProject" }] : []);
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  form = { name: "", description: "", status: ProjectStatus.PLANIFIE, progressPercentage: 0, startDate: "", endDate: "", partner: "", budget: 0 };
  constructor(apiService) {
    this.apiService = apiService;
  }
  ngOnInit() {
    this.loadProjects();
  }
  loadProjects() {
    this.apiService.getAllProjects(0, 50).subscribe({
      next: (response) => {
        if (response.success)
          this.projects.set(response.data.content);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  openModal() {
    this.form = { name: "", description: "", status: ProjectStatus.PLANIFIE, progressPercentage: 0, startDate: "", endDate: "", partner: "", budget: 0 };
    this.editingProject.set(null);
    this.showModal.set(true);
  }
  closeModal() {
    this.showModal.set(false);
    this.editingProject.set(null);
  }
  editProject(project) {
    this.form = { name: project.name, description: project.description, status: project.status, progressPercentage: project.progressPercentage, startDate: project.startDate || "", endDate: project.endDate || "", partner: project.partner || "", budget: project.budget || 0 };
    this.editingProject.set(project);
    this.showModal.set(true);
  }
  saveProject() {
    if (!this.form.name || !this.form.description)
      return;
    this.saving.set(true);
    const editing = this.editingProject();
    const request = editing ? this.apiService.updateProject(editing.id, this.form) : this.apiService.createProject(this.form);
    request.subscribe({
      next: (response) => {
        if (response.success) {
          this.loadProjects();
          this.closeModal();
        }
        this.saving.set(false);
      },
      error: () => this.saving.set(false)
    });
  }
  deleteProject(project) {
    if (confirm(`Supprimer le projet "${project.name}" ?`)) {
      this.apiService.deleteProject(project.id).subscribe({ next: () => this.loadProjects() });
    }
  }
  getStatusLabel(status) {
    const labels = { "PLANIFIE": "Planifi\xE9", "EN_COURS": "En cours", "SUSPENDU": "Suspendu", "TERMINE": "Termin\xE9", "ANNULE": "Annul\xE9" };
    return labels[status] || status;
  }
  getStatusBadgeClass(status) {
    const classes = { "PLANIFIE": "badge-accent", "EN_COURS": "badge-primary", "SUSPENDU": "badge-warning", "TERMINE": "badge-success", "ANNULE": "badge-error" };
    return classes[status] || "badge";
  }
  static \u0275fac = function AdminProjectsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminProjectsComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminProjectsComponent, selectors: [["app-admin-projects"]], decls: 16, vars: 2, consts: [[1, "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-4"], [1, "text-2xl", "font-bold", "text-neutral-900"], [1, "text-neutral-500"], [1, "btn-primary", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6v6m0 0v6m0-6h6m-6 0H6"], [1, "card", "p-0"], [1, "p-8", "text-center"], [1, "table-container"], [1, "fixed", "inset-0", "bg-black/50", "flex", "items-center", "justify-center", "z-50", "p-4"], [1, "spinner", "w-8", "h-8", "mx-auto"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-neutral-300", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"], [1, "table"], [1, "text-right"], [1, "max-w-xs"], [1, "font-medium", "text-neutral-900", "truncate"], [1, "text-xs", "text-neutral-400", "truncate"], [1, "flex", "items-center", "gap-2"], [1, "w-20", "bg-neutral-200", "rounded-full", "h-2"], [1, "bg-primary-500", "h-2", "rounded-full"], [1, "text-sm", "text-neutral-600"], [1, "text-sm", "text-neutral-500"], [1, "flex", "justify-end", "gap-2"], ["title", "Modifier", 1, "btn-ghost", "p-2", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["title", "Supprimer", 1, "btn-ghost", "p-2", "text-secondary-500", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "bg-white", "rounded-2xl", "shadow-xl", "w-full", "max-w-2xl", "max-h-[90vh]", "overflow-y-auto"], [1, "p-6", "border-b", "border-neutral-200"], [1, "text-xl", "font-semibold", "text-neutral-900"], [1, "p-6", "space-y-5", 3, "ngSubmit"], [1, "label"], [1, "text-secondary-500"], ["type", "text", "name", "name", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], ["name", "description", "rows", "3", "required", "", 1, "input", "resize-none", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-2", "gap-4"], ["name", "status", 1, "input", 3, "ngModelChange", "ngModel"], ["value", "PLANIFIE"], ["value", "EN_COURS"], ["value", "SUSPENDU"], ["value", "TERMINE"], ["value", "ANNULE"], ["type", "number", "name", "progressPercentage", "min", "0", "max", "100", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "startDate", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "endDate", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "partner", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "budget", 1, "input", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-end", "gap-3", "pt-4", "border-t", "border-neutral-200"], ["type", "button", 1, "btn-ghost", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "spinner", "w-4", "h-4", "mr-2"]], template: function AdminProjectsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Projets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "G\xE9rez les projets et programmes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function AdminProjectsComponent_Template_button_click_7_listener() {
        return ctx.openModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 5);
      \u0275\u0275element(9, "path", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " Nouveau projet ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "div", 7);
      \u0275\u0275conditionalCreate(12, AdminProjectsComponent_Conditional_12_Template, 2, 0, "div", 8)(13, AdminProjectsComponent_Conditional_13_Template, 5, 0, "div", 8)(14, AdminProjectsComponent_Conditional_14_Template, 17, 0, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(15, AdminProjectsComponent_Conditional_15_Template, 60, 12, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.loading() ? 12 : ctx.projects().length === 0 ? 13 : 14);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showModal() ? 15 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, MaxValidator, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminProjectsComponent, [{
    type: Component,
    args: [{
      selector: "app-admin-projects",
      standalone: true,
      imports: [CommonModule, FormsModule],
      template: `
    <div class="space-y-6">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 class="text-2xl font-bold text-neutral-900">Projets</h1>
          <p class="text-neutral-500">G\xE9rez les projets et programmes</p>
        </div>
        <button (click)="openModal()" class="btn-primary">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Nouveau projet
        </button>
      </div>
      
      <div class="card p-0">
        @if (loading()) {
          <div class="p-8 text-center"><div class="spinner w-8 h-8 mx-auto"></div></div>
        } @else if (projects().length === 0) {
          <div class="p-8 text-center">
            <svg class="w-12 h-12 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
            <p class="text-neutral-500">Aucun projet pour le moment</p>
          </div>
        } @else {
          <div class="table-container">
            <table class="table">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Statut</th>
                  <th>Progression</th>
                  <th>Partenaire</th>
                  <th class="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                @for (project of projects(); track project.id) {
                  <tr>
                    <td>
                      <div class="max-w-xs">
                        <p class="font-medium text-neutral-900 truncate">{{ project.name }}</p>
                        <p class="text-xs text-neutral-400 truncate">{{ project.description }}</p>
                      </div>
                    </td>
                    <td><span [class]="getStatusBadgeClass(project.status)">{{ getStatusLabel(project.status) }}</span></td>
                    <td>
                      <div class="flex items-center gap-2">
                        <div class="w-20 bg-neutral-200 rounded-full h-2">
                          <div class="bg-primary-500 h-2 rounded-full" [style.width.%]="project.progressPercentage"></div>
                        </div>
                        <span class="text-sm text-neutral-600">{{ project.progressPercentage }}%</span>
                      </div>
                    </td>
                    <td class="text-sm text-neutral-500">{{ project.partner || '-' }}</td>
                    <td class="text-right">
                      <div class="flex justify-end gap-2">
                        <button (click)="editProject(project)" class="btn-ghost p-2" title="Modifier">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                          </svg>
                        </button>
                        <button (click)="deleteProject(project)" class="btn-ghost p-2 text-secondary-500" title="Supprimer">
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
          <div class="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div class="p-6 border-b border-neutral-200">
              <h2 class="text-xl font-semibold text-neutral-900">{{ editingProject() ? 'Modifier le projet' : 'Nouveau projet' }}</h2>
            </div>
            <form (ngSubmit)="saveProject()" class="p-6 space-y-5">
              <div>
                <label class="label">Nom <span class="text-secondary-500">*</span></label>
                <input type="text" [(ngModel)]="form.name" name="name" class="input" required>
              </div>
              <div>
                <label class="label">Description <span class="text-secondary-500">*</span></label>
                <textarea [(ngModel)]="form.description" name="description" rows="3" class="input resize-none" required></textarea>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="label">Statut</label>
                  <select [(ngModel)]="form.status" name="status" class="input">
                    <option value="PLANIFIE">Planifi\xE9</option>
                    <option value="EN_COURS">En cours</option>
                    <option value="SUSPENDU">Suspendu</option>
                    <option value="TERMINE">Termin\xE9</option>
                    <option value="ANNULE">Annul\xE9</option>
                  </select>
                </div>
                <div>
                  <label class="label">Progression (%)</label>
                  <input type="number" [(ngModel)]="form.progressPercentage" name="progressPercentage" min="0" max="100" class="input">
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="label">Date d\xE9but</label>
                  <input type="date" [(ngModel)]="form.startDate" name="startDate" class="input">
                </div>
                <div>
                  <label class="label">Date fin</label>
                  <input type="date" [(ngModel)]="form.endDate" name="endDate" class="input">
                </div>
              </div>
              <div>
                <label class="label">Partenaire</label>
                <input type="text" [(ngModel)]="form.partner" name="partner" class="input">
              </div>
              <div>
                <label class="label">Budget (FCFA)</label>
                <input type="number" [(ngModel)]="form.budget" name="budget" class="input">
              </div>
              <div class="flex justify-end gap-3 pt-4 border-t border-neutral-200">
                <button type="button" (click)="closeModal()" class="btn-ghost">Annuler</button>
                <button type="submit" [disabled]="saving()" class="btn-primary">
                  @if (saving()) { <div class="spinner w-4 h-4 mr-2"></div> }
                  {{ editingProject() ? 'Mettre \xE0 jour' : 'Cr\xE9er' }}
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminProjectsComponent, { className: "AdminProjectsComponent", filePath: "src/app/features/admin/projects/admin-projects.component.ts", lineNumber: 152 });
})();
export {
  AdminProjectsComponent
};
//# sourceMappingURL=chunk-BR77FDTY.js.map
