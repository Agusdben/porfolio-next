import useContent from '@/hooks/useContent'
import { animations } from '@/styles/animations'
import React from 'react'

const SoftSkills = () => {
  const { softSkills } = useContent()
  return (
    <>
      <ul>
        {softSkills.map((s, i) => (
          <li style={{ animationDuration: `${200 * i}ms` }} key={s.type}>
            {s.type}
          </li>
        ))}
      </ul>
      <style jsx>{`
        li {
          text-align: center;
          animation-name: ${animations.toRight};
          animation-timing-function: linear;
        }
      `}</style>
    </>
  )
}

export default SoftSkills
