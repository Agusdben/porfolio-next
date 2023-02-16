import useContent from '@/hooks/useContent'
import { animations } from '@/styles/animations'
import { breakPoints, colors, headerConfig } from '@/styles/theme'
import { HiXMark } from 'react-icons/hi2'

import Link from 'next/link'
import React from 'react'
import LanguageSelector from '../LanguageSelector'

interface Props {
  toggle: boolean
  onClose: () => void
}

const AppNavbar = ({ toggle, onClose }: Props) => {
  const { navbar } = useContent()
  const navbarArr = Object.values(navbar)
  return (
    <>
      <nav
        style={{ '--display': toggle ? 'flex' : 'none' } as React.CSSProperties}
      >
        <button type='button' onClick={onClose}>
          <HiXMark className='x-mark' />
        </button>
        <ul>
          {navbarArr.map(item => (
            <li key={item} onClick={onClose}>
              <Link href={`#${item}`}>{item}</Link>
            </li>
          ))}
        </ul>
        <div className='language-selector'>
          <LanguageSelector />
        </div>
      </nav>
      <style jsx>{`
        nav {
          position: absolute;
          text-transform: capitalize;
          top: 0;
          left: 0;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          display: var(--display);
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: ${colors.primary};
          font-size: 1.2rem;
          font-weight: 500;
          animation: ${animations.fallAndBounce} 370ms ease-in;
        }

        li {
          width: ${headerConfig.desktop.width};
          text-align: center;
          margin: auto;
          border-radius: 1rem;
        }

        button {
          position: absolute;
          top: 15px;
          right: 15px;
          font-size: 1.5rem;
          font-weight: bold;
        }

        li > :global(a) {
          padding: 12px 0;
          color: ${colors.black};
        }

        .language-selector {
          display: none;
        }

        @media (min-width: ${breakPoints.tablet}) {
          li > :global(a):hover {
            transition-property: background-color, color;
            transition-duration: 75ms;
            transition-timing-function: ease-in;
            background-color: ${colors.tertiary};
            color: ${colors.primary};
          }

          button {
            display: none;
          }

          nav {
            top: 100%;
            height: auto;
          }
        }

        @media (min-width: ${breakPoints.desktop}) {
          nav {
            position: relative;
            display: flex;
            animation: none;
            top: unset;
            left: unset;
            width: 100%;
            background-color: transparent;
          }

          li > :global(a) {
            color: ${colors.white};
          }
        }
      `}</style>
    </>
  )
}

export default AppNavbar
