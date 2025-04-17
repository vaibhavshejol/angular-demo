import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.sass', '../first/first.component.sass']
})
export class SecondComponent {
  color='blue'
  fontSize=40

  isActive = true
  notActive = true
}
