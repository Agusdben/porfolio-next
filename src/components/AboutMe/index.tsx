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
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
        }
      `}</style>
    </>
  )
}

export default AboutMe
