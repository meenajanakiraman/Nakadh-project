import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalgoldsellComponent } from './digitalgoldsell.component';

describe('DigitalgoldsellComponent', () => {
  let component: DigitalgoldsellComponent;
  let fixture: ComponentFixture<DigitalgoldsellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalgoldsellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalgoldsellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
