import useContent from '@/hooks/useContent'
import { breakPoints, colors } from '@/styles/theme'
import Image from 'next/image'
import React from 'react'

const Presentation = () => {
  const { navbar, presentation } = useContent()
  return (
    <>
      <section>
        <article className='image'>
          <Image
            fill
            src='/agustin.png'
            alt='Photo of the creator of portfolio'
          />
        </article>
        <article className='content'>
          <h2>Agustin Di Benedetto</h2>
          <p>{presentation}</p>
        </article>
      </section>
      <style jsx>{`
        section {
          display: flex;
          gap: 24px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }

        .image {
          width: 300px;
          aspect-ratio: 1/1;
          position: relative;
          background-image: radial-gradient(
            circle at top left,
            ${colors.tertiary},
            ${colors.secondary}
          );
          clip-path: polygon(
            50% 0%,
            80% 10%,
            100% 35%,
            100% 70%,
            80% 90%,
            50% 100%,
            20% 90%,
            0% 70%,
            0% 35%,
            20% 10%
          );
        }

        .image > :global(img) {
          object-position: top;
          object-fit: cover;
        }

        .content h2 {
          margin-top: 0;
          color: ${colors.primary};
        }

        .content p {
          max-width: 400px;
          line-height: 1.2em;
          text-align: left;
        }

        .content p:first-letter {
          margin-left: 10px;
          font-size: 1.3em;
        }

        @media (min-width: ${breakPoints.tablet}) {
          section {
            flex-direction: row;
          }
        }
      `}</style>
    </>
  )
}

export default Presentation
