import React from 'react'
import { DefaultLayoutWrapper } from './DefaultLayout.style'

const DefaultLayout = ({ children }) => (
  <DefaultLayoutWrapper>
    this is DefaultLayout
    {children}
  </DefaultLayoutWrapper>
)

export default DefaultLayout
