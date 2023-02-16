import useContent from '@/hooks/useContent'
import React from 'react'
import ContactForm from '../ContactForm'
import ContentSection from '../ContentSection'

const Contact = () => {
  const { navbar } = useContent()
  return (
    <ContentSection id={navbar.contact} title={navbar.contact}>
      <ContactForm />
    </ContentSection>
  )
}

export default Contact
