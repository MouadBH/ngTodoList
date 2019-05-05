import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos = [
    {id:1, value: "Take out the trash", date: new Date},
    {id:2, value: "Buy bread", date: new Date},
    {id:3, value: "Teach penguins to fly", date: new Date}
  ];
  dones = [
    {id:1, value: "Take out the trash", date: new Date},
    {id:2, value: "Buy bread", date: new Date}
  ]
  info = {
    nom: 'Mouad',
    email: 'ffdfd@mouad.com',
    tele: '0620501107'
  };
  constructor() { }

  getAllTodos(){
    return this.todos;
  }
  getDones(){
    return this.dones;
  }
  setTask(t){
    t.date = new Date();
    this.todos.push(t);
  }
  removeTask(id:number){
    const pos = this.todos.map((e) => { return e.id; }).indexOf(id);
    this.todos.splice(pos, 1)
    //console.log(this.todos);
  }
  removeDone(id){
    const pos = this.dones.map((e) => { return e.id; }).indexOf(id);
    this.dones.splice(pos, 1)
  }
  setTaskDone(t){
    this.dones.push(t);
  }
  getInfo(){
    return this.info;
  }
}
