function comprar() {
  let tipo = document.getElementById("tipo-ingresso").value;
  let qtd = document.getElementById("qtd").value;

  if (qtd <= 0 || isNaN(qtd)) {
    alert("Quantidade não é valida.");
    return;
  }

  if (tipo == "pista") {
    comprarPista(qtd);
  } else if (tipo == "superior") {
    comprarSuperior(qtd);
  } else {
    compraInferior(qtd);
  }
}

function comprarPista(qtd) {
  qtdPista = document.getElementById("qtd-pista").textContent;

  if (qtd > qtdPista) {
    alert("Quantidade indisponível para o tipo 'Pista'.");
  } else {
    qtdPista = qtdPista - qtd;
    document.getElementById("qtd-pista").textContent = qtdPista;
    alert("Compra realizada com sucesso.");
  }
}

function comprarSuperior(qtd) {
  qtdSuperior = document.getElementById("qtd-superior").textContent;

  if (qtd > qtdSuperior) {
    alert("Quantidade indisponível para o tipo 'Superior.'");
  } else {
    qtdSuperior = qtdSuperior - qtd;
    document.getElementById("qtd-superior").textContent = qtdSuperior;
    alert("Compra realizada com sucesso.");
  }
}

function compraInferior(qtd) {
  qtdInferior = document.getElementById("qtd-inferior").textContent;

  if (qtd > qtdInferior) {
    alert("Quantidade indisponível para o tipo 'Inferior.'");
  } else {
    qtdInferior = qtdInferior - qtd;
    document.getElementById("qtd-inferior").textContent = qtdInferior;
    alert("Compra realizada com sucesso.");
  }
}
