import { Component, OnInit } from '@angular/core';
import { MockResourceLoader } from '@angular/compiler/testing';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  dones = [];
  todos = [];
  info:any;
  todo = {
    id: this.todoService.todos.length+1,
    value: '',
    date: null
  };

  constructor(private todoService: TodoService) {
    this.todos = todoService.getAllTodos();
    this.dones = todoService.getDones();
    this.info = todoService.getInfo();
   }

  ngOnInit() {
  }


  onAdd(){
    this.todoService.setTask(this.todo);

    this.todo = {
      id: this.todos.length+1,
      value: '',
      date: null
    };
    //console.log(this.todos);
  }
  toDone(id:number){
    let task = this.todos.find(t => t.id === id);
    this.todoService.setTaskDone(task);
    this.todoService.removeTask(id);
    this.ref();
    console.log(this.todoService.getAllTodos());
  }
  removeDone(id){
    this.todoService.removeDone(id);
  }
  ref(){
    this.dones = [];
    this.todos = [];
    this.todos = this.todoService.getAllTodos();
    this.dones = this.todoService.getDones();
  }
  getItemNumber(){
    return this.todos.length;
  }
}
