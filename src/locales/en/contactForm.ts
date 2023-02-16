import { ContactForm, FormFields } from '@/types'

const CONTACT_FORM: ContactForm = {
  fields: {
    [FormFields.name]: {
      error:
        'Please enter a valid name (letters and spaces only, max 50 characters)',
      placeholder: 'Name*'
    },
    [FormFields.email]: {
      error: 'Please enter a valid email address.',
      placeholder: 'Email*'
    },
    [FormFields.subject]: {
      error: 'Please enter a subject.',
      placeholder: 'Subject*'
    },
    [FormFields.message]: {
      error: 'Please enter a message.',
      placeholder: 'Type here your message...*'
    }
  },
  button: 'Send!'
}

export default CONTACT_FORM
