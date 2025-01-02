let jogosAlugados = 0;

function contarJogosAlugdos() {
  console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
  let gameClicado = document.getElementById(`game-${id}`);
  let imagem = gameClicado.querySelector(".dashboard__item__img");
  let botao = gameClicado.querySelector(".dashboard__item__button");
  let nomeGame = gameClicado.querySelector(".dashboard__item__name");

  if (imagem.classList.contains("dashboard__item__img--rented")) {
    if (
      confirm(`Tem certeza que deseja devolver o jogo ${nomeGame.innerHTML}`)
    ) {
      imagem.classList.remove("dashboard__item__img--rented");
      botao.classList.remove("dashboard__item__button--return");
      botao.innerHTML = "Alugar";
      jogosAlugados--;
    }
  } else {
    imagem.classList.add("dashboard__item__img--rented");
    botao.classList.add("dashboard__item__button--return");
    botao.innerHTML = "Devolver";
    jogosAlugados++;
  }
  contarJogosAlugdos();
}

document.addEventListener("DOMContentLoaded", function () {
  jogosAlugados = document.querySelectorAll(
    ".dashboard__item__img--rented"
  ).length;
  contarJogosAlugdos();
});
