const URL_BASE = "http://localhost:3000";

const converterStringParaData = (dataString) => {
  const [ano, mes, dia] = dataString.split("-");
  return new Date(Date.UTC(ano, mes - 1, dia)); 
}

const api = {
  async buscarPensamentos() {
    try {
      const response = await axios.get(`${URL_BASE}/pensamentos`);
      const pensamentos = response.data;

      return pensamentos.map(pensamento => {
        return {
          ...pensamento,
          data: new Date(pensamento.dataHoraUTC)
        }
      });
    } catch (error) {
      alert('Erro ao buscar pensamentos');
      throw error;
    }
  },

  async salvarPensamento(pensamento) {
    try {
      const data = converterStringParaData(pensamento.data);
      const response = await axios.post(`${URL_BASE}/pensamentos`, {
        ...pensamento,
        dataHoraUTC: data.toISOString()
      });
      return response.data;
    } catch (error) {
      alert('Erro ao salvar pensamento');
      throw error;
    }
  },

  async buscarPensamentoPorId(id) {
    try {
      const response = await axios.get(`${URL_BASE}/pensamentos/${id}`);
      const pensamento = response.data;

      return {
        ...pensamento,
        data: new Date(pensamento.dataHoraUTC)
      }
    } catch (error) {
      alert('Erro ao buscar pensamento');
      throw error;
    }
  },

  async editarPensamento(pensamento) {
    try {
      const data = converterStringParaData(pensamento.data);
      const response = await axios.put(`${URL_BASE}/pensamentos/${pensamento.id}`, {
        ...pensamento,
        dataHoraUTC: data.toISOString()
      });
      return response.data;
    } catch (error) {
      alert('Erro ao editar pensamento');
      throw error;
    }
  },

  async excluirPensamento(id) {
    try {
      await axios.delete(`${URL_BASE}/pensamentos/${id}`);
    } catch (error) {
      alert('Erro ao excluir um pensamento');
      throw error;
    }
  },

  async buscarPensamentosPorTermo(termo) {
    try {
      const pensamentos = await this.buscarPensamentos();
      const termoEmMinusculo = termo.toLowerCase();

      const pensamentosFiltrados = pensamentos.filter(pensamento => {
        return (
          pensamento.conteudo.toLowerCase().includes(termoEmMinusculo) ||
          pensamento.autoria.toLowerCase().includes(termoEmMinusculo)
        );
      });
      return pensamentosFiltrados;

    } catch (error) {
      alert("Erro ao filtrar pensamentos");
      throw error;
    }
  },

  async atualizarFavorito(id, favorito) {
    try {
      const response = await axios.patch(`${URL_BASE}/pensamentos/${id}`, { favorito });
      return response.data;
    } catch (error) {
      alert("Erro ao atualizar favorito");
      throw error;
    }
  }
}


export default api;

