import { TodoActionTypes } from '../todo/todo.types';

interface TodoAction {
  type: TodoActionTypes;
  payload: any;
}

export default TodoAction;
