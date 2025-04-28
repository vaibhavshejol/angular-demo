import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.sass', '../first/first.component.sass'],
  imports: [FormsModule, CommonModule]
})
export class SecondComponent {
  color='blue'
  fontSize=40

  isActive = true
  notActive = true
}
