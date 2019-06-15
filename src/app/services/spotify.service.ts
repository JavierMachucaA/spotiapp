import { Injectable } from '@angular/core';
import { LogUtil } from '../components/shared/log.util';
import { HttpService, } from '../internal/service/http.service';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tokenKey } from '@angular/core/src/view';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private log = new LogUtil(SpotifyService);
  
  private _token = "BQA2oSJhh_H-9DJmI40vNAF6MdWkH0BQ2NAJTHBJO05TOPmR5k7f8TEq6GAYpno0lsRtD_YmO0BT7S_E9z0";

  constructor( private http : HttpClient) { 
    this.log.print("Servicio Spotify Listo");
  }

  private getQuery( query : string ) : Observable<any>{
    
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization':'Bearer '+ this._token,
    });

    return this.http.get(url, {headers});
  }

  public getNewReleases (){
    return this.getQuery("browse/new-releases").pipe( map( (data : any) => data.albums.items ));
  }

  public getArtista(termino: string ){
    return this.getQuery(`search?q=${termino}&type=artist`).pipe( map((data : any)=> data.artists.items));
  }
}
