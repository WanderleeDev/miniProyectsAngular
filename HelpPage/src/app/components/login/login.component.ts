import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OpenMenuService } from 'src/app/services/openMenu/open-menu.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  hasMenuOpen?: boolean;
  listTextBtn = [
    'Submit request',
    'Sign in'
  ]
  textBtns = [
    'Submit a request',
    'Sign in'
  ]
  stylesBtn: {[key: string] : string} = {
    'width': 'min(19rem, 100%)',
    'cursor': 'pointer',
    'padding': '1rem 2rem'
  }

  constructor( private openMenuService: OpenMenuService ) {}

  ngOnInit(): void {
    this.subscription = this.openMenuService.hasMenuOpen$.subscribe((isOpen) => {
      this.hasMenuOpen = isOpen
    })

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
