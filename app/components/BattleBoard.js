'use client'
import styles from "../styles/BattleBoard.module.css"
import HpBar from "@/app/components/HpBar";
import TurnArrow from "@/app/components/TurnArrow";

export default function BattleBoard( props ) {
    return(
        <div className={styles.wrapper}>
            <h3>⚔️ Tabuleiro</h3>
            <div className={styles.controls}>
                <button onClick={() => props.handlerAcaoHerois("atacar")} >⚔️</button>
                <button onClick={() => props.handlerAcaoHerois("defender")} >🛡️</button>
                <button onClick={() => props.handlerAcaoHerois("usarPocao")} >🧪</button>
                <button onClick={() => props.handlerAcaoHerois("correr")} >🏃</button>
            </div>

            <div className={styles.board} >

                <TurnArrow isActive={props.turnoHeroi} />

                <div className={styles.ground} >

                  <div className={styles.heroi} >
                      <HpBar hp={props.heroi.vida} maxHp={100} />
                      <div className={styles.sprite} >{props.heroi.nome}</div>
                  </div>

                    <div className={styles.vilao}>
                        <HpBar hp={props.vilao.vida} maxHp={100} />
                        <div className={styles.sprite} >{props.vilao.nome}</div>
                    </div>

                </div>
            </div>



            <div className={styles.log}>
                <h4>Registro</h4>
                <ul>
                    { props.log.map((l, i) => (
                        <li className={styles[l.quem === "Sora" ? "h" : "v"]} key={i} ><span>Turno {l.turno}</span>{l.mensagem}</li>
                    )) }
                </ul>
            </div>


        </div>
    )
}