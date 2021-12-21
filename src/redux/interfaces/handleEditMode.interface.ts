import { Task } from '../../interfaces/task.interface';

export interface HandleEditMode {
  taskToEdit: Task;
  shouldEdit: boolean;
}
