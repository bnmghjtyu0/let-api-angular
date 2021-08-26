import { of } from 'rxjs';
import { ActionType } from '../actions/todo-type';
// Reducer
export const reducer = (currentState: any, action: any) => {
  switch (action.type) {
    case ActionType.AddTodoItem:
      const newState = {
        ...currentState,
        todos: [
          ...currentState.todos,
          {
            id: currentState.todos.length + 1,
            name: action.payload,
            done: false,
          },
        ],
      };
      //包裝成 Observable 回傳
      return of(newState);
  }
  //回傳原來的內容
  return of(currentState);
};
