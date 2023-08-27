import { Component } from '@angular/core';
import { IListContentCards } from 'src/app/interfaces/IListContentCards.interface';

@Component({
  selector: 'app-gallery-help',
  templateUrl: './gallery-help.component.html',
  styleUrls: ['./gallery-help.component.scss']
})
export class GalleryHelpComponent {
  listContentCards: IListContentCards[] = [
    {
      'title': 'Using Abstract',
      'content': 'Abstract lets you manage, version, and document your designs in one place.',
      'img': '../../../assets/img/routes.png'
    },
    {
      'title': 'Manage your account',
      'content': 'Configure your account settings, such as your email, profile details, and password.',
      'img': '../../../assets/img/users.png'
    },
    {
      'title': 'Manage organizations, teams, and projects',
      'content': 'Use Abstract organizations, teams, and projects to organize your people and your work.',
      'img': '../../../assets/img/puzzle.png'
    },
    {
      'title': 'Manage billing',
      'content': 'Use Abstract organizations, teams, and projects to organize your people and your work.',
      'img': '../../../assets/img/money.png'
    },
    {
      'title': 'Authenticate to Abstract',
      'content': 'Set up and configure SSO, SCIM, and Just-in-Time provisioning.',
      'img': '../../../assets/img/key.png'
    },
    {
      'title': 'Abstract support',
      'content': 'Get in touch with a human.',
      'img': '../../../assets/img/globo.png'
    }
  ]
}
