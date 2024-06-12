import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Landing } from 'ts2landing';
import { StringifyPipe } from '../pipes/stringify.pipe';
import { Store } from '@ngxs/store';
import { LandingState } from '../state/landing/landing.state';

@Component({
  selector: 'app-code-modal',
  standalone: true,
  imports: [StringifyPipe],
  templateUrl: './code-modal.component.html',
  styleUrl: './code-modal.component.scss',
})
export class CodeModalComponent {
  landing = this.store.selectSignal(LandingState.getLanding);

  isOpen = false;
  showAlert = false;

  constructor(private store: Store) {}

  copyJsonToClipboard() {
    const jsonStr = JSON.stringify(this.landing(), null, 2);
    navigator.clipboard
      .writeText(jsonStr)
      .then(() => {
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
        }, 2000); // Ocultar aviso después de 2 segundos
      })
      .catch((err) => {
        console.error('Failed to copy JSON to clipboard: ', err);
      });
  }
  
  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }
}
