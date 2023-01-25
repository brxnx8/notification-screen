import { useState } from 'react'
import { Header } from './components/header'
import { Mensage } from './components/mensage'
import { Notification } from './components/notification'
import "./style.css"



function App() {

  return (
    <div className="App">
      <Header/>
      <Notification 
        image="https://github.com/brxnx8.png" 
        name="Bruno Oliveira" hour="5min ago" 
        content="followed you" 
      />
      <Notification 
        image="https://github.com/brxnx8.png"  
        name="Bruno Oliveira" 
        hour="5min ago" 
        content="reacted to you recent post" 
      />
      <Notification 
        image="https://github.com/brxnx8.png" 
        name="Bruno Oliveira" hour="5min ago" 
        content="send you a private mensage"
        recent='true'
      >

            <Mensage mensagem = "Hello, thank you for accepting me in your network!"/>
      
      </Notification>
    </div>
  )
}

export default App
