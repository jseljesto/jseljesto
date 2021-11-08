import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  _url = "http://localhost:4000/createOrder";
  constructor(private _http: HttpClient) { }

  createOrder(data): Observable<any> {
    return this._http.post(this._url, data);
  }

  getAll(): Observable<any> {
    return this._http.get(this._url);
  }
}
