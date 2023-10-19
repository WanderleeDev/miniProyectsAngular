import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  listId = [
    'issue #7',
    'issue #6',
    'issue #5',
    'issue #4',
    'issue #3',
    'issue #2',
    'issue #1'
  ]
}
