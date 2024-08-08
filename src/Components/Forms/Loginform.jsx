import React from 'react'

const Loginform = ({loginInfo, setLoginInfo, handleSubmit}) => {
    const handlechange = (event)=>{
        const {name, value} = event.target
        setLoginInfo({...loginInfo, [name]: value})
    }
  return (
    <div className='loginform-container'>
        <form className='needs-validation' noValidate={true} onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" value={loginInfo.email} name="email" onChange={handlechange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required={true}/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" value={loginInfo.password} name="password" onChange={handlechange} className="form-control" id="exampleInputPassword1" required={true}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Loginform