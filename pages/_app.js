import React from 'react'
import { Layout } from '../components'
import Head from 'next/head'
import '@/styles/globals.css'



function App({ Component, pageProps }) {
  return (
      <Component {...pageProps} /> 
  )
}

export default App