let nome = "";
const restricaoNome = /^[A-Za-zÀ-ÿ\s]+$/;

while (true) {
    nome = prompt("Qual seu nome? ");

    if (!nome || nome.trim() === "") {
        alert("Erro: o nome não pode estar vazio.");
        continue;
    }

    if (!restricaoNome.test(nome.trim())) {
        alert("Erro: o nome deve conter apenas letras e espaços.");
        continue;
    }

    break;
}
document.getElementById("nome").textContent = nome;

function limparFormulario() {
  document.getElementById("nome-form").value = "";
  document.getElementById("email").value = "";
  // Sexo
  document
    .querySelectorAll('input[name="sexo"]')
    .forEach((el) => (el.checked = false));

  // Estado civil
  document
    .querySelectorAll('input[name="estado-civil"]')
    .forEach((el) => (el.checked = false));

  // Bens
  document
    .querySelectorAll('input[name="bens"]')
    .forEach((el) => (el.checked = false));

  document.getElementById("idade").selectedIndex = 0;
  document.getElementById("observacao").value = "";
}
