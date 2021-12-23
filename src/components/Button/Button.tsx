import { FunctionComponent } from 'react';

type ButtonType = 'primary' | 'danger';

interface IButton {
  text?: string;
  type: ButtonType;
  clickHandler: () => void;
}

interface CSSStyle {
  [key: string]: string | number;
}

const Button: FunctionComponent<IButton> = ({
  text = 'Button',
  type,
  clickHandler
}) => {
  return (
    <button
      style={{ ...buttonStyling, ...buttonType[type] }}
      onClick={clickHandler}
      data-testid="botoncito"
      data-something="funny"
    >
      {text.toUpperCase()}
    </button>
  );
};

const buttonStyling: CSSStyle = {
  border: 'none',
  background: 'red',
  cursor: 'pointer',
  color: 'white',
  padding: '0.6rem',
  borderRadius: '0.3rem',
  fontSize: '0.6rem',
  margin: '0.2rem'
};

const buttonType: { [key in ButtonType]: CSSStyle } = {
  primary: { background: 'red' },
  danger: { background: 'blue' }
};

export default Button;
