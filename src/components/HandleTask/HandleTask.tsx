import {
  useState,
  useEffect,
  FormEvent,
  FunctionComponent,
  ChangeEvent
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import uniqid from 'uniqid';

import { Task } from '../../interfaces/task.interface';
import { disableEditMode } from '../../redux/handleEditMode/handleEditMode.actions';
import { HandleEditMode } from '../../redux/interfaces/handleEditMode.interface';
import RootStore from '../../redux/interfaces/store.interface';
import { createNewTask, editTask } from '../../redux/todo/todo.actions';

const initTask: Task = {
  id: uniqid(),
  isActive: true,
  isImportant: false,
  text: ''
};

const createNewUniqTask = (newId: string): Task => {
  return { ...initTask, id: newId };
};

const HandleTask: FunctionComponent = () => {
  const [newTask, setNewTask] = useState<Task>(initTask);

  const { taskToEdit, shouldEdit }: HandleEditMode = useSelector(
    (state: RootStore) => state.handleEditMode
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (taskToEdit.text) {
      setNewTask(taskToEdit);
    }
  }, [taskToEdit]);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (!newTask.text) {
      alert('Please provide a task description');
      return;
    }

    if (shouldEdit) {
      dispatch(editTask(newTask));
      dispatch(disableEditMode());
      resetForm();
      return;
    }

    resetForm();

    dispatch(createNewTask(newTask));
  };

  const resetForm = (): void => {
    setNewTask(createNewUniqTask(uniqid()));
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { name, value }
    } = event;

    setNewTask((prevState: Task) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  const handleCheckbox = (event: ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { name, checked, value }
    } = event;

    console.log(value);

    setNewTask((prevState: Task) => {
      return {
        ...prevState,
        [name]: checked
      };
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`form ${shouldEdit && 'form--edit'}`}
      >
        <div className="form-control">
          <label htmlFor="text">{shouldEdit ? 'Edit' : 'Create'} Task</label>
          <input
            type="text"
            id="text"
            name="text"
            placeholder="Write down your task"
            value={newTask.text}
            onChange={handleInput}
          />
        </div>
        <div className="form-control form-control__checkbox">
          <label htmlFor="isImportant">Set as important</label>
          <input
            type="checkbox"
            name="isImportant"
            checked={newTask.isImportant}
            id="isImportant"
            onChange={handleCheckbox}
          />
        </div>
        <button type="submit" className="btn btn__submit">
          Save
        </button>
      </form>
    </>
  );
};

export default HandleTask;
