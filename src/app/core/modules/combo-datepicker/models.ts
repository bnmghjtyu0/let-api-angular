export interface Option {
  value: any;
  name: any;
  disabled?: boolean;
}

export interface Select {
  value?: any;
  options?: Option[];
  visible?: boolean;
  attrs?: object;
  disabled?: boolean;
}

export interface Selects {
  d: Select;
  m: Select;
  y: Select;
}
