import { Component, Input } from '@angular/core';
import { IDataImg } from 'src/app/interface/IDataImg.interface';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html'
})
export class ImgSliderComponent {
  @Input() dataImg!: Partial<IDataImg>;
  listId :string[] = [
    'issue7',
    'issue6',
    'issue5',
    'issue4',
    'issue3',
    'issue2',
    'issue1'
  ]
}
