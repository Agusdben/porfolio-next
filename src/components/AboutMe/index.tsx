import useContent from '@/hooks/useContent'
import React from 'react'
import ContentSection from '../ContentSection'
import SoftSkills from '../SoftSkills'

const AboutMe = () => {
  const { navbar } = useContent()
  return (
    <>
      <ContentSection title={navbar.aboutMe} id={navbar.aboutMe}>
        <article>
          <SoftSkills />
        </article>
      </ContentSection>
      <style jsx>{`
        article {
          font-size: 1.5rem;
        }
      `}</style>
    </>
  )
}

export default AboutMe
