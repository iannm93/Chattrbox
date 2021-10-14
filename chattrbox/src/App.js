import React from 'react'
import "./App.js"; 
import { ChatEngine } from 'react-chat-engine'


export function App() {
  return (
    <ChatEngine
    height = "100vh"
      publicKey={process.env.PUBLICKEY_ID}
      projectID= {process.env.PROJECT_ID}
      userName={process.env.USERNAME}
      userSecret={process.env.USER_SECRET}
    />
  )
}

export default App;