import { Component, OnInit } from '@angular/core';
import { UiService } from '../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string ='task tracker';
  showAddTask:boolean=false;
  subscription: Subscription;

  constructor(private uiService :UiService ) {
    this.subscription=this.uiService.onToggle().subscribe((Value)=>(this.showAddTask=Value))
  }

  ngOnInit(): void {
  }
  toggleAddTask(){
this.uiService.toggleAddTask();
  }

}
