import useContent from '@/hooks/useContent'
import { animations } from '@/styles/animations'
import React from 'react'
import SkillCard from '../SkillCard'

const Skills = () => {
  const { skills, navbar } = useContent()
  return (
    <>
      <section id={navbar.skills}>
        <h2>{navbar.skills}</h2>
        <ul>
          {skills.map((s, i) => (
            <li key={s.type} style={{ animationDelay: `${75 * (i / 2)}ms` }}>
              <SkillCard level={s.level} logo={s.logo} type={s.type} />
            </li>
          ))}
        </ul>
      </section>
      <style jsx>{`
        ul {
          max-width: 768px;
          margin: auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }

        li {
          transform: translate(50px);
          opacity: 0.75;
          animation: ${animations.toLeft} 200ms ease-in forwards;
        }
      `}</style>
    </>
  )
}

export default Skills
