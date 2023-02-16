import { NextApiRequest, NextApiResponse } from 'next'
import { FormFields } from '../../types'

const badRequest = (res: NextApiResponse) => {
  return res.status(400).json({ message: 'Bad Request' })
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const body: { [key in FormFields]: string } = req.body
  const bodyKeys = Object.keys(body)
  const bodyValues = Object.values(body)
  const expectedKeys = Object.keys(FormFields)

  if (!bodyKeys.length) {
    return badRequest(res)
  }

  if (bodyKeys.length !== expectedKeys.length) {
    return badRequest(res)
  }

  if (bodyKeys.some(key => !expectedKeys.hasOwnProperty(key))) {
    return badRequest(res)
  }

  if (bodyValues.some(item => item === '')) {
    return badRequest(res)
  }

  // continuar con nodemailer :)
}
