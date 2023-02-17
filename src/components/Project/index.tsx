import { breakPoints, colors } from '@/styles/theme'
import { Project } from '@/types'
import Image from 'next/image'
import { RxExternalLink } from 'react-icons/rx'
import ButtonLink from '../ButtonLink'
interface Props {
  project: Project
}

const Project = ({ project }: Props) => {
  return (
    <>
      <div className='container'>
        <h3>{project.title}</h3>
        <div className='picture'>
          <Image fill alt='' src={`/images/projects/${project.images[0]}`} />
        </div>
        <p>{project.description}</p>
        <div className='urls'>
          <div className='repositories'>
            {project.repositories.map(url => (
              <ButtonLink
                key={url.type}
                href={url.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                <span>{url.type}</span>
                <RxExternalLink />
              </ButtonLink>
            ))}
          </div>
          <ButtonLink
            href={project.url}
            target='_blank'
            rel='noopener noreferrer'
          >
            <span>{project.title}</span>
            <RxExternalLink />
          </ButtonLink>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
          padding: 1rem;
          width: 100%;
          height: 100%;
          background-color: ${colors.black};
          box-shadow: 0 0 10px ${colors.tertiary};
          border-radius: 8px;
          font-size: 1.1rem;
        }

        h3,
        p {
          margin: 0;
        }

        p {
          line-height: 1.4em;
          flex: 1;
        }

        .repositories {
          display: flex;
          gap: 0.5rem;
          width: 100%;
        }

        .repositories > :global(*) {
          flex: 1;
        }

        .urls {
          border-top: 5px solid ${colors.tertiary};
          padding-top: 1rem;
          display: grid;
          gap: 0.5rem;
        }

        .picture {
          width: 100%;
          margin: auto;
          max-width: 100%;
          aspect-ratio: 16/9;
          position: relative;
        }

        picture > :global(img) {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      `}</style>
    </>
  )
}

export default Project
