import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs'; //加這個
import { Store } from '@ngrx/store'; //加入 store
import { increment, decrement, reset } from '../../counter.actions'; //加入 action
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  count$: Observable<number> = of(1); //加這個

  constructor(private store: Store<{ count: number }>) {
    // TODO: Connect `this.count$` stream to the current store `count` state
    this.count$ = store.select('count');
  }

  ngOnInit(): void {}

  increment() {
    // TODO: Dispatch an increment action
    this.store.dispatch(increment());
  }

  decrement() {
    // TODO: Dispatch a decrement action
    this.store.dispatch(decrement());
  }

  reset() {
    // TODO: Dispatch a reset action
    this.store.dispatch(reset());
  }
}
