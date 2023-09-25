import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.sass'],
})
export class CalculatorComponent {
  result: string = '0';
  numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  clickChange() {
    //remove loading "0" when user clicks on inputfield
    this.result = '';
  }

  appendToResult(value: string) {
    //remove loading "0" when user clicks on number or comma button
    if (this.result === '0') {
      this.result = '';
    }
    this.result += value;
  }

  calculate() {
    try {
      this.result = eval(this.result);
    } catch (error) {
      this.result = 'error';
    }
  }

  clear() {
    this.result = '0';
  }
}
