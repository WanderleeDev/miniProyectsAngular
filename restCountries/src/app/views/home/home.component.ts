import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
//  services
import { HttpCountriesService } from 'src/app/services/http-countries.service';
// interface
import { ICountry } from 'src/app/interfaces/ICountry.interface';
import { map } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  countries: ICountry[] = [];

  constructor(private httpCountriesSvc: HttpCountriesService) {}

  ngOnInit(): void {
    this.httpCountriesSvc.getAllCountries()
    .pipe(
      map((res: ICountry[]) => {
        this.countries = [...res.slice(0,5)];
        console.log(this.countries);
      })
    )
    .subscribe({
      error: (err: HttpErrorResponse) => {
        console.log(`Fallo al obtener la data: ${err.message}`);
      },
      complete: () =>
        console.log(
          '%cData obtenida correctamente',
          'background-color: green; padding: .2rem; font-weight: bold; border-radius: .2rem'
        ),
    });
  }
}
