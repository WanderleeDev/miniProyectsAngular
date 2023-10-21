import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flag-section',
  templateUrl: './flag-section.component.html'
})
export class FlagSectionComponent  implements OnInit{
  nameFlag: string | null = null;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.nameFlag = params.get('id');
      console.log(this.nameFlag);
    })
  }
}
