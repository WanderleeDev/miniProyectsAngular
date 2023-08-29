import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html'
})
export class SliderComponent {
  sliderImgs: string[] = [
    '../../../assets/img/backstagetalks.webp',
    '../../../assets/img/backstagetalks2.webp',
    '../../../assets/img/backstagetalks3.webp',
    '../../../assets/img/backstagetalks4.webp',
    '../../../assets/img/backstagetalks5.webp',
    '../../../assets/img/backstagetalks6.webp',
    '../../../assets/img/backstagetalks7.webp'
  ]
}
