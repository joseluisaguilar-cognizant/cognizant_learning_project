import { Task } from '../../interfaces/task.interface';
import TodoAction from '../interfaces/action.interface';
import { TodoActionTypes } from './todo.types';

const INITIAL_STATE: Task[] = [
  {
    id: 1,
    isImportant: true,
    isActive: true,
    text: 'Do something'
  },
  {
    id: 2,
    isImportant: true,
    isActive: false,
    text: 'Do something more'
  },
  {
    id: 3,
    isImportant: false,
    isActive: false,
    text: 'Do another thing'
  },
  {
    id: 4,
    isImportant: false,
    isActive: true,
    text: 'Rest'
  }
];

const todoReducer = (state: Task[] = INITIAL_STATE, action: TodoAction) => {
  switch (action.type) {
    case TodoActionTypes.CREATE_NEW_TASK:
      console.log('task');
      return state;
    case TodoActionTypes.REMOVE_TASK:
      return state;
    case TodoActionTypes.TOGGLE_IMPORTANCE:
      return state.map((task: Task) =>
        task.id === action.payload
          ? { ...task, isImportant: !task.isImportant }
          : task
      );
    case TodoActionTypes.TOGGLE_STATUS:
      return state.map((task: Task) =>
        task.id === action.payload
          ? { ...task, isActive: !task.isActive }
          : task
      );
    default:
      return state;
  }
};

export default todoReducer;
