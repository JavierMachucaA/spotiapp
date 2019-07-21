import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {
  @Input() items ;
  constructor(private router : Router) { 
    if(this.items!=null ){
      console.log(this.items[0]);
    }
  }

  public verArtista(item : any){
    
    let artistaId;

    if ( item.type === 'artist' ){
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }
    console.log("id : ", artistaId);
    this.router.navigate(['artist', artistaId]); 
  }

}
