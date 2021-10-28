import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const productApi = 'http://old-stuff-exchange-api.herokuapp.com/api' 

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  productCount: number = 0
  constructor(private http: HttpClient) { }

 

  getAllProduct(): Observable<any> {
    return this.http.get(`${productApi}/products`);
  }

  getDetailProduct(id): Observable<any> {
    return this.http.get(`${productApi}/products/${id}`);
  }

  showMoreProduct(id): Observable<any> {
    return this.http.get(`${productApi}/products/brand/${id}`);
  }

  getAllIphone(): Observable<any> {
     return this.http.get(`${productApi}/products/brand/1`);
  }

  getAllSamsung(): Observable<any> {
    return this.http.get(`${productApi}/products/brand/2`);
 }

 getAllDell(): Observable<any> {
  return this.http.get(`${productApi}/products/brand/3`);
}

getAllAsus(): Observable<any> {
 return this.http.get(`${productApi}/products/brand/4`);
}

set(key: string, data: any): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('Error saving to localStorage', e);
  }
}

get(key: string) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    console.error('Error getting data from localStorage', e);
    return null;
  }
}
}
