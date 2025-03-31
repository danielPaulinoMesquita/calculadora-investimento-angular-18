import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

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
  @Output() calculateInvestment = new EventEmitter<{
    initialInvestment: number;
    duration: number;
    expectedReturn: number;
    annualInvestment: number;
  }>();

  enteredInitialInvestment = "0";
  enteredAnnualInvestment = "0";
  enteredExpectedReturn = "0";
  enteredDuration = "0";

  // to convert a string to number, just add a signal "+" before variable number
  onSubmit() {
    this.calculateInvestment.emit({
      initialInvestment: + this.enteredInitialInvestment,
      duration: + this.enteredDuration,
      expectedReturn: + this.enteredExpectedReturn,
      annualInvestment: + this.enteredAnnualInvestment
    });
  }


}
