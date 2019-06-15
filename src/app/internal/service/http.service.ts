import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private http : HttpClient) {
    
  }

  public get( value: string,  options?: {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean; }) : Observable<any>{
    return this.http.get(value,);
  }

  public post( url: string, body: any | null, options: {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType: 'arraybuffer';
    withCredentials?: boolean;
    }  ) : Observable<any>{
    return this.http.post(url, body, options);
  }
}
