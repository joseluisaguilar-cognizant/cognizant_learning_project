import { Task } from '../../interfaces/task.interface';
import { EditTask } from '../interfaces/editTask.interface';
import EditModeTypes from './editTask.actions';

const INITIAL_STATE: EditTask = {
  taskToEdit: {} as Task,
  shouldEdit: false
};

const editTaskReducer = (state: any = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case EditModeTypes.EDIT_TASK:
      return state;
    default:
      return state;
  }
};

export default editTaskReducer;
