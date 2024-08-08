import React, { useState } from 'react';
import Loginform from '../../Components/Forms/Loginform';
import { login } from './Services';

const Authentication = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginInfo,"<<>>><><><><><>>><><>");
  };

  return (
    <div className='login-form'>
      <h5>Login</h5>
      <Loginform loginInfo={loginInfo} setLoginInfo={setLoginInfo} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Authentication;