import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
//  services
import { HttpCountriesService } from 'src/app/services/http-countries.service';
import { CountryDataHubService } from 'src/app/services/country-data-hub.service';
// interface
import { ICountry } from 'src/app/interfaces/ICountry.interface';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy{
  countries: ICountry[] = [];
  subscriptionCountries!: Subscription;

  constructor(
    private httpCountriesSvc: HttpCountriesService,
    private countryDataHubSvc: CountryDataHubService
  ) {}

  ngOnInit(): void {
    this.httpCountriesSvc.getAllCountries()
      .subscribe({
        next: (res: ICountry[]) => {
          this.countryDataHubSvc.updateDataCountries(res.slice(0,40))
        },
        error: (err: HttpErrorResponse) => {
          console.log(`Fallo al obtener la data: ${err.message}`);
        },
        complete: () => {
          console.log(
            '%cData obtenida correctamente',
            'background-color: green; padding: .2rem; font-weight: bold; border-radius: .2rem'
          )}
    });

    this.subscriptionCountries = this.countryDataHubSvc.getObservableCountry()
      .subscribe(res => {
        this.countries = res;
      })
  }

  ngOnDestroy(): void {
    this.subscriptionCountries.unsubscribe();
    console.log('unsuscribe');
  }
}
