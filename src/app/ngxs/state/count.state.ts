import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddCount, GetCount } from '../actions/count.actions';

export class CountStateModel {
  count!: number;
}

export const initialCount = { count: 0 };
@State<CountStateModel>({
  name: 'countstate',
  defaults: initialCount,
})
@Injectable()
export class CountState {
  constructor() {}

  @Selector()
  static selectStateData(state: CountStateModel) {
    return state.count;
  }

  @Action(GetCount)
  getDataFromState(ctx: StateContext<CountStateModel>) {
    const state = ctx.getState();
    ctx.setState(state);
  }

  @Action(AddCount)
  addDataToState(ctx: StateContext<CountStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      count: state.count + 1,
    });
  }
}
