import {
  environment
} from "./chunk-DGOPQNLS.js";
import {
  HttpClient,
  HttpParams,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WCAZC6LL.js";

// src/app/core/services/api.service.ts
var ApiService = class _ApiService {
  http;
  API_URL = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  // ============ PUBLIC ARTICLES ============
  getPublishedArticles(page = 0, size = 10) {
    const params = new HttpParams().set("page", page).set("size", size);
    return this.http.get(`${this.API_URL}/public/articles`, { params });
  }
  getLatestArticles() {
    return this.http.get(`${this.API_URL}/public/articles/latest`);
  }
  getFeaturedArticles() {
    return this.http.get(`${this.API_URL}/public/articles/featured`);
  }
  getPublishedArticleById(id) {
    return this.http.get(`${this.API_URL}/public/articles/${id}`);
  }
  searchArticles(query, page = 0, size = 10) {
    const params = new HttpParams().set("query", query).set("page", page).set("size", size);
    return this.http.get(`${this.API_URL}/public/articles/search`, { params });
  }
  // Admin articles
  getAllArticles(page = 0, size = 10, sortBy = "createdAt", sortDir = "desc") {
    const params = new HttpParams().set("page", page).set("size", size).set("sortBy", sortBy).set("sortDir", sortDir);
    return this.http.get(`${this.API_URL}/articles`, { params });
  }
  getArticleById(id) {
    return this.http.get(`${this.API_URL}/articles/${id}`);
  }
  createArticle(article) {
    return this.http.post(`${this.API_URL}/articles`, article);
  }
  updateArticle(id, article) {
    return this.http.put(`${this.API_URL}/articles/${id}`, article);
  }
  deleteArticle(id) {
    return this.http.delete(`${this.API_URL}/articles/${id}`);
  }
  // ============ PUBLIC PROJECTS ============
  getPublicProjects(page = 0, size = 10) {
    const params = new HttpParams().set("page", page).set("size", size);
    return this.http.get(`${this.API_URL}/public/projects`, { params });
  }
  getLatestProjects() {
    return this.http.get(`${this.API_URL}/public/projects/latest`);
  }
  getPublicProjectById(id) {
    return this.http.get(`${this.API_URL}/public/projects/${id}`);
  }
  searchProjects(query, page = 0, size = 10) {
    const params = new HttpParams().set("query", query).set("page", page).set("size", size);
    return this.http.get(`${this.API_URL}/public/projects/search`, { params });
  }
  // Admin projects
  getAllProjects(page = 0, size = 10, sortBy = "createdAt", sortDir = "desc") {
    const params = new HttpParams().set("page", page).set("size", size).set("sortBy", sortBy).set("sortDir", sortDir);
    return this.http.get(`${this.API_URL}/projects`, { params });
  }
  getProjectById(id) {
    return this.http.get(`${this.API_URL}/projects/${id}`);
  }
  createProject(project) {
    return this.http.post(`${this.API_URL}/projects`, project);
  }
  updateProject(id, project) {
    return this.http.put(`${this.API_URL}/projects/${id}`, project);
  }
  deleteProject(id) {
    return this.http.delete(`${this.API_URL}/projects/${id}`);
  }
  // ============ PUBLIC DOCUMENTS ============
  getPublicDocuments(page = 0, size = 10) {
    const params = new HttpParams().set("page", page).set("size", size);
    return this.http.get(`${this.API_URL}/public/documents`, { params });
  }
  searchDocuments(query, page = 0, size = 10) {
    const params = new HttpParams().set("query", query).set("page", page).set("size", size);
    return this.http.get(`${this.API_URL}/public/documents/search`, { params });
  }
  // Admin documents
  getAllDocuments(page = 0, size = 10, sortBy = "createdAt", sortDir = "desc") {
    const params = new HttpParams().set("page", page).set("size", size).set("sortBy", sortBy).set("sortDir", sortDir);
    return this.http.get(`${this.API_URL}/documents`, { params });
  }
  getDocumentById(id) {
    return this.http.get(`${this.API_URL}/documents/${id}`);
  }
  createDocument(document) {
    return this.http.post(`${this.API_URL}/documents`, document);
  }
  updateDocument(id, document) {
    return this.http.put(`${this.API_URL}/documents/${id}`, document);
  }
  deleteDocument(id) {
    return this.http.delete(`${this.API_URL}/documents/${id}`);
  }
  // ============ PUBLIC CONTACTS ============
  submitContact(contact) {
    return this.http.post(`${this.API_URL}/public/contacts`, contact);
  }
  // Admin contacts
  getAllContacts(page = 0, size = 10, sortBy = "createdAt", sortDir = "desc") {
    const params = new HttpParams().set("page", page).set("size", size).set("sortBy", sortBy).set("sortDir", sortDir);
    return this.http.get(`${this.API_URL}/contacts`, { params });
  }
  getContactById(id) {
    return this.http.get(`${this.API_URL}/contacts/${id}`);
  }
  updateContactStatus(id, status) {
    return this.http.put(`${this.API_URL}/contacts/${id}/status`, { status });
  }
  respondToContact(id, response) {
    return this.http.post(`${this.API_URL}/contacts/${id}/respond`, { response });
  }
  deleteContact(id) {
    return this.http.delete(`${this.API_URL}/contacts/${id}`);
  }
  // ============ USERS ============
  getAllUsers(page = 0, size = 10, sortBy = "createdAt", sortDir = "desc") {
    const params = new HttpParams().set("page", page).set("size", size).set("sortBy", sortBy).set("sortDir", sortDir);
    return this.http.get(`${this.API_URL}/users`, { params });
  }
  getCurrentUser() {
    return this.http.get(`${this.API_URL}/users/me`);
  }
  getUserById(id) {
    return this.http.get(`${this.API_URL}/users/${id}`);
  }
  createUser(user) {
    return this.http.post(`${this.API_URL}/users`, user);
  }
  updateUser(id, user) {
    return this.http.put(`${this.API_URL}/users/${id}`, user);
  }
  changePassword(id, oldPassword, newPassword) {
    return this.http.put(`${this.API_URL}/users/${id}/password`, { oldPassword, newPassword });
  }
  toggleUserStatus(id) {
    return this.http.put(`${this.API_URL}/users/${id}/toggle-status`, {});
  }
  deleteUser(id) {
    return this.http.delete(`${this.API_URL}/users/${id}`);
  }
  // ============ DASHBOARD ============
  getDashboardStats() {
    return this.http.get(`${this.API_URL}/dashboard/stats`);
  }
  // Alias methods for dashboard
  getArticles(page = 0, size = 10) {
    return this.getAllArticles(page, size);
  }
  getContacts(page = 0, size = 10) {
    return this.getAllContacts(page, size);
  }
  // ============ EVENTS ============
  getPublicEvents(page = 0, size = 10) {
    const params = new HttpParams().set("page", page).set("size", size);
    return this.http.get(`${this.API_URL}/events/public`, { params });
  }
  getUpcomingEvents() {
    return this.http.get(`${this.API_URL}/events/public/upcoming`);
  }
  getEventById(id) {
    return this.http.get(`${this.API_URL}/events/public/${id}`);
  }
  getAllEvents(page = 0, size = 10) {
    const params = new HttpParams().set("page", page).set("size", size);
    return this.http.get(`${this.API_URL}/events`, { params });
  }
  createEvent(event) {
    return this.http.post(`${this.API_URL}/events`, event);
  }
  updateEvent(id, event) {
    return this.http.put(`${this.API_URL}/events/${id}`, event);
  }
  deleteEvent(id) {
    return this.http.delete(`${this.API_URL}/events/${id}`);
  }
  // ============ FLASH INFOS ============
  getActiveFlashInfos() {
    return this.http.get(`${this.API_URL}/flash-infos/public/active`);
  }
  getAllFlashInfos(page = 0, size = 10) {
    const params = new HttpParams().set("page", page).set("size", size);
    return this.http.get(`${this.API_URL}/flash-infos`, { params });
  }
  createFlashInfo(flashInfo) {
    return this.http.post(`${this.API_URL}/flash-infos`, flashInfo);
  }
  updateFlashInfo(id, flashInfo) {
    return this.http.put(`${this.API_URL}/flash-infos/${id}`, flashInfo);
  }
  deleteFlashInfo(id) {
    return this.http.delete(`${this.API_URL}/flash-infos/${id}`);
  }
  // ============ E-SERVICES ============
  getPublicServices(page = 0, size = 10) {
    const params = new HttpParams().set("page", page).set("size", size);
    return this.http.get(`${this.API_URL}/services/public`, { params });
  }
  getServicesByCategory(category) {
    return this.http.get(`${this.API_URL}/services/public/category/${category}`);
  }
  getServiceById(id) {
    return this.http.get(`${this.API_URL}/services/public/${id}`);
  }
  getAllServices(page = 0, size = 10) {
    const params = new HttpParams().set("page", page).set("size", size);
    return this.http.get(`${this.API_URL}/services`, { params });
  }
  createService(service) {
    return this.http.post(`${this.API_URL}/services`, service);
  }
  updateService(id, service) {
    return this.http.put(`${this.API_URL}/services/${id}`, service);
  }
  deleteService(id) {
    return this.http.delete(`${this.API_URL}/services/${id}`);
  }
  // ============ FAQ ============
  getPublicFAQs() {
    return this.http.get(`${this.API_URL}/faqs/public`);
  }
  getFAQsByCategory(category) {
    return this.http.get(`${this.API_URL}/faqs/public/category/${category}`);
  }
  searchFAQs(query) {
    const params = new HttpParams().set("query", query);
    return this.http.get(`${this.API_URL}/faqs/public/search`, { params });
  }
  getAllFAQs(page = 0, size = 10) {
    const params = new HttpParams().set("page", page).set("size", size);
    return this.http.get(`${this.API_URL}/faqs`, { params });
  }
  createFAQ(faq) {
    return this.http.post(`${this.API_URL}/faqs`, faq);
  }
  updateFAQ(id, faq) {
    return this.http.put(`${this.API_URL}/faqs/${id}`, faq);
  }
  deleteFAQ(id) {
    return this.http.delete(`${this.API_URL}/faqs/${id}`);
  }
  // ============ NEWSLETTER ============
  subscribeNewsletter(subscription) {
    return this.http.post(`${this.API_URL}/newsletter/public/subscribe`, subscription);
  }
  unsubscribeNewsletter(token) {
    return this.http.post(`${this.API_URL}/newsletter/public/unsubscribe`, { token });
  }
  getAllSubscriptions(page = 0, size = 10) {
    const params = new HttpParams().set("page", page).set("size", size);
    return this.http.get(`${this.API_URL}/newsletter`, { params });
  }
  // ============ STRUCTURES (ANNUAIRE) ============
  getPublicStructures() {
    return this.http.get(`${this.API_URL}/structures/public`);
  }
  getStructuresByType(type) {
    return this.http.get(`${this.API_URL}/structures/public/type/${type}`);
  }
  getAllStructures(page = 0, size = 10) {
    const params = new HttpParams().set("page", page).set("size", size);
    return this.http.get(`${this.API_URL}/structures`, { params });
  }
  createStructure(structure) {
    return this.http.post(`${this.API_URL}/structures`, structure);
  }
  updateStructure(id, structure) {
    return this.http.put(`${this.API_URL}/structures/${id}`, structure);
  }
  deleteStructure(id) {
    return this.http.delete(`${this.API_URL}/structures/${id}`);
  }
  static \u0275fac = function ApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApiService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ApiService
};
//# sourceMappingURL=chunk-ECCWOC2D.js.map
