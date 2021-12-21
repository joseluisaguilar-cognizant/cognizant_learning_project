import { FunctionComponent } from 'react';

interface IButton {
  color?: string;
  text?: string;
  clickEvent: () => void;
}

const Button: FunctionComponent<IButton> = ({
  color = 'blue',
  text = 'Button',
  clickEvent
}) => {
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={clickEvent}
      className="btn"
    >
      {text}
    </button>
  );
};

export default Button;
