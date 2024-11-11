
📝 Memoteca
Memoteca é um aplicativo organizador de pensamentos e frases que foi desenvolvido para permitir o cadastro, listagem, edição e exclusão de pensamentos, incluindo informações como conteúdo e autoria.

🔨 Funcionalidades do projeto

✅ Cadastro de pensamentos: Foi implementada a funcionalidade de adicionar novos pensamentos à lista, permitindo a inserção de conteúdo e autoria.
📃 Listagem de pensamentos: Foi desenvolvida a exibição dos pensamentos cadastrados, apresentando o texto e a autoria.
✏️ Edição de pensamentos: Foi incluída a funcionalidade de editar pensamentos existentes, com a atualização das informações conforme necessário.
🗑️ Exclusão de pensamentos: Foi adicionada a opção de remover pensamentos da lista.
✔️ Técnicas e tecnologias utilizadas
💻 JavaScript: Foi a linguagem de programação utilizada para desenvolver a lógica do aplicativo.
🔗 Fetch API: Foi usada para realizar requisições HTTP e possibilitar a comunicação com o servidor.
🚀 Axios: Foi utilizada a biblioteca para simplificar e facilitar as requisições HTTP.
🛠️ Node.js: Serviu como a plataforma para executar o ambiente de desenvolvimento.
🗃️ JSON Server: Foi utilizado para simular um backend e facilitar o desenvolvimento e teste das operações CRUD.
🎨 CSS: Foi aplicado para estilizar a interface do aplicativo.

🛠️ Passos importantes no desenvolvimento

🌐 Comunicação com o servidor: Foram explorados projetos base e final para obter dados de um servidor.
⚙️ Configuração do JSON Server: Foi configurado o db.json e o package.json para iniciar a API simulada.
📥 Requisição com Fetch: Foi criado um arquivo api.js para implementar o método buscarPensamentos() e obter dados da API.
🖥️ Renderização de dados na interface: O arquivo ui.js foi implementado com a função renderizarPensamentos() para atualizar a interface com os pensamentos.

📤 Funcionalidades adicionais

📝 Envio de dados (POST): Foi configurado o envio de dados JSON com o método POST, incluindo a definição do cabeçalho Content-Type.
🔄 Atualização dinâmica da interface: A interface foi atualizada para refletir os pensamentos no mural.
🖱️ Manipulação de eventos de formulário: Foram adicionados event listeners para submissão e cancelamento do formulário.
🧽 Limpeza de formulário: Foi implementada a função para limpar os campos do formulário após a submissão.
🛠️ Edição de dados (PUT): Foi configurado o método PUT para atualizar dados no servidor.
🔍 Busca de pensamentos por ID (GET): Foi incluída a funcionalidade de busca por ID e preenchimento do formulário de edição.
🖋️ Botões de edição: Foram adicionados dinamicamente botões de edição à interface.
⚠️ Tratamento de erros: Foram tratadas falhas em requisições HTTP para melhorar a experiência do usuário.
🗑️ Exclusão de dados (DELETE)
📋 Busca de pensamentos para exclusão: Foi implementada a busca por ID para exclusão e a função correspondente em api.js.
❌ Função de exclusão: Foi integrada ao código principal a função de remoção, atualizando a interface após a exclusão.
🔄 CRUD aplicado: Todo o conceito de CRUD foi aplicado de forma prática, otimizando o código com constantes para evitar a repetição de URLs.

⚙️ Utilização do Axios

🌐 Adição da CDN: Foi incluída a CDN do Axios no projeto.
🚀 Requisições com Axios: Foram feitas requisições GET, POST, PUT e DELETE de forma mais concisa.
🔎 Comparação com Fetch: Foi realizada a análise das vantagens e desvantagens de cada abordagem.
🛠️ DevTools: As requisições foram inspecionadas com o DevTools do navegador para verificar detalhes importantes.
Esse projeto foi desenvolvido para aplicar e solidificar conhecimentos de JavaScript, manipulação de APIs e operações CRUD de forma prática e funcional.
