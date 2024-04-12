import { getEntry } from 'astro:content'

export const getSiteInfo = async () => {
  const { data } = await getEntry('site', 'site')
  return data
}
