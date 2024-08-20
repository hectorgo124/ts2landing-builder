import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngxs/store';
import { SaveLanding } from 'src/app/state/landing/landing.actions';
import { LandingState } from 'src/app/state/landing/landing.state';
import { Landing } from 'ts2landing';
import { SettingsMenuService } from '../../settings-menu.service';

@Component({
  selector: 'app-intro-settings',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './intro-settings.component.html',
  styleUrl: './intro-settings.component.scss',
})
export class IntroSettingsComponent implements OnInit {
  introForm: FormGroup;
  landing = this.store.selectSignal(LandingState.getLanding);

  settingsService = inject(SettingsMenuService);

  constructor(private store: Store, private fb: FormBuilder) {
    this.settingsService.resetAction$.subscribe(() => {
      this.setIntroForm();
    });
  }

  ngOnInit(): void {
    this.setIntroForm();

    this.subscribeToForm();
  }

  subscribeToForm() {
    // Suscribirse a los cambios en el formulario
    this.introForm.valueChanges.subscribe((values) => {
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

  setIntroForm() {
    this.introForm = this.fb.group({
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
  }
}
