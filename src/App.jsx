import { useState } from 'react'
import { Header } from './components/header'
import { Mensage } from './components/mensage'
import { Notification } from './components/notification'
import "./style.css"



function App() {
  
  const[newMensage, setNewMensage] = useState([true]);
  
  function IsOldMensage(valor){
    setNewMensage(valor)
  }

  const [quantityNewMensage, setQuantityNewMensage] = useState(0)

  function updateQuantityNewMensage(valor){
    if(valor){
      setQuantityNewMensage((state) => {
        return state + 1
      })
    }else {
      setQuantityNewMensage((state) => {
        return state - 1
      })
    }
  }

  return (
    <div className="App">
      <Header
        markAll={IsOldMensage}
        QuantityNotifications={quantityNewMensage}
        updateQuantityNewMensage={updateQuantityNewMensage}
      />
      <Notification 
        image="https://github.com/brxnx8.png" 
        name="Bruno Oliveira" hour="5min ago" 
        content="followed you" 
        recent={newMensage}
        updateQuantityNewMensage={updateQuantityNewMensage}
      />
      <Notification 
        image="https://github.com/brxnx8.png"  
        name="Bruno Oliveira" 
        hour="5min ago" 
        content="reacted to you recent post" 
        recent={newMensage}
        updateQuantityNewMensage={updateQuantityNewMensage}
      />
      <Notification 
        image="https://github.com/brxnx8.png" 
        name="Bruno Oliveira" hour="5min ago" 
        content="send you a private mensage"
        recent={newMensage}
        updateQuantityNewMensage={updateQuantityNewMensage}
      >

            <Mensage mensagem = "Hello, thank you for accepting me in your network!"/>
      
      </Notification>
    </div>
  )
}

export default App
