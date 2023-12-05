import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss'
})
export class TodolistComponent {

  todos:any;
  constructor(private ts:TodoService){

  }

  ngOnInit():void{
    this.todos = this.ts.todoList
  }

  removeTodo(x:any){
    this.ts.deleteTodo(x);
  }

}
