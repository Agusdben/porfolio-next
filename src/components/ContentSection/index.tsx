import { colors } from '@/styles/theme'
import React from 'react'

interface Props {
  id: string
  children: React.ReactNode
  title?: string
}

const ContentSection = ({ id, title, children }: Props) => {
  return (
    <>
      <section id={id}>
        {title && <h2>{title}</h2>}
        <div>{children}</div>
      </section>
      <style jsx>{`
        section {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        h2 {
          text-transform: uppercase;
          margin: 1rem auto;
          text-decoration: underline;
          text-decoration-color: ${colors.primary};
          text-decoration-style: wavy;
        }

        div {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        section:nth-child(even) {
          background-color: ${colors.primary};
        }
      `}</style>
    </>
  )
}

export default ContentSection
