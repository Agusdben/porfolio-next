import { colors } from '@/styles/theme'
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Logo = () => {
  return (
    <>
      <h1>
        <FontAwesomeIcon icon={faChevronLeft} />
        <span>AD</span>
        <FontAwesomeIcon icon={faChevronRight} />
      </h1>
      <style jsx>{`
        h1 {
          margin: 0;
          color: ${colors.primary};
          display: flex;
          align-items: center;
          gap: 4px;
        }
        span {
          color: ${colors.white};
        }
      `}</style>
    </>
  )
}

export default Logo
