import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PairingsDisplayComponent } from './pairings-display.component';

describe('PairingsDisplayComponent', () => {
  let component: PairingsDisplayComponent;
  let fixture: ComponentFixture<PairingsDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PairingsDisplayComponent]
    });
    fixture = TestBed.createComponent(PairingsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
