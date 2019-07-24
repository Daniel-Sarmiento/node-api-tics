import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Product } from '../product';

const APIURL = 'http://142.93.112.89:8000/api/v1/productos/';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getProductos(): Observable<any> {
    return this.httpClient.get(APIURL);
  }

  deleteProducto(id:number): Observable<any> {
    return this.httpClient.delete(APIURL+id);
  }

  addProducto(producto:any): Observable<any> {
    return this.httpClient.post(APIURL, producto, httpOptions);
  }

  getProducto(id:number): Observable<any>{
    return this.httpClient.get(APIURL+id);
  }

  editProducto(id:number, producto:any): Observable<any>{
    return this.httpClient.put(APIURL+id, producto, httpOptions);
  }

}
