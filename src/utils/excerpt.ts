import { marked } from 'marked'

export const getExcerpt = (src: string) => {
  const excerpt = src.match(/^(?!#|!).+(?:\n|$)/)
  return excerpt ? marked.parse(excerpt[0]) : ''
}