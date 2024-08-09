import React, { useState } from 'react';
import Loginform from '../../Components/Forms/Loginform';
import { getUserDetail, login } from './Services';
import { environmentConfig } from '../../Utils/Config/environmentConfig';
import { setItem } from '../../Utils/Config/storageConfig';
import { json, useNavigate } from 'react-router-dom';

const Authentication = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate()
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{

    console.log(loginInfo,"<<>>><><><><><>>><><>");
    const accountId = environmentConfig.accountId
    const detailResponse = await getUserDetail(accountId)
    setItem('isAuthenticated', true)
    setItem('userDetails', JSON.stringify(detailResponse.data))
    navigate('/dashboard')
  }

  catch(err){
  alert(err)
}
};
  

  return (
    <div className='login-form'>
      <h5>Login</h5>
      <Loginform loginInfo={loginInfo} setLoginInfo={setLoginInfo} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Authentication;