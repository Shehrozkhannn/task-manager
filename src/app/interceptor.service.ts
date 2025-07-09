import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private authService:AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    req = this.authHeader(req);
    return next.handle(req).pipe(
      catchError((error)=>{
        console.log(error)
        return throwError(error)
      })
    )
  }

  authHeader(req:any){
    const token = this.authService.getAccessToken(); 
    if(token){
      return req.clone({
        setHeaders: {
          'x-access-token': token
        }
      })
    }
    return req
  }
}
