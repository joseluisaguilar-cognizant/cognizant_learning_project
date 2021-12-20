import { UserFormDataInput, UserInputField } from '../UserForm.interfaces';
import { FaEnvelope, FaUser, FaPassport } from 'react-icons/fa';

import { generateRegexp } from '../../../shared/utils/generateRegexp';

export const USER_FORM_INPUTS: UserInputField[] = [
  {
    name: 'email',
    placeholder: 'Email',
    errorMessage: 'Debe introducir un email correcto',
    icon: <FaEnvelope />,
    regex: generateRegexp.email
  },
  {
    name: 'name',
    placeholder: 'Name',
    errorMessage: 'Debe introducir un nombre',
    icon: <FaUser />,
    regex: generateRegexp.generateMaxMinLengthRegexp(3, 16)
  },
  {
    name: 'password',
    placeholder: 'Password',
    errorMessage: 'El password no es adecuado',
    icon: <FaPassport />,
    regex: generateRegexp.generatePassRegexp(8, 12, '@!$&%-\\_')
  }
];

export const generateInitialUserFormDataValue = (): UserFormDataInput =>
  USER_FORM_INPUTS.reduce((acc: UserFormDataInput, curr: UserInputField) => {
    return {
      ...acc,
      [curr.name]: { value: curr.defaultValue || '', isValid: false }
    };
  }, {} as UserFormDataInput);
