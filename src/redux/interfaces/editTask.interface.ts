import { Task } from '../../interfaces/task.interface';

export interface EditTask {
  taskToEdit: Task;
  shouldEdit: boolean;
}
