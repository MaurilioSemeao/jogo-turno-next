'use client'

import { useState } from "react";

export default function useGameManager(){
    const heroiInicial = {vida: 100, nome: "Sora"}
    const vilaoInicial = {vida: 20, nome: "Riku"}

    const [heroi, setHeroi] = useState(heroiInicial)
    const [vilao, setVilao] = useState(vilaoInicial)


    const [log, setLog] = useState([])
    const [turnoHeroi, setTurnoHeroi] = useState(true)
    const [turno, setTurno] = useState(1)
    const [endGame, setEndGame] = useState(false)

    const modificarVida = (alvo, dano) => {
        if (alvo === "heroi") {
            const novaVida = Math.max(heroi.vida - dano, 0);
            setHeroi({ ...heroi, vida: novaVida });
            return novaVida;
        } else {
            const novaVida = Math.max(vilao.vida - dano, 0);
            setVilao({ ...vilao, vida: novaVida });
            return novaVida;
        }
    };

    const adicionarLog = (mensagem, quem) => {
        setLog(prev => [{mensagem, turno, quem}, ...prev])
    }

    const acoesHeroi ={
        atacar: () => {

            adicionarLog(`${heroi.nome} atacou ${vilao.nome} e causou 10 de dano`, `${heroi.nome}`)
            return modificarVida("vilao", 10)
        },
        defender: () =>{
            adicionarLog(`${heroi.nome} Defendeu o atque de ${vilao.nome} e recuperou 5 de vida`,`${heroi.nome}`)
            return  modificarVida("heroi", -5)
        },

        usarPocao: () =>{
            adicionarLog(`${heroi.nome} usou poção e recuperou 15 de vida`,`${heroi.nome}`)
            return modificarVida("heroi", -15)
        },

        correr: () =>{
            adicionarLog(`${heroi.nome} tentou fugir!`,`${heroi.nome}`)
            return 0;
        }

    }


    const acaoVilao = {
        atacar : () =>{
            adicionarLog(`${vilao.nome } atacou ${heroi.nome} e causou10 de dano`,`${vilao.nome}`)
            return modificarVida("heroi", 10)
        },
        furia: () =>{
            adicionarLog(`${vilao.nome } atacou ${heroi.nome} em modo furia causou 20 de dano`,`${vilao.nome}`)
            return modificarVida("heroi", 15)
        },
        regenera: () =>{
            adicionarLog(`${vilao.nome } Recuperou 5 de vida`,`${vilao.nome}`)
            return modificarVida("vilao", -5)

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

    const checkEndGame = (valorVida) =>{
        if (valorVida <= 0){
            setEndGame(true)
            return true;
        }
        return false;
    }

    const handlerAcaoHeroi = (acao) =>{
        if(!turnoHeroi) return
        const vidaVilao = acoesHeroi[acao]?.()
        if(checkEndGame(vidaVilao)) return
        setTurnoHeroi( false)

        setTimeout( () =>{

            const vidaHeroi = acaoVilao[handleAcaoVilao()]?.()
            setTurnoHeroi( true)
            setTurno(prev => prev + 1)

            if(checkEndGame(vidaHeroi)) return
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
