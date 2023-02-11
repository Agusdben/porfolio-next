import useContent from '@/hooks/useContent'
import { animations } from '@/styles/animations'
import { breakPoints, colors } from '@/styles/theme'
import Image from 'next/image'
import React from 'react'
import ArticleTitle from '../ArticleTitle'
import ContentSection from '../ContentSection'

const Presentation = () => {
  const { navbar, presentation } = useContent()
  return (
    <>
      <ContentSection id={navbar.presentation}>
        <div>
          <article className='image'>
            <Image
              fill
              src='/agustin.png'
              alt='Photo of the creator of portfolio'
            />
          </article>
          <article className='content'>
            <ArticleTitle>Agustin Di Benedetto</ArticleTitle>
            <p>{presentation}</p>
          </article>
        </div>
      </ContentSection>
      <style jsx>{`
        div {
          display: flex;
          text-align: center;
          gap: 0 32px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }

        .image {
          width: 300px;
          aspect-ratio: 1/1.2;
          position: relative;
          background-image: radial-gradient(
            circle at top left,
            ${colors.tertiary},
            ${colors.secondary}
          );
          border-radius: 30% 70% 30% 70% / 80% 20% 80% 20%;
          overflow: hidden;
          animation: ${animations.morphingBorder} 30s ease infinite;
        }

        .image > :global(img) {
          object-position: 0px -5px;
          object-fit: cover;
        }

        .content p {
          max-width: 400px;
          line-height: 1.4em;
          text-align: left;
        }

        .content p:first-letter {
          margin-left: 10px;
          font-size: 1.3em;
        }

        @media (min-width: ${breakPoints.tablet}) {
          div {
            flex-direction: row-reverse;
            text-align: left;
            gap: 100px;
          }
          .image {
            width: 350px;
            object-position: center;
          }
        }
      `}</style>
    </>
  )
}

export default Presentation
