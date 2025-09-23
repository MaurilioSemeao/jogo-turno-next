
import styles from "../styles/TurnArrow.module.css"

export default function TurnArrow({isActive}){
    const position = isActive ? "left" : "right";

    return (
        <div className={styles.turnIndicate} >
            <div className={`${styles.coin} ${styles[position]}`}>
                🪙
            </div>

        </div>
    )
}