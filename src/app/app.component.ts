import { Component } from '@angular/core';
import { Landing } from 'ts2landing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ts2landing-demo';

  landing: Landing = {
    id: 'landing',
    intro: {
      title: {
        align: 'center',
        text: 'PRUEBA',
      },
      display: 'basic-left',
      animation: 'TitleZoom',
      linkButton: {
        link: 'https://google.com',
        text: {
          align: 'center',
          text: 'Google',
        },
      },
      logoSize: 'lg',
      logoUrl: 'https://avatars.githubusercontent.com/u/100232264?v=4',
    },
    content: [],
  };
}
