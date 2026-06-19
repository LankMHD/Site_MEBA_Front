import {
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
  __spreadProps,
  __spreadValues,
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
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WCAZC6LL.js";

// src/app/features/admin/users/admin-users.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminUsersComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 12);
    \u0275\u0275element(2, "path", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 3);
    \u0275\u0275text(4, "Aucun utilisateur");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_Conditional_14_For_16_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getRoleLabel(role_r2));
  }
}
function AdminUsersComponent_Conditional_14_For_16_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "Actif");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_Conditional_14_For_16_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "Inactif");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_Conditional_14_For_16_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 30);
    \u0275\u0275element(1, "path", 32);
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_Conditional_14_For_16_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 31);
    \u0275\u0275element(1, "path", 33);
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_Conditional_14_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 16)(3, "div", 17)(4, "span", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "p", 19);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 20);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "td", 21);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275repeaterCreate(14, AdminUsersComponent_Conditional_14_For_16_For_15_Template, 2, 1, "span", 22, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275conditionalCreate(17, AdminUsersComponent_Conditional_14_For_16_Conditional_17_Template, 2, 0, "span", 23)(18, AdminUsersComponent_Conditional_14_For_16_Conditional_18_Template, 2, 0, "span", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 15)(20, "div", 25)(21, "button", 26);
    \u0275\u0275listener("click", function AdminUsersComponent_Conditional_14_For_16_Template_button_click_21_listener() {
      const user_r4 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editUser(user_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 27);
    \u0275\u0275element(23, "path", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "button", 29);
    \u0275\u0275listener("click", function AdminUsersComponent_Conditional_14_For_16_Template_button_click_24_listener() {
      const user_r4 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleUserStatus(user_r4));
    });
    \u0275\u0275conditionalCreate(25, AdminUsersComponent_Conditional_14_For_16_Conditional_25_Template, 2, 0, ":svg:svg", 30)(26, AdminUsersComponent_Conditional_14_For_16_Conditional_26_Template, 2, 0, ":svg:svg", 31);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r4 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((user_r4.firstName == null ? null : user_r4.firstName.charAt(0)) || "U");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", user_r4.firstName, " ", user_r4.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r4.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r4.email);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(user_r4.roles);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(user_r4.active ? 17 : 18);
    \u0275\u0275advance(7);
    \u0275\u0275property("title", user_r4.active ? "D\xE9sactiver" : "Activer");
    \u0275\u0275advance();
    \u0275\u0275conditional(user_r4.active ? 25 : 26);
  }
}
function AdminUsersComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "table", 14)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "R\xF4les");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 15);
    \u0275\u0275text(13, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, AdminUsersComponent_Conditional_14_For_16_Template, 27, 8, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r2.users());
  }
}
function AdminUsersComponent_Conditional_15_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 39);
    \u0275\u0275text(2, "Mot de passe ");
    \u0275\u0275elementStart(3, "span", 40);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_Conditional_15_Conditional_31_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.form.password, $event) || (ctx_r2.form.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.password);
  }
}
function AdminUsersComponent_Conditional_15_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 52);
  }
}
function AdminUsersComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 34)(2, "div", 35)(3, "h2", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 37);
    \u0275\u0275listener("ngSubmit", function AdminUsersComponent_Conditional_15_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveUser());
    });
    \u0275\u0275elementStart(6, "div", 38)(7, "div")(8, "label", 39);
    \u0275\u0275text(9, "Pr\xE9nom ");
    \u0275\u0275elementStart(10, "span", 40);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_Conditional_15_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.firstName, $event) || (ctx_r2.form.firstName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div")(14, "label", 39);
    \u0275\u0275text(15, "Nom ");
    \u0275\u0275elementStart(16, "span", 40);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_Conditional_15_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.lastName, $event) || (ctx_r2.form.lastName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div")(20, "label", 39);
    \u0275\u0275text(21, "Nom d'utilisateur ");
    \u0275\u0275elementStart(22, "span", 40);
    \u0275\u0275text(23, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_Conditional_15_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.username, $event) || (ctx_r2.form.username = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div")(26, "label", 39);
    \u0275\u0275text(27, "Email ");
    \u0275\u0275elementStart(28, "span", 40);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_Conditional_15_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.email, $event) || (ctx_r2.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(31, AdminUsersComponent_Conditional_15_Conditional_31_Template, 6, 1, "div");
    \u0275\u0275elementStart(32, "div")(33, "label", 39);
    \u0275\u0275text(34, "R\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "select", 45);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_Conditional_15_Template_select_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.role, $event) || (ctx_r2.form.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(36, "option", 46);
    \u0275\u0275text(37, "Utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option", 47);
    \u0275\u0275text(39, "Mod\xE9rateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option", 48);
    \u0275\u0275text(41, "Administrateur");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 49)(43, "button", 50);
    \u0275\u0275listener("click", function AdminUsersComponent_Conditional_15_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(44, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 51);
    \u0275\u0275conditionalCreate(46, AdminUsersComponent_Conditional_15_Conditional_46_Template, 1, 0, "div", 52);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.editingUser() ? "Modifier l'utilisateur" : "Nouvel utilisateur");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.firstName);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.lastName);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.username);
    \u0275\u0275property("disabled", !!ctx_r2.editingUser());
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.email);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.editingUser() ? 31 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.role);
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r2.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.saving() ? 46 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.editingUser() ? "Mettre \xE0 jour" : "Cr\xE9er", " ");
  }
}
var AdminUsersComponent = class _AdminUsersComponent {
  apiService;
  users = signal([], ...ngDevMode ? [{ debugName: "users" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  showModal = signal(false, ...ngDevMode ? [{ debugName: "showModal" }] : []);
  editingUser = signal(null, ...ngDevMode ? [{ debugName: "editingUser" }] : []);
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  form = { firstName: "", lastName: "", username: "", email: "", password: "", role: "ROLE_USER" };
  constructor(apiService) {
    this.apiService = apiService;
  }
  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {
    this.apiService.getAllUsers(0, 50).subscribe({
      next: (response) => {
        if (response.success)
          this.users.set(response.data.content);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  openModal() {
    this.form = { firstName: "", lastName: "", username: "", email: "", password: "", role: "ROLE_USER" };
    this.editingUser.set(null);
    this.showModal.set(true);
  }
  closeModal() {
    this.showModal.set(false);
    this.editingUser.set(null);
  }
  editUser(user) {
    this.form = { firstName: user.firstName || "", lastName: user.lastName || "", username: user.username, email: user.email, password: "", role: user.roles[0] || "ROLE_USER" };
    this.editingUser.set(user);
    this.showModal.set(true);
  }
  saveUser() {
    if (!this.form.firstName || !this.form.lastName || !this.form.username || !this.form.email)
      return;
    this.saving.set(true);
    const editing = this.editingUser();
    if (editing) {
      this.apiService.updateUser(editing.id, { firstName: this.form.firstName, lastName: this.form.lastName, email: this.form.email, roles: [this.form.role] }).subscribe({
        next: (response) => {
          if (response.success) {
            this.loadUsers();
            this.closeModal();
          }
          this.saving.set(false);
        },
        error: () => this.saving.set(false)
      });
    } else {
      this.apiService.createUser(__spreadProps(__spreadValues({}, this.form), { roles: [this.form.role] })).subscribe({
        next: (response) => {
          if (response.success) {
            this.loadUsers();
            this.closeModal();
          }
          this.saving.set(false);
        },
        error: () => this.saving.set(false)
      });
    }
  }
  toggleUserStatus(user) {
    const action = user.active ? "d\xE9sactiver" : "activer";
    if (confirm(`Voulez-vous ${action} l'utilisateur "${user.username}" ?`)) {
      this.apiService.toggleUserStatus(user.id).subscribe({ next: () => this.loadUsers() });
    }
  }
  getRoleLabel(role) {
    const labels = { "ROLE_USER": "Utilisateur", "ROLE_MODERATOR": "Mod\xE9rateur", "ROLE_ADMIN": "Admin", "ROLE_SUPER_ADMIN": "Super Admin" };
    return labels[role] || role;
  }
  static \u0275fac = function AdminUsersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminUsersComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminUsersComponent, selectors: [["app-admin-users"]], decls: 16, vars: 2, consts: [[1, "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-4"], [1, "text-2xl", "font-bold", "text-neutral-900"], [1, "text-neutral-500"], [1, "btn-primary", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6v6m0 0v6m0-6h6m-6 0H6"], [1, "card", "p-0"], [1, "p-8", "text-center"], [1, "table-container"], [1, "fixed", "inset-0", "bg-black/50", "flex", "items-center", "justify-center", "z-50", "p-4"], [1, "spinner", "w-8", "h-8", "mx-auto"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-neutral-300", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"], [1, "table"], [1, "text-right"], [1, "flex", "items-center", "gap-3"], [1, "w-10", "h-10", "bg-primary-100", "rounded-full", "flex", "items-center", "justify-center"], [1, "text-primary-600", "font-medium"], [1, "font-medium", "text-neutral-900"], [1, "text-xs", "text-neutral-400"], [1, "text-sm", "text-neutral-600"], [1, "badge-primary", "mr-1"], [1, "badge-success"], [1, "badge", "bg-neutral-100", "text-neutral-600"], [1, "flex", "justify-end", "gap-2"], ["title", "Modifier", 1, "btn-ghost", "p-2", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "btn-ghost", "p-2", 3, "click", "title"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-secondary-500"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-green-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "bg-white", "rounded-2xl", "shadow-xl", "w-full", "max-w-lg", "max-h-[90vh]", "overflow-y-auto"], [1, "p-6", "border-b", "border-neutral-200"], [1, "text-xl", "font-semibold", "text-neutral-900"], [1, "p-6", "space-y-5", 3, "ngSubmit"], [1, "grid", "grid-cols-2", "gap-4"], [1, "label"], [1, "text-secondary-500"], ["type", "text", "name", "firstName", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "lastName", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "username", "required", "", 1, "input", 3, "ngModelChange", "ngModel", "disabled"], ["type", "email", "name", "email", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], ["name", "role", 1, "input", 3, "ngModelChange", "ngModel"], ["value", "ROLE_USER"], ["value", "ROLE_MODERATOR"], ["value", "ROLE_ADMIN"], [1, "flex", "justify-end", "gap-3", "pt-4", "border-t", "border-neutral-200"], ["type", "button", 1, "btn-ghost", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "spinner", "w-4", "h-4", "mr-2"], ["type", "password", "name", "password", "required", "", 1, "input", 3, "ngModelChange", "ngModel"]], template: function AdminUsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Utilisateurs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "G\xE9rez les comptes utilisateurs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function AdminUsersComponent_Template_button_click_7_listener() {
        return ctx.openModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 5);
      \u0275\u0275element(9, "path", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " Nouvel utilisateur ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "div", 7);
      \u0275\u0275conditionalCreate(12, AdminUsersComponent_Conditional_12_Template, 2, 0, "div", 8)(13, AdminUsersComponent_Conditional_13_Template, 5, 0, "div", 8)(14, AdminUsersComponent_Conditional_14_Template, 17, 0, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(15, AdminUsersComponent_Conditional_15_Template, 48, 11, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.loading() ? 12 : ctx.users().length === 0 ? 13 : 14);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showModal() ? 15 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminUsersComponent, [{
    type: Component,
    args: [{
      selector: "app-admin-users",
      standalone: true,
      imports: [CommonModule, FormsModule],
      template: `
    <div class="space-y-6">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 class="text-2xl font-bold text-neutral-900">Utilisateurs</h1>
          <p class="text-neutral-500">G\xE9rez les comptes utilisateurs</p>
        </div>
        <button (click)="openModal()" class="btn-primary">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Nouvel utilisateur
        </button>
      </div>
      
      <div class="card p-0">
        @if (loading()) {
          <div class="p-8 text-center"><div class="spinner w-8 h-8 mx-auto"></div></div>
        } @else if (users().length === 0) {
          <div class="p-8 text-center">
            <svg class="w-12 h-12 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
            <p class="text-neutral-500">Aucun utilisateur</p>
          </div>
        } @else {
          <div class="table-container">
            <table class="table">
              <thead>
                <tr>
                  <th>Utilisateur</th>
                  <th>Email</th>
                  <th>R\xF4les</th>
                  <th>Statut</th>
                  <th class="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                @for (user of users(); track user.id) {
                  <tr>
                    <td>
                      <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                          <span class="text-primary-600 font-medium">{{ user.firstName?.charAt(0) || 'U' }}</span>
                        </div>
                        <div>
                          <p class="font-medium text-neutral-900">{{ user.firstName }} {{ user.lastName }}</p>
                          <p class="text-xs text-neutral-400">{{ user.username }}</p>
                        </div>
                      </div>
                    </td>
                    <td class="text-sm text-neutral-600">{{ user.email }}</td>
                    <td>
                      @for (role of user.roles; track role) {
                        <span class="badge-primary mr-1">{{ getRoleLabel(role) }}</span>
                      }
                    </td>
                    <td>
                      @if (user.active) {
                        <span class="badge-success">Actif</span>
                      } @else {
                        <span class="badge bg-neutral-100 text-neutral-600">Inactif</span>
                      }
                    </td>
                    <td class="text-right">
                      <div class="flex justify-end gap-2">
                        <button (click)="editUser(user)" class="btn-ghost p-2" title="Modifier">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                          </svg>
                        </button>
                        <button (click)="toggleUserStatus(user)" class="btn-ghost p-2" [title]="user.active ? 'D\xE9sactiver' : 'Activer'">
                          @if (user.active) {
                            <svg class="w-4 h-4 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                            </svg>
                          } @else {
                            <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                          }
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
              <h2 class="text-xl font-semibold text-neutral-900">{{ editingUser() ? 'Modifier l\\'utilisateur' : 'Nouvel utilisateur' }}</h2>
            </div>
            <form (ngSubmit)="saveUser()" class="p-6 space-y-5">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="label">Pr\xE9nom <span class="text-secondary-500">*</span></label>
                  <input type="text" [(ngModel)]="form.firstName" name="firstName" class="input" required>
                </div>
                <div>
                  <label class="label">Nom <span class="text-secondary-500">*</span></label>
                  <input type="text" [(ngModel)]="form.lastName" name="lastName" class="input" required>
                </div>
              </div>
              <div>
                <label class="label">Nom d'utilisateur <span class="text-secondary-500">*</span></label>
                <input type="text" [(ngModel)]="form.username" name="username" class="input" required [disabled]="!!editingUser()">
              </div>
              <div>
                <label class="label">Email <span class="text-secondary-500">*</span></label>
                <input type="email" [(ngModel)]="form.email" name="email" class="input" required>
              </div>
              @if (!editingUser()) {
                <div>
                  <label class="label">Mot de passe <span class="text-secondary-500">*</span></label>
                  <input type="password" [(ngModel)]="form.password" name="password" class="input" required>
                </div>
              }
              <div>
                <label class="label">R\xF4le</label>
                <select [(ngModel)]="form.role" name="role" class="input">
                  <option value="ROLE_USER">Utilisateur</option>
                  <option value="ROLE_MODERATOR">Mod\xE9rateur</option>
                  <option value="ROLE_ADMIN">Administrateur</option>
                </select>
              </div>
              <div class="flex justify-end gap-3 pt-4 border-t border-neutral-200">
                <button type="button" (click)="closeModal()" class="btn-ghost">Annuler</button>
                <button type="submit" [disabled]="saving()" class="btn-primary">
                  @if (saving()) { <div class="spinner w-4 h-4 mr-2"></div> }
                  {{ editingUser() ? 'Mettre \xE0 jour' : 'Cr\xE9er' }}
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminUsersComponent, { className: "AdminUsersComponent", filePath: "src/app/features/admin/users/admin-users.component.ts", lineNumber: 156 });
})();
export {
  AdminUsersComponent
};
//# sourceMappingURL=chunk-CNLUIBDI.js.map
