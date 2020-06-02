import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../shared/user';
import { Book } from '../shared/book';
import { BookOwner } from '../shared/book_owner';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  apiURL = 'http://localhost:8081/api/';
  token = localStorage.getItem('token') || '';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept'       : 'application/json',
      'Authorization': `Bearer ${this.token}`,
      "Access-Control-Allow-Origin": '*',
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    })
  }  

  getlistBook(): Observable<Book> {
    return this.http.get<Book>(this.apiURL + 'books')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getEmployee(id): Observable<User> {
    return this.http.get<User>(this.apiURL + '/employees/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  login(user): Observable<User> {
    return this.http.post<User>(this.apiURL + 'user/login', JSON.stringify(user), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  buyBook(data): Observable<BookOwner> {
    return this.http.post<BookOwner>(this.apiURL + 'buy-book', JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  } 

  updateEmployee(id, employee): Observable<User> {
    return this.http.put<User>(this.apiURL + '/employees/' + id, JSON.stringify(employee), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  deleteEmployee(id){
    return this.http.delete<User>(this.apiURL + '/employees/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       errorMessage = error.error.message;
     } else {
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}