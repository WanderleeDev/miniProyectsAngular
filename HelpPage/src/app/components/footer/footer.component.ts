import { Component } from '@angular/core';
import { IListDataFooter } from 'src/app/interfaces/IListDataFooter.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  dataList: IListDataFooter[] = [
    {
      title: 'Abstract',
      list: [
        'Start Trial',
        'Pricing',
        'Download'
      ]
    },
    {
      title: 'Resources',
      list: [
        'Blog',
        'Help Center',
        'Release Notes',
        'Status'
      ]
    },
    {
      title: 'Community',
      list: [
        'Twitter',
        'LinkedIn',
        'Facebook',
        'Dribbble',
        'Podcast'
      ]
    },
    {
      title: 'Company',
      list: [
        'About Us',
        'Careers',
        'Legal'
      ],
      secondList: {
        'subTitle' : 'Contact Us',
        subList : [
          'info@abstract.com'
        ]
      }
    }
  ];
}
