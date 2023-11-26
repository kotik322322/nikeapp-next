"use client"

import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default Layout