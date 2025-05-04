let ultimoConteudo = ""; // Armazena o último documento gerado

function escreverDocumento() {
  const js_qht = solicitarDado("Quantidade de horas trabalhadas no mês (135 a 180):", 135, 180);
  if (js_qht == null) {return};

  const js_vht = solicitarDado("Valor da hora trabalhada (25 a 70):", 25, 70);
  if (js_vht == null) {return};

  const js_inss = solicitarDado("Percentual de desconto do INSS (5 a 15):", 5, 15);
  if (js_inss == null) {return};
  
  const classificacao = solicitarClassificacao();
  if (classificacao == null) {return};

  const salarioBruto = js_qht * js_vht;
  const descontoINSS = salarioBruto * (js_inss / 100);
  const salarioLiquido = salarioBruto - descontoINSS;

  const status = salarioLiquido > 6000 ? "Salário Satisfatório!" : "Salário Não Satisfatório";

  ultimoConteudo = `
DEMONSTRATIVO PARA CÁLCULO DO SALÁRIO LÍQUIDO

Quantidade de Horas Trabalhadas: ${js_qht}
Valor da Hora Trabalhada: ${js_vht}
Percentual de Desconto INSS: ${js_inss}

========================================================

Salário BRUTO = ${salarioBruto}
Total de Desconto INSS = ${descontoINSS}
Salário LÍQUIDO = ${salarioLiquido} ... (${status}, classificação: ${classificacao})
  `;

  document.getElementById("output").textContent = ultimoConteudo;
}

function solicitarDado(mensagem, min, max) {
  let valor;
  do {
    valor = prompt(mensagem);
    if (valor === null) {
      return null
    }
    if (isNaN(valor) || valor < min || valor > max) {
      alert(`Por favor, insira um número entre ${min} e ${max}.`);
    }
  } while (isNaN(valor) || valor < min || valor > max);
  return valor;
}

function solicitarClassificacao() {
  const opcoes = ["baixo", "medio alto", "insatisfatorio"];
  let classificacao;
  do {
    classificacao = prompt("Classificação salarial (baixo, medio alto, insatisfatorio):").toLowerCase();
    if (!opcoes.includes(classificacao)) {
      alert("Classificação inválida. Digite: baixo, medio alto ou insatisfatorio \n (Escreva sem acento).");
    }
  } while (!opcoes.includes(classificacao));
  return classificacao;
}

function salvarDocumento() {
  if (!ultimoConteudo) {
    alert("Nenhum documento criado ainda.");
    return;
  }

  const documento = new Blob([ultimoConteudo], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(documento);
  link.download = "salario_liquido.txt";
  link.click();
  URL.revokeObjectURL(link.href);
}
