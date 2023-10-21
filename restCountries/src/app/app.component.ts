import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { DarkModeService } from './services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'restCountries';

  constructor (
    private darkModeSvc: DarkModeService
  ) {}

  ngOnInit (): void {
    this.darkModeSvc.checkDarkMode()
    initFlowbite();
  }
}
