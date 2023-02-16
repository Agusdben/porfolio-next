import { contactFormPatterns, fieldsMaxLength } from '@/constants/contactForm'
import useContent from '@/hooks/useContent'
import { FormFields } from '@/types'
import React, { useState } from 'react'
import Button from '../Button'
import TextInput from '../InputText'

type States = {
  FormData: {
    [key in FormFields]: string
  }
  Sending: boolean
}

const ContactForm = () => {
  const {
    contactForm,
    contactForm: { fields }
  } = useContent()
  const [isSending, setIsSending] = useState<States['Sending']>(false)
  const [formData, setFormData] = useState<States['FormData']>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const fieldMaxLength = fieldsMaxLength[e.target.name as FormFields]

    if (e.target.value.length === fieldMaxLength) {
      return
    }

    const regex = contactFormPatterns[e.target.name as FormFields]

    if (!regex.test(e.target.value)) {
      const { error } = contactForm.fields[e.target.name as FormFields]
      e.target.setCustomValidity(error)
    } else {
      e.target.setCustomValidity('')
    }

    setFormData(currentData => {
      return {
        ...currentData,
        [e.target.name]: e.target.value
      }
    })
  }

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <TextInput
          maxLength={fieldsMaxLength.name}
          placeholder={fields.name.placeholder}
          error={fields.name.error}
          value={formData.name}
          name={FormFields.name}
          type='text'
          required
          onChange={handleOnChange}
        />
        <TextInput
          maxLength={fieldsMaxLength.email}
          placeholder={fields.email.placeholder}
          error={fields.email.error}
          value={formData.email}
          name={FormFields.email}
          type='email'
          required
          onChange={handleOnChange}
        />
        <TextInput
          maxLength={fieldsMaxLength.subject}
          placeholder={fields.subject.placeholder}
          error={fields.subject.error}
          value={formData.subject}
          name={FormFields.subject}
          type='text'
          required
          onChange={handleOnChange}
        />
        <TextInput
          maxLength={fieldsMaxLength.message}
          placeholder={fields.message.placeholder}
          error={fields.message.error}
          value={formData.message}
          name={FormFields.message}
          isTextArea
          required
          onChange={handleOnChange}
        />
        <Button type='submit'>{contactForm.button}</Button>
      </form>
      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
      `}</style>
    </>
  )
}

export default ContactForm
