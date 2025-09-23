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

    const acoesHeroi ={
        atacar: () => {
            modificarVida("vilao", 10)
            adicionarLog(`${heroi.nome} atacou ${vilao.nome} e causou 10 de dano`)
        },
        defender: () =>{
            modificarVida("heroi", -5)
            adicionarLog(`${heroi.nome} Defendeu o atque de ${vilao.nome} e recuperou 5 de vida`)
        },

        usarPocao: () =>{
            modificarVida("heroi", -15)
            adicionarLog(`${heroi.nome} usou poção e recuperou 15 de vida`)
        },

        correr: () =>{
            adicionarLog(`${heroi.nome} tentou fugir!`)
            alert("Fim de jogo!")
        }

    }


    const acaoVilao = {
        atacar : () =>{
            modificarVida("heroi", 10)
            adicionarLog(`${vilao.nome } atacou ${heroi.nome} e causou10 de dano`)
        },
        furia: () =>{
            modificarVida("heroi", 15)
            adicionarLog(`${vilao.nome } atacou ${heroi.nome} em modo furia causou 20 de dano`)
        },
        regenera: () =>{
            modificarVida("vilao", -5)
            adicionarLog(`${vilao.nome } Recuperou 5 de vida`)

        }
    }
    const handleAcaoVilao = () =>{
        const randoAcao = Math.floor(Math.random() * 3) +1;

        switch (randoAcao) {
            case 1:
                return "atacar";

            case 2:
                return "furia";

            case 3:
                return"regenera";
        }
    }

    const handlerAcaoHeroi = (acao) =>{
        if(!turnoHeroi) return
        acoesHeroi[acao]?.()
        setTurnoHeroi( false)

        setTimeout( () =>{
            acaoVilao[handleAcaoVilao()]?.()
            setTurnoHeroi( true)
        }, 2000)


    }

    return{
        heroi,
        vilao,
        log,
        turnoHeroi,
        handlerAcaoHeroi
    }

}
