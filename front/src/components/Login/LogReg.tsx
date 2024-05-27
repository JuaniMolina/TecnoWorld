'use client'
import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

const LogReg = () => {
  const [register, setRegister] = useState(true);

  const registerHandler = () => {
    setRegister(!register)
  }

  const handleRegisterSuccess = () => {
    setRegister(true); // 
  };

  return (
    <div className='flex flex-col justify-center items-center'>
        {register ? <Login /> :
        <Register onSuccess={handleRegisterSuccess} />}
        {
          register ? 
                <div className='flex gap-1 mb-5'>
                  <p>No tienes cuenta?</p>
                  <button onClick={registerHandler} className='hover:text-lime-600 font-bold'>Registrate Aquí</button>
                </div> 
              : 
                <div className='flex gap-1 mb-5'>
                  <p>Ya tienes cuenta?</p>
                  <button onClick={registerHandler} className='hover:text-lime-600 font-bold'>Inicia Sesion</button>
                </div>
        }
    </div>
  )
}

export default LogReg