import { FunctionComponent } from 'react';

import Button from '../../components/Button/Button';
import HandleTask from '../../components/HandleTask/HandleTask';
import TasksList from '../../components/TasksList/TasksList';
import { Task } from '../../interfaces/task.interface';

import './Todo.css';

const mockTasks: Task[] = [
  {
    id: 1,
    important: true,
    active: true,
    text: 'Do something'
  },
  {
    id: 2,
    important: true,
    active: false,
    text: 'Do something more'
  },
  {
    id: 3,
    important: false,
    active: false,
    text: 'Do another thing'
  },
  {
    id: 4,
    important: false,
    active: true,
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
