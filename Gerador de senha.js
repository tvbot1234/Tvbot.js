
function criarPassword() {
const caracteres = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ';
const start = Math.floor(Math.random() * (caracteres.length - 6));
const pegarLetras = caracteres.slice(start, start + 6);
return pegarLetras;
}
const gerarSenha = criarPassword() + Math.floor(Math.random() * 100);
console.log(gerarSenha);