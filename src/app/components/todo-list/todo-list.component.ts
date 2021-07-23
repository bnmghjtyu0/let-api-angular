import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from '../../interfaces/todo';
@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [TodoService],
})
export class TodoListComponent implements OnInit {
  // @ViewChildren('para') paras: any;
  // paraElements: any;

  // todos: Array<Todo> = [
  //   { id: 1, title: '213', completed: false, editing: false },
  // ];
  todoTitle: string = '';
  // idFor: number = 4;
  // beforeEditCache: string = '';
  // filter = 'all';
  constructor(public todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.todos = [
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
    this.todoService.addTodo(this.todoTitle);
    // this.todos.push({
    //   id: this.idFor,
    //   title: this.todoTitle,
    //   completed: false,
    //   editing: false,
    // });

    this.todoTitle = '';
    // this.idFor++;
  }
}
