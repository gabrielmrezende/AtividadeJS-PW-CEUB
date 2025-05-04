const js_qht = ""; //Quantidade de horas trabalhadas no mês
const js_vht = ""; //Valor da hora trabalhada
const js_inss = ""; //Percentual de desconto do INSS

if (js_qht < 135 || js_qht > 180) {
  console.log("Quantidade de horas inválida (deve ser entre 135 e 180)");
} else if (js_vht < 25 || js_vht > 70) {
  console.log("Valor da hora inválido (deve ser entre 25 e 70)");
} else if (js_inss < 5 || js_inss > 15) {
  console.log("Percentual de INSS inválido (deve ser entre 5% e 15%)");
}
