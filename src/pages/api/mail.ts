import { mailOptions, transporter } from '@/config/nodemailer'
import { NextApiRequest, NextApiResponse } from 'next'
import { FormFields } from '../../types'

const badRequest = (res: NextApiResponse) => {
  return res.status(400).json({ message: 'Bad Request' })
}

function generateText<t extends { [s: string]: unknown }> (body: t): string {
  return Object.entries(body).reduce(
    (str, [key, val]) => (str += `${key}: \n${val} \n \n`),
    ''
  )
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

  for (const key of bodyKeys) {
    if (!expectedKeys.includes(key)) {
      return badRequest(res)
    }
  }

  if (bodyValues.some(item => item === '')) {
    return badRequest(res)
  }

  try {
    await transporter.sendMail({
      ...mailOptions,
      text: generateText<{ [key in FormFields]: string }>(body),
      subject: body.subject
    })

    return res.status(200).json({ success: true })
  } catch (error: any) {
    return res.status(400).json({ message: error.message })
  }
}
