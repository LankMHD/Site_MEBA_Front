import {
  AuthService
} from "./chunk-6HFIGEJQ.js";
import {
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-YDHKLCGD.js";
import "./chunk-DGOPQNLS.js";
import {
  Component,
  catchError,
  inject,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  setClassMetadata,
  throwError,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-WCAZC6LL.js";

// src/app/core/guards/auth.guard.ts
var adminGuard = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isAuthenticated() && authService.isModerator()) {
    return true;
  }
  if (!authService.isAuthenticated()) {
    router.navigate(["/auth/login"], { queryParams: { returnUrl: state.url } });
  } else {
    router.navigate(["/"]);
  }
  return false;
};
var guestGuard = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (!authService.isAuthenticated()) {
    return true;
  }
  router.navigate(["/"]);
  return false;
};

// src/app/app.routes.ts
var routes = [
  // Public routes with layout
  {
    path: "",
    loadComponent: () => import("./chunk-PPHHL2TL.js").then((m) => m.PublicLayoutComponent),
    children: [
      { path: "", loadComponent: () => import("./chunk-WYI5EAPC.js").then((m) => m.HomeComponent) },
      { path: "actualites", loadComponent: () => import("./chunk-TV2D32QA.js").then((m) => m.ArticlesListComponent) },
      { path: "actualites/:id", loadComponent: () => import("./chunk-CEUOSQ3E.js").then((m) => m.ArticleDetailComponent) },
      { path: "projets", loadComponent: () => import("./chunk-6EQB2HMJ.js").then((m) => m.ProjectsListComponent) },
      { path: "projets/:id", loadComponent: () => import("./chunk-2JCPZ66Y.js").then((m) => m.ProjectDetailComponent) },
      { path: "ressources/documents", loadComponent: () => import("./chunk-3WOZPWLF.js").then((m) => m.DocumentsListComponent) },
      { path: "contact", loadComponent: () => import("./chunk-MWAZVX2Q.js").then((m) => m.ContactComponent) },
      { path: "ministere/ministre", loadComponent: () => import("./chunk-C7EXQFMO.js").then((m) => m.MinistreComponent) },
      { path: "ministere/missions", loadComponent: () => import("./chunk-DL3UQ5KE.js").then((m) => m.MissionsComponent) },
      { path: "ministere/organigramme", loadComponent: () => import("./chunk-XP2SLVBU.js").then((m) => m.OrganigrammeComponent) },
      { path: "ministere/structures", loadComponent: () => import("./chunk-VQD6VVEE.js").then((m) => m.StructuresComponent) },
      { path: "faq", loadComponent: () => import("./chunk-LLNPSI44.js").then((m) => m.FAQComponent) },
      { path: "services", loadComponent: () => import("./chunk-GXAKZQJK.js").then((m) => m.ServicesComponent) },
      { path: "evenements", loadComponent: () => import("./chunk-BEXIWTPH.js").then((m) => m.EventsComponent) },
      // Redirections pour compatibilité
      { path: "articles", redirectTo: "actualites", pathMatch: "full" },
      { path: "articles/:id", redirectTo: "actualites/:id", pathMatch: "full" },
      { path: "projects", redirectTo: "projets", pathMatch: "full" },
      { path: "projects/:id", redirectTo: "projets/:id", pathMatch: "full" },
      { path: "documents", redirectTo: "ressources/documents", pathMatch: "full" }
    ]
  },
  // Auth routes (no layout)
  {
    path: "auth/login",
    loadComponent: () => import("./chunk-QMX2PBB5.js").then((m) => m.LoginComponent),
    canActivate: [guestGuard]
  },
  // Admin routes
  {
    path: "admin",
    loadComponent: () => import("./chunk-L73VQIIX.js").then((m) => m.AdminLayoutComponent),
    canActivate: [adminGuard],
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", loadComponent: () => import("./chunk-YWZS2F2H.js").then((m) => m.AdminDashboardComponent) },
      { path: "articles", loadComponent: () => import("./chunk-SXNHADYV.js").then((m) => m.AdminArticlesComponent) },
      { path: "projects", loadComponent: () => import("./chunk-BR77FDTY.js").then((m) => m.AdminProjectsComponent) },
      { path: "documents", loadComponent: () => import("./chunk-PP37XJI3.js").then((m) => m.AdminDocumentsComponent) },
      { path: "contacts", loadComponent: () => import("./chunk-ZPOJR534.js").then((m) => m.AdminContactsComponent) },
      { path: "users", loadComponent: () => import("./chunk-CNLUIBDI.js").then((m) => m.AdminUsersComponent) }
    ]
  },
  // Fallback
  { path: "**", redirectTo: "" }
];

// src/app/core/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const token = authService.getToken();
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  return next(req).pipe(catchError((error) => {
    if (error.status === 401) {
      authService.logout();
      router.navigate(["/auth/login"]);
    }
    return throwError(() => error);
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};

// src/app/app.ts
var App = class _App {
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{
      selector: "app-root",
      standalone: true,
      imports: [RouterOutlet],
      template: "<router-outlet />"
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 10 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
