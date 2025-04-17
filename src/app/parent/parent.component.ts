import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.sass']
})
export class ParentComponent {
  fruits: string[] = ['Apple','Banana','Cherry','Mango'];
  isTrue: boolean = true;

  userName: string = 'userName value from parent';

  message: string = '';

  getMsgFromChild(msg:string){
    this.message = msg;
  }

  iplTeam: string = 'rcb from child';

  capitalCriketTeam: string = '';

  getCriketTeamFromChild(criketTeam:string){
    this.capitalCriketTeam=criketTeam.toUpperCase();
  }
}
