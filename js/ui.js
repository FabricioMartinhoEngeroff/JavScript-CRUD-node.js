import api from "./api.js";

const ui = {
  limparFormulario() {
    document.getElementById("pensamento-form").reset();
  },

  async renderizarPensamentos() {
    const listaPensamentos = document.getElementById("lista-pensamentos");
    listaPensamentos.innerHTML = ""; // Limpa a lista antes de renderizar

    try {
      const pensamentos = await api.buscarPensamentos();
      if (pensamentos.length === 0) {
        this.mostrarMensagemVazia();
      } else {
        pensamentos.forEach(pensamento => this.adicionarPensamentoNaLista(pensamento));
      }
    } catch (error) {
      alert('Erro ao renderizar pensamentos');
      console.error(error);
    }
  },

  mostrarMensagemVazia() {
    const listaPensamentos = document.getElementById("lista-pensamentos");
    const mensagemVazia = document.createElement("li");
    mensagemVazia.textContent = "Nenhum pensamento encontrado.";
    mensagemVazia.classList.add("mensagem-vazia");
    listaPensamentos.appendChild(mensagemVazia);
  },

  adicionarPensamentoNaLista(pensamento) {
    const listaPensamentos = document.getElementById("lista-pensamentos");
    const li = document.createElement("li");
    li.setAttribute("data-id", pensamento.id);
    li.classList.add("li-pensamento");

    li.innerHTML = `
      <img src="assets/imagens/aspas-azuis.png" alt="Aspas azuis" class="icone-aspas">
      <div class="pensamento-conteudo">${pensamento.conteudo}</div>
      <div class="pensamento-autoria">${pensamento.autoria}</div>
    `;

    listaPensamentos.appendChild(li);
  }
};

export default ui;