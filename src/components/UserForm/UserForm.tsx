// import Button from '../Button/Button';
import { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import InputField from '../InputField/InputField';

const UserForm = () => {
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

  // TODO: Devuelve las regex mediante una funcion

  return (
    <aside style={userFormContainerStlying}>
      <h3
        style={{
          textAlign: 'center',
          fontSize: '1.5rem',
          padding: '0 0 1.5rem',
          borderBottom: '1px solid var(--dark-gray)'
        }}
      >
        Registration
      </h3>

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
            regex='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
            shouldCheckInput={shouldCheckForm}
            handleChange={onHandleInputChange}
          />
          <InputField
            name="name"
            placeholder="Name"
            errorMessage="Debe introducir un nombre"
            regex="^[a-zA-Z]{3,16}$"
            shouldCheckInput={shouldCheckForm}
            handleChange={onHandleInputChange}
          />
          <InputField
            name="password"
            placeholder="Password"
            errorMessage="El password no es adecuado"
            regex="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@!$&%\-_]).{8,12}$"
            shouldCheckInput={shouldCheckForm}
            handleChange={onHandleInputChange}
          />
        </div>
        <div
          style={{
            borderBottom: '1px solid var(--dark-gray)',
            padding: '0.5rem 0'
          }}
        >
          <label
            htmlFor="policyAgree"
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            {' '}
            <input type="checkbox" name="policyAgree" id="policyAgree" />I agree
            to Privacy Policy
          </label>
        </div>
        <div style={{ padding: '1rem 0' }}>
          <button type="submit" style={submitButtonStyling}>
            Submit
          </button>
          {/* <Button /> */}
        </div>
      </form>
    </aside>
  );
};

const userFormContainerStlying = {
  padding: '1.5rem',
  background: '#EBEBEB',
  borderRadius: '0.2rem',
  boxShadow: '2px 2px 5px grey'
};

const submitButtonStyling = {
  background: 'var(--blue)',
  color: 'white',
  border: 'none',
  borderRadius: '0.5rem',
  width: '100%',
  padding: '0.7rem',
  fontSize: '1rem',
  cursor: 'pointer'
};

export default UserForm;
