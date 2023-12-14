import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
bool:boolean=true;

@Input() fromParent:string | undefined;

childMessage:string='Child Message from ChildComponent to Parent AppComponent without any User Action using @ViewChild & AfterViewInIt() & ComponentName'

childEventMessage:string='Child to Parent when ther is any Event or UserAction using @Output() decorator and EventEmitter<>()'
@Output() eventMessage = new EventEmitter<string>();
sendEvent(){
  console.log(this.childEventMessage);
  this.eventMessage.emit(this.childEventMessage);
}



}