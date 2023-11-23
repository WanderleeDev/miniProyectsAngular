import { Injectable } from '@angular/core';
import { IPersonalData } from '../interface/IPersonalDta.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataUserService {
  private personalData$ = new BehaviorSubject<IPersonalData>( {
    primaryData: {
      img: 'https://www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js-150x150.png',
      name: 'new user',
      subName: '',
      age: 0,
    },
    registerData: {
      password: '',
      email: '',
    },
    complementary: {
      nickName: '',
      'backup-account': '',
      phone: '',
      sex: 'Other',
      nationality: '',
      direction: '',
      extraDta: '',
    },
  })

  public getPersonalData (): Observable<IPersonalData> {
    return this.personalData$.asObservable()
  }

  public updatePersonalData (newData: IPersonalData): void {
    this.personalData$.next(newData)
  }
}
