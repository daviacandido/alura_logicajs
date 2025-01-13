let amigos = [];
let amigo = document.getElementById("nome-amigo");
let lista = document.getElementById("lista-amigos");

function adicionar() {
  amigos.push(amigo.value);

  if (lista.textContent == "") {
    lista.textContent = amigo.value;
  } else {
    lista.textContent = lista.textContent + ", " + amigo.value;
  }

  amigo.value = "";
}

function reiniciar() {
  lista.textContent = "";
  amigos = [];
}

function embaralha(lista) {
  for (let i = lista.length; i; i--) {
    const indiceAleatório = Math.floor(Math.random() * i);
    [lista[i - 1], lista[indiceAleatório]] = [
      lista[indiceAleatório],
      lista[i - 1],
    ];
  }
}

function sortear() {
  embaralha(amigos);
  let sorteio = document.getElementById("lista-sorteio");
  for (let i = 0; i < amigos.length - 1; i++) {
    if (i == amigos.length) {
      sorteio.innerHTML =
        sorteio.innerHTML + amigos[i] + " -->" + amigos[0] + "<br>";
    } else {
      sorteio.innerHTML =
        sorteio.innerHTML + amigos[i] + " -- >" + amigos[i + 1] + "<br>";
    }
  }
}
