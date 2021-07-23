import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ViewChildren,
  AfterViewInit,
} from '@angular/core';
import { Todo } from '../../interfaces/todo';
@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit, AfterViewInit {
  @ViewChildren('para') paras: any;
  paraElements: any;

  todos: Array<Todo> = [
    { id: 1, title: '213', completed: false, editing: false },
  ];
  todoTitle: string = '';
  idFor: number = 4;
  beforeEditCache: string = '';
  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: 'Finish Angular Screencast',
        completed: false,
        editing: false,
      },
      {
        id: 2,
        title: 'Take over world',
        completed: false,
        editing: false,
      },
      {
        id: 3,
        title: 'One more thing',
        completed: false,
        editing: false,
      },
    ];
  }
  addTodo(): void {
    if (this.todoTitle.trim().length === 0) {
      return;
    }

    this.todos.push({
      id: this.idFor,
      title: this.todoTitle,
      completed: false,
      editing: false,
    });

    this.todoTitle = '';
    this.idFor++;
  }

  deleteTodo(id: number): void {
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
}
