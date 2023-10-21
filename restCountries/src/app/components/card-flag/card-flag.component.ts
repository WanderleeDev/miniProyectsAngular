import { Component, Input } from '@angular/core';
//  interface
import { ICountry } from 'src/app/interfaces/ICountry.interface';

@Component({
  selector: 'app-card-flag',
  templateUrl: './card-flag.component.html'
})
export class CardFlagComponent {
  @Input() dataCountry!: ICountry;
}
