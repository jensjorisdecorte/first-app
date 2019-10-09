import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Raad het getal';
  randomNumber = Math.floor(Math.random()*100);
  aantalGokken = 10;
  hint = "";

  onEnter(value: string) {
    if (isNaN(Number(value))) {
      this.hint = "Je moet een nummer ingeven..";
    } else {
      const inputNumber: number = Number(value);
      if (this.randomNumber == inputNumber) {
        this.hint = "Je hebt gewonnen!";
      } else if (this.randomNumber < inputNumber) {
        this.hint = "Kies een lager nummer";
      } else {
        this.hint = "Ga voor een hoger nummer";
      }
      this.aantalGokken -= 1;
    }
  }
}
