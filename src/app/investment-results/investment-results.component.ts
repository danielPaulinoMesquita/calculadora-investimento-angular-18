import {Component, computed, inject, input, Input} from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import {InvestmentService} from "../investment.service";

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

  // results = input<{ another way to use input
  //     year: number;
  //     interest: number;
  //     valueEndOfYear: number;
  //     annualInvestment: number;
  //     totalInterest: number;
  //     totalAmountInvested: number
  // }[]>();

  private investmentService = inject(InvestmentService);

  // 3 ways to return resultData
  // results = computed(() => this.investmentService.resultData());
  // results = () => this.investmentService.resultData()
  // results = this.investmentService.resultData().asReadOnly();
  results = computed(() => this.investmentService.resultData());
}
