import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent {
  @Input() name: string = '';
  @Input() fruits: string[] = [];

  @Output() sendmsgToParent: EventEmitter<string> = new EventEmitter();

  onClick(){
    this.sendmsgToParent.emit("hello from child!");
  }

  @Input() criketTeam: string = '';

  @Output() sendCriketTeamToParent: EventEmitter<string> = new EventEmitter();

  makeCapital(criketTeam:string){
    this.sendCriketTeamToParent.emit(criketTeam)
  }
}
