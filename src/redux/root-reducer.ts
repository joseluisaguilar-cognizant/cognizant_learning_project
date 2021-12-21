import { combineReducers } from 'redux';
import handleEditModeReducer from './handleEditMode/handleEditMode.reducer';
import todoReducer from './todo/todo.reducer';

export default combineReducers({
  todo: todoReducer,
  handleEditMode: handleEditModeReducer
});
