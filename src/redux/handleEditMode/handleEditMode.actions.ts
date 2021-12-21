import { Task } from '../../interfaces/task.interface';
import { HandleEditModeAction } from '../interfaces/action.interface';
import HandleEditModeActionTypes from './handleEditMode.types.';

export const enableEditMode = (task: Task): HandleEditModeAction => ({
  type: HandleEditModeActionTypes.ENABLE_EDIT_MODE,
  payload: task
});

export const disableEditMode = (): HandleEditModeAction => ({
  type: HandleEditModeActionTypes.DISABLE_EDIT_MODE
});
