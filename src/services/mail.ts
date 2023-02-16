import { FormFields } from '@/types'

export const sendMail = (body: { [key in FormFields]: string }) => {
  return fetch('/api/mail', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
  }).then(res => {
    if (!res.ok) {
      throw new Error('Failed to send message')
    }
    return res.json()
  })
}
