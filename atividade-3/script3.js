let nome = "";
const restricaoNome = /^[A-Za-zÀ-ÿ0-9\s]+$/;

// Solicita repetidamente o nome do usuário até que ele seja válido
while (true) {
  nome = prompt("Qual seu nome? ");

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

// Exibe o nome informado no elemento com id "nome"
document.getElementById("nome").textContent = nome;

// Coleta os dados do formulário, valida os obrigatórios e confirma o registro
function salvar() {
  let nomeCompleto = [
    (description = "Nome Completo"),
    (value = document.getElementById("nomeCompleto").value),
  ];
  let email = [
    (description = "Email"),
    (value = document.getElementById("email").value),
  ];
  let sexo = [
    (description = "Sexo"),
    (value = document.querySelector('input[name="sexo"]:checked')?.value),
  ];
  let estadoCivil = [
    (description = "Estado Civil"),
    (value = document.querySelector(
      'input[name="estadoCivil"]:checked'
    )?.value),
  ];
  let bens = [
    (description = "Bens"),
    (value = document.querySelector('input[name="bens"]:checked')?.value),
  ];
  let idade = [
    (description = "Idade"),
    (value = document.getElementById("faixaIdade").value),
  ];
  let hobby = [
    (description = "Hobby"),
    (value = document.getElementById("hobby").value),
  ];
  let observacoes = [
    (description = "Observacoes"),
    (value = document.getElementById("observacoes").value),
  ];

  let perfil = [
    nomeCompleto,
    email,
    sexo,
    estadoCivil,
    bens,
    idade,
    hobby,
    observacoes,
  ];
  let camposObrigatorios = [nomeCompleto, email, sexo, estadoCivil, bens];

  // Se todos os campos obrigatórios estiverem preenchidos, exibe mensagem de sucesso
  if (verificarCampos(camposObrigatorios)) {
    alert("Registro concluido!");
  }
}

// Verifica se os campos obrigatórios estão preenchidos corretamente
function verificarCampos(campos) {
  for (let i = 0; i < campos.length; i++) {
    if (campos[i][1] == "" || campos[i][1] == undefined) {
      alert("Preencha o campo " + campos[i][0]);
      return false;
    }
  }
  return true;
}
