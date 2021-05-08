import { Component } from '@angular/core';

@Component({
  selector: 'app-app-dados',
  templateUrl: './app-dados.component.html',
  styleUrls: ['./app-dados.component.scss'],
})
export class AppDadosComponent {
  diceLeft: string = `../../../assets/img/dice1.png`;
  direRight: string = `../../../assets/img/dice2.png`;
  number1: number = 1;
  number2: number = 2;

  rollDice(): void {
    this.number1 = this.round();
    this.number2 = this.round();
    this.diceLeft = `../../../assets/img/dice${this.number1}.png`;
    this.direRight = `../../../assets/img/dice${this.number2}.png`;
  }

  round() {
    return Math.round(Math.random() * 5) + 1;
  }
}
