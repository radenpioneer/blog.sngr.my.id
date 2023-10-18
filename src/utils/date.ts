export const getISODate = (date: string) => new Date(date).toISOString()
export const getLocaleDate = (date: string) =>
  new Date(date).toLocaleDateString('id-ID')
