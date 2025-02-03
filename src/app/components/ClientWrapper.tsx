"use client"
import { ThemeProvider } from '@mui/material'
import React from 'react'
import theme from '../theme'

export default function ClientWrapper({children}: any) {
  return (
    <>
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
    </>
  )
}
