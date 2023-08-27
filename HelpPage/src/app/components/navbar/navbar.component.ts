import { Component, OnInit } from '@angular/core';
import { AppearSearchBarService } from 'src/app/services/appearSearchBar/appear-search-bar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  iconPage = '../../../assets/svg/i.svg';
  searchIcon = '../../../assets/svg/search.svg';
  inputStyles: {[key: string] : string} = {
    'padding': '0.625rem 1rem',
    'border': 'solid 1px var(--primary-clr)'
  };

  constructor(private appearSearchBarService: AppearSearchBarService) {}


  showSearchBar() {
    this.appearSearchBarService.toggleAppearBar()
  }
}
