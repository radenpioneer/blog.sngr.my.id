export const getISODate = (date: string) => new Date(date).toISOString()
export const getLocalDate = (date: string) =>
  new Date(date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
