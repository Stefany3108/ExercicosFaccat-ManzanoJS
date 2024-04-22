function exercicio01() {
    var numero1 = parseInt(prompt("Digite um Numero: "))
    var numero2 = parseInt(prompt("Digite outro Numero: "))

    var soma = numero1 + numero2
    alert("O resultado da soma dos dois números é: " + soma)
}

function exercicio02() {
    var numero1 = parseInt(prompt("Digite um Numero: "))
    var numero2 = parseInt(prompt("Digite outro Numero: "))

    var sub = numero1 - numero2
    alert("O resultado da subtração dos dois números é: " + sub)
}

function exercicio03() {
    var numero1 = parseInt(prompt("Digite um Numero: "))
    var numero2 = parseInt(prompt("Digite outro Numero: "))

    var mult = numero1 * numero2
    alert("O resultado da multiplicação dos dois números é: " + mult)
}

function exercicio04() {
    var numero1 = parseInt(prompt("Digite um Numero: "))
    var numero2 = parseInt(prompt("Digite outro Numero: "))

    var div = numero1 / numero2
    alert("O resultado da divisão dos dois números é: " + div)
}

function exercicio05() {
    var valor = parseInt(prompt("Digite um valor: "))
    
    alert("O antecessor de "+ valor +" é: " + (valor - 1))
}

function exercicio05_2() {
    var valor = parseInt(prompt("Digite um valor: "))
    
    alert("O sucessor de "+ valor +" é: " + (valor + 1))
}

function exercicio06() {
    var base = parseFloat(prompt("Digite o tamanho da base: "))
    var altura = parseFloat(prompt("Digite o tamanho da altura: "))

    var area = base * altura

    alert("A area do retângulo é: " + area + "!")
}

function exercicio07() {
    var anodia = 365
    var mesdia = 30
    var ano = parseInt(prompt("Digite sua idade:"))
    var mes = parseFloat(prompt("Mês: "))
    var dia = parseFloat(prompt("Dia: "))


    var anototal = ano * anodia
    var mestotal = mes * mesdia
    var idade = anototal + mestotal + dia

    alert("Sua idade em dias é:  " + idade + "!")
}

function exercicio08() {
    var totaleleitores = parseFloat(prompt("Digite o numero total de eleitores: "))
    var nulos = parseFloat(prompt("Digite o numero de votos nulos: "))
    var brancos = parseFloat(prompt("Digite o numero de votos brancos: "))
    var validos = parseFloat(prompt("Digite o numero de votos validos: "))

    var pnulos = (nulos / totaleleitores) * 100
    var pbrancos = (brancos / totaleleitores) * 100
    var pvalidos = (validos / totaleleitores) * 100

    alert("O percentual de votos nulos em relação ao total de eleitores é :        " + "Nulos: " + pnulos + "%                  " + "Brancos: " + pbrancos + "%               " + "Validos: " + pvalidos + "%")
}

function exercicio09() {
    var salatual = parseInt(prompt("Digite o salario atual do funcionario: "))
    var aumento = parseFloat(prompt("Digite o percentual de aumento do salario do funcionario: "))
    var novosalario = salatual * (aumento / 100)
    alert("O percentual de aumento do funcionario é: " + novosalario + "!")
}

function exercicio10() {
    var imposto = 45
    var distribuidor = 28
    var fabrica = parseFloat(prompt("Digite o valor de fabrica do carro: "))

    var valordistribuidor = fabrica * (distribuidor / 100)
    var valorimposto = fabrica * (imposto / 100)
    var total = valordistribuidor + valorimposto + fabrica
    alert("O valor total do carro para o consumidor é:  " + "R$" + total)
}

function exercicio11() {
    var salario = parseFloat(prompt("Digite seu salario fixo: "))
    var comissao = parseFloat(prompt("Digite sua comissão fixa por cada carro vendido: "))
    var venda = 5
    var carros = parseFloat(prompt("Digite o numero de carros vendidos no mês: "))
    var valcarro = parseFloat(prompt("Digite o valor dos carros vendidos: "))


    var taxafixa = comissao * carros
    var taxavenda = venda * (valcarro / 100)

    var salariofinal = taxafixa + taxavenda + salario


    alert("Salario final do funcionario é:  R$" + salariofinal)
}

function exercicio12() {
    var numero = parseFloat(prompt("Digite um numero: "))

    if (numero > 10) {
        (alert("É maior que 10!"))
    } else {
        (alert("Não é maior que 10!"))
    }
}

function exercicio13() {
    var numero = parseFloat(prompt("Digite um numero: "))

    if (numero >= 0)
        alert("Seu numero é positivo!")
    else
        alert("Seu numero é negativo!")
}

function exercicio14() {
    var numerofruta = parseInt(prompt("Digite o numero de Laranjas que comprou: "))
    var meia = numerofruta * 1.30

    var duzia = numerofruta * 1

    if (numerofruta >= 12) {
        duzia * numerofruta
        alert(" Sua compra de " + numerofruta + " Bananas deu no total: R$ " + duzia)
    } else {
        numerofruta * meia
        alert(" Sua compra de " + numerofruta + " Bananas deu no total: R$ " + meia)
    }

}

function exercicio15() {
    let nota1 = parseFloat(prompt("Digite sua nota na A1: "))
    let nota2 = parseFloat(prompt("Digite sua nota na A2: "))
    let media = (nota1 + nota2) / 2

    if (nota1 > 10 && nota2 > 10) {
        alert("Essa nota não é valida!")
    }
    if (media >= 6) {
        alert("Parabens você foi aprovado com média final: " + media)
    } else {
        alert("Você foi reprovado com média final: " + media)
    }
}

function exercicio16() {
    let anonasc = parseInt(prompt("Digite seu ano de nascimento: "))
    let anoatual = parseInt(prompt("Digite o ano atual: "))

    let idade = anoatual - anonasc

    if (idade >=18){
    alert("Seu voto é obrigatorio!")
    }
     else {
    alert("Você não pode votar!")
     }
}

function exercicio17() {
    
    let valor1 = parseInt(prompt("Digite um valor: "))
    let valor2 = parseInt(prompt("Digite outro valor: "))

    if (valor1 > valor2) {
        alert( " O maior numero entre os dois valores digitados é: " + valor1)
    } else {
    alert( " O maior numero entre os dois valores digitados é: " + valor2)
    }
}

function exercicio18() {
    let valor1  = parseInt(prompt("Digite um valor: "))
    let valor2  = parseInt(prompt("Digite outro valor: "))

    if (valor1 > valor2) {
        alert("A sequencia de valor do maior para o menor é: " +valor1 +" e " + valor2)
        
    } else {
        alert("A sequencia de valor do maior para o menor é: " +valor2 + " e " + valor1)
    
}
}

function exercicio19() {
    
    let inicio = parseInt(prompt("Digite a hora do inicio do jogo de xadrez:"))
    let fim = parseInt(prompt("Digite a hora do fim do jogo de xadrez:"))

    let hora = fim - inicio 

    if (hora <24) {
        alert("O jogo de xadrez durou: " + hora + " Horas")
    } else {
        alert("Horario invalido!")
    }
    
}

function exercicio20() {
    
    let horatrabalho = parseFloat(prompt("Quantas horas o funcionario trabalhou na semana: ")) 
    let salario = parseFloat(prompt("Digite seu salario: ")) 
    let horasal = salario / 12
    let horaextra = salario * ( horasal/ 100)
    let horas = horatrabalho - 40
 


    if (horas > 0) {
           alert("O funcionario recebe o salario final de: " + "R$" + horaextra)
    } else {
        alert("O funcionario recebe o salario final de: R$" + salario)
    }

}

function exercicio22() {

  let horasMes = parseInt(
    prompt("Digite o número de horas trabalhadas em um mês: ")
  );
  let salarioHora = parseInt(prompt("Digite o valor da hora regular: "));
  let jornadaMin = 40 * 4;
  let salarioTotal = 0;

  if (horasMes > jornadaMin) {
    let horasExtras = horasMes - jornadaMin;
    salarioTotal = salarioHora * jornadaMin + horasExtras * (salarioHora * 1.5);
  } else salarioTotal = salarioHora * horasMes;

  alert("O valor do seu salário é de R$" + salarioTotal);
}

function exercicio23() {

  let nome = prompt("Digite o seu nome: ");
  let sexo = prompt("Digite o seu sexo (M/F): ");
  let altura = parseFloat(prompt("Digite o sua altura (use . no lugar da vírgula): "))
  let ideal = 0;

  if (sexo.toUpperCase() == "M") ideal = 72.7 * altura - 58;
  else if (sexo.toUpperCase() == "F") ideal = 62.1 * altura - 44.7;
  alert(`${nome}, o seu peso ideal é de ${ideal} kg.`);
}

function exercicio24() {

  let salarioFixo = parseFloat(prompt("Digite seu salário fixo: "));
  let totalVendas = parseFloat(prompt("Digite o valor total de vendas: "));
  let salarioTotal, vendasExtras = 0

  if (totalVendas > 1500) { vendasExtras = totalVendas - 1500; }

  if (totalVendas <= 1500) salarioTotal = salarioFixo + totalVendas * 1.03;
  else salarioTotal = salarioFixo + ((totalVendas - vendasExtras) * 1.03) + (vendasExtras * 1.05);
  alert(`Seu salário total é: ${salarioTotal}`);
}

function exercicio25() {

  let conta = parseInt(prompt("Digite o número da sua conta: "));
  let saldo = parseFloat(prompt("Digite o valor do seu Saldo: "));
  let debito = parseFloat(prompt("Digite o valor do seu Débito: "));
  let credito = parseFloat(prompt("Digite o valor do seu Crédito: "));

  let saldoAtual = saldo - debito + credito;
  let isSaldo = ""

  if (saldoAtual >= 0) isSaldo = "Saldo Positivo";
  else isSaldo = "Saldo Negativo";
  alert(`Sua conta é a de número: ${conta}\nSeu saldo é: ${isSaldo}`);
}

function exercicio26() {
 
  let quantProdAtual = parseInt(prompt("Digite a quantidade de produtos em estoque: "));
  let quantMax = parseInt(prompt("Digite a quantidade máxima que o estoque comporta: "));
  let quantMin = parseInt(prompt("Digite a quantidade mínima que o estoque precisa: "));

  let quantMedia = (quantMax + quantMin) / 2;
  let isEfetuar = ""

  if (quantProdAtual >= quantMedia) isEfetuar = "Não efetuar compra";
  else isEfetuar = "Efetuar compra";
  alert(`A quantidade média de estoque é: ${quantMedia}\n${isEfetuar}`);
}

function exercicio27() {

  let number = parseInt(prompt("Digite um número: "));
  let isNumberWhat = ""

  if (number > 0) isNumberWhat = "Positivo";
  else if (number == 0) isNumberWhat = "Nulo";
  else isNumberWhat = "Negativo";

  alert(`O Número digitado é: ${isNumberWhat}`);
}

function exercicio28() {

  let number1 = parseInt(prompt("Digite o primeiro número: "));
  let number2 = parseInt(prompt("Digite o segundo número: "));
  let number3 = parseInt(prompt("Digite o terceiro número: "));


  if (number1 > number2) {
    if (number1 > number3) alert(`O maior número é: ${number1}`);
    else alert(`O maior número é: ${number3}`);
  }
  else if (number2 > number3) alert(`O maior número é: ${number2}`);
  else alert(`O maior número é: ${number3}`);
}

function exercicio29() {

  let number1 = parseInt(prompt("Digite o primeiro número: "));
  let number2 = parseInt(prompt("Digite o segundo número: "));
  let number3 = parseInt(prompt("Digite o terceiro número: "));
  let somados = 0

  if (number1 > number2) {
    if (number2 > number3) somados = number1 + number2
    else somados = number1 + number3
  }
  else if (number1 > number3) somados = number2 + number1
  else somados = number2 + number3

  alert(`A soma dos 2 maiores números informados é: ${somados}`);
}

function exercicio30() {

  let number1 = parseInt(prompt("Digite o primeiro número: "));
  let number2 = parseInt(prompt("Digite o segundo número: "));
  let number3 = parseInt(prompt("Digite o terceiro número: "));
  let ordem = []

  if (number1 > number2) {
    if (number2 > number3) ordem = [number3, number2, number1]
    else ordem = [number2, number3, number1]
  }
  else if (number2 > number3) {
    if (number3 > number1) ordem = [number1, number3, number2]
    else ordem = [number3, number1, number2]
  }
  else {
    if (number1 > number2) ordem = [number2, number1, number3]
    else ordem = [number1, number2, number3]
  }

  alert(`Os número em ordem crescente: ${ordem}`);
}

function exercicio31() {

  let number1 = parseInt(prompt("Digite o primeiro número: "));
  let number2 = parseInt(prompt("Digite o segundo número: "));
  let number3 = parseInt(prompt("Digite o terceiro número: "));

  if ((number1 > number2 + number3) || (number2 > number1 + number3) || (number3 > number1 + number2)) alert(`Os valores não formam um triângulo.`)
  else alert(`Os valores formam um triângulo.`)
}

function exercicio32() {

  let time1 = prompt("Digite o nome do primeiro time: ");
  let time2 = prompt("Digite o nome do segundo time: ");

  let gols1 = parseInt(prompt("Digite o número de gols do primeiro time: "));
  let gols2 = parseInt(prompt("Digite o número de gols do segundo time: "));

  let vencedor = ''

  if (gols1 > gols2) vencedor = time1
  else if (gols1 < gols2) vencedor = time2
  else vencedor = 'EMPATE'

  alert("O vencedor é: " + vencedor);
}

function exercicio33() {

  let number1 = parseInt(
    prompt("Digite um número: ")
  );
  let number2 = parseInt(
    prompt("Digite outro número: ")
  );

  let isMoreThen = number1 > number2 ? 'Primeiro maior' : number1 == number2 ? 'Iguais' : 'Segundo maior';

  alert(`Sobre os números: ${isMoreThen}`);
}

function exercicio34() {

  alert(`Posto de gasolina\nÁlcool: R$2.90 / Gasolina: R$3.30`);
  alert(`Álcool até 20L: 3% de desconto / Acima disso: 5% de desconto\nGasolina até 20L: 4% de desconto / Acima disso: 6% de desconto`);

  let combustivel = prompt("Escolha o tipo de combustível (A - alcool, G - gasolina): ");
  let litros = parseInt(prompt("Digite quantos litros deseja abastecer: "))
  let preco = 0

  if (litros > 20) {
    if (combustivel.toUpperCase() == 'A') preco = litros * 2.9 * (1 - 0.05)
    else if (combustivel.toUpperCase() == 'G') preco = litros * 3.3 * (1 - 0.05)
  } else {
    if (combustivel.toUpperCase() == 'A') preco = litros * 2.9 * (1 - 0.03)
    else if (combustivel.toUpperCase() == 'G') preco = litros * 3.3 * (1 - 0.03)
  }

  alert(`O valor a ser pago é de R$${preco.toFixed(2)}`);
}

function exercicio35() {

  let idadeHomem1 = parseInt(prompt("Digite a idade do primeiro homem: "));
  let idadeHomem2 = parseInt(prompt("Digite a idade do segundo homem: "));
  let idadeMulher1 = parseInt(prompt("Digite a idade da primeira mulher: "));
  let idadeMulher2 = parseInt(prompt("Digite a idade da segunda mulher: "));

  let maiorH, menorH, maiorM, menorM;

  if (idadeHomem1 > idadeHomem2) {
    maiorH = idadeHomem1
    menorH = idadeHomem2
  }
  else {
    maiorH = idadeHomem2
    menorH = idadeHomem1
  }
  if (idadeMulher1 > idadeMulher2) {
    maiorM = idadeMulher1
    menorM = idadeMulher2
  }
  else {
    maiorM = idadeMulher2
  }

  let somaIdades = maiorH + menorM
  let multIdades = menorH * maiorM

  alert(`A soma das idades do homem mais velho com a mulher mais nova é: ${somaIdades}`);
  alert(`O produto das idades do homem mais novo com a mulher mais velha é: ${multIdades}`);
}

function exercicio36() {

  alert(`A maçã custa R$1.80 até 5kg, e R$1.50 acima disso\nE morangos custam R$2.50 até 5kg, e R$2.20 acima disso.\nTemos também 10% de desconto se sua compra ultrapassar 8kg ou R$25.`)

  let macas = parseInt(prompt('Digite quantos Kg de maçã irá levar: '))
  let morangos = parseInt(prompt('Ditire quantos Kg de morango irá levar: '))

  let compra = 0
  let kgFinal = morangos + macas

  let totalMorangos = morangos > 5 ? morangos * 2.2 : morangos * 2.5

  let totalMacas = macas > 5 ? macas * 1.5 : macas * 1.8

  compra = totalMacas + totalMorangos
  if (kgFinal > 8 || compra > 25) compra -= (compra * 0.10)

  alert(`Preço final: ${compra}`)
}

function exercicio37() {

  let login, senha, tentaLogin, tentaSenha;

  login = 1234;
  senha = 9999;

  tentaLogin = parseInt(prompt("Digite o Login: "));

  if (tentaLogin !== login) {
    alert("Login inválido!");
  } else {
    tentaSenha = parseInt(prompt("Digite a Senha: "));

    if (tentaSenha !== senha) alert("Senha inválida!");
    else alert("Acesso Permitido!");
  }
}

function exercicio38() {

  let senha = "A12345";

  let senhaDigitada = prompt("Digite sua senha: ");

  if (senhaDigitada === senha) alert("Acesso permitido!");
  else alert("Acesso negado!");
}

function exercicio39() {

  let numero = parseInt(prompt("Digite um número entre 1 e 12: "));

  switch (numero) {
    case 1:
      alert("Janeiro");
      break;
    case 2:
      alert("Fevereiro");
      break;
    case 3:
      alert("Março");
      break;
    case 4:
      alert("Abril");
      break;
    case 5:
      alert("Maio");
      break;
    case 6:
      alert("Junho");
      break;
    case 7:
      alert("Julho");
      break;
    case 8:
      alert("Agosto");
      break;
    case 9:
      alert("Setembro");
      break;
    case 10:
      alert("Outubro");
      break;
    case 11:
      alert("Novembro");
      break;
    case 12:
      alert("Dezembro");
      break;
    default:
      alert("Número inválido!");
  }
}

function exercicio40() {

  let numero = parseInt(prompt("Digite um número inteiro: "));

  if (numero % 2 === 0) alert("Número par!");
  else alert("Número ímpar!");
}

  function exercicio41() {
  
    let num1, num2;
  
    num1 = parseInt(prompt("Digite o Primeiro valor: "));
  
    do {
      alert("Aviso: o segundo valor não pode ser 0...");
      num2 = parseInt(prompt("Digite o Segundo valor: "));
    } while (num2 === 0);
  
    alert(`${num1} ${num2}`);
  }
  
  function exercicio42() {
  
    let num1, num2 = 0;
    num1 = parseInt(prompt("Digite o Primeiro valor: "));
  
    while (num2 === 0) {
      alert("Aviso: o segundo valor não pode ser 0...");
      num2 = parseInt(prompt("Digite o Segundo valor: "));
    }
  
    alert(`${num1} ${num2}`);
  }
  
  function exercicio43() {
  
    let num1, num2;
  
    num1 = parseInt(prompt("Digite o Primeiro valor: "));
  
    do {
      num2 = parseInt(prompt("Digite o Segundo valor: "));
      if (num2 === 0) alert("VALOR INVÁLIDO");
    } while (num2 === 0);
  
    alert(`${num1} ${num2}`);
  }
  
  function exercicio44() {
  
    let num1, num2 = 0;
  
    num1 = parseInt(prompt("Digite o Primeiro valor: "));
    while (num2 === 0) {
      num2 = parseInt(prompt("Digite o Segundo valor: "));
      if (num2 === 0) alert("VALOR INVÁLIDO");
    }
  
    alert(`${num1} ${num2}`);
  }
  
  function exercicio45() {
  
    let nota1, nota2, media;
    nota1 = -1;
  
    while (nota1 < 0 || nota1 > 10) {
      nota1 = parseInt(prompt("Digite a nota da Avaliação 1: "));
      if (nota1 === 0) alert("VALOR INVÁLIDO");
    }
  
    do {
      nota2 = parseInt(prompt("Digite a nota da Avaliação 2: "));
      if (nota2 === 0) alert("VALOR INVÁLIDO");
    } while (nota2 < 0 || nota2 > 10);
  
    media = (nota1 + nota2) / 2;
  
    alert(`Média do aluno: ${media}`);
  }
  
  function exercicio46() {
  
    let nota1, nota2, media, novoCalc;
  
    do {
      nota1 = -1;
  
      while (nota1 < 0 || nota1 > 10) {
        nota1 = parseInt(prompt("Digite a nota da Avaliação 1: "));
        if (nota1 === 0) alert("VALOR INVÁLIDO");
      }
  
      do {
        nota2 = parseInt(prompt("Digite a nota da Avaliação 2: "));
        if (nota2 === 0) alert("VALOR INVÁLIDO");
      } while (nota2 < 0 || nota2 > 10);
  
      media = (nota1 + nota2) / 2;
      alert(`Média do aluno: ${media}`);
      novoCalc = prompt("Novo Cálculo? (SIM/NÃO)").toUpperCase();
    } while (novoCalc === "SIM");
  }
