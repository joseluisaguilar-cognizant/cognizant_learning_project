import { FunctionComponent } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Task } from '../../interfaces/task.interface';
import RootStore from '../../redux/interfaces/store.interface';
import {
  createNewTask,
  toggleImportance,
  toggleStatus
} from '../../redux/todo/todo.actions';
import { TodoActionTypes } from '../../redux/todo/todo.types';
import TaskElement from './TaskElement/TaskElement';

const TasksList: FunctionComponent = () => {
  const tasks: Task[] = useSelector((state: RootStore) => state.todo);
  const dispatch = useDispatch();

  const handleImportance = (id: number) => {
    dispatch(toggleImportance(id));
  };

  const editTask = () => {
    console.log('edit');
  };

  const deleteTask = () => {
    console.log('delete');
  };

  const handleStatus = (id: number) => {
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
          onDelete={deleteTask}
          onEdit={editTask}
          onToggleImportance={handleImportance}
          onToggleStatus={handleStatus}
        />
      ))}
    </div>
  );
};

export default TasksList;
