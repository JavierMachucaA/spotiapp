import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Constants } from '../utils/constants.utils';

@Pipe({
  name: 'spotifysegurized'
})
export class SpotifysegurizedPipe implements PipeTransform {
  
  constructor( private domSanitizer:DomSanitizer){}

  transform( value: string): any {
    const url = Constants.WIDGET_SPOTIFY_URL;
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );
  }

}
