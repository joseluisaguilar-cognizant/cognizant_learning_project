import HandleEditModeActionTypes from '../handleEditMode/handleEditMode.types.';
import TodoActionTypes from '../todo/todo.types';

export interface TodoAction {
  type: TodoActionTypes;
  payload?: any;
}

export interface HandleEditModeAction {
  type: HandleEditModeActionTypes;
  payload?: any;
}
