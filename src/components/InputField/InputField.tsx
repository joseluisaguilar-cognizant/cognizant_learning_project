import { useState, useEffect, FunctionComponent, ChangeEvent } from 'react';
import { FaEdit } from 'react-icons/fa';

import {
  UserInputField,
  UserInputNames
} from '../UserForm/UserForm.interfaces';
// import useInput from './hooks/useInput';

import './InputField.css';

interface IInputField extends UserInputField {
  defaultValue?: string;
  shouldCheckRegexp?: boolean;
  handleChange: (name: UserInputNames, value: string, isValid: boolean) => void;
}

const validateInput = (input: string, regex: string): boolean =>
  new RegExp(regex).test(input);

const InputField: FunctionComponent<IInputField> = ({
  name,
  placeholder,
  regex,
  icon = <FaEdit />,
  errorMessage,
  defaultValue = '',
  shouldCheckRegexp = true,
  handleChange
}) => {
  // const { value, isValid, handleInputChange } = useInput(defaultValue, regex);
  const [value, setValue] = useState<string>(defaultValue);
  const [isValidInput, setIsValidInput] = useState<boolean>(false);

  useEffect(() => {
    console.log('INPUTFIELD: useEffect ');

    handleChange(name, value, isValidInput);
  }, [handleChange, name, value, isValidInput]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log('INPUTFIELD: handleInputChange');

    const {
      target: { value }
    } = event;
    setValue(value);

    if (regex) {
      setIsValidInput(validateInput(value, regex));
    }
  };

  return (
    <>
      <label htmlFor={name} className="input-field">
        <i className="input-field__icon">{icon}</i>
        <input
          name={name}
          id={name}
          value={value}
          placeholder={placeholder}
          className="input-field__input"
          onChange={handleInputChange}
        />
      </label>
      {!isValidInput && errorMessage && shouldCheckRegexp ? (
        <span style={{ color: 'red' }}>{errorMessage}</span>
      ) : null}
    </>
  );
};

export default InputField;
