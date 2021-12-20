import {
  useState,
  useCallback,
  FormEvent,
  ChangeEvent,
  FunctionComponent
} from 'react';

import InputField from '../InputField/InputField';

import {
  generateInitialUserFormDataValue,
  USER_FORM_INPUTS
} from './data/UserForm.data';
import { UserFormData, UserInputField } from './UserForm.interfaces';

import './UserForm.css';

const initUserFormData: UserFormData = {
  ...generateInitialUserFormDataValue(),
  policyAgree: { value: false, isValid: false }
};

const UserForm: FunctionComponent = () => {
  const [shouldCheckValidations, setShouldCheckValidations] =
    useState<boolean>(false);
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] =
    useState<boolean>(true);
  const [userFormData, setUserFormData] =
    useState<UserFormData>(initUserFormData);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    setShouldCheckValidations(true);

    const isValidForm =
      USER_FORM_INPUTS.every(
        (val: UserInputField) => userFormData[val.name].isValid
      ) && userFormData.policyAgree.isValid;

    if (isValidForm) {
      alert(JSON.stringify(userFormData));
    }
  };

  const handleInputChange = useCallback(
    (name: string, value: string, isValid: boolean): void => {
      console.log('USERFORM: handleInputChange ');

      setUserFormData((prevValue: UserFormData) => ({
        ...prevValue,
        [name]: { value, isValid }
      }));
    },
    []
  );

  const handleCheckBoxChange = ({
    target: { checked }
  }: ChangeEvent<HTMLInputElement>): void => {
    console.log('USERFORM: handleCheckBoxChange ');
    setUserFormData((prevValue: UserFormData) => ({
      ...prevValue,
      policyAgree: { value: checked, isValid: checked }
    }));

    setIsSubmitButtonDisabled(!checked);
  };

  return (
    <aside className="userForm">
      <h3 className="userForm__title">Registration</h3>

      <form onSubmit={handleSubmit}>
        <div className="userForm__input-container">
          {USER_FORM_INPUTS.map(
            ({
              name,
              placeholder,
              errorMessage,
              icon,
              regex
            }: UserInputField) => {
              return (
                <InputField
                  key={name}
                  name={name}
                  placeholder={placeholder}
                  errorMessage={errorMessage}
                  icon={icon}
                  regex={regex}
                  shouldCheckRegexp={shouldCheckValidations}
                  handleChange={handleInputChange}
                />
              );
            }
          )}
        </div>
        <div className="userForm__checkBox">
          <label htmlFor="policyAgree">
            <input
              type="checkbox"
              name="policyAgree"
              id="policyAgree"
              checked={userFormData.policyAgree.value}
              onChange={handleCheckBoxChange}
            />
            I agree to Privacy Policy
          </label>
        </div>
        <div className="userForm__button-container">
          <button
            type="submit"
            disabled={isSubmitButtonDisabled}
            className="userForm__button"
          >
            Submit
          </button>
        </div>
      </form>
    </aside>
  );
};

export default UserForm;
