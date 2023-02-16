import { FormFields } from '@/types'

export const contactFormPatterns: { [key in FormFields]: RegExp } = {
  name: new RegExp(/^[a-zA-Z\s]{1,50}$/),
  email: new RegExp(
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  ),
  subject: new RegExp(/.*/),
  message: new RegExp(/.*/)
}

export const fieldsMaxLength: { [key in FormFields]: number } = {
  email: 100,
  message: 1000,
  name: 50,
  subject: 50
}
