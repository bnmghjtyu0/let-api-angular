import { Component, OnInit } from '@angular/core';

import { store, dispatch } from './redux/store';
import { addTodoItemAction } from './redux/actions/todo-type';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todos: any = [];
  form: any = { username: '' };
  beforeEditCache = { username: '' };

  ngOnInit(): void {
    // dispatch({ type: '', payload: { text: 123132 } });
    // watch
    store.subscribe((data) => {
      console.log(data);
      this.todos = data.todos;
    });
  }

  add(): void {
    console.log('add');
    this.beforeEditCache.username = this.form.username;
    if (this.form.username.trim().length === 0) {
      return;
    }
    dispatch(addTodoItemAction(this.form.username));
    this.form.username = '';
  }

  cancel(): void {
    console.log('cancel');
    this.beforeEditCache.username = '';
    this.form.username = this.beforeEditCache.username;
  }
}
