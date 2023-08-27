import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AppearSearchBarService } from 'src/app/services/appearSearchBar/appear-search-bar.service';

@Component({
  selector: 'app-input-base',
  templateUrl: './input-base.component.html',
  styleUrls: ['./input-base.component.scss']
})
export class InputBaseComponent implements OnInit, OnDestroy{
  isViewSearchBar?: boolean;
  @Input() inpType: string = 'text';
  @Input() inpStyle?: {[key: string] : string};
  @Input() inpPlaceholder:string = 'Escribe aquí';

  constructor( private appearSearchBarService: AppearSearchBarService ) {}

  ngOnInit(): void {
    this.appearSearchBarService.appearBarSubject$.subscribe((newValue) => {
      this.isViewSearchBar = newValue;
    })
  }

  ngOnDestroy(): void {

  }

  showSearchBar () {
    this.appearSearchBarService.toggleAppearBar()
  }
}
