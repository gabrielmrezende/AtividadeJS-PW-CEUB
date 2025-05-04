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
      faixa = `Aluno ${nome} está Aprovado com média ${media.toFixed(2)}`;
    } else if (media >= 50) {
      faixa = `Aluno ${nome} está em Recuperação com média ${media.toFixed(2)}`;
    } else {
      faixa = `Aluno ${nome} está Reprovado com média ${media.toFixed(2)}`;
    }

    document.getElementById("resultado").textContent = faixa;
  });
