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

    const mensagem =
      media > 70
        ? `Aluno ${nome} está Aprovado com média ${media.toFixed(2)}`
        : media >= 50
        ? `Aluno ${nome} está em Recuperação com média ${media.toFixed(2)}`
        : `Aluno ${nome} está Reprovado com média ${media.toFixed(2)}`;

    document.getElementById("resultado").textContent = mensagem;
  });
