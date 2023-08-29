import { Component } from '@angular/core';
import { ISubList } from 'src/app/interface/ISubList.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isOpenMenu: boolean = false;
  firstList: string[] = [
    'Live',
    'Push',
    'Note',
    'Link',
    'Shop',
    'Packs',
    'Help'
  ]
  secondList = [
    'Blog',
    'Ableton for the Classroom',
    'Ableton for Colleges and Universities',
    'Certified Training',
    'About Ableton',
    'Jobs',
    'Apprenticeships'
  ]
  thirdList: ISubList = {
    title : 'More from Ableton',
    listContent: [
      {
        subTitle: 'Loop',
        content: 'Watch Talks, Performances and Features from Ableton\'s Summit for Music Makers'
      },
      {
        subTitle: 'Learning Music',
        content: 'Learn the fundamentals of music making right in your browser.'
      },
      {
        subTitle: 'Learning Synths',
        content: 'Get started with synthesis using a web-based synth and accompanying lessons.'
      },
      {
        subTitle: 'Making Music',
        content: 'Some tips from 74 Creative Strategies for Electronic Producers.Get started with synthesis using a web-based synth and accompanying lessons'
      }
    ]
  }

  public showMenu(event:Event):void {
    this.isOpenMenu = !this.isOpenMenu
    console.log(this.isOpenMenu);

  }
}
