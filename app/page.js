'use client'
import Image from "next/image";
import styles from "./page.module.css";
import useGameManager from "@/hooks/gameManager";
import BattleBoard from "@/app/components/BattleBoard";

export default function Home() {
  const {
      heroi,
      vilao,
      log,
      turnoHeroi,
      endGame,
      handlerAcaoHeroi

  } = useGameManager();

  return (

      <BattleBoard
          heroi={heroi}
          vilao={vilao}
          log={log}
          turnoHeroi={turnoHeroi}
          endGame={endGame}
          handlerAcaoHerois={handlerAcaoHeroi}
      />
      //<div className={styles.page}>
      //    <span>Heroi: {heroi.nome}</span>
      //    <span>Vilao: {vilao.nome}</span>
      //</div>
  )

}
