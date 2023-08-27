import { Component, Input } from '@angular/core';
import { IListDataFooter } from 'src/app/interfaces/IListDataFooter.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() listItem?: IListDataFooter;
}
