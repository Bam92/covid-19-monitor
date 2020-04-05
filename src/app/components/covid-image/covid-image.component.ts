import { 
  Component, 
  OnInit,
  Input
} from '@angular/core';

import { Covid } from '../../covid.model';


/**
 * @CovidImage: A component to show a single (confirmed, deaths, recovered)
 * covid case's image
 */
@Component({
  selector: 'app-covid-image',
  template: `
  <img class="case-image" [src]="covid.imageUrl">
  `,
})
export class CovidImageComponent  {
  @Input() covid: Covid

  constructor() { }


}
