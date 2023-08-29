import { Component, Input } from '@angular/core';
import { ISubList } from 'src/app/interface/ISubList.interface';

@Component({
  selector: 'app-sub-list',
  templateUrl: './sub-list.component.html',
  styleUrls: ['./sub-list.component.scss']
})
export class SubListComponent {
  @Input() subListData?: ISubList;
}
