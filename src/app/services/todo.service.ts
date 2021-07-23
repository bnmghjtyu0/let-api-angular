import { Injectable, ViewChildren, AfterViewInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService implements AfterViewInit {
  @ViewChildren('para') paras: any;
  paraElements: any;

  todos: Array<Todo> = [
    { id: 1, title: '213', completed: false, editing: false },
  ];
  todoTitle: string = '';
  idFor: number = 4;
  beforeEditCache: string = '';
  filter = 'all';
  constructor() {}


  addTodo(todoTitle: string): void {
    if (todoTitle.trim().length === 0) {
      return;
    }

    this.todos.push({
      id: this.idFor,
      title: todoTitle,
      completed: false,
      editing: false,
    });

    this.idFor++;
  }

  deleteTodo(id: number): void {
    console.log(id);
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  editTodo(todo: Todo): void {
    this.beforeEditCache = todo.title;
    todo.editing = true;
    // this.paraElements[0].focus();
    console.log(this.paraElements);
  }

  ngAfterViewInit() {
    console.log('afterViewInit');
    this.paras.changes.subscribe((r: any) => {
      this.calculateSerializedPanes();
    });
  }
  calculateSerializedPanes() {
    setTimeout(() => {
      this.paraElements = 1;
      this.paras.map((para: any) => {
        console.log('Paras: ', para.nativeElement);
        para.nativeElement.focus();
        return para.nativeElement;
      });
    }, 0);
  }

  cancelEdit(todo: Todo): void {
    todo.title = this.beforeEditCache;
    todo.editing = false;
  }
  doneEdit(todo: Todo): void {
    if (todo.title.trim().length === 0) {
      todo.title = this.beforeEditCache;
    }
    todo.editing = false;
  }

  remaining(): number {
    return this.todos.filter((todo) => !todo.completed).length;
  }

  checkAllTodos(): void {
    console.log('checkAllTodos');
    this.todos.forEach((todo) => (todo.completed = !todo.completed));
  }
  todosFiltered(): Todo[] {
    if (this.filter === 'all') {
      return this.todos;
    } else if (this.filter === 'active') {
      return this.todos.filter((todo) => !todo.completed);
    } else if (this.filter === 'completed') {
      return this.todos.filter((todo) => todo.completed);
    }
    return this.todos;
  }
}
