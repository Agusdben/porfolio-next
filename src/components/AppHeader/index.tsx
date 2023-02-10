import { colors } from '@/styles/theme'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons'

const AppHeader = () => {
  return (
    <>
      <header>
        <h1>
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>AD</span>
          <FontAwesomeIcon icon={faChevronRight} />
        </h1>
      </header>
      <style jsx>{`
        header {
          padding: 12px;
        }
        h1 {
          height: 100%;
          display: flex;
          align-items: center;
          color: ${colors.primary};
          margin: 0;
        }
        span {
          color: ${colors.white};
        }
      `}</style>
    </>
  )
}

export default AppHeader
