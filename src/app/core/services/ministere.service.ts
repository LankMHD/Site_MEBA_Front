import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, Page } from '../models';
import { Domains, Etats, Ministre, Mission, Organigramme, Structure } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class MinistereService {

private readonly API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

// organiramme
createOrg(formData: FormData): Observable<ApiResponse<Organigramme>> {
  return this.http.post<ApiResponse<Organigramme>>(`${this.API_URL}/structures`, formData);
}

updateOrg(id: number, formData: FormData): Observable<ApiResponse<Organigramme>> {
  return this.http.put<ApiResponse<Organigramme>>(`${this.API_URL}/structures/${id}`, formData);
}


  deleteOrg(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API_URL}/structures/${id}`);
  }
  
   getAllOrg(page = 0, size = 10, sortBy = 'createdAt', sortDir = 'desc'): Observable<ApiResponse<Page<Organigramme>>> {
    const params = new HttpParams()
      .set('page', page).set('size', size)
      .set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get<ApiResponse<Page<Organigramme>>>(`${this.API_URL}/structures`, { params });
  }

  getAllOrgPub1(): Observable<ApiResponse<Organigramme[]>> {
  return this.http.get<ApiResponse<Organigramme[]>>(
    `${this.API_URL}/structures`
  );
}

getAllOrgPub(): Observable<ApiResponse<Page<Organigramme>>> {
  return this.http.get<ApiResponse<Page<Organigramme>>>(
    `${this.API_URL}/structures`
  );
}


  //domains

  getAllTypes(page = 0, size = 10, sortBy = 'nom', sortDir = 'desc'): Observable<ApiResponse<Page<Domains>>> {
      const params = new HttpParams()
        .set('page', page).set('size', size)
        .set('sortBy', sortBy).set('sortDir', sortDir);
      return this.http.get<ApiResponse<Page<Domains>>>(`${this.API_URL}/domaines`, { params });
    }
  
    getAllDomaines(): Observable<Domains[]> {
      return this.http.get<Domains[]>(
        `${this.API_URL}/domaines`
      );
    }

 
  
  
  
    getypesById(id: number): Observable<ApiResponse<Domains>> {
      return this.http.get<ApiResponse<Domains>>(`${this.API_URL}/domaines/${id}`);
    }
  
    createTypes(project: Partial<Domains>): Observable<ApiResponse<Domains>> {
      return this.http.post<ApiResponse<Domains>>(`${this.API_URL}/domaines`, project);
    }
  
    updateTypes(id: number, project: Partial<Domains>): Observable<ApiResponse<Domains>> {
      return this.http.put<ApiResponse<Domains>>(`${this.API_URL}/domaines/${id}`, project);
    }
  
    deleteTypes(id: number): Observable<ApiResponse<void>> {
      return this.http.delete<ApiResponse<void>>(`${this.API_URL}/domaines/${id}`);
    }



    //structures rattachaché 

    // organiramme
createStruc1(formData: FormData): Observable<ApiResponse<Structure>> {
  return this.http.post<ApiResponse<Structure>>(`${this.API_URL}/structures-rattachees`, formData);
}

createStruc(formData: FormData): Observable<ApiResponse<Structure>> {

  const token = localStorage.getItem('token');

  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });

  return this.http.post<ApiResponse<Structure>>(
    `${this.API_URL}/structures-rattachees`,
    formData,
    { headers }
  );
}
updatetruc(id: number, formData: FormData): Observable<ApiResponse<Structure>> {
  return this.http.put<ApiResponse<Structure>>(`${this.API_URL}/structures-rattachees/${id}`, formData);
}


  deletetruc(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API_URL}/structures-rattachees/${id}`);
  }
  
   getAlltruc(page = 0, size = 10, sortBy = 'createdAt', sortDir = 'desc'): Observable<ApiResponse<Page<Structure>>> {
    const params = new HttpParams()
      .set('page', page).set('size', size)
      .set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get<ApiResponse<Page<Structure>>>(`${this.API_URL}/structures-rattachees`, { params });
  }

getAllTruc(): Observable<Structure[]> {
  return this.http.get<Structure[]>(
    `${this.API_URL}/structures-rattachees`
  );
}


//Mission

  getAllMissions(page = 0, size = 10, sortBy = 'categorie', sortDir = 'desc'): Observable<ApiResponse<Page<Mission>>> {
      const params = new HttpParams()
        .set('page', page).set('size', size)
        .set('sortBy', sortBy).set('sortDir', sortDir);
      return this.http.get<ApiResponse<Page<Mission>>>(`${this.API_URL}/missions`, { params });
    }
  
    getAllMissionss(): Observable<Mission[]> {
      return this.http.get<Mission[]>(
        `${this.API_URL}/missions`
      );
    }

 
  
  
  
    getMissionsById(id: number): Observable<ApiResponse<Mission>> {
      return this.http.get<ApiResponse<Mission>>(`${this.API_URL}/missions/${id}`);
    }
  
    createMissions(project: Partial<Mission>): Observable<ApiResponse<Mission>> {
      return this.http.post<ApiResponse<Mission>>(`${this.API_URL}/missions`, project);
    }
  
    updateMissions(id: number, project: Partial<Mission>): Observable<ApiResponse<Mission>> {
      return this.http.put<ApiResponse<Mission>>(`${this.API_URL}/missions/${id}`, project);
    }
  
    deleteMissions(id: number): Observable<ApiResponse<void>> {
      return this.http.delete<ApiResponse<void>>(`${this.API_URL}/missions/${id}`);
    }


  

    // Minsitre
createMinistre(formData: FormData): Observable<ApiResponse<Ministre>> {
  return this.http.post<ApiResponse<Ministre>>(`${this.API_URL}/ministres`, formData);
}

updateMinistre(id: number, formData: FormData): Observable<ApiResponse<Ministre>> {
  return this.http.put<ApiResponse<Ministre>>(`${this.API_URL}/ministres/${id}`, formData);
}


  deleteMinistre(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API_URL}/ministres/${id}`);
  }
  
   getAllMinistre(page = 0, size = 10, sortBy = 'createdAt', sortDir = 'desc'): Observable<ApiResponse<Page<Ministre>>> {
    const params = new HttpParams()
      .set('page', page).set('size', size)
      .set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get<ApiResponse<Page<Ministre>>>(`${this.API_URL}/ministres`, { params });
  }

  getAllMinistrePub1(): Observable<ApiResponse<Ministre[]>> {
  return this.http.get<ApiResponse<Ministre[]>>(
    `${this.API_URL}/ministres`
  );
}

getAllMinistrePub(): Observable<ApiResponse<Page<Ministre>>> {
  return this.http.get<ApiResponse<Page<Ministre>>>(
    `${this.API_URL}/ministres`
  );
}


 getMinistreById(id: number): Observable<ApiResponse<Ministre>> {
      return this.http.get<ApiResponse<Ministre>>(`${this.API_URL}/ministres/${id}`);
    }

// Etats

  getAllEtats(page = 0, size = 10, sortBy = 'nom', sortDir = 'desc'): Observable<ApiResponse<Page<Etats>>> {
      const params = new HttpParams()
        .set('page', page).set('size', size)
        .set('sortBy', sortBy).set('sortDir', sortDir);
      return this.http.get<ApiResponse<Page<Etats>>>(`${this.API_URL}/statistiques`, { params });
    }
  
    getAllEtat(): Observable<Etats[]> {
      return this.http.get<Etats[]>(
        `${this.API_URL}/statistiques`
      );
    }


    getAllEtatPub(): Observable<ApiResponse<Page<Etats>>> {
      return this.http.get<ApiResponse<Page<Etats>>>(`${this.API_URL}/statistiques`);
    }
    
     

 
  
  
  
    geEtatById(id: number): Observable<ApiResponse<Etats>> {
      return this.http.get<ApiResponse<Etats>>(`${this.API_URL}/statistiques/${id}`);
    }
  
    createEtat(project: Partial<Domains>): Observable<ApiResponse<Etats>> {
      return this.http.post<ApiResponse<Etats>>(`${this.API_URL}/statistiques`, project);
    }
  
    updateEtats(id: number, project: Partial<Etats>): Observable<ApiResponse<Etats>> {
      return this.http.put<ApiResponse<Etats>>(`${this.API_URL}/statistiques/${id}`, project);
    }
  
    deleteEtats(id: number): Observable<ApiResponse<void>> {
      return this.http.delete<ApiResponse<void>>(`${this.API_URL}/statistiques/${id}`);
    }


}
