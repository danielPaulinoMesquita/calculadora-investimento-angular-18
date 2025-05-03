import {Component, input, Input} from '@angular/core';
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  //@Input() results?: { this is one way to prevent undefined
  // @Input() results?: { older version to use @Input
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number
  // }[];

  results = input<{
      year: number;
      interest: number;
      valueEndOfYear: number;
      annualInvestment: number;
      totalInterest: number;
      totalAmountInvested: number
  }[]>();

}
