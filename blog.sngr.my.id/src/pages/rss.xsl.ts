export const GET = async () => {
  const xsl = await fetch(
    'https://raw.githubusercontent.com/genmon/aboutfeeds/main/tools/pretty-feed-v3.xsl'
  ).then((res) => res.text())
  return new Response(xsl, {
    status: 200,
  })
}
