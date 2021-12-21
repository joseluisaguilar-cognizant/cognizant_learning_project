import { Task } from '../../interfaces/task.interface';
import HandleEditModeTypes from './handleEditMode.types.';

export const enableEditMode = (task: Task) => ({
  type: HandleEditModeTypes.ENABLE_EDIT_MODE,
  payload: task
});

export const disableEditMode = () => ({
  type: HandleEditModeTypes.DISABLE_EDIT_MODE
});
