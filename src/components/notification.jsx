import styles from "./notification.module.css"

export function Notification(props){
    const clas = (props.recent == "true") ? "new" : "old"
    return(
        <div className={`${clas}`}>
            <div className={styles.notification}>
                <img src={props.image} alt="" />
                <div>
                    <p className="pContent"><strong>{props.name}</strong> {props.content}</p>
                    <p className={styles.hour}>{props.hour}</p>
            
                </div>
                
            </div>
                {props.children}
        </div>
    )
}