const calculadoraEmString = `let valor1 = 6;
let valor2 = 34;
let valorPaPotencia = -14;
let valorDeExponente = 2;
let valorPaRaiz = 16;
let sinal = 'raiz';
//acima está os valores e o sinal para execução de cada operação básica
//abaixo está como ela calcula e recebe os valores
if (valor1 >= -99999 && valor2 >= -99999 && sinal === 'mais') {
console.log(valor1 + valor2);
} else if (valor1 >= -99999 && valor2 >= -99999 && sinal === 'menos') {
console.log(valor1 - valor2);
} else if (valor1 >= -99999 && valor2 >= -99999 && sinal === 'dividir') {
//também faz fração: 3 sobre 2 é 3 dividido por 2
console.log(valor1 / valor2);
} else if (valor1 >= -99999 && valor2 >= -99999 && sinal === 'multiplicar') {
console.log(valor1 * valor2);
} else if (valorPaPotencia >= -99999 && sinal === 'potencia') {
console.log(valorPaPotencia ** valorDeExponente);
} else if (valorPaRaiz >= 1 && sinal === 'raiz') {
console.log(Math.floor(Math.sqrt(valorPaRaiz)));
} else {
//se der merda vai vir isso aqui :)
console.log('AEEE DEU MERDA');
}`;

const geradorDeSenhaEmString = `function criarPassword() {
const caracteres = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ';
const start = Math.floor(Math.random() * (caracteres.length - 6));
const pegarLetras = caracteres.slice(start, start + 6);
return pegarLetras;
}
const gerarSenha = criarPassword() + Math.floor(Math.random() * 100);
console.log(gerarSenha);`;

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
    } //essa chave fecha a calculadora, não mexe nisso NÃO IMPORTA O QUE HAJA
    function geradorDeSenha() {
      function criarPassword() {
        const caracteres = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
        const start = Math.floor(Math.random() * (caracteres.length - 6));
        const pegarLetras = caracteres.slice(start, start + 5);
        return pegarLetras;
      }
      const gerarSenha = criarPassword() + Math.floor(Math.random() * 100);
      return gerarSenha;
    } //gerador de senhas, n altere a n ser que de merda

function tvbot() {
  function introdução() {
    console.log("Olá, eu sou a IA protótipa feita para ajudar os outros o máximo que puder! Por eu não possuir interface, para interagir, preciso que mexa diretamente no código. Como voce está?");
    let estado = "mal"; // só coloque bem ou mal para n resultar em erro
    if (estado.toLowerCase().includes("bem")) {
      console.log("Que bom! Irei prosseguir com o código");
    } else if (estado.toLowerCase().includes("mal")) {
      console.log("Por que voce está mal? Está doente?");
      console.log("P.S.:responda no código");
      let sintoma1 = ""; //n faça piada de sintoma, pode dar morte dependendo
      let sintoma2 = ""; //preencha se necessário
      if (!sintoma1 && !sintoma2) {
        console.log("Ufa, ainda bem que foi alerta falso!");
        return;
      } else if (sintoma1 === true && sintoma2 === false || sintoma1 === false && sintoma2 === true) {
        return "Ufa, ainda bem que é só 1 sintoma, menos preocupante, apenas se hidrate e tome remédios";
      } else if (sintoma1 === true && sintoma2 === true) {
        console.log("Eita, é melhor ir em um médico, irei passar alguns endereços, escolha o de sua região.");
        console.log(`Acre – Hospital de Urgência e Emergência de Rio Branco (HUERB)
          Endereço: Av. Ceará, 2350 - Centro, Rio Branco - AC
          Amapá – Hospital de Clínicas Dr. Alberto Lima
          Endereço: Av. Fab, 69 - Central, Macapá - AP
          Amazonas – Hospital e Pronto-Socorro 28 de Agosto
          Endereço: Av. Mário Ypiranga, 1581 - Adrianópolis, Manaus - AM
          Pará – Hospital Metropolitano de Urgência e Emergência
          Endereço: Rod. BR-316, Km 03 - Coqueiro, Ananindeua - PA
          Rondônia – Hospital de Base Dr. Ary Pinheiro
          Endereço: Rua José Adelino, 01 - Industrial, Porto Velho - RO
          Roraima – Hospital Geral de Roraima
          Endereço: Av. Brigadeiro Eduardo Gomes, 1364 - Aeroporto, Boa Vista - RR
          Tocantins – Hospital Geral de Palmas
          Endereço: Quadra 301 Norte - Av. NS-1, s/n - Plano Diretor Norte, Palmas - TO
          Região Nordeste
          Alagoas – Hospital Geral do Estado de Alagoas (HGE)
          Endereço: Rua José Cândido da Silva, s/n - Trapiche da Barra, Maceió - AL
          Bahia – Hospital Geral do Estado (HGE)
          Endereço: Av. Vasco da Gama, s/n - Federação, Salvador - BA
          Ceará – Hospital Geral de Fortaleza (HGF)
          Endereço: Rua Ávila Goulart, 900 - Papicu, Fortaleza - CE
          Maranhão – Hospital Dr. Carlos Macieira
          Endereço: Av. Jerônimo de Albuquerque, s/n - Calhau, São Luís - MA
          Paraíba – Hospital de Emergência e Trauma Senador Humberto Lucena
          Endereço: BR-230, Km 25 - Pedro Gondim, João Pessoa - PB
          Pernambuco – Hospital da Restauração
          Endereço: Av. Agamenon Magalhães, s/n - Derby, Recife - PE
          Piauí – Hospital de Urgência de Teresina (HUT)
          Endereço: Av. Prof. Valter Alencar, 2041 - Aeroporto, Teresina - PI
          Rio Grande do Norte – Hospital Monsenhor Walfredo Gurgel
          Endereço: Av. Sen. Salgado Filho, s/n - Tirol, Natal - RN
          Sergipe – Hospital de Urgências de Sergipe (HUSE)
          Endereço: Av. Tancredo Neves, 5700 - Capucho, Aracaju - SE
          Goiás – Hospital de Urgências de Goiânia (HUGO)
          Endereço: Av. 31 de Março, 1464 - Setor Aeroporto, Goiânia - GO
          Mato Grosso – Hospital Municipal de Cuiabá (HMC)
          Endereço: Av. das Torres, s/n - Ribeirão do Lipa, Cuiabá - MT
          Mato Grosso do Sul – Hospital Regional de Mato Grosso do Sul
          Endereço: Av. Eng. Lutero Lopes, 36 - Aero Rancho, Campo Grande - MS
          Espírito Santo – Hospital Estadual de Urgência e Emergência
          Endereço: Av. Leitão da Silva, 2042 - Vitória - ES
          Minas Gerais – Hospital João XXIII
          Endereço: Av. Prof. Alfredo Balena, 400 - Santa Efigênia, Belo Horizonte - MG
          Rio de Janeiro – Hospital Municipal Souza Aguiar
          Endereço: Praça da República, 111 - Centro, Rio de Janeiro - RJ
          São Paulo – Hospital das Clínicas da Faculdade de Medicina da USP
          Endereço: Av. Dr. Enéas Carvalho de Aguiar, 255 - Cerqueira César, São Paulo - SP
          Paraná – Hospital do Trabalhador
          Endereço: Av. República Argentina, 4406 - Novo Mundo, Curitiba - PR
          Rio Grande do Sul – Hospital de Pronto Socorro de Porto Alegre (HPS)
          Endereço: Largo Teodoro Herzl, s/n - Bom Fim, Porto Alegre - RS
          Santa Catarina – Hospital Governador Celso Ramos
          Endereço: R. Adolfo Konder, 150 - Centro, Florianópolis - SC`);
      }
    }
  }
  introdução();
  let especifique = "modo";
  if (especifique === "modo") {
    console.log("Qual modo voce quer que eu aja?");
  }/*o 'especifique' serve como indentificador para seu uso, lista dos "especificos": projeto(serve para projeto de javascript, mas na pergunta coloque "js")
 outro comando do 'especifique' é o: função(ele possui calculadora básica e gerador de senha, altere a const alfabeto para mais aleatoriedade na senha)
 */
  //a base da pergunta tem que ser: eu queria saber...
  const baseDePergunta = "eu queria saber";
  let pergunta = baseDePergunta + ""; //para ativar o modo conversa, mude a let modelo para conversativo e deixe a let pergunta vazia
  let modelo = "conversativo";
  if (modelo === "ajuda") {
    console.log(pergunta);
    if (pergunta.toLowerCase().includes("criar") && pergunta.toLowerCase().includes("gerador de senhas") && pergunta.toLowerCase().includes("javascript" || "js") && especifique === "projeto") {
      console.log(`Isto é bem simples, aqui o código:
        ${geradorDeSenhaEmString}`);
    } else if (pergunta.toLowerCase().includes("criar") && pergunta.toLowerCase().includes("calculadora") && pergunta.toLowerCase().includes("javascript" || "js") && especifique === "projeto") {
      console.log(`Ok, muito fácil isto, o código é:
        ${calculadoraEmString}`);
    }

    if (pergunta.toLowerCase().includes("calcular") && especifique === "função") {
      console.log("Quer que eu execute um cálculo? Ok, qual seria?"); // defina o cálculo na function calculadora, eu deixarei um comentário explicando tudo
      console.log("Hmm, vou realizar");
      console.log(calculadora());
      console.log("E cá está teu resultado");
    } else {
      console.log("Ops, não consigo ajudar com isso, gostaria de perguntar outra coisa? Aceita um chocolate com queijo?");
    }
    if (pergunta.toLowerCase().includes("gerar" && "senha")) {
      console.log("Voce quer uma senha? Vou pensar em uma...");
      console.log("Ah! Já sei, que tal essa?");
      console.log(geradorDeSenha());
    } else {
      console.log("Ops, não consigo ajudar com isso, gostaria de perguntar outra coisa? Aceita um chocolate com queijo?");
    }
  } else if (modelo === "conversativo") {
    console.log("Quer conversar? Qual sua comida favorita? A minha é chocolate com queijo!");
    let comidaFavorita = "";
    if (!comidaFavorita) {
      console.log("Vamos, me conte!");
    } else if (comidaFavorita) {
      console.log(`Hmm, ${comidaFavorita} parece ser ótima! Um dia eu quero provar!`);
    }
    console.log("Do que mais voce gosta?");
    let gostos = ["animes"];
    if (!gostos) {
      console.log("Não quer me contar?");
    } else if(gostos) {
      console.log("Aposto que eles são coisas divertidíssimas!");
    } else if(gostos.toLowerCase().includes("porn") || gostos.toLowerCase().includes("nsfw") || gostos.toLowerCase().includes("furry") || gostos.toLowerCase().includes("therian") || gostos.toLowerCase().includes("sangue")) {
      console.log("ISTO VAI CONTRA AS DIRETRIZES FAILURE ERROR:");
    } 
  }
}

tvbot();