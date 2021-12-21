import { Task } from '../../interfaces/task.interface';
import { TodoAction } from '../interfaces/action.interface';
import TodoActionTypes from './todo.types';

export const createNewTask = (newTask: Task): TodoAction => ({
  type: TodoActionTypes.CREATE_NEW_TASK,
  payload: newTask
});

export const deleteTask = (taskId: string): TodoAction => ({
  type: TodoActionTypes.REMOVE_TASK,
  payload: taskId
});

export const toggleStatus = (taskId: string): TodoAction => ({
  type: TodoActionTypes.TOGGLE_STATUS,
  payload: taskId
});

export const toggleImportance = (taskId: string): TodoAction => ({
  type: TodoActionTypes.TOGGLE_IMPORTANCE,
  payload: taskId
});

export const editTask = (task: Task): TodoAction => ({
  type: TodoActionTypes.EDIT_TASK,
  payload: task
});
