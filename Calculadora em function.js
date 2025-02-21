function calculadora() {
//tutorial da function: quer fazer um cálculo? altere os valor1,valor2 para adição, subtração, multiplicação e divisão. Para potencias, mude os valorPaPotencia e valorDeExponente. Para raiz, apenas altere o valorPaRaiz, abaixo tem como usar o sinal
/*lista dos sinais e forma definitiva de como usar para contas:
para adição: mais
para subtração: menos
para multiplicação: multiplicar
para divisão: dividir
para potencia: potencia
para raiz quadrada somente: raiz
p.s.: altere o sinal dentro das aspas, se não, vai dar erro*/
let valor1 = 6;
let valor2 = 34;
let valorPaPotencia = -14;
let valorDeExponente = 2;
let valorPaRaiz = 16;
let sinal = 'raiz';
//acima está os valores e o sinal para execução de cada operação básica
//abaixo está como ela calcula e recebe os valores
if (valor1 >= -99999 && valor2 >= -99999 && sinal === 'mais') {
  return valor1 + valor2;
} else if (valor1 >= -99999 && valor2 >= -99999 && sinal === 'menos') {
  return valor1 - valor2;
} else if (valor1 >= -99999 && valor2 >= -99999 && sinal === 'dividir') {
  //também faz fração: 3 sobre 2 é 3 dividido por 2
  return valor1 / valor2;
} else if (valor1 >= -99999 && valor2 >= -99999 && sinal === 'multiplicar') {
  return valor1 * valor2;
} else if (valorPaPotencia >= -99999 && sinal === 'potencia') {
  return valorPaPotencia ** valorDeExponente;
} else if (valorPaRaiz >= 1 && sinal === 'raiz') {
  return Math.floor(Math.sqrt(valorPaRaiz));
} else {
  //se der merda vai vir isso aqui :)
  return 'AEEE DEU MERDA';
}
}