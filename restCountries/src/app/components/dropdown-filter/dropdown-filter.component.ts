import { Component } from '@angular/core';
import { HttpCountriesService } from 'src/app/services/http-countries.service';
import { CountryDataHubService } from 'src/app/services/country-data-hub.service';

@Component({
  selector: 'app-dropdown-filter',
  templateUrl: './dropdown-filter.component.html'
})
export class DropdownFilterComponent {
  filterParams = [
    'Africa',
    'America',
    'Asia',
    'Europe',
    'Oceania'
  ]

  constructor (
    private httpCountriesSvc: HttpCountriesService,
    private countryDataHubSvc: CountryDataHubService
  ) {}

  filterAndRender (param: string):void {
    this.httpCountriesSvc.getForRegion(param)
      .subscribe(res => {
        this.countryDataHubSvc.updateDataCountries(res)
        console.log(res)
      })
  }
}
