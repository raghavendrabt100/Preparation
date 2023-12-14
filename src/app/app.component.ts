import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './components/child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{
  title = 'Preparation';
  bool:boolean=true;

  child:string | undefined;

  parentMessage:string='Parent Message from AppComponent to ChidComponent by using @Input() Decorator';

  @ViewChild(ChildComponent) childComp:any;

  fromChildEvent:string | undefined;

  constructor(){}
  
  ngAfterViewInit(): void {
    this.child=this.childComp.childMessage;
  }

  ngOnInit(): void {}


reciveEventMessage($event: string){
this.fromChildEvent =$event;
}

}
