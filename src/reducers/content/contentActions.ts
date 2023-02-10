import { Content } from '@/types'

export type ContentActions =
  | { type: 'reset' }
  | { type: 'set_new_content'; payload: Content }
