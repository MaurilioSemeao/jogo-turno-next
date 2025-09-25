'use client'
import styles from "../styles/BattleBoard.module.css"
import HpBar from "@/app/components/HpBar";
import TurnArrow from "@/app/components/TurnArrow";
import GameOverModal from "@/app/components/GameOverModal";
import Personagem from "@/app/components/Personagem";

export default function BattleBoard( props ) {
    const heroi = {
        href: "https://pokemondb.net/pokedex/charizard",
        src: "https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif",
        alt: "Charizard",
    }

    const vilao = {
        href: "https://pokemondb.net/pokedex/blastoise",
        src: "https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif",
        alt: "Blastoise"
    }



    return (
        <div className={styles.wrapper}>
            <h3>⚔️ Tabuleiro</h3>

            <div className={styles.cotprimary}>
                <div className={styles.controls}>
                    <button onClick={() => props.handlerAcaoHerois("atacar")}>⚔️</button>
                    <button onClick={() => props.handlerAcaoHerois("defender")}>🛡️</button>
                    <button onClick={() => props.handlerAcaoHerois("usarPocao")}>🧪</button>
                    <button onClick={() => props.handlerAcaoHerois("correr")}>🏃</button>
                </div>

                <div className={styles.board}>

                    <TurnArrow isActive={props.turnoHeroi}/>


                    <div className={styles.ground}>

                        <Personagem
                            personagem={props.heroi}
                            player={heroi}
                        />

                        <Personagem
                            personagem={props.vilao}
                            player={vilao}
                        />
                    </div>
                    {setInterval( ()=>{

                    },1000)}
                    <GameOverModal
                        endGame={props.endGame}
                        handlerEndGame={props.handlerEndGame}
                    />
                </div>

            </div>


            <div className={styles.log}>
                <h4>Registro</h4>
                <ul>
                    {props.log.map((l, i) => (
                        <li className={styles[l.quem === "Sora" ? "h" : "v"]} key={i}>
                            <span>Turno {l.turno}</span>{l.mensagem}</li>
                    ))}
                </ul>
            </div>


        </div>
    )
}