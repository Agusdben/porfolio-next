import { contactFormPatterns, fieldsMaxLength } from '@/constants/contactForm'
import useContent from '@/hooks/useContent'
import { sendMail } from '@/services/mail'
import { animations } from '@/styles/animations'
import { colors } from '@/styles/theme'
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
    contactForm: { fields },
    contactForm: { sendingStatus }
  } = useContent()
  const [formStatus, setFormStatus] = useState<string>('')
  const [formData, setFormData] = useState<States['FormData']>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus(sendingStatus.loading)
    try {
      await sendMail(formData)
      setFormStatus(sendingStatus.success)
    } catch (error: any) {
      setFormStatus(sendingStatus.error)
    }
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
          type='text area'
          required
          onChange={handleOnChange}
        />
        <Button type='submit'>{contactForm.button}</Button>
        {formStatus && (
          <p
            className={`form-status ${
              formStatus === sendingStatus.error
                ? 'error'
                : formStatus === sendingStatus.loading
                ? 'loading'
                : formStatus === sendingStatus.success
                ? 'success'
                : ''
            }`}
          >
            {formStatus}
          </p>
        )}
      </form>
      <style jsx>{`
        form {
          width: 100%;
          min-width: 280px;
          max-width: 500px;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        form > :global(button) {
          font-size: 1.2rem;
          padding: 10px;
        }

        .form-status {
          margin: 0;
        }

        .form-status.error {
          color: red;
        }
        .form-status.success {
          color: ${colors.primary};
        }
        .form-status.loading {
          animation: ${animations.appear} 1000ms infinite;
        }
      `}</style>
    </>
  )
}

export default ContactForm
