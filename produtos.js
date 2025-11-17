fetch('produtos.json')
  .then(response => response.json())
  .then(produtos => {
    const container = document.getElementById('produtos');
    produtos.forEach(p => {
      const div = document.createElement('div');
      div.className = 'produto';
      div.innerHTML = `
        <img src="${p.imagem}" alt="${p.nome}">
        <h3>${p.nome}</h3>
        <p>${p.descricao}</p>
        <p class="preço">${p.preco}€</p>
        <button class="add-to-cart" data-id="${p.id}" data-nome="${p.nome}" data-preco="${p.preco}" data-imagem="${p.imagem}">
            🛒
        </button>
      `;
      container.appendChild(div);
    });
    iniciarCarrinho();
  })
  .catch(error => console.error('Erro ao carregar produtos:', error));

  function iniciarCarrinho() {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  document.querySelectorAll(".add-to-cart").forEach(botao => {
    botao.addEventListener("click", () => {
      const item = {
        id: botao.dataset.id,
        nome: botao.dataset.nome,
        preco: botao.dataset.preco,
        imagem: botao.dataset.imagem
      };

      carrinho.push(item);
      localStorage.setItem("carrinho", JSON.stringify(carrinho));

      alert(item.nome + " foi adicionado ao carrinho!");
    });
  });
}
