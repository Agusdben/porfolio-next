import useContent from '@/hooks/useContent'
import React from 'react'
import ContentSection from '../ContentSection'

const Contact = () => {
  const { navbar } = useContent()
  return (
    <ContentSection id={navbar.contact} title={navbar.contact}>
      <>a</>
    </ContentSection>
  )
}

export default Contact
