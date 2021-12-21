import { Task } from '../../interfaces/task.interface';
import { HandleEditMode } from './handleEditMode.interface';

interface RootStore {
  todo: Task[];
  handleEditMode: HandleEditMode;
}

export default RootStore;
