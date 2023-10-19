import { Component, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { IDataImg } from 'src/app/interface/IDataImg.interface';
import { IntersectionImageService } from 'src/app/services/intersection-image.service';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html'
})
export class ImgSliderComponent implements AfterViewInit{
  @Input() dataImg!: Partial<IDataImg>;
  @ViewChild('myImage') myImage!: ElementRef;
  listId :string[] = [
    'issue7',
    'issue6',
    'issue5',
    'issue4',
    'issue3',
    'issue2',
    'issue1'
  ]

  constructor (
    private intersectionImageSvc: IntersectionImageService
  ) {}

  ngAfterViewInit(): void {
    this.intersectionImageSvc.initIntersection(this.myImage.nativeElement)
    console.log(this.myImage.nativeElement);
  }
}
