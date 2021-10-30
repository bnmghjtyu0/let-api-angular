import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../api/models/article';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  @Input() articles!: any
  constructor() {}

  ngOnInit(): void {}
}
