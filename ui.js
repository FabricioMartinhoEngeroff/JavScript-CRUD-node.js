const ui = {
    async renderizarPensamentos() {
      const listaPensamentos = document.getElementById("lista-pensamentos")
  
      try {
        const pensamentos = await api.buscarPensamentos()
        pensamentos.forEach(pensamento => {
          listaPensamentos.innerHTML += `
            <li class="li-pensamento" data-id="${pensamento.id}">
            <img src="assets/imagens/aspas-azuis.png" alt="Aspas azuis" class="icone-aspas">
            <div class="pensamento-conteudo">${pensamento.conteudo}</div>
            <div class="pensamento-autoria">${pensamento.autoria}</div>
            </li>
          `
        })
      }
      catch {
        alert('Erro ao renderizar pensamentos')
      }
    }
  }

    salvarPensamento(pensamento) {
      try {
          const response = await fetch('http://localhost:3000/pensamentos', {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(pensamento)
          })
          return await response.json()
      }
      catch {
          alert('Erro ao buscar pensamentos')
          throw error
      }
  }

  