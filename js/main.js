import ui from "./ui.js";
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  ui.renderizarPensamentos();

  const formularioPensamento = document.getElementById("pensamento-form");
  const botaoCancelar = document.getElementById("botao-cancelar");

  formularioPensamento.addEventListener("submit", manipularSubmissaoFormulario);
  botaoCancelar.addEventListener("click", manipularCancelamento);
});

async function manipularSubmissaoFormulario(event) {
  event.preventDefault();
  
  const conteudo = document.getElementById("pensamento-conteudo").value;
  const autoria = document.getElementById("pensamento-autoria").value;

  try {
    await api.salvarPensamento({ conteudo, autoria });
    ui.renderizarPensamentos();
    ui.limparFormulario();
  } catch (error) {
    alert("Erro ao salvar pensamento");
    console.error(error);
  }
}

function manipularCancelamento(event) {
  event.preventDefault();
  ui.limparFormulario();
}
