import { Injectable } from '@angular/core';
import { ToDo, } from './todo.model';


@Injectable({
  providedIn: 'root',
})
export class TodoService {

  todos: Array<ToDo> = [
    {
      id: 1768321799018,
      title: "Wake up",
      description: "Win the morning to win the day!",
      status: false
    },
    {
      id: 1768321887473,
      title: "Take bath",
      status: false
    },

  ]
  getTodos() {
    return this.todos;
  }

  addTask(taskName: string, desc: any) {
    let todo = {
      id: Date.now(),
      title: taskName,
      description: desc,
      status: false
    }
    this.todos.push(todo)
  }

  toggleCompletion(id: number) {
    const index = this.todos.findIndex(task => task.id === id)
    this.todos[index].status = !this.todos[index].status
  }


  updateTask(id: number, title: string, description: string) {
    const index = this.todos.findIndex(task => task.id === id)
    this.todos[index].title = title;
    this.todos[index].description = description.length !== 0 ? description: "";
  }


  deleteTask(id: number) {
    let index = this.todos.findIndex(task => task.id === id)
    this.todos.splice(index, 1)
  }




}
