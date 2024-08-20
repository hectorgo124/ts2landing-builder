import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroSettingsComponent } from './intro-settings.component';

describe('IntroSettingsComponent', () => {
  let component: IntroSettingsComponent;
  let fixture: ComponentFixture<IntroSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntroSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
