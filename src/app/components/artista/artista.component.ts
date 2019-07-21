import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
import { LogUtil } from '../shared/log.util';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {
  private log = new LogUtil(ArtistaComponent);
  public artista : any = {};
  public topTracks : any[] = [];
  public loadingArtist : boolean ;

  constructor(private router : ActivatedRoute,
              private _spotifyService : SpotifyService
    ) {
    this.loadingArtist = true;
    this.router.params.subscribe(params => {
      //console.log(params['id']);
      let idArtista : string = params['id'];
      this.getArtist( idArtista );
      this.getTopTracks ( idArtista );
    })
  }

  ngOnInit() {
  }

  public getArtist(id:string){
    this._spotifyService.getArtist(id).subscribe(
      (response : any) => {
        //console.log("Response: ", response);
        this.artista = response;
        this.loadingArtist = false;
        //console.log(this.artista);
      },
    );
  }

  public getTopTracks (id: string){
    this._spotifyService.getTopTracksArtist( id ).
    subscribe(
      (response : any) => {
        console.log("Response: ", response);
        this.topTracks = response;
      },
      ( error : any ) => {
        console.log("Error: ", error);
      }

    );
  }

}
