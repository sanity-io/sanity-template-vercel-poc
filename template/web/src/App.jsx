import React from 'react'
import createClient from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_API_DATASET,
  useCdn: true,
})

export default function App() {
  const [greeting, setGreeting] = React.useState({ status: 'loading', result: null })
  React.useEffect(() => {
    client
      .fetch(`*[_id == 'welcome'][0]`)
      .then((greeting) => setGreeting({ status: 'loaded', result: greeting }))
  }, [])
  return (
    <div style={{ margin: '40px' }}>
      {greeting.status === 'loading' ? (
        <>Loading…</>
      ) : (
        <>
          <h1>👋 {greeting.result.title}</h1>
          <p>{greeting.result.text}</p>
          <a href="/studio/desk/message;welcome">Edit now!</a>
        </>
      )}
    </div>
  )
}
