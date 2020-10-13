import React from 'react'
import { LoginLayoutWrapper } from './LoginLayout.style'

const LoginLayout = ({ children }) => (
  <LoginLayoutWrapper>
    this is LoginLayout
    <div>{children}</div>
  </LoginLayoutWrapper>
)

export default LoginLayout
