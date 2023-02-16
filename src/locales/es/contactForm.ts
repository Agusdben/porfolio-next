import { ContactForm, FormFields } from '@/types'

const CONTACT_FORM: ContactForm = {
  fields: {
    [FormFields.name]: {
      error:
        'Por favor ingrese un nombre valido (letras y espacios, máximo 50 caracteres)',
      placeholder: 'Nombre*'
    },
    [FormFields.email]: {
      error: 'Por favor ingrese una dirección email valida.',
      placeholder: 'Email*'
    },
    [FormFields.subject]: {
      error: 'Por favor ingrese un asunto.',
      placeholder: 'Asunto*'
    },
    [FormFields.message]: {
      error: 'Por favor escriba un mensaje',
      placeholder: 'Escriba aquí su mensaje...*'
    }
  },
  button: 'Enviar!'
}

export default CONTACT_FORM
