import React from 'react'
import createClient from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_API_DATASET,
  useCdn: true,
})

export default function App() {
  const [greeting, setGreeting] = React.useState()
  React.useEffect(() => {
    client.fetch(`*[_id == 'welcome'][0]`).then((greeting) => setGreeting(greeting))
  }, [])
  return (
    <div style={{ margin: '40px' }}>
      <h1>👋 {greeting.title}</h1>
      <p>{greeting.text}</p>
      <a href="/studio/desk/message;welcome">Edit now!</a>
    </div>
  )
}
