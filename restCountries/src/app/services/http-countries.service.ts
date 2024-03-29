import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICountry } from '../interfaces/ICountry.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpCountriesService {
  private readonly urlBase = 'https://restcountries.com/v3.1/'

  constructor(
    private http: HttpClient
  ) { }

  public getAllCountries (): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(`${this.urlBase}all`)
  }

  public getForRegion (region: string): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(`${this.urlBase}region/${region}`)
  }

  public getForCountry (country: string): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(`${this.urlBase}name/${country}?fullText=true`)
  }

}
