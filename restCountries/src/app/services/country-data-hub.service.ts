import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICountry } from '../interfaces/ICountry.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryDataHubService {
  private countryData = new BehaviorSubject<ICountry[]>([]);
  private observableCountry$ = this.countryData.asObservable();

  public getObservableCountry (): Observable<ICountry[]> {
    return this.observableCountry$
  }

  public updateDataCountries (newData: ICountry[]): void {
    this.countryData.next(newData)
  }
}
