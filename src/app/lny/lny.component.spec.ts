import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LnyComponent } from './lny.component';

describe('LnyComponent', () => {
  let component: LnyComponent;
  let fixture: ComponentFixture<LnyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LnyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
