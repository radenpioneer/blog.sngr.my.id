export const generateUrl = (slug: string, date: Date) =>
  `/posts/${date.getFullYear()}/${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}/${slug}`
