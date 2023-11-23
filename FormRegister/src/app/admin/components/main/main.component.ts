import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
//  services
import { DataUserService } from 'src/app/services/data-user.service';
//  interface
import { IPersonalData } from 'src/app/interface/IPersonalDta.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  name = 'Wanderlee Max'
  dataUser: IPersonalData | null =  null;
  userSubscription = new Subscription()

  constructor (
    private dataUserSvc: DataUserService
  ) {}

  ngOnInit(): void {
    this.userSubscription = this.dataUserSvc.getPersonalData()
      .subscribe({
        next: (res) => {
          this.dataUser = res;
          console.log('Subscription activated');
        },
        error: (err) => console.log(err),
        complete: () => console.log('Data obtain')
      })
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe()
    console.log('unsubscribe');
  }
}
