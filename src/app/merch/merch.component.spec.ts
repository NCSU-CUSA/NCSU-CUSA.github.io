import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchComponent } from './merch.component';

describe('MerchComponent', () => {
  let component: MerchComponent;
  let fixture: ComponentFixture<MerchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
