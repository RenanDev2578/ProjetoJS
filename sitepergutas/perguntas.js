const perguntas = [
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "variable name = value;",
        "var name = value;",
        "name = value;"
      ],
      correta: 1 // A res+posta correta é a opção 2 (var name = value;)
    },
    {
      pergunta: "Qual dessas opções é usada para selecionar um elemento HTML pelo seu ID em JavaScript?",
      respostas: [
        "getElementById()",
        "selectById()",
        "queryId()"
      ],
      correta: 0 // A resposta correta é a opção 1 (getElementById())
    },
    {
      pergunta: "Qual dessas opções é usada para declarar uma função em JavaScript?",
      respostas: [
        "function: minhaFuncao() {}",
        "function minhaFuncao() {}",
        "declare minhaFuncao() {}"
      ],
      correta: 1 // A resposta correta é a opção 2 (function minhaFuncao() {})
    },
    {
      pergunta: "Qual é a maneira correta de escrever um comentário de linha única em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "/* Este é um comentário */"
      ],
      correta: 0 // A resposta correta é a opção 1 (// Este é um comentário)
    },
    {
      pergunta: "Qual operador é usado para concatenar strings em JavaScript?",
      respostas: [
        "+",
        "&",
        "*"
      ],
      correta: 0 // A resposta correta é a opção 1 (+)
    },
    {
      pergunta: "Qual dessas opções é usada para adicionar um evento a um elemento HTML em JavaScript?",
      respostas: [
        "addEvent()",
        "addEventListener()",
        "attachEvent()"
      ],
      correta: 1 // A resposta correta é a opção 2 (addEventListener())
    },
    {
      pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
      respostas: [
        "Seleciona vários elementos HTML",
        "Seleciona um elemento HTML pelo ID",
        "Seleciona um elemento HTML pelo seletor CSS"
      ],
      correta: 2 // A resposta correta é a opção 3 (Seleciona um elemento HTML pelo seletor CSS)
    },
    {
      pergunta: "Qual é a saída do seguinte código: console.log(typeof([]));",
      respostas: [
        "array",
        "object",
        "undefined"
      ],
      correta: 1 // A resposta correta é a opção 2 (object)
    },
    {
      pergunta: "Qual desses métodos é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "shift()",
        "remove()"
      ],
      correta: 0 // A resposta correta é a opção 1 (pop())
    },
    {
      pergunta: "Qual é a função do método 'parseInt()' em JavaScript?",
      respostas: [
        "Arredonda um número para o inteiro mais próximo",
        "Analisa uma string e retorna um número inteiro",
        "Retorna o valor inteiro de um número decimal"
      ],
      correta: 1 // A resposta correta é a opção 2 (Analisa uma string e retorna um número inteiro)
    }
  ];
  
  const quiz = document.querySelector('#quiz');
  const template = document.querySelector('template');
  
  const corretas = new Set();
  const totalDePerguntas = perguntas.length;
  const mostrarTotal = document.querySelector('#acertos span');
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
  
  // Loop de repetição 
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta;
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true);
      dt.querySelector('span').textContent = resposta;
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
      dt.querySelector('input').value = item.respostas.indexOf(resposta);
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta;
  
        corretas.delete(item);
        if (estaCorreta) {
          corretas.add(item);
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
      };
  
      quizItem.querySelector('dl').appendChild(dt);
    }
  
    quizItem.querySelector('dl dt').remove();
  
    // Coloca as perguntas na tela 
    quiz.appendChild(quizItem);
  }
  