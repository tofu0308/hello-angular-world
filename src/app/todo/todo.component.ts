import { Component } from '@angular/core'
import { TodoService } from '../services/todo.service'
import { NgFor, NgIf } from '@angular/common'

@Component({
  selector: 'app-todo',
  imports: [NgFor, NgIf],

  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  constructor(private todoService: TodoService) {
    console.log('TodoService instance created')
  }

  todos: string[] = []

  ngOnInit() {
    this.todos = this.todoService.getTodos()
  }

  addTodo(newTodo: string) {
    if (newTodo) {
      this.todoService.addTodo(newTodo)
      this.todos = this.todoService.getTodos()
    }
  }

  removeTodo(index: number) {
    this.todoService.removeTodo(index)
    this.todos = this.todoService.getTodos()
  }

  trackByIndex(index: number, item: string): number {
    return index
  }
}
