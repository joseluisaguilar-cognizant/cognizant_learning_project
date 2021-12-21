import { FunctionComponent } from 'react';

import { Task } from '../../interfaces/task.interface';
import TaskElement from './TaskElement/TaskElement';

interface ITasksList {
  mockTasks: Task[];
}

const TasksList: FunctionComponent<ITasksList> = ({ mockTasks }) => {
  const handleImportance = () => {
    console.log('importance');
  };

  const editTask = () => {
    console.log('edit');
  };

  const deleteTask = () => {
    console.log('delete');
  };

  const handleStatus = () => {
    console.log('status');
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {mockTasks.map((task) => (
        <TaskElement
          key={task.id}
          text={task.text}
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
