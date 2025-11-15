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
      `;
      container.appendChild(div);
    });
  })
  .catch(error => console.error('Erro ao carregar produtos:', error));
