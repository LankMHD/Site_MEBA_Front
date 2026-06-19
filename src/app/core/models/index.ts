export * from './user.model';

// API Response
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  timestamp: string;
}

// Pagination
export interface Page<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}


//Agendas

export interface AgendaImage {
  id: number;
  imageUrl: string;
  displayOrder: number;
}


export interface Agenda {
  id: number;
  title: string;
  summary: string;
  content: string;
  status: ArticleStatus;
  authorId?: number;
  authorName?: string;
  publishedAt?: string;    // ou Date
  createdAt: string;
  updatedAt?: string;
  images: AgendaImage[];
  lieux: string;
  datePublication: Date;
}

//service

export interface Service {
  id: number;
  name: string;
  description: string;
  url: string;
  logo: string;
  
}

// Article
export enum ArticleCategory {
  ACTUALITE = 'ACTUALITE',
  COMMUNIQUE = 'COMMUNIQUE',
  EVENEMENT = 'EVENEMENT',
  PROJET = 'PROJET',
  RAPPORT = 'RAPPORT',
  DISCOURS = 'DISCOURS'
}

export enum ArticleStatus {
  DRAFT = 'DRAFT',
  PENDING = 'PENDING',
  PUBLISHED = 'PUBLISHED',
  ARCHIVED = 'ARCHIVED'
}


export interface Articlemage {
  id: number;
  imageUrl: string;
  isFeatured: boolean;
}

export interface Article {
  id: number;
  title: string;
  summary: string;
  content: string;
  featuredImage?: string;
  category: ArticleCategory;
  status: ArticleStatus;
  viewCount: number;
  featured: boolean;
  authorName?: string;
  authorId?: number;
  publishedAt?: string;
  createdAt: string;
  updatedAt?: string;
  images: Articlemage[];
}

//eveneent

export interface Evenement {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  imageUrl?: string;
  category: ArticleCategory;
  status: ArticleStatus;
  maxParticipants:number;
  currentParticipants:number;
  registrationRequired:boolean;
  isRegistrationOpen:boolean;
  createdBy:string;
  isPublic:boolean;
  
  authorName?: string;
  authorId?: number;
  
  createdAt: string;

  updatedAt?: string;
}

// Project
export enum ProjectStatus {
  PLANIFIE = 'PLANIFIE',
  EN_COURS = 'EN_COURS',
  SUSPENDU = 'SUSPENDU',
  TERMINE = 'TERMINE',
  ANNULE = 'ANNULE'
}

export interface Project {
  id: number;
  name: string;
  description: string;
  objectives: string;
  featuredImage?: string;
  status: ProjectStatus;
  budget?: number;
  progressPercentage: number;
  startDate?: string;
  endDate?: string;
  partner?: string;
  responsibleDepartment?: string;
  managerName?: string;
  managerId?: number;
  createdAt: string;
  updatedAt?: string;
  categorieProjetName: string;
  categorieProjetId: number;
  type: ProjetType;
}

// Document
export enum DocumentCategory {
  RAPPORT = 'RAPPORT',
  FORMULAIRE = 'FORMULAIRE',
  GUIDE = 'GUIDE',
  LOI = 'LOI',
  DECRET = 'DECRET',
  ARRETE = 'ARRETE',
  CIRCULAIRE = 'CIRCULAIRE',
  AUTRE = 'AUTRE'
}

export enum DocumentType {
  DOCUMENT = 'DOCUMENT SIMPLE',
  POLITIQUE = 'DOCUMENT POLITIQUE',

}

export enum ProjetType {
  PROJET = 'PROJET',
  PROGRAMME = 'PROGRAMME',

}

export interface Document {
  id: number;
  title: string;
  description?: string;
  fileName: string;
  filePath: string;
  fileUrl?: string;
  fileType?: string;
  fileSize?: number;
  category: DocumentCategory;
  downloadCount: number;
  isPublic: boolean;
  uploadedByName?: string;
  uploadedById?: number;
  createdAt: string;
  updatedAt?: string;
  typeId: number;
  typeName: string;
  typeDocument: DocumentType;
}

export interface TypeDocument {
  id: number;
  name: string;
  description: string;
}

// Contact
export enum ContactStatus {
  NON_LU = 'NON_LU',
  LU = 'LU',
  EN_TRAITEMENT = 'EN_TRAITEMENT',
  TRAITE = 'TRAITE',
  ARCHIVE = 'ARCHIVE'
}

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: ContactStatus;
  response?: string;
  respondedByName?: string;
  respondedById?: number;
  respondedAt?: string;
  createdAt: string;
}

// Dashboard Stats
export interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  totalArticles: number;
  publishedArticles: number;
  totalProjects: number;
  activeProjects: number;
  completedProjects: number;
  totalDocuments: number;
  publicDocuments: number;
  totalContacts: number;
  pendingContacts: number;
  averageProjectProgress: number;
}
