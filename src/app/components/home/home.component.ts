import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogUtil } from '../shared/log.util';
import { SpotifyService } from 'src/app/services/spotify.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  private log = new LogUtil(HomeComponent);

  public _nuevasCanciones : any[] = [];
  public loading : boolean ;
  public error : boolean;
  public mensajeError : string ;

  constructor( private spotifyService : SpotifyService  ) {
    this.loading = true;
    this.error = false;
    
    this.spotifyService.getNewReleases().subscribe(
      (data : any)=>{
        this._nuevasCanciones = data;
        this.log.print(this._nuevasCanciones,"constructor");
        this.loading = false;
      },
      (error: any )=>{
        this.error = true;
        console.log(error);
        this.mensajeError = error.error.error.message;
      }
    );    
   }

   ngOnInit(){

   }

}
