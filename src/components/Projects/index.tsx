import { Project } from '@/types'
import React from 'react'

interface Props {
  projects: Project[]
  title: string
}

const Projects = ({ projects, title }: Props) => {
  return (
    <section>
      <h2>{title}</h2>
      {projects.map(p => (
        <div key={p.title}>
          <p>{p.title}</p>
        </div>
      ))}
    </section>
  )
}

export default Projects
