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
        {children}
      </section>
      <style jsx>{`
        h2 {
          text-transform: uppercase;
          margin: 0 auto;
          text-decoration: underline;
          text-decoration-color: ${colors.primary};
          text-decoration-style: wavy;
        }
        section {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      `}</style>
    </>
  )
}

export default ContentSection
