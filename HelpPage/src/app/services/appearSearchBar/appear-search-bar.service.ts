import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppearSearchBarService {
  private hasAppearBarSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public appearBarSubject$: Observable<boolean> = this.hasAppearBarSubject.asObservable();

  toggleAppearBar() {
    const newValue = !this.hasAppearBarSubject.value;
    this.hasAppearBarSubject.next(newValue);
  }
}
