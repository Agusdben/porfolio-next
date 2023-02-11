import { useRouter } from 'next/router'

const LanguageSelector = () => {
  const { asPath, basePath, locales, locale, ...router } = useRouter()
  const onLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value
    router.push(basePath, asPath, {
      locale,
      scroll: true
    })
  }
  return (
    <select value={locale} onChange={onLocaleChange}>
      {locales?.map(l => (
        <option key={l} value={l}>
          {l}
        </option>
      ))}
    </select>
  )
}

export default LanguageSelector
