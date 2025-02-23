import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL:any;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
   }

  get(url:string){
    return this.http.get(`${this.ROOT_URL}/${url}`)
  }

  post<T>(url: string, payload: Object): Observable<T> {
    return this.http.post<T>(`${this.ROOT_URL}/${url}`, payload);
}

  patch(url:string, payload:Object){
    return this.http.patch(`${this.ROOT_URL}/${url}`, payload);
  }

  delete(url:string){
    return this.http.delete(`${this.ROOT_URL}/${url}`);
  }
}
