import Logo from '../Logo'
import LanguageSelector from '../LanguageSelector'
import useContent from '@/hooks/useContent'
import Link from 'next/link'
import { breakPoints, colors } from '@/styles/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'

const AppHeader = () => {
  const { navbar } = useContent()
  const navbarArr = Object.values(navbar)
  const [menuToggle, setMenuToggle] = useState<boolean>(false)

  const handleMenuToggle = () => {
    setMenuToggle(current => !current)
  }

  return (
    <>
      <header>
        <Logo />
        <section>
          <LanguageSelector />
          <button type='button' onClick={handleMenuToggle}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <nav
            style={
              {
                '--maxHeight': menuToggle ? '500px' : '0'
              } as React.CSSProperties
            }
          >
            <ul>
              {navbarArr.map(item => (
                <li key={item}>
                  <Link href={`#${item}`}>{item}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </header>
      <style jsx>{`
        header {
          position: sticky;
          z-index: 50;
          top: 0;
          left: 0;
          background-color: ${colors.black};
          width: 100%;
          display: flex;
          padding: 1rem 0;
          justify-content: space-between;
        }

        section {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-right: 20px;
        }

        button > :global(svg) {
          width: 30px;
          aspect-ratio: 1/1;
          color: ${colors.primary};
        }

        nav {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          overflow: hidden;
          height: fit-content;
          transition: max-height 200ms linear;
          max-height: var(--maxHeight);
          background-color: ${colors.primary};
          font-size: 1.2rem;
          font-weight: 500;
        }

        ul {
          overflow: auto;
        }

        li {
          width: 300px;
          text-align: center;
          margin: auto;
          border-radius: 1rem;
        }

        li > :global(a) {
          padding: 12px 0;
          color: ${colors.black};
        }

        @media (min-width: ${breakPoints.tablet}) {
          li > :global(a):hover {
            transition-property: background-color, color;
            transition-duration: 75ms;
            transition-timing-function: ease-in;
            background-color: ${colors.tertiary};
            color: ${colors.primary};
          }
        }
      `}</style>
    </>
  )
}

export default AppHeader
