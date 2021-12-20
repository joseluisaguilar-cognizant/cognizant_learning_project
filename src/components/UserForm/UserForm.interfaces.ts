import { ReactElement } from 'react';
import { IconType } from 'react-icons';

export type UserInputNames = 'email' | 'name' | 'password';

interface InputFieldValue<T> {
  value: T;
  isValid: boolean;
}

export type UserFormDataInput = {
  [key in UserInputNames]: InputFieldValue<string>;
};

interface UserFormDataCheckbox {
  policyAgree: InputFieldValue<boolean>;
}

export type UserFormData = UserFormDataInput & UserFormDataCheckbox;

export interface UserInputField {
  name: UserInputNames;
  placeholder: string;
  defaultValue?: string;
  icon?: ReactElement<IconType>;
  regex?: string;
  errorMessage?: string;
}
