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
  private ARTIST_ROUTE : string = 'artists';
  private _token = "BQCDC4ZAQA6SMdLH5JDDUQ6TGxfsfjk0tcSURDsgeR5SkAWfigIlDx3x1TngNM460L2xNbZemihu_ZhBioQ";

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

  public getArtistas(termino: string ){
    return this.getQuery(`search?q=${termino}&type=artist`).pipe( map((data : any)=> data.artists.items));
  }

  public getArtist(id: string ){
    return this.getQuery(`${this.ARTIST_ROUTE}/${ id }`);
  }

  public getTopTracksArtist(id: string ){
    return this.getQuery(`${this.ARTIST_ROUTE}/${ id }/top-tracks?country=cl`).
    pipe( map( (data : any) =>data['tracks'] ));
  }
}
