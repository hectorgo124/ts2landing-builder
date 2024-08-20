import {
  Component,
  EventEmitter,
  inject,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { CodeModalComponent } from '../code-modal/code-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IntroSettingsComponent } from './components/intro-settings/intro-settings.component';
import { SettingsMenuService } from './settings-menu.service';

@Component({
  selector: 'app-settings-menu',
  standalone: true,
  imports: [CodeModalComponent, ReactiveFormsModule, IntroSettingsComponent],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './settings-menu.component.html',
  styleUrl: './settings-menu.component.scss',
})
export class SettingsMenuComponent {
  isOpen: boolean = false;

  @Output() clickResetLanding: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  settingsService = inject(SettingsMenuService);

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  resetLanding(): void {
    this.clickResetLanding.emit(true);
    this.settingsService.fireReset();
  }
}
