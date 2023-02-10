import { colors } from '@/styles/theme'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons'
import Logo from '../Logo'
import LanguageSelector from '../LanguageSelector'

const AppHeader = () => {
  return (
    <>
      <header>
        <Logo />
        <LanguageSelector />
      </header>
      <style jsx>{`
        header {
          display: flex;
          padding: 1rem;
          justify-content: space-between;
        }
      `}</style>
    </>
  )
}

export default AppHeader
