import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../interfaces/todo';
@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = {
    id: 1,
    title: '213',
    completed: false,
    editing: false,
  };
  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  @Output() onDone = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  handleDelete(id: number): void {
    this.onDelete.emit(id);
  }
  handleEdit(todo: Todo): void {
    this.onEdit.emit(todo);
  }
  handleDone(todo: Todo): void {
    this.onDone.emit(todo);
  }
  handleCancel(todo: Todo): void {
    this.onCancel.emit(todo);
  }
}
