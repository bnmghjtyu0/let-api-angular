import { CountDownModel } from "../models/countdown.model";

export class Start {
  static readonly type = '[Countdown] start';
  constructor(public payload: CountDownModel) {}
}
export class Stop {
  static readonly type = '[Countdown] stop';
  constructor(public payload: CountDownModel) {}
}
export class Reset {
  static readonly type = '[Countdown] reset';
  constructor() {}
}
export class Running {
  static readonly type = '[Countdown] running';
  constructor(public payload: CountDownModel) {}
}
