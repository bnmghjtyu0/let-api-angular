import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

interface Article {
  id: number;
  href: string;
  title: string;
  date: string;
  author: string;
  category: string;
  'category-link': string;
  summary: string;
}
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() item!: Article
  @Input() i!: number;
  @Output() delete = new EventEmitter<number>();

  constructor() {}

  handleDelete() {
    this.delete.emit(this.item.id);
  }
}
