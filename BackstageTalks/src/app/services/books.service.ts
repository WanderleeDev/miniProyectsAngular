import { Injectable } from '@angular/core';
import { IDataImg } from '../interface/IDataImg.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private booksData: IDataImg[] =  [
    {
      id: 'issue7',
      img: '../../../assets/img/backstagetalks.webp',
      title: 'Issue #7',
      link: [
        {
          link: 'BUY HERE',
          text: '(Europe)',
          url: '#'
        },
        {
          link: 'BUY HERE',
          text: '(UK & Overseas)',
          url: '#'
        }
      ],
      linkStore: {
        link: 'selected stores',
          text: 'on in',
          url: '#'
      }
    },
    {
      id: 'issue6',
      img: '../../../assets/img/backstagetalks2.webp',
      title: 'Issue #6',
      link: [
        {
          link: 'BUY HERE',
          text: '',
          url: '#'
        }
      ],
      linkStore: {
        link: 'selected stores',
          text: 'on in',
          url: '#'
      }
    },
    {
      id: 'issue5',
      img: '../../../assets/img/backstagetalks3.webp',
      title: 'Issue #5',
      link: [
        {
          link: 'BUY HERE',
          text: '',
          url: '#'
        },
      ],
      linkStore: {
        link: 'selected stores',
          text: 'on in',
          url: '#'
      }
    },
    {
      id: 'issue4',
      img: '../../../assets/img/backstagetalks4.webp',
      title: 'Issue #4',
      link: [],
      linkStore: {
        link: 'selected stores',
          text: 'If you are lucky, you may get the last pieces in',
          url: '#'
      }
    },
    {
      id: 'issue3',
      img: '../../../assets/img/backstagetalks5.webp',
      title: 'Issue #3',
      link: [
        {
          link: 'BUY HERE',
          text: '',
          url: '#'
        },
      ],
      linkStore: {
        link: 'selected stores',
          text: 'on in',
          url: '#'
      }
    },
    {
      id: 'issue2',
      img: '../../../assets/img/backstagetalks6.webp',
      title: 'Issue #2',
      link: [
        {
          link: 'BUY HERE',
          text: '',
          url: '#'
        }
      ],
      linkStore: {
        link: 'selected stores',
          text: 'on in',
          url: '#'
      }
    },
    {
      id: 'issue1',
      img: '../../../assets/img/backstagetalks7.webp',
      title: 'Issue #1',
      link: [],
      linkStore: {
        link: 'selected stores',
          text: 'If you are lucky, you may get the last pieces in',
          url: '#'
      }
    }
  ];

  public getBooksData ():IDataImg[] {
    return this.booksData
  }
}
