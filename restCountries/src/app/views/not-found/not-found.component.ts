import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent implements OnInit {
  pathname: string | null = null;

  ngOnInit(): void {
    this.pathname = window.location.href;
  }
}
