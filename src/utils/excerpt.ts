import { marked } from 'marked'
import parser from 'html-react-parser'

export const getExcerpt = (src: string, as: 'html' | 'string') => {
  const excerpt = src.match(/^(?!#|!).+(?:\n|$)/)
  const html = excerpt ? marked.parse(excerpt[0]) : ''
  if (as === 'string' && excerpt) return excerpt[0]
  return parser(html as string)
}
