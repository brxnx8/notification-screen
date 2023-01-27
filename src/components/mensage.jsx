import styles from "./mensage.module.css"

export function Mensage(props){
    return(
        <div className={styles.containerMensage}>
            <p>{props.mensagem}</p>
        </div>
    )
}