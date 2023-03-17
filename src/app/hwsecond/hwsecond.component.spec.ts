import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HwsecondComponent } from './hwsecond.component';

describe('HwsecondComponent', () => {
  let component: HwsecondComponent;
  let fixture: ComponentFixture<HwsecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HwsecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HwsecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
