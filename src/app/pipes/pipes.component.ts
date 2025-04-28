import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.sass']
})
export class PipesComponent {

  today: Date = new Date();
  price: number = 10;
  str: string = "Vaibhav Shejol"
  number: number = 12.12;
  person = {
    name: "Vaibhav",
    age: 25
  };
  gender: string = "male";
  inviteMap = {
    'male':'Invite him',
    'female':'Invite her',
    'other':'Invite them'
  };
  
  changeGender(gender: string){
    this.gender = gender
  }

  num1: number = 10;
}
