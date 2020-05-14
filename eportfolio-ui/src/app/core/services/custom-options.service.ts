import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomOptionsService {

  constructor() { }
  
  public getHttpOptions(params: HttpParams): {} {
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt_token'),
      }),
      params: params,
      observe: 'body' as 'response'
    }
    return httpOptions
  }
}