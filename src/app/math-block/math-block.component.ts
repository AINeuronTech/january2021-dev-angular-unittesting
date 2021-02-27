import { Component, OnInit } from '@angular/core';
import { Key } from 'protractor';

@Component({
  selector: 'app-math-block',
  templateUrl: './math-block.component.html',
  styleUrls: ['./math-block.component.scss'],
})
export class MathBlockComponent implements OnInit {
  public currentCounter: number = 0;

  constructor() {}

  ngOnInit(): void {}

  increment() {
    this.currentCounter++;
  }

  decrement() {
    this.currentCounter--;
  }

  onKeyDown(e: any) {
    if (e.Key === Key.SPACE) {
      this.currentCounter = this.currentCounter + 500;
    }
  }
}
