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
  editingTaskNumber: number = 0;

  constructor(private service: TodoService) {
    this.tasks = this.service.getTodos()
    
  }

  resetForm() {
    this.taskDescription = "";
    this.taskTitle = "";
    this.editingTaskNumber = 0;
  }

  addNewTask() {
    let index = this.tasks.findIndex(task => task.title.toLowerCase() === this.taskTitle.toLowerCase());
    if (index === -1) {
      this.service.addTask(this.taskTitle, this.taskDescription);
      this.resetForm()
    }
    else {
      alert(`${this.taskTitle} already exists !`)
    }
  }


  toggleComplete(id: number) {
    this.service.toggleCompletion(id)
  }


  editTask(id: number) {
    this.editingTaskNumber = id;
    let index = this.tasks.findIndex(task => task.id === id)
    let presentTask: ToDo = this.tasks[index];


    this.taskTitle = presentTask.title;
    this.taskDescription = presentTask.description !== undefined ? presentTask.description : ""; // Ternary Operator
  }


  updateTask() {
    this.service.updateTask(this.editingTaskNumber, this.taskTitle, this.taskDescription);
    this.resetForm();
  }


  deleteTask(id: number) {
    this.service.deleteTask(id)
  }
}
