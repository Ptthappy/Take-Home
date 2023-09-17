import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  get(url: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}${url}`).pipe(
      catchError(this.handleError)
    );
  }

  post(url: string, data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}${url}`, data).pipe(
      catchError(this.handleError)
    );
  }

  put(url: string, data: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}${url}`, data).pipe(
      catchError(this.handleError)
    );
  }

  delete(url: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}${url}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}