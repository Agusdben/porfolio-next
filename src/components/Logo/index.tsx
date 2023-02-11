import { colors } from '@/styles/theme'
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Logo = () => {
  return (
    <>
      <div>
        <FontAwesomeIcon icon={faChevronLeft} />
        <span>AD</span>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
      <style jsx>{`
        div {
          margin: 0;
          color: ${colors.primary};
          display: flex;
          align-items: center;
          gap: 2px;
          font-size: 1.7rem;
          font-weight: 600;
        }

        div > :global(svg) {
          width: 1rem;
          height: 1rem;
        }

        div:hover {
          transition-property: gap, margin;
          transition-duration: 100ms;
          margin-left: 2px;
          gap: 0;
        }

        span {
          color: ${colors.white};
        }
      `}</style>
    </>
  )
}

export default Logo
