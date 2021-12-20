import React from 'react';

import UserForm from '../../components/UserForm/UserForm';

const Registration = () => {
  return (
    <main
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <UserForm />
    </main>
  );
};

export default Registration;
