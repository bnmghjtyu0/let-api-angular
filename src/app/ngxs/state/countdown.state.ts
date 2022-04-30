import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { Reset, Running, Start, Stop } from '../actions/countdown.actions';
import { CountDownModel } from '../models/countdown.model';

@State<CountDownModel>({
  name: 'countdown',
  defaults: {
    name: 'start',
    initTime: 10,
    currentTime: 0,
  },
})
@Injectable()
export class CountdownState {
  timeId!: any;
  time = 100;

  constructor(
    private store: Store,
  ) {}
  @Selector()
  static get(state: CountDownModel): CountDownModel {
    return state;
  }

  @Action(Start)
  public start({ getState, setState }: StateContext<CountDownModel>, payload: any): void {
    console.log('開始倒數計時，超過20分鐘未使用本系統,系統自動為您登出。');
    const state = getState();

    let countdownTime: number = payload.payload.initTime;

    const timer = () => {
      // console.log('倒數計時', countdownTime);
      if (countdownTime === 0) {
        localStorage.clear();


        console.log('已超過20分鐘未使用本系統')

        clearInterval(this.timeId);
        setState({ ...state, name: 'stop' });
        return;
      }
      countdownTime--;
      this.time = countdownTime;
      this.store.dispatch(new Running({ name: 'running', currentTime: countdownTime }));
    };

    this.timeId = setInterval(timer, 1000);
    setState({
      ...state,
      name: 'running',
      initTime: payload.payload.initTime,
      currentTime: countdownTime,
    });
  }
  @Action(Running)
  public running({ getState, setState }: StateContext<CountDownModel>, payload: any): void {
    const state = getState();

    setState({ ...state, name: 'running', currentTime: payload.currentTime });
  }
  @Action(Stop)
  public stop({ getState, setState }: StateContext<CountDownModel>, payload: any): void {
    const state = getState();

    clearInterval(this.timeId);
    setState({ ...state, name: 'stop' });
  }
  @Action(Reset)
  public reset({ getState, setState }: StateContext<CountDownModel>, payload: any): void {
    const state = getState();

    if (state?.name !== 'running') return;
    this.time = state.initTime as number;
    setState({ ...state, name: 'running', currentTime: state.initTime });
  }
}
