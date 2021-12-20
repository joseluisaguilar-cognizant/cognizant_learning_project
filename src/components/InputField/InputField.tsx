import { FunctionComponent } from 'react';
import { useEffect } from 'react';
import useInput from './hooks/useInput';

interface IInputField {
  name: string;
  placeholder: string;
  icon?: string;
  regex?: string;
  shouldCheckInput: boolean;
  errorMessage?: string;
  handleChange: (value: string, isValid: boolean) => void;
}

const InputField: FunctionComponent<IInputField> = ({
  name,
  placeholder,
  regex,
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
      <label htmlFor={name} style={{ padding: '0.4rem 0' }}>
        <span>C</span>
        <input
          name={name}
          id={name}
          value={value}
          placeholder={placeholder}
          onChange={handleInputChange}
          style={{ border: '1px solid var(--dark-gray)' }}
        />
      </label>
      {!isValid && errorMessage && shouldCheckInput ? (
        <span style={{ color: 'red' }}>{errorMessage}</span>
      ) : null}
    </>
  );
};

export default InputField;
