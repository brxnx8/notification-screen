import { useState } from "react"
import styles from "./header.module.css" 

export function Header(props){
    const [classMarkAll, setClassMarkAll] = useState('visibility')

    const markFalse = () => {
        props.markAll(false)
        setClassMarkAll('hidden')
    } 


    return(
        <div className={styles.header}>
            <h1>Notifications</h1>
            <p onClick={markFalse} className={classMarkAll}> Mark all as read</p>
        </div>
    )
}