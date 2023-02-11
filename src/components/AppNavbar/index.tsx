import useContent from '@/hooks/useContent'
import { animations } from '@/styles/animations'
import { breakPoints, colors } from '@/styles/theme'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import LanguageSelector from '../LanguageSelector'
import Logo from '../Logo'

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
          <FontAwesomeIcon icon={faXmark} />
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
          width: 250px;
          text-align: center;
          margin: auto;
          border-radius: 1rem;
        }

        button {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 35px;
          height: 35px;
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
            display: flex;
            z-index: -1;
            width: fit-content;
            height: 100vh;
            top: 0;
            animation: none;
            background-color: ${colors.secondary};
            box-shadow: 1px 0 2px ${colors.primary};
          }

          li > :global(a) {
            color: ${colors.white};
          }
          li {
            position: relative;
          }

          li:hover::after {
            content: '<';
            color: ${colors.primary};
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
          }

          .language-selector {
            position: absolute;
            bottom: 10px;
            display: block;
          }
        }
      `}</style>
    </>
  )
}

export default AppNavbar
