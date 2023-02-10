import { Content } from '@/types'
import { ContentActions } from './contentActions'
import { CONTENT_INITIAL_STATE } from './initialState'

export const contentReducer = (state: Content, action: ContentActions) => {
  const { type } = action
  switch (type) {
    case 'reset':
      return CONTENT_INITIAL_STATE
    case 'set_new_content': {
      return action.payload
    }
    default:
      return state
  }
}
