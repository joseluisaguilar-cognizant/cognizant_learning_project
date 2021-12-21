import { FunctionComponent } from 'react';

import { FaEraser, FaExclamation, FaEdit, FaCheck } from 'react-icons/fa';

import './TaskElement.css';

interface ITaskElement {
  id: number;
  text: string;
  isActive: boolean;
  isImportant?: boolean;
  onToggleImportance: (id: number) => void;
  onEdit: () => void;
  onDelete: () => void;
  onToggleStatus: (id: number) => void;
}

const TaskElement: FunctionComponent<ITaskElement> = ({
  id,
  text,
  isActive = true,
  isImportant = false,
  onToggleImportance,
  onEdit,
  onDelete,
  onToggleStatus
}) => {
  return (
    <div
      className={`taskElement ${isImportant && 'taskElement--important'} ${
        !isActive && 'taskElement--not-active'
      }`}
    >
      <div className="taskElement__buttons">
        {isActive && (
          <FaExclamation
            className="taskElement__icon taskElement__icon--importance"
            title="Change importance"
            onClick={() => onToggleImportance(id)}
          />
        )}

        <FaCheck
          className="taskElement__icon"
          title="Change status"
          onClick={() => onToggleStatus(id)}
        />
      </div>
      <h3 className="taskElement__title">{text}</h3>
      <div className="taskElement__buttons">
        {isActive && (
          <FaEdit
            className="taskElement__icon taskElement__icon--edit"
            title="Edit Task"
            onClick={onEdit}
          />
        )}
        <FaEraser
          className="taskElement__icon taskElement__icon--remove"
          title="Remove task"
          onClick={onDelete}
        />
      </div>
    </div>
  );
};

export default TaskElement;
