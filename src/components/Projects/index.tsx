import useContent from '@/hooks/useContent'
import React from 'react'
import ContentSection from '../ContentSection'
import Project from '../Project'

const Projects = () => {
  const { projects, navbar } = useContent()
  return (
    <>
      <ContentSection id={navbar.projects} title={navbar.projects}>
        <ul>
          {projects.map(p => (
            <li key={p.title}>
              <Project project={p} />
            </li>
          ))}
        </ul>
      </ContentSection>
      <style jsx>{`
        ul {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem 1rem;
        }
      `}</style>
    </>
  )
}

export default Projects
