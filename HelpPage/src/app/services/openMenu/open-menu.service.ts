import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenMenuService {
  private hasMenuOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  public hasMenuOpen$: Observable<boolean> = this.hasMenuOpenSubject.asObservable();

  toggleMenu() {
    const newValue = !this.hasMenuOpenSubject.value
    this.hasMenuOpenSubject.next(newValue)
  }
}
