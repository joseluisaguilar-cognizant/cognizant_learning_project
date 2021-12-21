import { FunctionComponent } from 'react';

import { FaEraser, FaExclamation, FaEdit, FaCheck } from 'react-icons/fa';

import './TaskElement.css';

interface ITaskElement {
  text: string;
  isActive: boolean;
  isImportant?: boolean;
  onToggleImportance: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onToggleStatus: () => void;
}

const TaskElement: FunctionComponent<ITaskElement> = ({
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
            onClick={onToggleImportance}
          />
        )}

        <FaCheck
          className="taskElement__icon"
          title="Change status"
          onClick={onToggleStatus}
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
