'use client'

import { useState } from "react";

export default function useGameManager(){
    const heroiInicial = {vida: 100, nome: "Sora"}
    const vilaoInicial = {vida: 100, nome: "Riku"}

    const [heroi, setHeroi] = useState(heroiInicial)
    const [vilao, setVilao] = useState(vilaoInicial)

    const [log, setLog] = useState([])
    const [turnoHeroi, setTurnoHeroi] = useState(true)

    const modificarVida = (alvo, dano) =>{
        const setter = alvo === "heroi" ? setHeroi : setVilao;
        setter(prev =>({...prev, vida: prev.vida - dano}))
    }

    const adicionarLog = (mensagem) => {
        setLog(prev => [...prev, mensagem])
    }

    const acoes ={
        atacar: () => {
            modificarVida("vialo", -10)
            adicionarLog(`${heroi.nome} atacou ${vialo.nome} e causou 10 de dano`)
        },
        defender: () =>{
            modificarVida("heroi", -5)
            adicionarLog(`${heroi.nome} atacou ${vialo.nome} e causou apenas 5 de dano`)
        },

        usarPocao: () =>{
            modificarVida("heroi", 15)
            adicionarLog(`${heroi.nome} usou poção e recuperou 15 de vida`)
        },

        correr: () =>{
            adicionarLog(`${heroi.nome} tentou fugir!`)
            alert("Fim de jogo!")
        }

    }

    const handlerAcaoHeroi = (acao) =>{
        if(!turnoHeroi) return
        acoes[acao]?.()
        setTurnoHeroi( false)

        setTimeout( () =>{

            setTurnoHeroi( true)
        }, 1000)
    }

    return{
        heroi,
        vilao,
        log,
        turnoHeroi,
        handlerAcaoHeroi
    }

}
