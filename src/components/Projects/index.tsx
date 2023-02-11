import useContent from '@/hooks/useContent'
import { Project } from '@/types'
import React from 'react'

const Projects = () => {
  const { projects, navbar } = useContent()
  return (
    <section>
      <h2>{navbar.projects}</h2>
      <ul>
        {projects.map(p => (
          <li key={p.title}>
            <p>{p.title}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
