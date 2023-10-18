import { Component } from '@angular/core';
import { IDataImg } from 'src/app/interface/IDataImg.interface';
// services
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html'
})
export class SliderComponent {
  sliderImgs!: IDataImg[];

  constructor (booksService: BooksService){
    this.sliderImgs =  booksService.getBooksData()
  }
}
