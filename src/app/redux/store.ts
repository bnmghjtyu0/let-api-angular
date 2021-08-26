import { BehaviorSubject, of, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { reducer } from './reducers/todo-reducer';
interface InitState {
  loading: boolean;
  todos: { id: number; name: string; done: boolean }[];
}

const initState: InitState = {
  loading: false,
  todos: [],
};
//建立 store
const store$ = new BehaviorSubject(initState);

// Dispatch
const dispatch = (action: any) => {
  from(reducer(store$.value, action)).subscribe({
    next: (data) => store$.next(data),
    error: (data) => store$.error(data),
  });
};

// watch
store$.pipe(map((store) => store.todos)).subscribe((todos) => {
  console.log('當 store$ 資料變更後，在此更新畫面');
  console.log(todos);
});

// const todoItemValue = 'Hello';
// dispatch(addTodoItemAction(todoItemValue));

export { store$ as store, dispatch };
