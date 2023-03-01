import useContent from '@/hooks/useContent'
import SKILLS from '@/locales/es/skills'
import { animations } from '@/styles/animations'
import { breakPoints, colors } from '@/styles/theme'
import { Skills } from '@/types'
import Image from 'next/image'
import React from 'react'
import ContentSection from '../ContentSection'
import Project from '../Project'
import useProjects from './useProjects'

const Projects = () => {
  const { navbar } = useContent()
  const { technologiesToInclude, projects, handleFilter } = useProjects()

  return (
    <>
      <ContentSection id={navbar.projects} title={navbar.projects}>
        <section>
          <div className='filter-container'>
            {Object.entries(technologiesToInclude).map(
              ([key, checked], index) => (
                <label
                  style={{ animationDuration: `${(index + 1) * 150}ms` }}
                  htmlFor={key}
                  key={key}
                  className='label-tech'
                >
                  <Image
                    alt=''
                    src={`${SKILLS[key as Skills].logo}`}
                    width={22}
                    height={22}
                  />
                  <span>{key}</span>
                  <input
                    className='input-tech'
                    id={key}
                    name={key}
                    onChange={handleFilter}
                    type='checkbox'
                    checked={checked}
                  />
                </label>
              )
            )}
          </div>
          <div className='project-results'>
            <h3>{`${navbar.projects} (${projects.length})`}</h3>
            <ul>
              {projects.map((p, index) => (
                <li
                  className='project'
                  key={p.title}
                  style={{ animationDuration: `${(index + 1) * 150}ms` }}
                >
                  <Project project={p} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </ContentSection>
      <style jsx>{`
        section {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          overflow-x: hidden;
        }

        .filter-container {
          display: flex;
          flex-wrap: wrap;
          padding: 1rem;
          justify-content: center;
          gap: 1rem;
        }

        .label-tech {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.3rem 0.5rem;
          border-radius: 4px;
          overflow: hidden;
          border: 1px solid ${colors.tertiary};
          cursor: pointer;
          animation-name: ${animations.fallAndBounce};
        }

        .label-tech > :global(img) {
          object-fit: contain;
          filter: grayscale(100%);
        }

        .label-tech:has(.input-tech:checked) > :global(img) {
          filter: grayscale(0%);
        }
        .label-tech:has(.input-tech:checked) {
          color: ${colors.primary};
          background-color: ${colors.tertiary};
        }

        .input-tech {
          display: none;
        }

        .project-results {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
        }

        .project-results h3 {
          text-transform: capitalize;
        }

        ul {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 3rem;
        }
        .project {
          animation-name: ${animations.toLeft};
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
