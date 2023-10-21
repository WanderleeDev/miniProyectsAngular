import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-btn-back',
  templateUrl: './btn-back.component.html'
})
export class BtnBackComponent {

  constructor (
    private darkModeSvc: DarkModeService
  ) { }

  darkMode (): void {
    this.darkModeSvc.darkModeToggle()
  }
}
