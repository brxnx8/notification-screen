import { useState } from 'react'
import { Header } from './components/header'
import { Mensage } from './components/mensage'
import { Notification } from './components/notification'
import "./style.css"



function App() {
  
  const [msgNew, setMsgNew] = useState([true]);
  
  const msgOld = (falso) =>{
    setMsgNew(falso)
  }
  
  return (
    <div className="App">
      <Header
        markAll={valor => msgOld(valor)}
      />
      <Notification 
        image="https://github.com/brxnx8.png" 
        name="Bruno Oliveira" hour="5min ago" 
        content="followed you" 
        recent={msgNew}
      />
      <Notification 
        image="https://github.com/brxnx8.png"  
        name="Bruno Oliveira" 
        hour="5min ago" 
        content="reacted to you recent post" 
        recent={msgNew}
      />
      <Notification 
        image="https://github.com/brxnx8.png" 
        name="Bruno Oliveira" hour="5min ago" 
        content="send you a private mensage"
        recent={msgNew}
      >

            <Mensage mensagem = "Hello, thank you for accepting me in your network!"/>
      
      </Notification>
    </div>
  )
}

export default App
