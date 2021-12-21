import { Task } from '../../interfaces/task.interface';
import { HandleEditMode } from '../interfaces/handleEditMode.interface';
import HandleEditModeActionTypes from './handleEditMode.types.';

const INITIAL_STATE: HandleEditMode = {
  taskToEdit: {} as Task,
  shouldEdit: false
};

const handleEditMode = (state: any = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case HandleEditModeActionTypes.ENABLE_EDIT_MODE:
      return {
        ...state,
        taskToEdit: action.payload,
        shouldEdit: true
      };

    case HandleEditModeActionTypes.DISABLE_EDIT_MODE:
      return {
        ...state,
        ...INITIAL_STATE
      };
    default:
      return state;
  }
};

export default handleEditMode;
