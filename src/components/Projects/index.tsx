import useContent from '@/hooks/useContent'
import { Project } from '@/types'
import React from 'react'
import ContentSection from '../ContentSection'

const Projects = () => {
  const { projects, navbar } = useContent()
  return (
    <ContentSection id={navbar.projects} title={navbar.projects}>
      <ul>
        {projects.map(p => (
          <li key={p.title}>
            <p>{p.title}</p>
          </li>
        ))}
      </ul>
    </ContentSection>
  )
}

export default Projects
