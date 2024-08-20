import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Landing } from 'ts2landing';
import { CodeModalComponent } from '../code-modal/code-modal.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngxs/store';
import { LandingState } from '../state/landing/landing.state';
import { SaveLanding } from '../state/landing/landing.actions';

@Component({
  selector: 'app-settings-menu',
  standalone: true,
  imports: [CodeModalComponent, ReactiveFormsModule],
  templateUrl: './settings-menu.component.html',
  styleUrl: './settings-menu.component.scss',
})
export class SettingsMenuComponent {
  landingForm: FormGroup;
  landing = this.store.selectSignal(LandingState.getLanding);

  isOpen: boolean = false;

  @Output() clickResetLanding: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.landingForm = this.fb.group({
      titleText: [this.landing().intro.title.text],
      titleAlign: [this.landing().intro.title.align],
      subtitleText: [this.landing().intro.subtitle?.text],
      subtitleAlign: [this.landing().intro.subtitle?.align],
      introDisplay: [this.landing().intro.display],
      logoSize: [this.landing().intro.logo.size],
      logoUrl: [this.landing().intro.logo.url],
      logoId: [this.landing().intro.logo.id],
      animation: [this.landing().intro.animation],
      padding: [this.landing().intro.padding],
      linkButton: [this.landing().intro.linkButton?.link],
      buttonText: [this.landing().intro.linkButton?.text.text],
      buttonAlign: [this.landing().intro.linkButton?.text.align],
      buttonWidth: [this.landing().intro.linkButton?.width],
      buttonId: [this.landing().intro.linkButton?.id],
    });

    // Suscribirse a los cambios en el formulario
    this.landingForm.valueChanges.subscribe((values) => {
      let updatedLanding: Landing = this.landing();
      updatedLanding.intro.title.text = values.titleText;
      updatedLanding.intro.title.align = values.titleAlign;
      if (values.subtitleText || values.subtitleAlign) {
        updatedLanding.intro.subtitle = {
          align: values.subtitleAlign,
          text: values.subtitleText,
        };
      }
      updatedLanding.intro.display = values.introDisplay;
      updatedLanding.intro.logo.size = values.logoSize;
      updatedLanding.intro.logo.url = values.logoUrl;
      updatedLanding.intro.logo.id = values.logoId;
      updatedLanding.intro.animation = values.animation;
      updatedLanding.intro.padding = values.padding;

      if (values.linkButton || values.buttonText) {
        updatedLanding.intro.linkButton = {
          link: values.linkButton,
          text: {
            align: values.buttonAlign,
            text: values.buttonText,
          },
          width: values.buttonWidth,
          id: values.buttonId,
        };
      }
      this.store.dispatch(new SaveLanding(updatedLanding));
    });
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  resetLanding(): void {
    this.clickResetLanding.emit(true);
    this.ngOnInit();
  }
}
