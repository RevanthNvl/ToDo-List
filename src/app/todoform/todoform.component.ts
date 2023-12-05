import { Component,OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrl: './todoform.component.scss'
})
export class TodoformComponent {
  todoInput:string = "";
  constructor(private ts:TodoService){}

  ngOnInit(): void{

  }

  addTask(){
    this.ts.addTodo(this.todoInput);
    this.todoInput = "";
  }

  resetForm(){
    this.todoInput = "";
  }
}
