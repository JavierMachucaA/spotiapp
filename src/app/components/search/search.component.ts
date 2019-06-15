import { Component, OnInit } from '@angular/core';
import { LogUtil } from '../shared/log.util';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  private log = new LogUtil(SearchComponent);

  public _artistas : any [] = [];

  constructor( private _spotifyService : SpotifyService) { }

  ngOnInit() {
  }

  public buscar(termino: string ){
    this._spotifyService.getArtista(termino)
    .subscribe(
      (data: any)=>{
        this.log.print(data,"buscar");
        this._artistas = data;
      }, 
      (error :any) =>{
        this.log.printError("error",error);
      });
  }

}
