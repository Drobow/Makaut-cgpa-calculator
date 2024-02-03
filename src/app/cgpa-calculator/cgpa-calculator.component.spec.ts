import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgpaCalculatorComponent } from './cgpa-calculator.component';

describe('CgpaCalculatorComponent', () => {
  let component: CgpaCalculatorComponent;
  let fixture: ComponentFixture<CgpaCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CgpaCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CgpaCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
