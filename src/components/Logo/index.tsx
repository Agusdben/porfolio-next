import { colors } from '@/styles/theme'
import { FaLessThan, FaGreaterThan } from 'react-icons/fa'

const Logo = () => {
  return (
    <>
      <div>
        <FaLessThan className='logo-icon less-than' />
        <span>AD</span>
        <FaGreaterThan className='logo-icon greater-than' />
      </div>
      <style jsx>{`
        div {
          margin: 0;
          color: ${colors.primary};
          display: flex;
          align-items: center;
          gap: 5px;
        }

        div:hover > :global(.logo-icon) {
          transition-property: transform;
          transition-duration: 100ms;
          transition-timing-function: ease-in;
        }

        div:hover > :global(.less-than) {
          transform: translate(3px);
        }
        div:hover > :global(.greater-than) {
          transform: translate(-3px);
        }

        span {
          font-weight: 600;
          font-size: 1.7rem;
          color: ${colors.white};
        }
      `}</style>
    </>
  )
}

export default Logo
