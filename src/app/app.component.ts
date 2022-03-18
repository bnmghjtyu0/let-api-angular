import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddCount } from './ngxs/actions/count.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'let-api-angular';
  count = 0;

  //這裡使用 @Select 定義 state
  @Select((state: any) => state.countstate) count$!: Observable<any>;
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.count$.subscribe((state) => {
      this.count = state.count;
    });
    localStorage.setItem('userToken', 'xxx');
  }

  addCount(): void {
    this.store.dispatch(new AddCount());
  }
}
