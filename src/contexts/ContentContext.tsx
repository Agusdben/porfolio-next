import { ContentActions } from '@/reducers/content/contentActions'
import { contentReducer } from '@/reducers/content/contentReducer'
import { CONTENT_INITIAL_STATE } from '@/reducers/content/initialState'
import { Content } from '@/types'
import {
  importFooter,
  importNavbar,
  importPresentation,
  importProjects,
  importResume,
  importSkills,
  importSoftSkills
} from '@/utiles'
import { useRouter } from 'next/router'
import React, { createContext, useEffect, useReducer } from 'react'

interface ContentContext {
  content: Content
  dispatch: React.Dispatch<ContentActions>
}

const ContentContext = createContext<ContentContext>({
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
      const navbar: Content['navbar'] = await importNavbar({ locale })
      const presentation: Content['presentation'] = await importPresentation({
        locale
      })
      const resume: string = await importResume({ locale })
      const softSkills: Content['softSkills'] = await importSoftSkills({
        locale
      })
      const skills: Content['skills'] = await importSkills({ locale })
      const projects: Content['projects'] = await importProjects({ locale })

      const footer: Content['footer'] = await importFooter({ locale })

      dispatch({
        type: 'set_new_content',
        payload: {
          navbar,
          presentation,
          resume,
          softSkills,
          skills,
          projects,
          footer
        }
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
