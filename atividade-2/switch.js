document
  .getElementById("formNotas")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);

    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    let mensagem = "";

    switch (true) {
      case media > 70:
        mensagem = `Aluno ${nome} está Aprovado com média ${media.toFixed(2)}`;
        break;
      case media >= 50:
        mensagem = `Aluno ${nome} está em Recuperação com média ${media.toFixed(2)}`;
        break;
      case media < 50:
        mensagem = `Aluno ${nome} está Reprovado com média ${media.toFixed(2)}`;
        break;
      default:
        mensagem = "Erro ao calcular a situação.";
    }

    document.getElementById("resultado").textContent = mensagem;
  });
