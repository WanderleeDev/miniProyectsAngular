import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() listContent: string[] = [];
  @Input() styleList?:{[key: string]: string};
  @Input() showBtn: boolean = false;
}
