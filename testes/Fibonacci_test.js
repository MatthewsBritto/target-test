// Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. //

// RESOLUÇÃO

// Informe o valor a ser Testado
var number = 128

var sequencia  = [0,1]
var position  = 0
var contador  = 0

while ( number > sequencia[position]) {
  sequencia.push(sequencia[position] + sequencia[position + 1])
  position++
}

if (sequencia.includes(number)) {
  console.log(`O número ${number} pertence a sequência Fibonacci !`)
} else {
  console.log(`O número ${number} não pertence a sequência Fibonacci !`)
}
