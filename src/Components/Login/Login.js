import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate.js'
import LoginPasswordLost from './LoginPasswordLost.js'
import LoginPasswordReset from './LoginPasswordReset.js'

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm /> } />
        <Route path="criar" element={<LoginCreate /> } />
        <Route path="perdeu" element={<LoginPasswordLost /> } />
        <Route path="resetar" element={<LoginPasswordReset /> } />
      </Routes>
    </div>
  )
}

export default Login