import styles from "./notification.module.css"

export function Notification(props){
    return(
        <div>
            <div className={styles.notification}>
                <img src={props.image} alt="" />
                <div>
                    <p><strong>{props.name}</strong> {props.content}</p>
                    <p className={styles.hour}>{props.hour}</p>
            
                </div>
                
            </div>
                <div className={styles.containerMensage}>{props.children}</div>
        </div>
    )
}