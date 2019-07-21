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
  public loading: boolean ;
  constructor( private _spotifyService : SpotifyService) { 
  }

  ngOnInit() {
  }

  public buscar(termino: string ){
    this.loading = true;
    (termino!==null && termino!=='') ? this._spotifyService.getArtistas(termino)
    .subscribe(
      (data: any)=>{
        //this.log.print(data,"buscar");
        this._artistas = data;
        this.loading = false;
      }, 
      (error :any) =>{
        this.log.printError("error",error);
      }):console.log("Busqueda vacía");
  }

}
