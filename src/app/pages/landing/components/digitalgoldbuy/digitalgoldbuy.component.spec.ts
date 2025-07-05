import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalgoldbuyComponent } from './digitalgoldbuy.component';

describe('DigitalgoldbuyComponent', () => {
  let component: DigitalgoldbuyComponent;
  let fixture: ComponentFixture<DigitalgoldbuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalgoldbuyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalgoldbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
