// 建立 Action
export class ActionType {
  static LoadTodoItems = '[Todo List] Load Todo Items';
  static AddTodoItem = '[Todo List] Add Todo Item';
  static ToggleTodoItem = '[Todo List] Toggle Todo Item';
}
export const loadTodoItemsAction = () => {
  return {
    type: ActionType.LoadTodoItems,
    payload: null,
  };
};
export const addTodoItemAction = (payload: any) => {
  return {
    type: ActionType.AddTodoItem,
    payload,
  };
};
export const toggleTodoItemAction = (payload: any) => {
  return {
    type: ActionType.ToggleTodoItem,
    payload,
  };
};
