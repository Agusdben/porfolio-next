import { ContentContext } from '@/contexts/ContentContext'
import { useContext } from 'react'

const useContent = () => {
  const { content } = useContext(ContentContext)

  return {
    ...content
  }
}

export default useContent
