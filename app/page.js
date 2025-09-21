'use client'
import Image from "next/image";
import styles from "./page.module.css";
import useGameManager from "@/hooks/gameManager";

export default function Home() {
  const {
      heroi,
      vilao,
      log,
      turnoHeroi,
      handlerAcaoheroi} = useGameManager();

  return (
      <div className={styles.page}>
          <span>Heroi: {heroi.nome}</span>
          <span>Vilao: {vilao.nome}</span>
      </div>
  )

}
