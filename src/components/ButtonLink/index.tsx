import { colors } from '@/styles/theme'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

interface Props {
  href: string
  children: React.ReactNode
  target?: string
  rel?: string
}

const ButtonLink = ({ href, children, target, rel }: Props) => {
  const { locale } = useRouter()
  return (
    <span>
      <Link href={href} target={target} rel={rel} locale={locale}>
        {children}
      </Link>
      <style jsx>{`
        span > :global(a) {
          color: ${colors.black};
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          padding: 4px 1rem;
          border-radius: 999px;
          background-color: ${colors.white};
        }

        span > :global(a):hover {
          transition: box-shadow 100ms ease-in-out;
          color: ${colors.secondary};
          box-shadow: 0 0 10px ${colors.primary};
        }
      `}</style>
    </span>
  )
}

export default ButtonLink
