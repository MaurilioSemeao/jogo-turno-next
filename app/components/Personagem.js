import styles from "@/app/styles/Personagem.module.css";
import HpBar from "@/app/components/HpBar";

export default function Personagem({personagem, player}) {

    return(
        <div className={`${styles.person} ${styles[personagem.nome]}`}>
            <HpBar hp={personagem.vida} maxHp={100}/>
            <a href={player?.href} >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={`${styles.imgbase} ${styles[personagem.nome === "Sora"?"img":""]}`}
                    src={player?.src}
                    alt={player?.alt}
                />
            </a>
        </div>
    )

}