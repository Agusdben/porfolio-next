import Head from 'next/head'
import React from 'react'
import globals from '@/styles/globals'
import AppHeader from '../AppHeader'
import animations from '@/styles/animations'
import AppBackground from '../AppBackground'

interface Props {
  children: React.ReactNode
}

const AppLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Agustin Di Benedetto</title>
        <meta name='description' content='Porfolio of Agustin Di Benedetto.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='app'>
        <AppHeader />
        <main>{children}</main>
        <footer>footer</footer>
        <AppBackground />
      </div>
      <style jsx global>
        {globals}
      </style>
      <style jsx global>
        {animations}
      </style>
    </>
  )
}

export default AppLayout
