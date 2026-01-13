import { Component } from '@angular/core';
import { TodoService } from '../todo-service';
import { ToDo } from '../todo.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  tasks: Array<ToDo> = []

  taskTitle: string = "";
  taskDescription: string = "";


  constructor(private service: TodoService)
  {
    this.tasks = this.service.getTodos()

  }

  addNewTask() {
    let index = this.tasks.findIndex(task => task.title.toLocaleLowerCase() === this.taskTitle.toLocaleLowerCase());
    if (index === -1) {
      this.service.addTask(this.taskTitle, this.taskDescription);
      this.taskDescription = "";
      this.taskTitle = "";
    }
    else{
       alert (`${this.taskTitle} already exists !`)
    }
  }

  toggleComplete(id : number)
  {
    this.service.toggleCompletion(id)
  }


  deleteTask(id: number)
  {
    this.service.deleteTask(id)
  }
}
