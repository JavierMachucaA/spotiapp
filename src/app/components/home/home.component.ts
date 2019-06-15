import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogUtil } from '../shared/log.util';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  private log = new LogUtil(HomeComponent);

  public _nuevasCanciones : any[] = [];

  constructor( private spotifyService : SpotifyService  ) {
    this.spotifyService.getNewReleases().subscribe(
      (data : any)=>{
        this._nuevasCanciones = data;
        this.log.print(this._nuevasCanciones,"constructor");
      }
    );    
   }

   ngOnInit(){

   }

}
