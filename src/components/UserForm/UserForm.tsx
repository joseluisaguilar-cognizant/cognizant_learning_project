// import Button from '../Button/Button';
import { FormEvent } from 'react';
import { FaEnvelope, FaUser, FaPassport } from 'react-icons/fa';

import { generateRegexp } from '../../shared/constants/generateRegexp';

import { useState } from 'react';
import InputField from '../InputField/InputField';
import './UserForm.css';

const UserForm = () => {
  const [canSubmit, setCanSubmit] = useState(false);
  const [shouldCheckForm, setShouldCheckForm] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    console.log('easas');
    e.preventDefault();
    setShouldCheckForm(true);
    console.log(e);
  };

  const onHandleInputChange = (value: string, isValid: boolean) => {
    console.log('hey', value, isValid);
  };

  return (
    <aside className="userForm">
      <h3 className="userForm__title">Registration</h3>

      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            borderBottom: '1px solid var(--dark-gray)',
            padding: '0.5rem 0'
          }}
        >
          <InputField
            name="email"
            placeholder="Email"
            errorMessage="Debe introducir un email correcto"
            icon={<FaEnvelope />}
            regex={generateRegexp.email}
            shouldCheckInput={shouldCheckForm}
            handleChange={onHandleInputChange}
          />
          <InputField
            name="name"
            placeholder="Name"
            errorMessage="Debe introducir un nombre"
            icon={<FaUser />}
            regex={generateRegexp.generateMaxMinLengthRegexp(3, 16)}
            shouldCheckInput={shouldCheckForm}
            handleChange={onHandleInputChange}
          />
          <InputField
            name="password"
            placeholder="Password"
            errorMessage="El password no es adecuado"
            icon={<FaPassport />}
            regex={generateRegexp.generatePassRegexp(8, 12, '@!$&%-_')}
            shouldCheckInput={shouldCheckForm}
            handleChange={onHandleInputChange}
          />
        </div>
        <div className="userForm__checkBox">
          <label htmlFor="policyAgree">
            <input type="checkbox" name="policyAgree" id="policyAgree" />I agree
            to Privacy Policy
          </label>
        </div>
        <div className="userForm__button-container">
          <button
            type="submit"
            disabled={!canSubmit}
            className="userForm__button"
          >
            Submit
          </button>
          {/* <Button /> */}
        </div>
      </form>
    </aside>
  );
};

export default UserForm;
