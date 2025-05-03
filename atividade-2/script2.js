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

    let faixa = "";

    if (media > 70) {
      faixa = "aprovado";
    } else if (media >= 50) {
      faixa = "recuperacao";
    } else {
      faixa = "reprovado";
    }

    let mensagem = "";

    switch (faixa) {
      case "aprovado":
        mensagem = `Aluno ${nome} está Aprovado com média ${media.toFixed(2)}`;
        break;
      case "recuperacao":
        mensagem = `Aluno ${nome} está em Recuperação com média ${media.toFixed(
          2
        )}`;
        break;
      case "reprovado":
        mensagem = `Aluno ${nome} está Reprovado com média ${media.toFixed(
          2
        )}`;
        break;
      default:
        mensagem = "Erro ao calcular a situação.";
    }

    document.getElementById("resultado").textContent = mensagem;
  });
