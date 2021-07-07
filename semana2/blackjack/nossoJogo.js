alert("Sejam Bem Vindos ao jogo BlackJack")

const jogador = confirm("Você quer iniciar uma Partida?")

const respostaJogador = jogador

switch (respostaJogador){
   case false:
       alert('Que pena, então encerramos o jogo, se mudar de ideia volte outra hora.')
       break

   case true:
       alert('Que legal! então vamos jogar!')
       break

}

let jogador1 = confirm("Vamos Sortear suas cartas")

if (jogador1) {
  let carta1Usuario = comprarCarta()
  let carta2Usuario = comprarCarta()
  let carta1Pc = comprarCarta()
  let carta2Pc = comprarCarta()

  let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
  
  let pontuacaoPc = carta1Pc.valor + carta2Pc.valor

  alert(`Olá, essa é sua pontuação ${pontuacaoUsuario}`)

  alert(`Olá, essa é a pontuação do seu oponente ${pontuacaoPc}`)

  console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - ${pontuacaoUsuario}`)

  console.log(`Computador - cartas: ${carta1Pc.texto} ${carta2Pc.texto} - ${pontuacaoPc}`)

    if (pontuacaoUsuario > pontuacaoPc) {
     alert(console.log("O usuário ganhou!"))
  } else if (pontuacaoPc > pontuacaoUsuario) {
      alert(console.log("O computador ganhou!"))
  } else if (pontuacaoUsuario === pontuacaoPc) {
      alert(console.log("Empate!"))
  }

} else {
  alert(console.log("O jogo acabou"))
} 

// a ultima parte eu fiz com a mlogica da correção e não entendi muito bem por que não compara diretamente
// tentei fazer com que o jogo saia tudo com resuktado na tela e não consegui
//em resumo nãp entendi nada rsrsrsrsrs










