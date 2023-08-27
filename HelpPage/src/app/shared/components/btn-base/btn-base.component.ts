import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-base',
  templateUrl: './btn-base.component.html',
  styleUrls: ['./btn-base.component.scss']
})
export class BtnBaseComponent {
  @Input() inpText?:string;
  @Input() inpStyle?: {[key: string]: string};
  @Input() imgStyle?: {[key: string]: string};
  @Input() imgBtn?: string;
  @Input() title?: string;
  @Input() ariaLabel?:string;
}
