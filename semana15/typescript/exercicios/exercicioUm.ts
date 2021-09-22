//const minhaString : string = 9
// diz que o tipo dessa variavel não é numero o certo seria:
const minhaString : string = "Keylla"
// usando o union type
let minhaStringSegunda : number | string = "Keylla"

const pessoa: { nome: string, idade: number, corFavorita: string} = {
    nome: "Keylla",
    idade: 31, 
    corFavorita: "cor de rosa"
    }

    type pessoa = { 
        nome: string, 
        idade: number,
        corFavorita: string
    }

    const astrodev: pessoa = {
        nome: "Astrodev",
        idade: 30,
        corFavorita:"azul"
        } 

        const keylla: pessoa = {
            nome: "Keylla",
            idade: 31,
            corFavorita:"rosa"
            } 
            
            const fulaninho: pessoa = {
                nome: "fulaninho",
                idade: 30,
                corFavorita:"roxo"
                } 

enum coresDoArcoiris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta",
}

type pessoadois = { 
nome: string, 
idade: number,
corFavorita: coresDoArcoiris,
                }

                