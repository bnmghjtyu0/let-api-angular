import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
@Injectable({
  providedIn: 'root',
})
export class TodoStoreService {
  constructor() {}

  remove(todo: Todo) {}
  toggleCompletion(todo: Todo) {}
  update() {}
}
