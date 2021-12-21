import { FunctionComponent, useState } from 'react';

import Button from '../../components/Button/Button';
import HandleTask from '../../components/HandleTask/HandleTask';
import TasksList from '../../components/TasksList/TasksList';

import './Todo.css';

const Todo: FunctionComponent = () => {
  const [shouldDisplayForm, setShouldDisplayForm] = useState<boolean>(true);

  return (
    <aside className="container">
      <section className="todo__header">
        <h1 className="title title--primary">Todo List</h1>
        <Button
          text={shouldDisplayForm ? 'Close' : 'Display form'}
          color={shouldDisplayForm ? 'lightCoral' : 'lightGreen'}
          clickEvent={() => setShouldDisplayForm((prev: boolean) => !prev)}
        />
      </section>
      {shouldDisplayForm ? (
        <section>
          <HandleTask />
        </section>
      ) : null}

      <section>
        <TasksList />
      </section>
    </aside>
  );
};

export default Todo;
