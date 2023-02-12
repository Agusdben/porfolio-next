import Logo from '../Logo'
import { breakPoints, colors, headerConfig } from '@/styles/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import AppNavbar from '../AppNavbar'
import LanguageSelector from '../LanguageSelector'

const AppHeader = () => {
  const [menuToggle, setMenuToggle] = useState<boolean>(false)

  const handleMenuToggle = () => {
    setMenuToggle(current => !current)
  }

  return (
    <>
      <header>
        <button
          type='button'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Logo />
        </button>
        <section>
          <AppNavbar toggle={menuToggle} onClose={handleMenuToggle} />
          <div className='language-selector'>
            <LanguageSelector />
          </div>
          <button type='button' onClick={handleMenuToggle}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </section>
      </header>
      <style jsx>{`
        header {
          position: fixed;
          z-index: 50;
          top: 0;
          left: 0;
          background-color: ${colors.black};
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 1rem 0.5rem;
        }

        button > :global(svg) {
          width: 30px;
          aspect-ratio: 1/1;
          color: ${colors.primary};
        }

        section {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        @media (min-width: ${breakPoints.desktop}) {
          section button {
            display: none;
          }

          header {
            width: ${headerConfig.desktop.width};
            height: 100vh;
            gap: 2rem;
            flex-direction: column;
            align-items: center;
            box-shadow: 1px 0px 1px ${colors.primary};
          }

          section {
            flex: 1;
            flex-direction: column;
            justify-content: space-between;
          }
        }
      `}</style>
    </>
  )
}

export default AppHeader
