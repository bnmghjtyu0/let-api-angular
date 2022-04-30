import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { AddCount } from './ngxs/actions/count.actions';
import { Reset, Start } from './ngxs/actions/countdown.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  subscription!: Subscription;
  title = 'let-api-angular';
  count = 0;

  //這裡使用 @Select 定義 state
  @Select((state: any) => state.countstate) count$!: Observable<any>;
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.startCountDown();
    this.listenMouseMove();
    this.count$.subscribe((state) => {
      this.count = state.count;
    });
    localStorage.setItem('userToken', 'xxx');
  }

  addCount(): void {
    this.store.dispatch(new AddCount());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /**
   * 開始倒數計時
   */
  startCountDown(): void {
    this.store.dispatch(new Start({ name: 'running', initTime: 20 * 60 * 60 }));
  }

  /**
   * 監聽滑鼠移動事件
   */
  listenMouseMove(): void {
    const mousemove$ = fromEvent(document, 'mousemove').pipe(
      throttleTime(500)
    );

    this.subscription = mousemove$.subscribe((e) => {
      this.store.dispatch(new Reset());
    });
  }
}
