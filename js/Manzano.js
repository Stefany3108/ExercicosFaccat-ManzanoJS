function exercicio01() {

    let grausC = parseFloat(prompt('Digite a temperatura em Celsius: '));
    let conversao = (9 * grausC + 160) / 5;
  
    alert("Em Fahrenheit fica: " + conversao);
  }
  
  function exercicio02() {
  
    let grausF = parseFloat(prompt('Digite a temperatura em Fahrenheit: '));
    let conversao = (grausF - 32) / 1.8;
  
    alert("Em Celsius fica: " + conversao);
  }
  
  function exercicio03() {
   
  
    let altura = parseFloat(prompt("Digite a altura da Lata de óleo (em cm): "));
    let raio = parseFloat(prompt("Digite o raio da Lata de óleo: "));
  
    let pii = 3.14;
    let vol = pii * (raio ** 2) * altura;
    alert(`O Volume é: ${vol}`);
  }
  
  function exercicio04() {
    
  
    let temp = parseFloat(prompt("Digite quanto tempo levou a viagem (em horas): "));
    let velocidade = parseFloat(prompt("Digite qual era a velocidade média no veículo (em KM): "));
  
    let distancia = temp * velocidade;
    let litrosUsados = distancia / 12;
  
    alert(`Tempo da viagem: ${temp} horas\nVelocidade média: ${velocidade} KM/h\nDistância percorrida: ${distancia} KM\nLitros usados: ${litrosUsados}`);
  }
  
  function exercicio05() {
  
    let valor = parseFloat(prompt("Qual é o valor da prestação atrasada: "));
    let taxa = parseFloat(prompt("Qual é a taxa aplicada na prestação atrasada: "));
    let temp = parseFloat(prompt("Digite a quantos dias ela está em atraso: "));
  
    let prestacao = valor + (valor * taxa / 100) * temp;
    alert(`O valor da prestação será: ${prestacao}`);
  
  }
  
  function exercicio06() {
  
    let a = parseFloat(prompt("Digite o primeiro valor: "));
    let b = parseFloat(prompt("Digite o segundo valor: "));
    [b, a] = [a, b];
  
    alert(`Os valores trocados, são respectivamente: ${a}, ${b}`);
  }
  
  function exercicio07() {
  
    let a = parseInt(prompt("Digite o valor de A: "));
    let b = parseInt(prompt("Digite o valor de B: "));
    let c = parseInt(prompt("Digite o valor de C: "));
    let d = parseInt(prompt("Digite o valor de D: "));
  
    let plusResults = `
  Resultados Das Somas:
  A soma de A com B é: ${a + b}
  A soma de A com C é: ${a + c}
  A soma de A com D é: ${a + d}
  A soma de B com C é: ${b + c}
  A soma de B com D é: ${b + d}
  A soma de C com D é: ${c + d}
  `;
  
    let multResults = `
  Resultados Das Multiplicações:
  A multiplicação de A com B é: ${a * b}
  A multiplicação de A com C é: ${a * c}
  A multiplicação de A com D é: ${a * d}
  A multiplicação de B com C é: ${b * c}
  A multiplicação de B com D é: ${b * d}
  A multiplicação de C com D é: ${c * d}
  `;
  
    alert(plusResults + '\n' + multResults);
  
  }
  
  function exercicio08() {
  
    let comprimento = parseFloat(prompt("Digite o valor do comprimento da caixa: "));
    let altura = parseFloat(prompt("Digite o valor da altura da caixa: "));
    let largura = parseFloat(prompt("Digite o valor da largura da caixa: "));
    let vol = comprimento * altura * largura;
  
    alert(`O Volume da caixa é: ${vol}`);
  
  }
  
  function exercicio09() {
  
    let num1 = parseInt(prompt("Digite o primeiro valor: "));
    let num2 = parseInt(prompt("Digite o segundo valor: "));
    let calc = (num1 - num2) ** 2
  
    alert(`A diferença do primeiro pelo segundo é: ${num1 - num2}`);
    alert(`O quadrado da diferença é: ${calc}`);
  }
  
  function exercicio10() {
  
    let cotacao = parseFloat(prompt("Digite a cotação atual do Dólar (em R$): "));
    let quantidade = parseFloat(prompt("Digite a quantidade de dólares para conversão em reais: "));
  
    alert(`O valor convertido em R$: ${cotacao * quantidade}`);
  }
  
  function exercicio11() {
  
    let cotacao = parseFloat(prompt("Digite a cotação atual do Dólar (em R$): "));
    let quantidade = parseFloat(prompt("Digite a quantidade de reais para conversão em dólares: "));
  
    alert(`O valor convertido em US$: ${quantidade / cotacao}`);
  }
  
  function exercicio12() {
  
    let num1 = parseFloat(prompt("Digite o primeiro número: "));
    let num2 = parseFloat(prompt("Digite o segundo número: "));
    let num3 = parseFloat(prompt("Digite o terceiro número: "));
    let calc = (num1 ** 2) + (num2 ** 2) + (num3 ** 2);
  
    alert(`
  O Quadrado do primeiro: ${num1 ** 2}
  O Quadrado do segundo: ${(num2 ** 2)}
  O Quadrado do terceiro: ${(num3 ** 2)}
  A Soma dos Quadrados: ${calc}
  `);
  
  }
  
  function exercicio13() {
  
    let num1 = parseFloat(prompt("Digite o primeiro número: "));
    let num2 = parseFloat(prompt("Digite o segundo número: "));
    let num3 = parseFloat(prompt("Digite o terceiro número: "));
  
    let calc = num1 + num2 + num3;
    let square = calc ** 2;
  
    console.log(calc, square);
  
    alert(`A Soma dos 3 termos: ${calc}
  O Quadrado da Soma: ${square}`);
  
  }
  function exercicio14() {
  
    const num1 = parseInt(prompt("Digite o primeiro valor: "));
    const num2 = parseInt(prompt("Digite o segundo valor: "));
  
    if (num1 > num2) alert(`O produto do maior pelo menor é: ${num1 - num2}`);
    else alert(`O produto do maior pelo menor é: ${num2 - num1}`);
  }
  
  function exercicio15() {
  
    const num = parseInt(prompt("Digite um valor: "));
  
    if (num < 0) alert(`O módulo de ${num} é: ${-num}`);
    else alert(`O módulo de ${num} é: ${num}`);
  }
  
  function exercicio16() {
  
    const nota1 = parseFloat(prompt("Digite a primeira nota: "));
    const nota2 = parseFloat(prompt("Digite a segunda nota: "));
    const nota3 = parseFloat(prompt("Digite a terceira nota: "));
    const nota4 = parseFloat(prompt("Digite a quarta nota: "));
  
    const media = (nota1 + nota2 + nota3 + nota4) / 4;
  
    alert(`Média: ${media}`);
    if (media >= 5) alert("Aluno aprovado!");
    else alert("Aluno não foi aprovado");
  }
  
  function exercicio17() {
  
    const nota1 = parseFloat(prompt("Digite a primeira nota: "));
    const nota2 = parseFloat(prompt("Digite a segunda nota: "));
    const nota3 = parseFloat(prompt("Digite a terceira nota: "));
    const nota4 = parseFloat(prompt("Digite a quarta nota: "));
  
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
  
    if (media >= 7) alert("Aluno aprovado!");
    else {
      const exam = parseFloat(prompt("Digite a nota de Exame: "));
  
      media = (media + exam) / 2;
      if (media >= 5) alert("Aluno em Exame!");
      else alert("Aluno não foi Aprovado");
    }
  
    alert(`Média: ${media}`);
  }
  
  function exercicio18() {
  
    const a = parseFloat(prompt("Digite o valor de A: "));
    const b = parseFloat(prompt("Digite o valor de B: "));
    const c = parseFloat(prompt("Digite o valor de C: "));
  
    const delta = (b ** 2) - 4 * a * c;
  
    if (a !== 0) {
      if (delta !== 0) {
        if (delta > 0) {
          const x1 = (-b + Math.sqrt(delta)) / (2 * a);
          const x2 = (-b - Math.sqrt(delta)) / (2 * a);
          alert("Raiz 1: " + x1);
          alert("Raiz 2: " + x2);
        } else alert("A Equação não possui raízes reais");
      } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        alert("Ambas as raízes são: " + x1);
      }
    } else alert("A = 0, cálculo não possível");
  }
  
  function exercicio19() {
  
    const a = parseFloat(prompt("Digite o valor de A: "));
    const b = parseFloat(prompt("Digite o valor de B: "));
    const c = parseFloat(prompt("Digite o valor de C: "));
  
    let order;
  
    if (a > b && a > c) {
      order = (b > c) ? `${c}, ${b}, ${a}` : `${b}, ${c}, ${a}`;
    } else if (b > a && b > c) {
      order = (a > c) ? `${c}, ${a}, ${b}` : `${a}, ${c}, ${b}`;
    } else if (c > a && c > b) {
      order = (b > a) ? `${a}, ${b}, ${c}` : `${b}, ${a}, ${c}`;
    }
  
    alert(`Em ordem: ${order}`);
  }
  
  function exercise20() {
  
    const num1 = parseFloat(prompt("Digite o valor 1: "));
    const num2 = parseFloat(prompt("Digite o valor 2: "));
    const num3 = parseFloat(prompt("Digite o valor 3: "));
    const num4 = parseFloat(prompt("Digite o valor 4: "));
  
    let divisibles = "Os números divisíveis por 2 e 3 são:\n";
  
    if (num1 % 2 === 0 && num1 % 3 === 0) divisibles += num1 + "\n";
    if (num2 % 2 === 0 && num2 % 3 === 0) divisibles += num2 + "\n";
    if (num3 % 2 === 0 && num3 % 3 === 0) divisibles += num3 + "\n";
    if (num4 % 2 === 0 && num4 % 3 === 0) divisibles += num4 + "\n";
  
    alert(divisibles);
  }
  
  function exercicio21() {
  
    const num1 = parseInt(prompt("Digite o valor 1: "));
    const num2 = parseInt(prompt("Digite o valor 2: "));
    const num3 = parseInt(prompt("Digite o valor 3: "));
    const num4 = parseInt(prompt("Digite o valor 4: "));
    const num5 = parseInt(prompt("Digite o valor 5: "));
  
    let maior, menor;
  
  
    if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) maior = num1;
    else if (num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5) menor = num1;
  
   
    if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) maior = num2;
    else if (num2 < num1 && num2 < num3 && num2 < num4 && num2 < num5) menor = num2;
  
  
    if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) maior = num3;
    else if (num3 < num1 && num3 < num2 && num3 < num4 && num3 < num5) menor = num3;
  
    
    if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) maior = num4;
    else if (num4 < num1 && num4 < num2 && num4 < num3 && num4 < num5) menor = num4;
  
    
    if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4) maior = num5;
    else if (num5 < num1 && num5 < num2 && num5 < num3 && num5 < num4) menor = num5;
  
    alert(`O menor é: ${menor}\nO maior é: ${maior}`);
  
  }
  
  function exercicio22() {
  
    const num = parseInt(prompt("Digite um valor: "));
  
    if (num % 2 === 0) alert("O valor é par");
    else alert("O valor é ímpar");
  }
  
  function exercicio23() {
  
    const num = parseInt(prompt("Digite um valor (de 1 a 9): "));
  
    if (num < 1 || num > 9) alert("Número fora do intervalo permitido");
    else alert("Número dentro do intervalo permitido");
  }
  
  function exercicio24() {
  
    const num = parseInt(prompt("Digite um valor (menor que 3): "));
  
    if (num > 3) alert("Número maior que 3!");
    else alert("Número é: " + num);
  }
  
  function exercicio25() {
  
    const nome = prompt("Digite seu nome: ");
    const sexo = prompt("Digite seu sexo (M/F): ");
  
    if (sexo.toUpperCase() === "M") alert("Ilmo Sr. " + nome);
    else if (sexo.toUpperCase() === 'F') alert("Ilma Sra.: " + nome);
    else alert("Opção inválida");
  }
  
  function exercicio26() {
  
    let mult = 1;
    let num = parseInt(prompt("Digite um número:"));
  
    console.clear()
    console.log("Exercício 26: Tabuada de um número");
  
    while (mult <= 10) {
      console.log(`${num} x ${mult} = ${num * mult}`);
      mult++;
    }
  
    alert('Entre nas ferramentas de desenvolvedor para ver a tabuada');
  }
  
  function exercicio27() {
  
    let count = 1;
    let soma = 0;
  
    console.clear()
    while (count <= 100) {
      console.log(`${soma} + ${count} = ${soma + count}`);
      soma += count;
      count++;
    }
  
    alert("A soma de todos os cem primeiros números é: " + soma);
  }
  
  function exercicio28() {
  
    let count = 1;
    let soma = 0;
  
    console.clear()
    while (count <= 500) {
      if (count % 2 === 0) {
        console.log(`${soma} + ${count} = ${soma + count}`);
        soma += count;
      }
      count++;
    }
  
    alert("A soma dos pares de 1 a 500: ", soma);
  }
  
  function exercicio29() {
  
    let count = 1;
  
    console.clear()
    while (count <= 20) {
      if (count % 2 === 1) {
        console.log(count + " é ímpar");
      }
      count++;
    }
  
    alert("Entre nas ferramentas de desenvolvedor para ver os ímpares");
  }
  
  function exercicio30() {
  
    let calc = 0;
    let count = 0;
    const base = 3;
  
    console.clear()
    while (count <= 15) {
      if (count === 0) {
        calc = 1;
      } else {
        calc *= base;
        console.log(`${base}^${count} = ${calc}`);
      }
      count++;
    }
    alert("Entre nas ferramentas de desenvolvedor para ver base 3 elevada até 15");
  }
  
  function exercicio31() {
  
    let valor = parseInt(prompt("Digite a Base: "));
    let expoente = parseInt(prompt("Digite o Expoente: "));
  
    let count = 0;
    let elevado = 1;
  
    console.clear()
    while (count <= expoente) {
      if (count === 0) {
        elevado = 1;
      } else {
        elevado *= valor;
      }
      console.log(`${valor} elevado a ${count}: ${elevado}`);
      count++;
    }
  
    alert("Entre nas ferramentas de desenvolvedor para ver o resultado");
  
  }
  
  function exercicio32() {
  
    let n1 = 0, n2 = 1, count = 0, nth;
  
    console.clear()
    while (count < 15) {
      if (count === 0) {
        nth = 0;
      } else if (count === 1) {
        nth = 1;
      } else {
        nth = n1 + n2;
        n1 = n2;
        n2 = nth;
      }
      console.log(`Passo ${count + 1}º: ${nth}`);
      count++;
    }
  
    alert("Entre nas ferramentas de desenvolvedor para ver o resultado");
  }
  
  function exercicio33() {
  
    let gCelsius = 10;
    let count = 0;
  
    console.clear()
    while (count < 10) {
      let gFahren = (9 * gCelsius + 160) / 5;
      console.log(`${gCelsius}º em Fahrenheit: ${gFahren}`);
  
      gCelsius += 10;
      count++;
    }
    alert("Entre nas ferramentas de desenvolvedor para ver o resultado");
  }
  
  function exercicio34() {
  
    let valor, somatoria = 0, count = 1;
  
    while (count <= 10) {
      valor = parseFloat(prompt(`Digite o ${count}º valor:`));
      somatoria += valor;
      count++;
    }
  
    alert(`A média da soma de todos os valores passados: ${somatoria / 10}`);
  }
  
  function exercicio35() {
  
    let ehPar = 0;
    let auxiliar = 0;
    let media;
    let count = 50;
  
    console.clear()
    while (count <= 70) {
      if (count % 2 === 0) {
        ehPar += count;
        console.log(`${ehPar} + ${count} = ${ehPar + count}`);
        auxiliar++;
      }
      count++;
    }
  
    media = ehPar / auxiliar;
    alert(`A média da soma dos números pares (entre 50 e 70) é: ${media}`);
  
  }
  
  function exercicio36() {
  
    let count = 0;
    let area, largura, comprimento, totalArea = 0;
    let vaiContinuar = 's';
  
    const comodos = [];
    const areas = [];
  
    alert("Bem-vindo à sua calculadora de cômodos!");
  
    console.clear()
    while (vaiContinuar.toLowerCase() === 's') {
      comodos[count] = prompt("Qual o nome do Cômodo:");
  
      comprimento = parseFloat(prompt(`Qual o comprimento do(a) ${comodos[count]}:`));
      largura = parseFloat(prompt(`Qual a largura do(a) ${comodos[count]}:`));
  
      area = largura * comprimento;
      areas[count] = area;
      totalArea += area;
  
      alert(`Área do cômodo ${comodos[count]}: ${areas[count]}`);
  
      count++;
  
      vaiContinuar = prompt("Deseja adicionar outro cômodo? (s/n): ");
  
      if (vaiContinuar.toLowerCase() === 'n') {
        break
      }
    }
  
    count = 0;
    while (count < 10) {
      if (comodos[count] && areas[count] > 0) {
        console.log(`O cômodo ${comodos[count]} tem ${areas[count]} de área.`);
      }
      count++;
    }
  
    alert(`Área total da casa: ${totalArea}\nPara ver todos os comodos, acesse a ferramenta de desenvolvedor.`);
  
  }
  
  function exercicio37() {
  
    let menor, maior, valor, count = 0;
    let continuar = 's';
  
    alert("Você pode digitar quantos valores quiser.\nMas valores negativos encerram!");
  
    while (continuar.toLowerCase() === 's') {
      valor = parseInt(prompt("Digite o valor: "));
  
      if (count === 0) {
        maior = valor;
        menor = valor;
      } else {
        if (valor < 0) {
          alert("Valor negativo! O programa irá encerrar");
          continuar = 'n';
        } else {
          if (valor > maior) maior = valor;
          if (valor < menor) menor = valor;
        }
      }
      count++;
    }
  
    alert(`O menor valor foi: ${menor}\nO maior valor foi: ${maior}\nÚltimo valor digitado: ${valor}`);
  }
  
  function exercicio38() {
  
    let contadora;
    contadora = 15;
  
    console.clear()
    do {
      console.log(`O número ${contadora} ao quadrado é: ${contadora ** 2}`);
      contadora++;
    } while (contadora <= 200);
  
    alert('Confira os resultados na ferramenta de desenvolvedor.');
  }
  
  function exercicio39() {
  
    let contadora = 1;
    let somados = 0;
  
    do {
      if (contadora % 2 === 0) somados += contadora;
      contadora++;
    } while (contadora <= 500);
  
    alert(`O valor da soma dos pares de 1 a 500 é: ${somados}`);
  
  }
  
  function exercicio40() {
  
    let count = 0;
  
    console.clear()
    do {
      count++;
      if (count % 4 === 0) console.log(`O número ${count} é divisível por 4`);
    } while (count <= 200);
  
    alert('Confira os resultados na ferramenta de desenvolvedor.');
  }
  
  function exercicio41() {
  
    let count = 0;
    let atual = 0;
  
    do {
      atual += 2 ** count;
      count++;
    } while (count <= 64);
  
    alert("(Considere o enunciado da questão...)");
    alert(`A soma dos números de grãos em um tabuleiro de xadrez é: ${atual}`);
  
  }
  
  function exercicio42() {
  
    let count = 0;
    let valor, somatorio = 0, fatorial;
  
    do {
      count++;
      valor = parseInt(prompt(`Digite o ${count} valor:`));
  
      fatorial = valor;
      do {
        valor--;
        fatorial *= valor;
      } while (valor > 1);
  
      somatorio += fatorial;
    } while (count < 15);
  
    alert(`O somatório de todos os fatoriais dos números solicitados é: ${somatorio}`);
  
  }
  
  function exercicio43() {
  
    let count = 1;
    let valor, somatorio = 0, media;
  
    alert("Você poderá digitar quantos valores quiser, mas se for negativo, o programa encerra.");
  
    do {
      valor = parseFloat(prompt(`Digite o ${count}º valor:`));
  
      somatorio += valor;
  
      if (valor < 0) alert("Valor digitado é negativo. Encerrando o programa.");
      else count++;
  
    } while (valor >= 0);
  
    if (valor < 0) media = somatorio / (count - 1);
  
    alert(`Soma de todos os valores: ${somatorio}\nMédia da soma: ${media}\nQuantidade de elementos: ${count - 1}`);
  
  }
  
  function exercicio44() {
  
    let count = 1;
    let fatorial = 1;
  
    do {
      if (count % 2 === 1) fatorial *= count;
      count++;
    } while (count <= 10);
  
    alert(`Fatorial dos números ímpares entre 1 e 10: ${fatorial}`);
  
  }
  
  function exercicio45() {
  
    let count = 1;
    let area = 0, largura = 0, comprimento = 0, totalArea = 0;
    let vaiContinuar = '';
    let comodos = [];
    let areas = [];
  
    alert("calculadora de cômodos!");
  
    console.clear()
    do {
      comodos[count] = prompt(`Qual o nome do Cômodo:`);
  
      comprimento = parseFloat(prompt(`Qual o comprimento do(a) ${comodos[count]}:`));
      largura = parseFloat(prompt(`Qual a largura do(a) ${comodos[count]}:`));
  
      area = largura * comprimento;
      areas[count] = area;
      totalArea += area;
  
      alert(`Área do cômodo ${comodos[count]}: ${areas[count]}`);
  
      count++;
  
  
      vaiContinuar = prompt("Deseja adicionar outro cômodo? (s/n):");
      if (vaiContinuar.toLowerCase() === "n") {
        break
      }
  
    } while (vaiContinuar === "s");
  
    count = 1;
    do {
      if (comodos[count] !== "" && areas[count] > 0) {
        console.log(`Cômodo ${comodos[count]} tem ${areas[count]} de área`);
      }
      count++;
    } while (count <= 10);
  
    alert(`Área total da Casa: ${totalArea}`);
    alert("Confira os comodos na ferramenta de desenvolvedor.");
  }
  
  function exercicio46() {
  
    let divisor = 0, dividendo = 0, count = 0;
    let continuar = '';
  
    dividendo = parseInt(prompt("Digite o dividendo:"));
    divisor = parseInt(prompt("Digite o divisor:"));
  
    do {
      if (dividendo >= divisor) {
        dividendo -= divisor;
        count++;
      } else continuar = "n";
  
    } while (continuar !== "n");
  
    alert(`A parte inteira da divisão é: ${count}`);
  
  }
  
  function exercicio47() {
  
    console.clear()
    for (let contadora = 15; contadora <= 200; contadora++) {
      console.log(`O número ${contadora} ao quadrado é: ${contadora ** 2}`);
    }
  
    alert("Confira os resultados na ferramenta de desenvolvedor.");
  }
  
  function exercicio48() {
  
    let num = parseInt(prompt("Digite um número:"));
  
    console.clear()
    for (let count = 1; count <= 10; count++) {
      console.log(`${num} x ${count} = ${num * count}`);
    }
  
    alert("Confira os resultados na ferramenta de desenvolvedor.");
  
  }
  
  function exercicio49() {
  
    let somados = 0;
  
    for (let count = 1; count <= 100; count++) somados += count;
  
    alert(`O Somatório dos números de 1 a 100: ${somados}`);
  }
  
  function exercicio50() {
  
    let somados = 0;
  
    for (let count = 1; count <= 500; count++) {
      if (count % 2 === 0) somados += count;
    }
  
    alert(`O Somatório dos pares de 1 a 500: ${somados}`);
  }
  
  function exercicio51() {
  
    console.clear()
    for (let count = 0; count <= 20; count++) {
      if (count % 2 === 1) console.log(`O número ${count} é ímpar.`);
    }
  
    alert("Confira os resultados na ferramenta de desenvolvedor.");
  }
  
  function exercicio52() {
  
    console.clear()
    for (let count = 1; count <= 200; count++) {
      if (count % 4 === 0) console.log(`O número ${count} é divisível por 4.`);
    }
  
    alert("Confira os resultados na ferramenta de desenvolvedor.");
  
  }
  
  function exercicio53() {
  
    let base = 3;
    let calc;
  
    console.clear()
    for (let count = 0; count <= 15; count++) {
      if (count === 0) calc = 1;
      else {
        calc *= base;
        console.log(`${base} ^ ${count} = ${calc}`);
      }
    }
  
    alert("Confira os resultados na ferramenta de desenvolvedor.");
  }
  
  function exercicio54() {
  
    let calc;
    let base = parseInt(prompt("Digite a base:"));
    let expoente = parseInt(prompt("Digite o expoente:"));
  
    console.clear()
    for (let count = 0; count <= expoente; count++) {
      if (count === 0) calc = 1;
      else calc *= base;
      console.log(`${base} ^ ${count} = ${calc}`);
    }
  
    alert("Confira os resultados na ferramenta de desenvolvedor.");
  }
  
  function exercicio55() {
    let n1 = 1;
    let n2 = 1;
    let nth;
  
    console.clear()
    for (let count = 0; count <= 15; count++) {
      if (count === 0 || count === 1) nth = 1;
      else {
        nth = n1 + n2;
        n1 = n2;
        n2 = nth;
      }
      console.log(`${count}º termo de Fibonacci: ${nth}`);
    }
  
    alert("Confira os resultados na ferramenta de desenvolvedor.");
  }
  
  function exercicio56() {
  
    let gFahren;
  
    console.clear()
    for (let gCelsius = 0; gCelsius <= 100; gCelsius += 10) {
      gFahren = (9 * gCelsius + 160) / 5;
      console.log(`${gCelsius}°C em Graus Fahrenheit: ${gFahren}`);
    }
  
    alert("Confira os resultados na ferramenta de desenvolvedor.");
  }
  
  function exercicio57() {
  
    let fatorial = 1;
    let fatorial1;
  
    console.clear()
    for (let count = 0; count <= 10; count++) {
      if (count % 2 === 1) {
        fatorial1 = fatorial;
        fatorial *= count;
        console.log(`${count} x ${fatorial1} = ${fatorial}`);
      }
    }
  
    alert("Confira os resultados na ferramenta de desenvolvedor.");
  }