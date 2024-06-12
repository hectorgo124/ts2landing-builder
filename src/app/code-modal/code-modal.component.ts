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
  styleUrl: './code-modal.component.scss'
})
export class CodeModalComponent {
  landing = this.store.selectSignal(LandingState.getLanding);

  constructor(private store: Store) {}

  isOpen = false;

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }
}
