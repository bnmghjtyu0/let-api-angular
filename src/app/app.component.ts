import { Todo } from './shared/models/todo.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'let-api-angular';

  todo: Todo;

  constructor() {
    this.todo = {
      title: 'Hello',
      completed: true,
      editing: false,
    };
  }
}
