'use client'

import { useState } from "react";

export default function useGameManager(){
    const heroiInicial = {vida: 100, nome: "Sora"}
    const vilaoInicial = {vida: 100, nome: "Riku"}

    const [heroi, setHeroi] = useState(heroiInicial)
    const [vilao, setVilao] = useState(vilaoInicial)


    const [log, setLog] = useState([])
    const [turnoHeroi, setTurnoHeroi] = useState(true)
    const [turno, setTurno] = useState(1)
    const [endGame, setEndGame] = useState(false)

    const modificarVida = (alvo, dano) =>{
        const setter = alvo === "heroi" ? setHeroi : setVilao;
        setter(prev =>({...prev, vida: prev.vida - dano}))
    }

    const adicionarLog = (mensagem, quem) => {
        setLog(prev => [{mensagem, turno, quem}, ...prev])
    }

    const acoesHeroi ={
        atacar: () => {
            modificarVida("vilao", 10)
            adicionarLog(`${heroi.nome} atacou ${vilao.nome} e causou 10 de dano`, `${heroi.nome}`)
        },
        defender: () =>{
            modificarVida("heroi", -5)
            adicionarLog(`${heroi.nome} Defendeu o atque de ${vilao.nome} e recuperou 5 de vida`,`${heroi.nome}`)
        },

        usarPocao: () =>{
            modificarVida("heroi", -15)
            adicionarLog(`${heroi.nome} usou poção e recuperou 15 de vida`,`${heroi.nome}`)
        },

        correr: () =>{
            adicionarLog(`${heroi.nome} tentou fugir!`,`${heroi.nome}`)
            alert("Fim de jogo!")
        }

    }


    const acaoVilao = {
        atacar : () =>{
            modificarVida("heroi", 10)
            adicionarLog(`${vilao.nome } atacou ${heroi.nome} e causou10 de dano`,`${vilao.nome}`)
        },
        furia: () =>{
            modificarVida("heroi", 15)
            adicionarLog(`${vilao.nome } atacou ${heroi.nome} em modo furia causou 20 de dano`,`${vilao.nome}`)
        },
        regenera: () =>{
            modificarVida("vilao", -5)
            adicionarLog(`${vilao.nome } Recuperou 5 de vida`,`${vilao.nome}`)

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
            setTurno(prev => prev + 1)
        }, 2000)


    }

    const handlerEndGame =() =>{
        setHeroi(heroiInicial)
        setVilao(vilaoInicial)
        setLog([])
        setTurnoHeroi(true)
        setTurno(prev => 1)
        setEndGame(false)
    }


    setTimeout(()=>{
        if(heroi.vida < 0){
            console.log(heroi.nome + " perdeu")
            setEndGame(true)
            return
        }
        if(vilao.vida < 0){
            console.log(vilao.nome + " perdeu")
            setEndGame(true)
            return
        }
    },1000)

    return{
        heroi,
        vilao,
        log,
        turnoHeroi,
        endGame,
        handlerAcaoHeroi,
        handlerEndGame
    }

}
