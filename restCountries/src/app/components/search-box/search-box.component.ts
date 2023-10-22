import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpCountriesService } from 'src/app/services/http-countries.service';
import { CountryDataHubService } from 'src/app/services/country-data-hub.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent {
  inputValue = '';

  constructor (
    private httpCountriesSvc: HttpCountriesService,
    private countryDataHubSvc: CountryDataHubService
  ) {}

  private getCountry (country: string) {
    this.httpCountriesSvc.getForCountry(country)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.countryDataHubSvc.updateDataCountries(res);
        },
        error: (err: HttpErrorResponse) => console.log(err.message),
        complete: () => console.log('data obtenida')
      })
  }

  public clickHandler () {
    if (!!this.inputValue) {
      this.getCountry(this.inputValue)
    }
  }

  public keydownHandler (event: KeyboardEvent) {
    if (event.code === 'Enter' && !!this.inputValue) {
      this.getCountry(this.inputValue)
    }
  }
}
