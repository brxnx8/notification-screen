import styles from "./header.module.css" 

export function Header(){
    return(
        <div className={styles.header}>
            <h1>Notifications</h1>
            <p> Mark all as read</p>
        </div>
    )
}