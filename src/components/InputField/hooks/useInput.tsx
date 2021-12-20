import { ChangeEvent, useState } from 'react';

const useInput = (regex: string = '') => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validateInput = (input: string, regex: string): boolean => {
    return new RegExp(regex).test(input);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event;
    setValue(value);

    if (regex) {
      setIsValid(validateInput(value, regex));
    }
  };

  return { value, isValid, regex, handleInputChange };
};

export default useInput;
