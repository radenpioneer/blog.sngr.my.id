import { marked } from 'marked'
import { markedSmartypants } from 'marked-smartypants'

export const parser = ({
  text,
  inline,
}: {
  text: string
  inline?: boolean
}) => {
  marked.use(markedSmartypants())

  if (inline) {
    return marked.parseInline(text)
  }
  return marked.parse(text)
}
