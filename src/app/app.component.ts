import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angulardemo';

  variable = "Hello Vaibhav";

  istrue = true;
  status = "true";

  members = ['Vaibhav','Vishal','Atharva','Ganesh','Jayesh']
}
