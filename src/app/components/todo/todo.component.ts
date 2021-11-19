import { Todo } from './../../shared/models/todo.model';
import { Component, OnInit, Input } from '@angular/core';
import { TodoStoreService } from '../../shared/services/todo-store.service';

/**
 * 這是一個 todo component
 * ```html
 * <todo>
 *    [todo]="todo"
 * </todo>
 * ```
 * <example-url>../screenshots/todo/todo.png</example-url>
 * <example-url>http://localhost:4200</example-url>
 */
@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  /**
   * The entry todo from the parent list
   */
  @Input() todo!: Todo;

  /**
   * Local reference of TodoStore
   */
  todoStore: TodoStoreService;

  constructor(todoStore: TodoStoreService) {
    this.todoStore = todoStore;
  }

  remove(todo: Todo) {
    this.todoStore.remove(todo);
  }

  toggleCompletion(todo: Todo) {
    this.todoStore.toggleCompletion(todo);
  }
  /**
   * 編輯 todo 的資料
   * ```typescript
   *  editTodo({
   *    completed: false,
   *    editing: false,
   *    title: "早安有喜",
   *  })
   * ```
   * @param {todo} todo
   * @return void
   */
  editTodo(todo: Todo): void {
    todo.editing = true;
  }
  /**
   * 停止編輯，更新 todo.title 的資料
   *
   * ```typescript
   *  editTodo({ completed: false, editing: false, title: "早安有喜"},'編輯中')
   * ```
   * @param {Todo} todo
   * @param {string} editedTitle input value
   * @returns void
   */
  stopEditing(todo: Todo, editedTitle: string) {
    console.log(editedTitle);
    todo.title = editedTitle;
    todo.editing = false;
  }

  cancelEditingTodo(todo: Todo) {
    todo.editing = false;
  }

  updateEditingTodo(todo: Todo, editedTitle: string) {
    editedTitle = editedTitle.trim();
    todo.editing = false;

    if (editedTitle.length === 0) {
      return this.todoStore.remove(todo);
    }

    todo.title = editedTitle;

    this.todoStore.update();
  }
}
