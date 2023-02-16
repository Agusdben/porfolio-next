import { colors } from '@/styles/theme'
import { useRouter } from 'next/router'

const LanguageSelector = () => {
  const { asPath, basePath, locales, locale, ...router } = useRouter()
  const onLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value
    router.push('/', '/', {
      locale,
      scroll: false
    })
  }
  return (
    <>
      <select value={locale} onChange={onLocaleChange}>
        {locales?.map(l => (
          <option key={l} value={l}>
            {l}
          </option>
        ))}
      </select>
      <style jsx>{`
        select {
          background-color: transparent;
          padding: 0.2rem;
          color: ${colors.primary};
          border: 1px solid ${colors.primary};
          border-radius: 4px;
          outline: none;
          font-size: 1.1rem;
        }

        option {
          padding: 0.2rem;
          background-color: ${colors.black};
        }
      `}</style>
    </>
  )
}

export default LanguageSelector
