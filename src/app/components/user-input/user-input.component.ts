import { Component, signal } from '@angular/core';
import { InvestmentService } from '../../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  constructor(private investmentService: InvestmentService) {}

  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal<string>('0');
  enteredExpectedReturn = signal<string>('5');
  enteredDuration = signal<string>('10');

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredDuration(),
    });

    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
    this.enteredInitialInvestment.set('0');
  }
}
