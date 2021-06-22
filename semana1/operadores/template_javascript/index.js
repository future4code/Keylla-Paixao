/* Respostas exercicio de interpretação de codigo:
1:
A- False
B- False
C- True
D- Boolean

2:
O codigo apenas esta imprimindo os 2 numeros adicionados no prompt, por exemplo
se você inserir o 1 e depois o 5 a saida será 15, o programa não está fazendo a 
soma pois são duas strings sendo adicionadas. 

3:
Para corrigir deve-se usar a conversão de tipos utilizando o metodo number ()

*/

// Respostas exercicio escrita de codigo:
// 1-
const idade = prompt ("Qual é sua idade?")

    const idadeAmig = prompt ("Qual a idade do seu melhor Amigo/Amiga?")
        
        const comparandoIdades = idade > idadeAmig

console.log ("Sua idade é maior do que a do seu melhor amigo?", comparandoIdades)

//2
const numeroPar = prompt ("Olá, escreva um numero par")

        const novoNumeroPar = Number (numeroPar)
            const RestoDaDivisao = novoNumeroPar % 2 

console.log (RestoDaDivisao)
// comentario1: se os numeros forem par o resto será 0
// cometario2: se os numeros forem impar o resto será 1 

//3
const suaIdadeEmAnos = prompt ("Qual é sua idade?")
    const novaSuaIdadeEmAnos = Number (suaIdadeEmAnos)
    const mesesAno = 12
    const diasAno = 365
    const horaPorDia = 24
        const suaIdadeEmMeses = novaSuaIdadeEmAnos * mesesAno
            const suaIdadeEmDias = suaIdadeEmMeses * diasAno / mesesAno
                const suaIdadeEmHoras = suaIdadeEmDias * horaPorDia

console.log ("Sua idade em meses é", suaIdadeEmMeses, "Sua idade em dias é", suaIdadeEmDias, 
"Sua idade em horas é", suaIdadeEmHoras)

//4
const pessoa = prompt ("Qual o seu nome?")
    const primeiroNumero = prompt ("olá"+ pessoa+ "Digite um numero")
        const segundoNumero = prompt (pessoa+"Digite agora um outro numero")
            const novoPrimeiroNumero = Number (primeiroNumero)
                const novoSegundoNumero = Number (segundoNumero)
                    const comparacao1 = novoPrimeiroNumero > novoSegundoNumero
                        const comparacao2 = novoPrimeiroNumero === novoSegundoNumero
                            const comparaca3 = novoPrimeiroNumero % novoSegundoNumero === 0
                                const comparacao4 = novoSegundoNumero % novoPrimeiroNumero === 0

console.log (comparacao1, comparacao2, comparaca3, comparacao4)

// Desafios
/*  Graus Fahrenheit(°F) para Kelvin(K)
(KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
Graus Celsius(°C) para Graus Fahrenheit (°C)
(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32       */
// a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

const tempFahrenheit = 77
    const conversaoTempKelvin = (tempFahrenheit - 32) * (5/9) + 273.15

    console.log (conversaoTempKelvin, "K")

// b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
const tempCelsius = 80
    const conversaoTempFahrenheit = (tempCelsius) * (9/5) + 32

    console.log (conversaoTempFahrenheit, "°F")

//c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também

const tempCelsius2 = 30
    const conversaoTempFahrenheit2 = (tempCelsius2) * (9/5) + 32
        const conversaoTempKelvin2 = (conversaoTempFahrenheit2 - 32) * (5/9) + 273.15

console.log (conversaoTempFahrenheit2, "°F", conversaoTempKelvin2, "K")

// d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter
const tempCelsius3 = prompt ("Olá insira aqui a temperatura em celsius que você deseja fazer a conversão")
    const novaTempEmCelsius = Number (tempCelsius3)

        const conversaoTempFahrenheit3 = (novaTempEmCelsius) * (9/5) + 32

            const conversaoTempKelvin3 = (conversaoTempFahrenheit3 - 32) * (5/9) + 273.15

console.log (conversaoTempFahrenheit3, "°F", conversaoTempKelvin3, "K")

// 2-
// A- residencia 280 kw/h
const consumoKwhCasa1 = 280
    const valorKwh = 0.05
            const diasDoMes = 30
                const contaDeLuz = consumoKwhCasa1 * valorKwh * diasDoMes

    console.log (contaDeLuz)

// B- Desconto 15%
const consumoKwhCasa2 = 280
    const valorKwh2 = 0.05
            const diasDoMes2 = 30
                const contaDeLuz2 = consumoKwhCasa2 * valorKwh2 * diasDoMes2
                const desconto = 0.15
                const contaDeLuzFinal = contaDeLuz2 - contaDeLuz2 * desconto
                
    console.log (contaDeLuzFinal)

//3-
const lbTotal = 20
    const  undLbParaKg = 0.4536
        const conversao = lbTotal * undLbParaKg

        console.log ("20 lb equivalem a ", conversao, "kg")
        



