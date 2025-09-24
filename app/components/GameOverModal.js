import styles from "../styles/GameOverModal.module.css"

export default function GameOverModal({endGame, handlerEndGame}) {
    if(!endGame) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>Fim de Jogo!</h2>
                <p> perdeu!</p>
                <button onClick={() => handlerEndGame()}
                        className={styles.button}>Jogar Novamente
                </button>
            </div>
        </div>
    );



}