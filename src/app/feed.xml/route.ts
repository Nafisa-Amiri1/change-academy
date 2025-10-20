export async function GET() {
  return new Response('RSS feed is disabled.', {
    status: 200,
    headers: {
      'content-type': 'text/plain',
    },
  })
}