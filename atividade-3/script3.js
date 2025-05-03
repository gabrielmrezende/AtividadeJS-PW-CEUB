let nome = "";
const restricaoNome = /^[A-Za-zÀ-ÿ0-9\s]+$/;

while (true) {
    nome = prompt("Digite seu nome:");

    if (!nome || nome.trim() === "") {
        alert("Erro: O nome não pode estar vazio.");
        continue;
    }

    if (!restricaoNome.test(nome.trim())) {
        alert("Erro: O nome deve conter apenas letras e espaços.");
        continue;
    }

    break;
}

document.getElementById("nome").textContent = nome.trim();

function salvar() {
    let nomeCompleto = [description = "Nome Completo", value = document.getElementById("nomeCompleto").value]
    let email = [description = "Email", value = document.getElementById("email").value]
    let sexo = [description = "Sexo", value = document.querySelector('input[name="sexo"]:checked')?.value]
    let estadoCivil = [description = "Estado Civil", value = document.querySelector('input[name="estadoCivil"]:checked')?.value]
    let bens = [description = "Bens", value = document.querySelector('input[name="bens"]:checked')?.value]
    let idade = [description = "Idade", value = document.getElementById("faixaIdade").value]
    let hobby = [description = "Hobby", value = document.getElementById("hobby").value]
    let observacoes = [description = "Observacoes", value = document.getElementById("observacoes").value]

    let perfil = [nomeCompleto, email, sexo, estadoCivil, bens, idade, hobby, observacoes]
    let camposObrigatorios = [nomeCompleto, email, sexo, estadoCivil, bens]
    
    if (verificarCampos(camposObrigatorios)) {
        alert("Registro concluido!")
    }
}

function verificarCampos(campos) {
    for (let i = 0; i < campos.length; i++) {
        if (campos[i][1] == '' || campos[i][1] == undefined) {
            alert("Preencha o campo " + campos[i][0])
            return false
        }
    }
    return true
}