import { Component, Input } from '@angular/core';
import { IListContentCards } from 'src/app/interfaces/IListContentCards.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() cardData! :IListContentCards;
  @Input() img: string = '../../../../assets/img/globo.png';
}
