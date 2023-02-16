import nodemailer from 'nodemailer'

const emailFrom = process.env.EMAIL_FROM
const emailTo = process.env.EMAIL_TO
const password = process.env.EMAIL_PASSWORD

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailFrom,
    pass: password
  }
})

export const mailOptions = {
  from: emailFrom,
  to: emailTo
}
