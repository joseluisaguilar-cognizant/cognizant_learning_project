import { FunctionComponent, ReactElement } from 'react';
import { FaBeer } from 'react-icons/fa';
import { useEffect } from 'react';
import './InputField.css';
import useInput from './hooks/useInput';
import { IconType } from 'react-icons';
import { FaEdit } from 'react-icons/fa';

interface IInputField {
  name: string;
  placeholder: string;
  icon?: ReactElement<IconType>;
  regex?: string;
  shouldCheckInput: boolean;
  errorMessage?: string;
  handleChange: (value: string, isValid: boolean) => void;
}

const InputField: FunctionComponent<IInputField> = ({
  name,
  placeholder,
  regex,
  icon,
  errorMessage,
  shouldCheckInput,
  handleChange
}) => {
  const { value, isValid, handleInputChange } = useInput(regex);

  useEffect(() => {
    handleChange(value, isValid);
  }, [handleChange, value, isValid]);

  return (
    <>
      <label htmlFor={name} className="input-field">
        <i className="input-field__icon">{icon ? icon : <FaEdit />}</i>
        <input
          name={name}
          id={name}
          value={value}
          placeholder={placeholder}
          className="input-field__input"
          onChange={handleInputChange}
        />
      </label>
      {!isValid && errorMessage && shouldCheckInput ? (
        <span style={{ color: 'red' }}>{errorMessage}</span>
      ) : null}
    </>
  );
};

export default InputField;
