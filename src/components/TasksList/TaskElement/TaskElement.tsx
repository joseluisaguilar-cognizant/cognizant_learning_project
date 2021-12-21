import { FunctionComponent } from 'react';

import { FaEraser, FaExclamation, FaEdit, FaExchangeAlt } from 'react-icons/fa';
import { Task } from '../../../interfaces/task.interface';

import './TaskElement.css';

interface ITaskElement {
  id: string;
  text: string;
  isActive: boolean;
  isImportant?: boolean;
  onToggleImportance: (id: string) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onToggleStatus: (id: string) => void;
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
            className={`taskElement__icon ${
              isImportant
                ? ' taskElement__icon--enabled'
                : 'taskElement__icon--disabled'
            }`}
            title="Change importance"
            onClick={() => onToggleImportance(id)}
          />
        )}

        <FaExchangeAlt
          className="taskElement__icon"
          title="Change status"
          onClick={() => onToggleStatus(id)}
        />
      </div>
      <h3 className="taskElement__title">{text}</h3>
      <div className="taskElement__buttons">
        {isActive && (
          <FaEdit
            className="taskElement__icon"
            title="Edit Task"
            onClick={() => onEdit({ id, text, isActive, isImportant })}
          />
        )}
        <FaEraser
          className="taskElement__icon"
          title="Remove task"
          onClick={() => onDelete(id)}
        />
      </div>
    </div>
  );
};

export default TaskElement;
