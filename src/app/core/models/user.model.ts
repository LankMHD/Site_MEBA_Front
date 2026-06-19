export interface User {
  id: number;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  position?: string;
  department?: string;
  profileImage?: string;
  enabled: boolean;
  active: boolean;
  roles: string[];
  createdAt?: string;
  lastLogin?: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  position?: string;
  department?: string;
  roles?: string[];
}

export interface JwtResponse {
  token: string;
  type: string;
  id: number;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  profileImage?: string;
  roles: string[];
}

export interface PasswordChange {
  oldPassword: string;
  newPassword: string;
}
