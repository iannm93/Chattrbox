import React from 'react'
import "./App.js"; 
import { ChatEngine } from 'react-chat-engine'


export function App() {
  return (
    <ChatEngine
      height = "100vh"
      projectID= "14530bfe-8c29-4e09-8c9a-dc073116e156"
      userName="Ian"
      userSecret="bananaboy10"
    />
  )
}

export default App;