if ('serviceWorker' in navigator) {
    //registro do sw
    navigator.serviceWorker.register('/PWA_lista/sw.js')
        .then(() => console.log('Service Worker registrado com sucesso!'))
        .catch(err => console.log('Erro ao registrar Service Worker:', err));
}


// Pega os elementos
const lista = document.getElementById("lista");
const input = document.getElementById("novoItem");
const btnAdicionar = document.getElementById("btnAdicionar");

// Adiciona um novo item
btnAdicionar.addEventListener("click", () => {
  const texto = input.value.trim(); // pega o que foi digitado

  if (texto !== "") {
    // cria elemento <li>
    const li = document.createElement("li");

    // cria checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // cria texto
    const span = document.createElement("span");
    span.textContent = " " + texto + " ";

    // cria botão remover
    const botao = document.createElement("button");
    botao.textContent = "Remover";
    botao.classList.add("remover");

    // adiciona tudo dentro do li
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(botao);

    // coloca o li dentro da lista
    lista.appendChild(li);

    // limpa o input
    input.value = "";

    // adiciona evento de remover
    botao.addEventListener("click", () => {
      li.remove();
    });
  } 
});

// Remove itens 
document.querySelectorAll(".remover").forEach(botao => {
  botao.addEventListener("click", (e) => {
    e.target.parentElement.remove(); // remove o <li> inteiro
  });
});
