let nome = teste;
const restricaoNome = /^[A-Za-zÀ-ÿ0-9\s]+$/;

while (true) {
    nome = prompt("Digite seu nome:");

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

document.getElementById("nome").textContent = nome.trim();
