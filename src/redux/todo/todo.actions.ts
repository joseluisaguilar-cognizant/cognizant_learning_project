import { TodoActionTypes } from './todo.types';

export const createNewTask = (newTask: any) => ({
  type: TodoActionTypes.CREATE_NEW_TASK,
  payload: newTask
});

export const toggleStatus = (id: number) => ({
  type: TodoActionTypes.TOGGLE_STATUS,
  payload: id
});

export const toggleImportance = (id: number) => ({
  type: TodoActionTypes.TOGGLE_IMPORTANCE,
  payload: id
});
