import { Injectable } from '@angular/core';
import { ToDo, } from './todo.model';


@Injectable({
  providedIn: 'root',
})
export class TodoService {

  todos: Array<ToDo> = [
    {
      id: 1,
      title: "Wake up !",
      description: "win the morning to win the day !",
      status: false
    },
    {
      id: 2,
      title: "Take bath",
      status: false
    },

  ]
  getTodos() {
    return this.todos;
  }

  addTask(taskName : string, desc : any)
  {
    let todo={
      id : this.todos.length + 1,
      title : taskName,
      description : desc ,
      status : false
    }
    this.todos.push(todo)
  }

  toggleCompletion(id : number)
  {
    const index = this.todos.findIndex(task => task.id === id)
    this.todos[index].status = !this.todos[index].status
    console.log(this.todos);
  }


  deleteTask(id : number){
    let index=this.todos.findIndex(task => task.id === id)
    this.todos.splice(index,1)
  }

  

  
}
