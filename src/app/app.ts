import { Component, signal } from '@angular/core';
import { Todo } from './todo/todo';
import { TodoService } from './todo-service';

@Component({
  selector: 'app-root',
  imports: [Todo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
