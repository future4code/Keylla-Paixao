// exercicios de interpretação de codigo
//a- a variavel let armazena o valor de onde deve partir 

//a operação, dentro do loop a variavel é inserida para que

// ele inicie a partir desde valor, o loop será rodado com a condição

// de i ser menor que 5, e por fim será expresso o valor somando sempre 

//mais 2, depois será impresso o valor mais i. o valor impresso será 10

//2:
//a- Todos os numeros maiores que 18 = 19, 21, 23, 25, 27, 30

//b- usando: 
//const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
//for (let indice of lista) {
  
//    console.log(lista)
//}
// seria impresso varias vezes o array contendos todos os numeros,

//para que o codigo imprima apenas uma vez, deve-se fazer uma função 

// com o for com uma condicional se iniciando do menor para o maior, eu

// não cosnegui fazer toda a construção desse codigo, pq da erro no return 

// mas acredito que a logica esta correta.

/*const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}*/
//a- será uma sequencia de 4 linhas começando com 1 * e terminando com 4, 

// sempre que o codigo for fazer uma nova linha ele adicionará um asterisco. 

/*exemplo:
*
**
***
****
*/ 

// escrita de codigo
/*Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.
a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles,
 um por um, e guarde esses nomes em um array
 c) Por fim, imprima o array com os nomes dos bichinhos no console
 Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes
  que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.
*/

let numeroDePets = Number(prompt("Quantos animais de estimação você tem?"))

    let petsDoUsuario= numeroDePets

    if (petsDoUsuario === 0){console.log ("Que pena! Vocẽ pode adotar um pet!")
}else{ while (petsDoUsuario > 0){ 

    let nomeDosPets = prompt("insira os seus nomes?"); prompt + petsDoUsuario

    return nomeDosPets
}  
let arrayNomesdosPets = [nomeDosPets]
return arrayNomesdosPets
 }
 console.log [arrayNomesdosPets]
