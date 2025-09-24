import styles from "@/app/styles/Personagem.module.css";
import HpBar from "@/app/components/HpBar";

export default function Personagem({personagem}) {

    return(
        <div className={`${styles.person} ${styles[personagem.nome]}`} >
            <HpBar hp={personagem.vida} maxHp={100} />
            <div className={styles.sprite} >{personagem.nome}</div>
        </div>
    )

}