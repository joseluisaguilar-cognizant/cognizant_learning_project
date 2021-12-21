import { FunctionComponent } from 'react';

import './TaskElement.css';

interface ITaskElement {
  text: string;
  onToggleImportance: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onToggleStatus: () => void;
}

const TaskElement: FunctionComponent<ITaskElement> = ({
  text,
  onToggleImportance,
  onEdit,
  onDelete,
  onToggleStatus
}) => {
  return (
    <div
      onDoubleClick={onToggleStatus}
      className="taskElement"
      title="Change status"
    >
      <div></div>
      <h3 className="taskElement__title">{text}</h3>
      <div className="taskElement__buttons"></div>
    </div>
  );
};

export default TaskElement;
