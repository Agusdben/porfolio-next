import { ContentActions } from '@/reducers/content/contentActions'
import { contentReducer } from '@/reducers/content/contentReducer'
import { CONTENT_INITIAL_STATE } from '@/reducers/content/initialState'
import { Content } from '@/types'
import { useRouter } from 'next/router'
import React, { createContext, useEffect, useReducer } from 'react'

interface ContentContext {
  content: Content
  dispatch: React.Dispatch<ContentActions>
}

export const ContentContext = createContext<ContentContext>({
  content: CONTENT_INITIAL_STATE,
  dispatch: () => {}
})

interface Props {
  children: React.ReactNode
}

const ContentContextProvider = ({ children }: Props) => {
  const { locale = 'es' } = useRouter()
  const [content, dispatch] = useReducer(contentReducer, CONTENT_INITIAL_STATE)

  useEffect(() => {
    ;(async () => {
      const newContent: Content = await import(
        `../locales/${locale}/globals.ts`
      ).then(file => file.default)

      dispatch({
        type: 'set_new_content',
        payload: newContent
      })
    })()
  }, [locale])

  return (
    <ContentContext.Provider value={{ content, dispatch }}>
      {children}
    </ContentContext.Provider>
  )
}

export default ContentContextProvider
