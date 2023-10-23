import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomesInputComponent } from './outcomes-input.component';

describe('OutcomesInputComponent', () => {
  let component: OutcomesInputComponent;
  let fixture: ComponentFixture<OutcomesInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutcomesInputComponent]
    });
    fixture = TestBed.createComponent(OutcomesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
