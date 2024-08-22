import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { LandingState } from './state/landing/landing.state';
import { SaveLanding } from './state/landing/landing.actions';
import { exampleLanding } from './mocks/example.landing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ts2landing-builder';
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
      new SaveLanding(exampleLanding)
    );
  }

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }
}
