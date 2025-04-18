import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-session',
  templateUrl: './binding-session.component.html',
  styleUrls: ['./binding-session.component.sass']
})
export class BindingSessionComponent {

  isDisable = false;

  msg = "Used for increase value";

  count = 0;

  employeeName = "Atharva raskar";

  increaseValue(){
    this.count++;
    this.isDisable=true;
  }

}
