import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathBlockComponent } from './math-block.component';

describe('MathBlockComponent', () => {
  let component: MathBlockComponent;
  let fixture: ComponentFixture<MathBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment the currentCount by 1', () => {
    // Arrange
    component.currentCounter = 12;

    // Act
    component.increment();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const result = compiled.querySelector('.math-container .counter').textContent;

    // Assert
    expect(Number(result)).toBe(1201);
  });

  it('should decrement the currentCount', () => {
    // Arrange
    component.currentCounter = 10;

    // Act
    component.decrement();
    component.decrement();
    component.decrement();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const result = compiled.querySelector('.math-container .counter')
      .textContent;

    // Assert
    expect(Number(result)).toBe(7);
  });
});
