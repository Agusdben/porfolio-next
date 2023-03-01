import useContent from '@/hooks/useContent'
import { breakPoints } from '@/styles/theme'
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
          width: 100%;
          max-width: 1280px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
        }

        @media (min-width: ${breakPoints.desktop}) {
          ul {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </>
  )
}

export default Projects
