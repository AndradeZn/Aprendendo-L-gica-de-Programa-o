
 //   DESAFIOS

//Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log("Boas vindas")


//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = "Andrade";
console.log(`Olá, ${nome}`);

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
nome = "Andrade";
alert(`Olá, ${nome}`);


//Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagem = prompt('Qual linguagem de programação que você mais gosta?')
console.log(linguagem);


//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
valor1 = 10;
valor2 = 20;
resultado = valor1 + valor2;
console.log(`a soma de ${valor1} e ${valor2} é igual a ${resultado}`)


//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
valor3 = 50;
valor4 = 40;
resultado = valor3 - valor4;
console.log(`a subtração do ${valor3} e ${valor4} é igual a ${resultado}`)


//Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console
let idade = Number(prompt("Digite sua idade"));
if(idade >= 18){
    console.log("maior idade")
} 
else{
    console.log("menor idade")
}


//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero = Number(prompt("Digite um valor"));
if(numero >= 1){
    console.log("Positivo")
}
else{
    console.log("Negativo")
}


//Use um loop while para imprimir os números de 1 a 10 no console.
let i= 1;
while(i <= 10){
    console.log(i)
    i++;
}

//Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

let nota = 10;
 if(nota >= 7){
    console.log("Aprovado")
 }
 else{
    console.log("Reprovado")
 }


 
 //Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
 let numeroaAleatorio = Math.random();
 console.log(numeroaAleatorio)


//Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let aleatorio = parseInt(Math.random()* 10 + 1);
console.log(aleatorio)


//Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let desconhecido = parseInt(Math.random()* 1000 + 1);
console.log(desconhecido)








// ESSE FOI FEITO POR MIM, APENAS LEMBRANDO DE CABEÇA
alert("Bem-vindos ao jogo do número Secreto")
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
console.log(numeroSecreto);
let chute;
let tentativas = 1;


// Enquanto...
while (chute != numeroSecreto) {
    chute = prompt(`Escolhe um número entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto) {
        break;
    }
    else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        }
        else {
            alert(`O número secreto é maior que ${chute}`)

        }
        //é a mesma coisa que: tentativas = tentativas +1
        // Para atribuir mais 1 utilize o sinal: ++
        tentativas++
    }
}


let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`)

 















// if (tentativa > 1) {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativa} tentativas`)
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativa} tentativa.`)
// }











// ====================TESTE TREINO===================================
// let mensagemDeBoasVindas = 'Boas vindas ao App';
// alert('mensagemDeBoasVindas')

// alert('Boas-vindas ao jogo do número secreto') // vai aparecer um aviso na tela
// let chute = prompt('Escolha um número de 1 e 10')

// let numeroSecreto = 4

// if (chute == numeroSecreto) {
//     alert('Acertou');
// }

// let senhaDoSistema = "senhaTeste"
// let senha = prompt("Digite a senha do sistema");

// if(senha == senhaDoSistema){
//     alert("Acesso ao sistema garantido")
// }
// else{
//     alert("Errou");
// }


// Guarda nome de uma pessoa
// let nome = "Ana";

// Guarda a idade
// let idade = 25;

// Guarda um valor de saldo
// let saldoDisponivel = 1000;



// // Pede o nome da pessoa e guarda na variável
// let nomeUsuario = prompt("Digite seu nome")

// // Pede a idade da pessa e guarda na variável
// let idadeUsuario = prompt("Digite sua idade")


// let temPao = prompt("Você tem pão em casa? Responda com sim ou não");

// if (temPao === "sim") {
//     alert("Fazer sanduíche");
// } else {
//     alert("Fazer miojo");
// }


// let qtdNumeros = prompt('Digite a quantidade de números para cálcular')
// let soma = 0;
// let contador = qtdNumeros;


// // parseInt vai converter Strings(textos) em números inteiros.
// // ("10", "15", "20") vai virar (10 15, 20).
// while(contador > 0){
//     let numero = parseInt(prompt('Digite o número: '));
//     soma += numero;
// }
// // Adicionei  parseInt porque no JavaScript, ele sempre retorna o que usuário digita como string(texto), mesmo que seja número.
// let media = soma / qtdNumeros;
// console.log(media);



// ===========DESAFIO=========================
// O QUE FIZ
// let contador = 10;
// while(contador == 10){
//     alert('Você chegou no número')
// } 
// else{
//     if (contador >=1){
//        contador++
//     }
// }

// CORRETO
// let contador = 1;
// while (contador <= 10) {
//     console.log(contador);
//     contador++;
// }


// VERIFICAÇÃOO DE OPERADRES LÓGICOS
// let idade = 25.
// let possuiCarteira = true;
// if (idade > 18 && possuiCarteira){
//     console.log("Pode dirigir!");
// } else {
//     console.log("Não pode dirigir");
// }



// let Maca = false;
// let Banana = true;
// if (maca || banana){
//     console.log("Você tem frutas!");
// } else {
//     console.log("Não tem frutas");
// }