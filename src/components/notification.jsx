import { useState } from "react"
import styles from "./notification.module.css"

export function Notification(props){
    let classTemporary = (props.recent) ? "new" : "old"

    const [classTrue, setClassTrue] = useState(classTemporary)

    function UptadeQuantityNewMensage(){
        
        props.updateQuantityNewMensage(props.recent)
    
    }
    
    const [confirmUpdate, setConfirmUpdate] = useState(true)

    function setClassOld(){
        
        setClassTrue("old")
        if(confirmUpdate){
            props.updateQuantityNewMensage(false)
            setConfirmUpdate(false)
        }
        
    }

    return(
        <div className={classTrue} onLoad={UptadeQuantityNewMensage} onMouseOver={setClassOld}>
            <div className={styles.notification}>
                <img src={props.image} alt="" />
                <div>
                    <p className="pContent"><strong className={styles.name}>{props.name}</strong> {props.content}</p>
                    <p className={styles.hour}>{props.hour}</p>
            
                </div>
                
            </div>
                {props.children}
        </div>
    )
}