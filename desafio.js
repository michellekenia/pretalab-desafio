const medalhas = {};

while (true) {
  const pais = prompt("Digite o nome do país (ou 'sair' para encerrar):");
  if (!pais || pais.toLowerCase() === "sair") break;

  const ouro = parseInt(prompt("Medalhas de OURO:")) || 0;
  const prata = parseInt(prompt("Medalhas de PRATA:")) || 0;
  const bronze = parseInt(prompt("Medalhas de BRONZE:")) || 0;

  const total = ouro + prata + bronze;
  medalhas[pais] = total;
}

let ranking = "#Ranking de medalhas:\n";
const ordenado = Object.entries(medalhas).sort((a, b) => b[1] - a[1]);

ordenado.forEach(([pais, total]) => {
  ranking += `#${pais}: ${total} medalhas\n`;
});

alert(ranking);
