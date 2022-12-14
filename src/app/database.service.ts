import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  getStore():Observable<any> {
    const storeUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSlACCVY3mvuDoYu4iY_A719KLTV0v548pHdsJE9YX8Vx9zZUgc_ZQEikEH9L826_jjMwRu8QQalDaF/pub?output=csv"  
    return this.http.get(storeUrl, {responseType: 'text'});
  }

  getBoard():Observable<any> {
    const boardUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSlACCVY3mvuDoYu4iY_A719KLTV0v548pHdsJE9YX8Vx9zZUgc_ZQEikEH9L826_jjMwRu8QQalDaF/pub?gid=1309853685&single=true&output=csv"
    return this.http.get(boardUrl, {responseType: 'text'});
  }

  getEvents():Observable<any> {
    const eventUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSlACCVY3mvuDoYu4iY_A719KLTV0v548pHdsJE9YX8Vx9zZUgc_ZQEikEH9L826_jjMwRu8QQalDaF/pub?gid=402719465&single=true&output=csv"
    return this.http.get(eventUrl, {responseType: 'text'});

  }
}
