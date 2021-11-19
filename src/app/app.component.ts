import { Todo } from './shared/models/todo.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'let-api-angular';

  todo: Todo = {
    completed: false,
    editing: false,
    title: '早安有喜',
  };

  constructor() {}
}
