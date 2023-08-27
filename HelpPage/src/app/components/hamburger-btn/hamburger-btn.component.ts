import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { OpenMenuService } from 'src/app/services/openMenu/open-menu.service';

@Component({
  selector: 'app-hamburger-btn',
  templateUrl: './hamburger-btn.component.html',
  styleUrls: ['./hamburger-btn.component.scss']
})
export class HamburgerBtnComponent implements OnInit, OnDestroy {
  hasMenuOpen?: boolean;
  private subscription!: Subscription;
  @Input() ariaLabel?: string;
  @Input() title?: string;

  constructor ( private openMenuService:OpenMenuService) {}

  ngOnInit(): void {
    this.subscription = this.openMenuService.hasMenuOpen$.subscribe(((isOpen) => {
      this.hasMenuOpen = isOpen;
    }))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  toggleMenu() {
    this.openMenuService.toggleMenu()
  }
}
