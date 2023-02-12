import useContent from '@/hooks/useContent'
import React from 'react'
import ContentSection from '../ContentSection'

const SoftSkills = () => {
  const { softSkills, navbar } = useContent()
  return (
    <ContentSection title={navbar.softSkills} id={navbar.softSkills}>
      SoftSkills
    </ContentSection>
  )
}

export default SoftSkills
