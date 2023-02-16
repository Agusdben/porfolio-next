import { colors } from '@/styles/theme'
import React from 'react'
import { useInView } from 'react-intersection-observer'

interface Props {
  id: string
  children: React.ReactNode
  title?: string
}

const ContentSection = ({ id, title, children }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  })
  return (
    <>
      <section ref={ref} id={id}>
        {title && <h2>{title}</h2>}
        {inView && <div>{children}</div>}
      </section>
      <style jsx>{`
        section {
          min-height: 100vh;
          padding: 1rem 0;

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
          position: relative;
          flex: 1;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  )
}

export default ContentSection
