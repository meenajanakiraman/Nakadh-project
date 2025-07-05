import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobfooterComponent } from './mobfooter.component';

describe('MobfooterComponent', () => {
  let component: MobfooterComponent;
  let fixture: ComponentFixture<MobfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobfooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
