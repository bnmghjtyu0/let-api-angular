/**
 * The todo class
 *
 * See {@link TodoStore} for service using it
 */
export class Todo {
  /**
   * Completed status
   */
  completed: boolean;
  /**
   * Editing status
   */
  editing: boolean;

  /**
   * Title
   */
  // private _title!: string
  get title() {
    // return this._title;
    return 'hello'
  }
  set title(value: string) {
    console.log(value)
    // this._title = value.trim();
  }

  constructor(title: string) {
    this.completed = false;
    this.editing = false;
    this.title = title.trim();
  }
}
