import useContent from '@/hooks/useContent'
import { animations } from '@/styles/animations'
import { breakPoints, colors } from '@/styles/theme'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
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
  const [autoSwap, setAutoSwap] = useState<boolean>(true)

  const handleCurrentIndex = (index: number) => () => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    setAutoSwap(false)
    setAnimate('animate')
    setTimeout(() => {
      setAnimate('')
      setAutoSwap(true)
    }, 400)
  }, [currentIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(current => {
        return current === softSkills.length - 1 ? 0 : current + 1
      })
    }, 10000)

    !autoSwap && clearInterval(interval)

    return () => clearInterval(interval)
  }, [autoSwap, softSkills])

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
          <div className={`current-skill__content ${animate}`}>
            <h3>{softSkills[currentIndex].type}</h3>
            <p>&quot;{softSkills[currentIndex].description}&quot;</p>
          </div>
          <Image
            className={animate}
            width={300}
            height={300}
            src={`/images/${softSkills[currentIndex].image}`}
            alt={`Image that represent ${softSkills[currentIndex].type}`}
          />
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
          gap: 0.2rem;
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
          position: relative;
          flex: 1;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: ${colors.black};
          width: 100%;
          height: 100%;
          font-size: 1.2rem;
        }

        .current-skill p {
          max-width: 280px;
          line-height: 2em;
          background-color: ${colors.secondary};
          padding: 1rem;
          font-weight: 400;
        }

        .current-skill h3 {
          color: ${colors.primary};
        }

        .current-skill__content.animate {
          animation: ${animations.toRight} 400ms;
        }

        .current-skill > :global(img) {
          filter: drop-shadow(0 0 20px ${colors.primary});
        }
        .current-skill.animate > :global(img) {
          animation: ${animations.toLeft} 400ms;
        }

        .current-skill,
        button.focused {
          box-shadow: 0 0 3px ${colors.primary};
          border-radius: 12px;
        }

        .current-skill.animate {
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

          button > span {
            display: block;
          }
        }

        @media (min-width: ${breakPoints.desktop}) {
          .current-skill__content {
            position: relative;
            z-index: 20;
            margin-right: 35%;
          }

          .current-skill p {
            max-width: 400px;
            box-shadow: 0 0 2px ${colors.primary};
          }

          .current-skill > :global(img) {
            position: absolute;
            width: 60%;
            right: 20px;
            height: auto;
          }
        }
      `}</style>
    </>
  )
}

export default SoftSkills
