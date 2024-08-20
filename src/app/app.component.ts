import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Landing } from 'ts2landing';
import { LandingState } from './state/landing/landing.state';
import { SaveLanding } from './state/landing/landing.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ts2landing-demo';
  isOpen: boolean = false;
  landing = this.store.selectSignal(LandingState.getLanding);
  // setDisplay(newDisplay : any) {
  //   this.landing.intro.display = newDisplay;
  // }

  constructor(private store: Store) {
    if (!this.landing()) {
      this.setLanding();
    }
  }

  setLanding(): void {
    this.store.dispatch(
      new SaveLanding({
        id: 'landing',
        intro: {
          title: {
            align: 'start',
            text: 'TS2LANDING. Transforming an object to a Landing Page',
          },
          subtitle: {
            align: 'start',
            text: 'Created by Hector Granell :)',
          },
          display: 'basic-left',
          animation: 'TitleReveal',
          linkButton: {
            link: 'https://www.npmjs.com/package/ts2landing',
            text: {
              align: 'center',
              text: 'NPM',
            },
          },
          logo: {
            size: 'xl',
            url: 'https://avatars.githubusercontent.com/u/100232264?v=4',
          },
          padding: 'md',
        },
        content: [],
      })
    );
  }

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }
}
