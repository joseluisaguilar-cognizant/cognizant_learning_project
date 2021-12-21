import { FunctionComponent } from 'react';

import Button from '../../components/Button/Button';
import HandleTask from '../../components/HandleTask/HandleTask';
import TasksList from '../../components/TasksList/TasksList';

import './Todo.css';

const Todo: FunctionComponent = () => {
  return (
    <aside className="container">
      <section className="todo__header">
        <h1 className="title title--primary">Todo List</h1>
        <Button clickEvent={() => console.log('peter')} />
      </section>
      <section>
        <HandleTask />
      </section>
      <section>
        <TasksList />
      </section>
    </aside>
  );
};

export default Todo;
