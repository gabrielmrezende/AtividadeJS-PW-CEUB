// Adiciona um ouvinte ao formulário com id "formNotas" para processar os dados ao enviar
document
  .getElementById("formNotas")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede que a página recarregue ao enviar o formulário

    // Captura os valores digitados nos campos do formulário
    const nome = document.getElementById("nome").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);

    // Calcula a média das quatro notas
    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    let mensagem = "";

    // Utiliza switch com 'true' para avaliar faixas de média e definir a situação do aluno
    switch (true) {
      case media > 70:
        mensagem = `Aluno ${nome} está Aprovado com média ${media.toFixed(2)}`;
        break;
      case media >= 50:
        mensagem = `Aluno ${nome} está em Recuperação com média ${media.toFixed(
          2
        )}`;
        break;
      case media < 50:
        mensagem = `Aluno ${nome} está Reprovado com média ${media.toFixed(2)}`;
        break;
      default:
        mensagem = "Erro ao calcular a situação."; // Tratamento padrão (não deve ocorrer)
    }

    // Exibe a mensagem no elemento com id "resultado"
    document.getElementById("resultado").textContent = mensagem;
  });
