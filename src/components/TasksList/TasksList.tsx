import { FunctionComponent } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Task } from '../../interfaces/task.interface';
import { enableEditMode } from '../../redux/handleEditMode/handleEditMode.actions';
import RootStore from '../../redux/interfaces/store.interface';
import {
  deleteTask,
  toggleImportance,
  toggleStatus
} from '../../redux/todo/todo.actions';
import TaskElement from './TaskElement/TaskElement';

const TasksList: FunctionComponent = () => {
  const tasks: Task[] = useSelector((state: RootStore) => state.todo);
  const dispatch = useDispatch();

  const handleImportance = (id: string) => {
    dispatch(toggleImportance(id));
  };

  const handleEditTask = (task: Task) => {
    console.log('edit', task);
    dispatch(enableEditMode(task));
  };

  const handleDeleteTask = (id: string) => {
    dispatch(deleteTask(id));
  };

  const handleStatus = (id: string) => {
    dispatch(toggleStatus(id));
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {tasks.map((task: Task) => (
        <TaskElement
          key={task.id}
          {...task}
          onDelete={handleDeleteTask}
          onEdit={handleEditTask}
          onToggleImportance={handleImportance}
          onToggleStatus={handleStatus}
        />
      ))}
    </div>
  );
};

export default TasksList;
