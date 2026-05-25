import { FIRST_DATE } from '../constants/content'

export function useDaysSince(): number {
  const now = new Date()
  const diff = now.getTime() - FIRST_DATE.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}
