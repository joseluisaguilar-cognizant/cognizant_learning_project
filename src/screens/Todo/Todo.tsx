import { FunctionComponent } from 'react';

import Button from '../../components/Button/Button';
import HandleTask from '../../components/HandleTask/HandleTask';
import TasksList from '../../components/TasksList/TasksList';
import { Task } from '../../interfaces/task.interface';

import './Todo.css';

const mockTasks: Task[] = [
  {
    id: 1,
    isImportant: true,
    isActive: true,
    text: 'Do something'
  },
  {
    id: 2,
    isImportant: true,
    isActive: false,
    text: 'Do something more'
  },
  {
    id: 3,
    isImportant: false,
    isActive: false,
    text: 'Do another thing'
  },
  {
    id: 4,
    isImportant: false,
    isActive: true,
    text: 'Rest'
  }
];

const Todo: FunctionComponent = () => {
  return (
    <aside className="container">
      <section className="todo__header">
        <h1 className="todo__title">Todo List</h1>
        <Button clickEvent={() => console.log('peter')} />
      </section>
      <section>
        <HandleTask />
      </section>
      <section>
        <TasksList mockTasks={mockTasks} />
      </section>
    </aside>
  );
};

export default Todo;
