type Name = 'start' | 'running' | 'stop';

export type CountDownModel = {
  /** start | running | stop  */
  name: Name;
  initTime?: number;
  currentTime?: number;
};
