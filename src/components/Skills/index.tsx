import useContent from '@/hooks/useContent'
import { animations } from '@/styles/animations'
import React from 'react'
import ContentSection from '../ContentSection'
import SkillCard from '../SkillCard'

const Skills = () => {
  const { skills, navbar } = useContent()
  return (
    <>
      <ContentSection id={navbar.skills} title={navbar.skills}>
        <article>
          <ul>
            {skills.map((s, i) => (
              <li
                key={s.type}
                style={{ animationDuration: `${70 + 70 * i}ms` }}
              >
                <SkillCard level={s.level} logo={s.logo} type={s.type} />
              </li>
            ))}
          </ul>
        </article>
      </ContentSection>
      <style jsx>{`
        article {
          min-height: 100%;
          margin: auto;
        }
        ul {
          overflow: hidden;
          max-width: 768px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }

        li {
          animation-name: ${animations.toLeft};
          animation-duration: 200ms;
        }
      `}</style>
    </>
  )
}

export default Skills
