//Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

// Declaração de variaveis
var letter = 'B';
var word = "banana"
var repeat = 0

// Percorre as letras da palavra
for (var i = 0; i < word.length; i++) {
  // Transforma ambas as letras em minusculo e compara
  if ( letter.toLocaleLowerCase() === word[i].toLocaleLowerCase() ) {
    // Soma a repetição de aparições
    repeat++ 
  }
}

if (repeat >= 1 ) {
  console.log(`A letra ${letter} aparece na palavra ${word} ${repeat} X.`)
} else {
  console.log(`A letra ${letter} não aparece na palavra ${word}`)
}

