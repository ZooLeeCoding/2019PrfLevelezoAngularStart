import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-my-basic';
  myArray = ["alma", "narancs", "korte"];

  buyFruit(fruit: String) {
    console.log("Vettem egy " + fruit + "-t");
  }
}
