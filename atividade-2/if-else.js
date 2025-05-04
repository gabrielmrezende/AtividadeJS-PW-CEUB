// Adiciona um ouvinte de evento ao formulário com id "formNotas"
document
  .getElementById("formNotas")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário (recarregar a página)

    // Captura os valores do nome e das quatro notas
    const nome = document.getElementById("nome").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);

    // Calcula a média das quatro notas
    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    let faixa = "";

    // Define a situação do aluno com base na média
    if (media > 70) {
      faixa = `Aluno ${nome} está Aprovado com média ${media.toFixed(2)}`;
    } else if (media >= 50) {
      faixa = `Aluno ${nome} está em Recuperação com média ${media.toFixed(2)}`;
    } else {
      faixa = `Aluno ${nome} está Reprovado com média ${media.toFixed(2)}`;
    }

    // Exibe o resultado no elemento com id "resultado"
    document.getElementById("resultado").textContent = faixa;
  });
