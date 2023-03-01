import useContent from '@/hooks/useContent'
import { animations } from '@/styles/animations'
import { breakPoints, colors, headerConfig } from '@/styles/theme'
import { HiXMark } from 'react-icons/hi2'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import LanguageSelector from '../LanguageSelector'

interface Props {
  toggle: boolean
  onClose: () => void
}

const AppNavbar = ({ toggle, onClose }: Props) => {
  const { navbar } = useContent()
  const [lastClicked, setLastClicked] = useState<string>('')
  const navbarArr = Object.values(navbar)

  const handleListClick = (path: string) => {
    setLastClicked(path)
    onClose()
  }

  return (
    <>
      <nav
        style={{ '--display': toggle ? 'flex' : 'none' } as React.CSSProperties}
      >
        <button type='button' onClick={onClose}>
          <HiXMark className='x-mark' />
        </button>
        <ul>
          {navbarArr.map(path => (
            <li
              key={path}
              onClick={() => handleListClick(path)}
              className={`${lastClicked === path ? 'active' : ''}`}
            >
              <Link href={`#${path}`}>{path}</Link>
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
          li > :global(a):hover,
          li.active > :global(a) {
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
            position: relative;
            color: ${colors.white};
          }

          li > :global(a):hover::after {
            content: '>';
          }
          li > :global(a):hover::before {
            content: '<';
          }

          li.active > :global(a)::after {
            content: '>';
          }
          li.active > :global(a)::before {
            content: '<';
          }
        }
      `}</style>
    </>
  )
}

export default AppNavbar
