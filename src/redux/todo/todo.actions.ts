import { Task } from '../../interfaces/task.interface';
import { TodoActionTypes } from './todo.types';

export const createNewTask = (newTask: Task) => ({
  type: TodoActionTypes.CREATE_NEW_TASK,
  payload: newTask
});

export const deleteTask = (taskId: string) => ({
  type: TodoActionTypes.REMOVE_TASK,
  payload: taskId
});

export const toggleStatus = (taskId: string) => ({
  type: TodoActionTypes.TOGGLE_STATUS,
  payload: taskId
});

export const toggleImportance = (taskId: string) => ({
  type: TodoActionTypes.TOGGLE_IMPORTANCE,
  payload: taskId
});
