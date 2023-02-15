import useContent from '@/hooks/useContent'
import { animations } from '@/styles/animations'
import { breakPoints, colors } from '@/styles/theme'
import React, { useEffect, useRef, useState } from 'react'
import {
  FaUserEdit,
  FaUsers,
  FaBrain,
  FaTools,
  FaBusinessTime
} from 'react-icons/fa'

const SoftSkills = () => {
  const { softSkills } = useContent()
  const icons: { [key: string]: React.ReactNode } = {
    [softSkills[0].type]: <FaUserEdit />,
    [softSkills[1].type]: <FaUsers />,
    [softSkills[2].type]: <FaBrain />,
    [softSkills[3].type]: <FaTools />,
    [softSkills[4].type]: <FaBusinessTime />
  }
  const [animate, setAnimate] = useState<string>('')
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [autoScroll, setAutoScroll] = useState<boolean>(true)

  const handleCurrentIndex = (index: number) => () => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    setAutoScroll(false)
    setAnimate('animate')
    setTimeout(() => {
      setAnimate('')
    }, 400)
  }, [currentIndex])

  return (
    <>
      <div className='container'>
        <div className='soft-skills'>
          {softSkills.map((s, index) => (
            <button
              disabled={animate !== ''}
              className={index === currentIndex ? 'focused' : ''}
              onClick={handleCurrentIndex(index)}
              key={s.type}
            >
              {icons[s.type]}
              <span>{s.type}</span>
            </button>
          ))}
        </div>
        <div className={`current-skill ${animate}`}>
          <p>{softSkills[currentIndex].type}</p>
        </div>
      </div>
      <style jsx>{`
        .container {
          font-size: 1.2rem;
          padding: 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          width: 100%;
          height: 100%;
        }

        .soft-skills {
          display: flex;
          justify-content: space-evenly;
          width: 100%;
        }

        button {
          flex: 1;
          color: ${colors.primary};
          padding: 8px 1rem;
        }

        button > span {
          display: none;
        }

        button:hover,
        .focused {
          background-color: ${colors.secondary};
          color: ${colors.primary};
        }

        .btn-change {
          color: ${colors.primary};
        }

        .current-skill {
          flex: 1;
          background: ${colors.secondary};
          width: 100%;
          height: 100%;
        }

        .animate {
          animation-duration: 400ms;
          animation-name: ${animations.appear};
        }

        @media (min-width: ${breakPoints.tablet}) {
          .container {
            flex-direction: row-reverse;
          }

          .soft-skills {
            background-color: ${colors.black};
            height: 100%;
            flex-direction: column;
            width: auto;
            gap: 0;
          }

          button:hover:not(.focused) {
            background-color: transparent;
          }
          .current-skill,
          button.focused {
            box-shadow: 0 0 3px ${colors.primary};
            border-radius: 12px;
          }

          button > span {
            display: block;
          }
        }
      `}</style>
    </>
  )
}

export default SoftSkills
