import {
  AuthService
} from "./chunk-6HFIGEJQ.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-YDHKLCGD.js";
import "./chunk-DGOPQNLS.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-WCAZC6LL.js";

// src/app/layouts/admin/admin-layout.component.ts
var _c0 = () => ({ exact: true });
function AdminLayoutComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "a", 39);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_26_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.userMenuOpen.set(false));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 40);
    \u0275\u0275element(3, "path", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Mon profil ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(5, "hr", 42);
    \u0275\u0275elementStart(6, "button", 43);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_26_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 44);
    \u0275\u0275element(8, "path", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " D\xE9connexion ");
    \u0275\u0275elementEnd()();
  }
}
function AdminLayoutComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "p", 28);
    \u0275\u0275text(2, "Administration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 46);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 13);
    \u0275\u0275element(5, "path", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Utilisateurs ");
    \u0275\u0275elementEnd()();
  }
}
function AdminLayoutComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_57_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sidebarOpen.set(false));
    });
    \u0275\u0275elementEnd();
  }
}
var AdminLayoutComponent = class _AdminLayoutComponent {
  authService;
  sidebarOpen = signal(false, ...ngDevMode ? [{ debugName: "sidebarOpen" }] : []);
  userMenuOpen = signal(false, ...ngDevMode ? [{ debugName: "userMenuOpen" }] : []);
  constructor(authService) {
    this.authService = authService;
  }
  logout() {
    this.userMenuOpen.set(false);
    this.authService.logout();
  }
  static \u0275fac = function AdminLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminLayoutComponent)(\u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLayoutComponent, selectors: [["app-admin-layout"]], decls: 60, vars: 11, consts: [[1, "min-h-screen", "bg-slate-50"], [1, "bg-white", "border-b", "border-slate-100", "sticky", "top-0", "z-50"], [1, "flex", "items-center", "justify-between", "h-16", "px-4", "lg:px-8"], [1, "flex", "items-center", "gap-4"], [1, "p-2", "rounded-lg", "hover:bg-slate-100", "lg:hidden", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-slate-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6h16M4 12h16M4 18h16"], ["routerLink", "/admin", 1, "flex", "items-center", "gap-3"], [1, "w-10", "h-10", "bg-primary-500", "rounded-lg", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"], [1, "font-semibold", "text-slate-800", "hidden", "sm:block"], ["routerLink", "/", 1, "p-2", "rounded-lg", "text-slate-500", "hover:bg-slate-100", "hover:text-primary-600", "transition-all"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"], [1, "relative"], [1, "flex", "items-center", "gap-2", "p-2", "rounded-lg", "hover:bg-slate-100", "transition-colors", 3, "click"], [1, "w-9", "h-9", "bg-primary-100", "rounded-lg", "flex", "items-center", "justify-center"], [1, "text-primary-600", "font-semibold", "text-sm"], [1, "hidden", "sm:block", "text-sm", "font-medium", "text-slate-700"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-slate-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], [1, "absolute", "top-full", "right-0", "mt-2", "w-48", "bg-white", "rounded-lg", "shadow-soft", "border", "border-slate-100", "py-1", "z-50"], [1, "flex"], [1, "fixed", "lg:static", "inset-y-0", "left-0", "z-40", "w-64", "bg-white", "border-r", "border-slate-100", "transform", "transition-transform", "duration-300", "lg:translate-x-0", 2, "top", "64px"], [1, "p-4", "space-y-1"], ["routerLink", "/admin/dashboard", "routerLinkActive", "bg-primary-50 text-primary-600 font-medium", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "text-sm", "text-slate-600", "rounded-lg", "hover:bg-slate-50", "transition-colors", 3, "routerLinkActiveOptions"], [1, "pt-4"], [1, "px-4", "text-xs", "font-semibold", "text-slate-400", "uppercase", "tracking-wider", "mb-2"], ["routerLink", "/admin/articles", "routerLinkActive", "bg-primary-50 text-primary-600 font-medium", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "text-sm", "text-slate-600", "rounded-lg", "hover:bg-slate-50", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"], ["routerLink", "/admin/projects", "routerLinkActive", "bg-primary-50 text-primary-600 font-medium", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "text-sm", "text-slate-600", "rounded-lg", "hover:bg-slate-50", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"], ["routerLink", "/admin/documents", "routerLinkActive", "bg-primary-50 text-primary-600 font-medium", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "text-sm", "text-slate-600", "rounded-lg", "hover:bg-slate-50", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"], ["routerLink", "/admin/contacts", "routerLinkActive", "bg-primary-50 text-primary-600 font-medium", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "text-sm", "text-slate-600", "rounded-lg", "hover:bg-slate-50", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], [1, "fixed", "inset-0", "bg-slate-900/30", "backdrop-blur-sm", "z-30", "lg:hidden", 2, "top", "64px"], [1, "flex-1", "p-4", "lg:p-8", "min-h-[calc(100vh-64px)]"], ["routerLink", "/admin/profile", 1, "flex", "items-center", "gap-3", "px-4", "py-2", "text-sm", "text-slate-700", "hover:bg-slate-50", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-slate-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], [1, "my-1", "border-slate-100"], [1, "flex", "items-center", "gap-3", "px-4", "py-2", "text-sm", "text-danger-600", "hover:bg-slate-50", "w-full", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"], ["routerLink", "/admin/users", "routerLinkActive", "bg-primary-50 text-primary-600 font-medium", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "text-sm", "text-slate-600", "rounded-lg", "hover:bg-slate-50", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"], [1, "fixed", "inset-0", "bg-slate-900/30", "backdrop-blur-sm", "z-30", "lg:hidden", 2, "top", "64px", 3, "click"]], template: function AdminLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_4_listener() {
        return ctx.sidebarOpen.set(!ctx.sidebarOpen());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "path", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "a", 7)(8, "div", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 9);
      \u0275\u0275element(10, "path", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "span", 11);
      \u0275\u0275text(12, "Administration");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 3)(14, "a", 12);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 13);
      \u0275\u0275element(16, "path", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "div", 15)(18, "button", 16);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_18_listener() {
        return ctx.userMenuOpen.set(!ctx.userMenuOpen());
      });
      \u0275\u0275elementStart(19, "div", 17)(20, "span", 18);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "span", 19);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(24, "svg", 20);
      \u0275\u0275element(25, "path", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(26, AdminLayoutComponent_Conditional_26_Template, 10, 0, "div", 22);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(27, "div", 23)(28, "aside", 24)(29, "nav", 25)(30, "a", 26);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(31, "svg", 13);
      \u0275\u0275element(32, "path", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275text(33, " Tableau de bord ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(34, "div", 27)(35, "p", 28);
      \u0275\u0275text(36, "Contenu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "a", 29);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(38, "svg", 13);
      \u0275\u0275element(39, "path", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275text(40, " Articles ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(41, "a", 31);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(42, "svg", 13);
      \u0275\u0275element(43, "path", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275text(44, " Projets ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(45, "a", 33);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(46, "svg", 13);
      \u0275\u0275element(47, "path", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275text(48, " Documents ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(49, "div", 27)(50, "p", 28);
      \u0275\u0275text(51, "Communication");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "a", 35);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(53, "svg", 13);
      \u0275\u0275element(54, "path", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275text(55, " Messages ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(56, AdminLayoutComponent_Conditional_56_Template, 7, 0, "div", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(57, AdminLayoutComponent_Conditional_57_Template, 1, 0, "div", 37);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(58, "main", 38);
      \u0275\u0275element(59, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      \u0275\u0275advance(21);
      \u0275\u0275textInterpolate1(" ", ((tmp_0_0 = ctx.authService.currentUser()) == null ? null : tmp_0_0.firstName == null ? null : tmp_0_0.firstName.charAt(0)) || "U", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ((tmp_1_0 = ctx.authService.currentUser()) == null ? null : tmp_1_0.firstName) || "Utilisateur", " ");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.userMenuOpen() ? 26 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("translate-x-0", ctx.sidebarOpen())("-translate-x-full", !ctx.sidebarOpen());
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(10, _c0));
      \u0275\u0275advance(26);
      \u0275\u0275conditional(ctx.authService.isAdmin() ? 56 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.sidebarOpen() ? 57 : -1);
    }
  }, dependencies: [CommonModule, RouterModule, RouterOutlet, RouterLink, RouterLinkActive], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminLayoutComponent, [{
    type: Component,
    args: [{
      selector: "app-admin-layout",
      standalone: true,
      imports: [CommonModule, RouterModule],
      template: `
    <div class="min-h-screen bg-slate-50">
      <!-- Header -->
      <header class="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div class="flex items-center justify-between h-16 px-4 lg:px-8">
          <!-- Left: Toggle & Logo -->
          <div class="flex items-center gap-4">
            <button (click)="sidebarOpen.set(!sidebarOpen())" class="p-2 rounded-lg hover:bg-slate-100 lg:hidden transition-colors">
              <svg class="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <a routerLink="/admin" class="flex items-center gap-3">
              <div class="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <span class="font-semibold text-slate-800 hidden sm:block">Administration</span>
            </a>
          </div>
          
          <!-- Right: User menu -->
          <div class="flex items-center gap-4">
            <a routerLink="/" class="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-primary-600 transition-all">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
            </a>
            
            <div class="relative">
              <button (click)="userMenuOpen.set(!userMenuOpen())" class="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 transition-colors">
                <div class="w-9 h-9 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span class="text-primary-600 font-semibold text-sm">
                    {{ authService.currentUser()?.firstName?.charAt(0) || 'U' }}
                  </span>
                </div>
                <span class="hidden sm:block text-sm font-medium text-slate-700">
                  {{ authService.currentUser()?.firstName || 'Utilisateur' }}
                </span>
                <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              @if (userMenuOpen()) {
                <div class="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-soft border border-slate-100 py-1 z-50">
                  <a routerLink="/admin/profile" (click)="userMenuOpen.set(false)" class="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                    <svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    Mon profil
                  </a>
                  <hr class="my-1 border-slate-100">
                  <button (click)="logout()" class="flex items-center gap-3 px-4 py-2 text-sm text-danger-600 hover:bg-slate-50 w-full">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                    </svg>
                    D\xE9connexion
                  </button>
                </div>
              }
            </div>
          </div>
        </div>
      </header>
      
      <div class="flex">
        <!-- Sidebar -->
        <aside 
          class="fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-100 transform transition-transform duration-300 lg:translate-x-0"
          [class.translate-x-0]="sidebarOpen()"
          [class.-translate-x-full]="!sidebarOpen()"
          style="top: 64px;">
          <nav class="p-4 space-y-1">
            <a routerLink="/admin/dashboard" routerLinkActive="bg-primary-50 text-primary-600 font-medium" [routerLinkActiveOptions]="{exact: true}" 
               class="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              Tableau de bord
            </a>
            
            <div class="pt-4">
              <p class="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Contenu</p>
              <a routerLink="/admin/articles" routerLinkActive="bg-primary-50 text-primary-600 font-medium" 
                 class="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                </svg>
                Articles
              </a>
              <a routerLink="/admin/projects" routerLinkActive="bg-primary-50 text-primary-600 font-medium" 
                 class="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
                Projets
              </a>
              <a routerLink="/admin/documents" routerLinkActive="bg-primary-50 text-primary-600 font-medium" 
                 class="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
                Documents
              </a>
            </div>
            
            <div class="pt-4">
              <p class="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Communication</p>
              <a routerLink="/admin/contacts" routerLinkActive="bg-primary-50 text-primary-600 font-medium" 
                 class="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Messages
              </a>
            </div>
            
            @if (authService.isAdmin()) {
              <div class="pt-4">
                <p class="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Administration</p>
                <a routerLink="/admin/users" routerLinkActive="bg-primary-50 text-primary-600 font-medium" 
                   class="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                  Utilisateurs
                </a>
              </div>
            }
          </nav>
        </aside>
        
        <!-- Overlay for mobile -->
        @if (sidebarOpen()) {
          <div (click)="sidebarOpen.set(false)" class="fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-30 lg:hidden" style="top: 64px;"></div>
        }
        
        <!-- Main content -->
        <main class="flex-1 p-4 lg:p-8 min-h-[calc(100vh-64px)]">
          <router-outlet />
        </main>
      </div>
    </div>
  `
    }]
  }], () => [{ type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLayoutComponent, { className: "AdminLayoutComponent", filePath: "src/app/layouts/admin/admin-layout.component.ts", lineNumber: 157 });
})();
export {
  AdminLayoutComponent
};
//# sourceMappingURL=chunk-L73VQIIX.js.map
