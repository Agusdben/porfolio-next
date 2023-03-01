import { breakPoints, colors } from '@/styles/theme'
import { Project } from '@/types'
import Image from 'next/image'
import { RxExternalLink } from 'react-icons/rx'
import ButtonLink from '../ButtonLink'
import ImageCarousel from '../ImageCarousel'
interface Props {
  project: Project
}

const Project = ({ project }: Props) => {
  const images = project.images.map((img, i) => ({
    src: img,
    alt: `Image ${i} of project ${project.title}`
  }))

  return (
    <>
      <div className='container'>
        <h3>{project.title}</h3>
        <ImageCarousel images={images} />
        <p>{project.description}</p>
        <div className='techs'>
          {project.skills.map(s => (
            <Image
              key={s.type}
              alt={`Logo of ${s.type}`}
              src={s.logo}
              width={18}
              height={18}
            />
          ))}
        </div>
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
        h3 {
          color: ${colors.primary};
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

        .techs {
          display: flex;
          gap: 1rem;
          padding: 0.5rem;
          background-color: ${colors.tertiary};
        }

        .techs > :global(img) {
          object-fit: contain;
        }

        .urls {
          border-top: 2px solid ${colors.primary};
          padding-top: 1rem;
          display: grid;
          gap: 0.5rem;
        }
      `}</style>
    </>
  )
}

export default Project
