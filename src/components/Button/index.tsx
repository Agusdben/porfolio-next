import { colors } from '@/styles/theme'
import React from 'react'

interface Props {
  type: 'button' | 'submit'
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

const Button = ({ type, onClick, children, disabled }: Props) => {
  return (
    <>
      <button type={type} onClick={onClick} disabled={disabled}>
        {children}
      </button>
      <style jsx>{`
        button {
          color: ${colors.primary};
          border: 1px solid ${colors.tertiary};
          padding: 4px 8px;
        }

        button:hover {
          background-color: ${colors.tertiary};
        }
      `}</style>
    </>
  )
}

export default Button
