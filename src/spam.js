/*Esse bloco de código, Faz uma pergunta para o usuário, aplicação de números digitados
em variáveis number1 e number2, no final exibindo o resultado finala ao usuário.
*/
var nome = window.prompt("Digite seu Nome:")
window.alert("Olá " + nome + ", Boas vindas.")

var number1 = window.prompt("Digite um Número:")
var number2 = window.prompt("Digite outro Número:")

var s = number1 + number2
var div = number1 / number2
var multi = number1 * number2
// soma não reproduzida, por conta de estar sendo reconhecida como string, irei resolver isto amanhã.
window.alert("A multiplicação dos valores é " + multi)
window.alert("A divisão dos valores é " + div)