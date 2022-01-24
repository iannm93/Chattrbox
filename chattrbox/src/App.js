import React from 'react'
import "./App.css"; 
import { ChatEngine} from 'react-chat-engine'
import Feed from "./components/Feed"
import Login from "./components/Login"
import "./App.css"
 

const App = () =>{
  // if the user does not have a username stored in local storage, reutrN the login component 
  if (!localStorage.getItem('username')) return <Login />;
  return (
    <ChatEngine
    height = "100vh"
    projectID= "14530bfe-8c29-4e09-8c9a-dc073116e156"
    userName="Ian"
    userSecret="bananaboy10"
    renderChatFeed = {(props) => <Feed {... props} />}
    onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    
    
    )
}

export default App;
