import { Component, OnInit ,Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from '../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output () onAddTask: EventEmitter<Task> =new EventEmitter;
  text!: string;
  day!:string;
  reminder : boolean=false;
  showAddTask!: boolean;
  subscription: Subscription = new Subscription;



  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.text){
      alert('please write a text')
   return ;

    }

    const newTask={
      text:this.text,
      day:this.day,
      reminder:this.reminder
    };

    this.onAddTask.emit(newTask);

    // to do emit-event for newtask
   this.text='';
   this.day='';
   this.reminder=false;
  }

}
