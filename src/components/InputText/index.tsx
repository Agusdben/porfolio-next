import { useState } from 'react'
import { colors } from '@/styles/theme'
import React, { InputHTMLAttributes } from 'react'
import { animations } from '@/styles/animations'

interface Props
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  isTextArea?: boolean
  error: string
  onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void
}

const TextInput: React.FC<Props> = ({
  isTextArea,
  error,
  maxLength,
  onChange,
  ...rest
}) => {
  const [currentLength, setCurrentLength] = useState<number>(0)
  const [focused, setFocused] = useState<string>('')
  const InputComponent = isTextArea ? 'textarea' : 'input'

  const handleFocused = () => {
    setFocused('focused')
  }

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const currentLength = e.target.value.length
    setCurrentLength(currentLength)
    onChange(e)
  }

  const handleOnPaste = (
    e:
      | React.ClipboardEvent<HTMLInputElement>
      | React.ClipboardEvent<HTMLTextAreaElement>
  ) => {
    if (!maxLength) return
    const clipboardData = e.clipboardData
    const pastedValue = clipboardData.getData('text')
    const inputValue = e.currentTarget.value + pastedValue
    if (inputValue.length > maxLength) {
      e.preventDefault()
    }
  }

  return (
    <>
      <div>
        {maxLength && (
          <small className='max-length'>
            {currentLength}/{maxLength}
          </small>
        )}
        <InputComponent
          {...rest}
          onPaste={handleOnPaste}
          onChange={handleOnChange}
          onBlur={handleFocused}
          className={focused}
        />
        <strong className='error'>{error}</strong>
      </div>
      <style jsx>{`
        div {
          display: grid;
          flex-direction: column;
          gap: 0.5rem;
          width: 280px;
        }

        input,
        textarea {
          color: ${colors.white};
          width: 100%;
          border: none;
          resize: none;
          padding: 12px;
          font-size: 1.1rem;
          background-color: ${colors.secondary};
          border-radius: 6px;
          outline: none;
          border: 2px solid transparent;
        }

        input:focus,
        input:hover,
        textarea:focus,
        textarea:hover {
          border-color: ${colors.tertiary};
        }

        input.focused:not(:invalid),
        textarea.focused:not(:invalid) {
          border-color: ${colors.tertiary};
        }

        input.focused:invalid,
        textarea.focused:invalid {
          border-color: red;
        }

        textarea {
          height: 150px;
        }

        .max-length {
          margin-left: auto;
          animation: ${maxLength === currentLength
            ? `${animations.shake} 500ms`
            : ''};
        }

        .error {
          display: none;
          color: ${colors.white};
        }

        input.focused:invalid + .error,
        textarea.focused:invalid + .error {
          display: block;
        }
      `}</style>
    </>
  )
}

export default TextInput
