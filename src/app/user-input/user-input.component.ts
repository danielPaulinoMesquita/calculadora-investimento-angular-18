import {Component, EventEmitter, output, Output, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InvestmentInput} from "../investment-input.module";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  calculateInvestment = output<InvestmentInput>()

  // @Output() calculateInvestment = new EventEmitter<{ this is the older version of @Output()
  //   initialInvestment: number;
  //   duration: number;
  //   expectedReturn: number;
  //   annualInvestment: number;
  // }>();

  enteredInitialInvestment = signal("0");
  enteredAnnualInvestment = signal("0");
  enteredExpectedReturn = signal("5");
  enteredDuration = signal("10");

  // to convert a string to number, just add a signal "+" before variable number
  onSubmit() {
    this.calculateInvestment.emit({
      initialInvestment: + this.enteredInitialInvestment(),
      duration: + this.enteredDuration(),
      expectedReturn: + this.enteredExpectedReturn(),
      annualInvestment: + this.enteredAnnualInvestment()
    });

    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('0');
    this.enteredDuration.set('10');
  }


}
