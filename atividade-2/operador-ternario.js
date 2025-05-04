// Adiciona um ouvinte ao formulário com id "formNotas" que será acionado ao enviar os dados
document
  .getElementById("formNotas")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede que o formulário recarregue a página ao ser enviado

    // Captura os valores inseridos nos campos do formulário
    const nome = document.getElementById("nome").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);

    // Calcula a média das quatro notas
    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    // Define a mensagem com base na média usando operador ternário (forma compacta de if/else)
    const mensagem =
      media > 70
        ? `Aluno ${nome} está Aprovado com média ${media.toFixed(2)}`
        : media >= 50
        ? `Aluno ${nome} está em Recuperação com média ${media.toFixed(2)}`
        : `Aluno ${nome} está Reprovado com média ${media.toFixed(2)}`;

    // Exibe a mensagem no elemento com id "resultado"
    document.getElementById("resultado").textContent = mensagem;
  });
