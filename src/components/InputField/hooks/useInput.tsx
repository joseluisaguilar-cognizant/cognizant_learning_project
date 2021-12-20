import { ChangeEvent, useState, useEffect } from 'react';

const validateInput = (input: string, regex: string): boolean =>
  new RegExp(regex).test(input);

const useInput = (defaultValue: string, regex: string = '') => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    console.log('%c USEINPUT:  useEffect ', 'background: green; color: white');

    setValue(defaultValue);
  }, [defaultValue]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(
      '%c USEINPUT: handleInputChange',
      'background: green; color: lightBlue'
    );

    const {
      target: { value }
    } = event;
    setValue(value);

    if (regex) {
      setIsValid(validateInput(value, regex));
    }
  };

  return { value, isValid, handleInputChange };
};

export default useInput;
