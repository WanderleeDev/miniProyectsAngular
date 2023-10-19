import { Component, Input, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { IDataImg } from 'src/app/interface/IDataImg.interface';
import { IntersectionImageService } from 'src/app/services/intersection-image.service';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html'
})
export class ImgSliderComponent implements AfterViewInit, OnDestroy{
  @Input() dataImg!: Partial<IDataImg>;
  @Input() slideNumber!: number;
  @ViewChild('myImage') myImage!: ElementRef;

  constructor (
    private intersectionImageSvc: IntersectionImageService
  ) {}

  ngAfterViewInit(): void {
    const rangeObserver = document.querySelector('#slider');
    this.intersectionImageSvc.initIntersection(this.myImage.nativeElement, rangeObserver)
  }

  ngOnDestroy(): void {
    this.intersectionImageSvc.disconnectIntersection()
  }
}
