/**
 * templates.js
 * Responsável pela definição dos dados dos projetos e geração de templates dinâmicos.
 */

// Coleção de dados dos projetos atendidos pela ONG
export const listaProjetos = [
  {
    id: "resgate",
    titulo: "Resgate e Acolhimento",
    descricao: "Identificação, resgate nas ruas e suporte emergencial a cães e gatos feridos ou abandonados.",
    imagem: "assets/img/resgate.jpg",
    badge: "Urgente",
    acao: "Apoiar Projeto"
  },
  {
    id: "feiras",
    titulo: "Feiras de Adoção",
    descricao: "Realizadas no último final de semana de cada mês no estacionamento do estádio municipal.",
    imagem: "assets/img/feira.jpg",
    badge: "Mensal",
    acao: "Ser Voluntário"
  },
  {
    id: "castracao",
    titulo: "Castração Solidária",
    descricao: "Em convênio com a Escola de Veterinária, todos os animais são castrados antes da entrega.",
    imagem: "assets/img/castracao.jpg",
    badge: "Parceria",
    acao: "Conhecer Mais"
  }
];

/**
 * Componente modular de Card de Projeto
 * @param {Object} projeto - Dados do projeto
 * @returns {string} Fragmento HTML do card
 */
export const cardProjetoTemplate = (projeto) => `
  <article id="${projeto.id}" class="card">
    <div class="card-media-wrapper">
      <img src="${projeto.imagem}" alt="${projeto.titulo}" class="card-media">
      <span class="card-badge">${projeto.badge}</span>
    </div>
    <div class="card-body">
      <h2 class="card-title">${projeto.titulo}</h2>
      <p class="card-text">${projeto.descricao}</p>
    </div>
    <div class="card-footer">
      <a href="#/cadastro" class="btn btn-primario">${projeto.acao}</a>
    </div>
  </article>
`;

/**
 * Template da Página Inicial (Quem Somos / Missão / Visão / Valores)
 * @returns {string} Fragmento HTML da Home
 */
export const templateHome = () => `
  <section id="quem_somos">
    <div class="card_conteudo">
      <h2>Quem somos?</h2>
      <p>ONG criada em Alfenas-MG há 5 anos para promover a <strong>adoção de cães e gatos</strong> que foram resgatados.</p>
      <hr>
      <h3>Missão</h3>
      <p>Nossa missão é acolher, tratar e achar um lar para os nossos amigos de 4 patas.</p>
      <hr>
      <h3>Visão</h3>
      <p>Uma cidade onde os animais de rua encontrem um lar, levando alegria e amor.</p> 
      <hr>
      <h3>Valores</h3>
      <p>Respeito à vida, amor, cuidado e responsabilidade.</p>  
    </div>
  </section>
`;

/**
 * Template da Página de Projetos (Grid gerada dinamicamente)
 * @returns {string} Fragmento HTML dos Projetos
 */
export const templateProjetos = () => `
  <div class="cards-grid">
    ${listaProjetos.map(projeto => cardProjetoTemplate(projeto)).join('')}
  </div>
`;

/**
 * Template da Página de Cadastro de Voluntário
 * @returns {string} Fragmento HTML do Formulário de Cadastro
 */
export const templateCadastro = () => `
  <div class="alerta alerta-info" role="status">
    ℹ Preencha os campos abaixo. Entraremos em contato via WhatsApp após a análise.
  </div>

  <form class="card_conteudo form-cadastro" id="form-voluntario">
    <fieldset>
      <legend>Venha nos ajudar a cuidar dos nossos amigos de 4 patas</legend>
      
      <div class="campo">
        <label for="nome">Nome completo <span class="obrigatorio" aria-hidden="true">*</span></label>
        <input 
          type="text" 
          id="nome" 
          name="nome" 
          required 
          autocomplete="name"
          placeholder="Ex: João da Silva">
      </div>

      <div class="linha-dupla">
        <div class="campo">
          <label for="email">E-mail <span class="obrigatorio" aria-hidden="true">*</span></label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            autocomplete="email"
            placeholder="seuemail@exemplo.com">
        </div>

        <div class="campo">
          <label for="telefone">Telefone / WhatsApp <span class="obrigatorio" aria-hidden="true">*</span></label>
          <input 
            type="tel" 
            id="telefone" 
            name="telefone" 
            required 
            autocomplete="tel"
            placeholder="(35) 99999-9999">
        </div>
      </div>

      <div class="campo">
        <label for="area-interesse">Área de interesse</label>
        <select id="area-interesse" name="area-interesse" required>
          <option value="" disabled selected>Selecione uma opção...</option>
          <option value="resgate">Resgate e transporte</option>
          <option value="lar-temporario">Lar temporário</option>
          <option value="eventos">Feiras de adoção e eventos</option>
          <option value="redes-sociais">Divulgação e redes sociais</option>
        </select>
      </div>

      <div class="campo">
        <label for="mensagem">Conte um pouco sobre sua experiência com animais</label>
        <textarea 
          id="mensagem" 
          name="mensagem" 
          rows="4" 
          maxlength="1500"
          placeholder="Já teve pets? Tem disponibilidade em quais dias?"></textarea>
      </div>

      <div class="campo_checkbox">
        <input type="checkbox" id="termos" name="termos" required>
        <label for="termos">
          Concordo com o <button type="button" class="btn-link" id="btn-abrir-termos" style="background:none;border:none;color:var(--cor-primaria);text-decoration:underline;cursor:pointer;font-weight:600;">termo de voluntariado</button> e responsabilidade.
        </label>
      </div>

      <button type="submit" class="btn-enviar">Enviar Cadastro</button>
    </fieldset>  
  </form>
`;

/**
 * Template de Página Não Encontrada (404)
 * @returns {string} Fragmento HTML 404
 */
export const template404 = () => `
  <section class="card_conteudo" style="text-align: center; padding: var(--espacamento-5);">
    <h2>404 - Página não encontrada</h2>
    <p style="margin: var(--espacamento-3) 0;">A seção que você tentou acessar não existe ou foi movida.</p>
    <a href="#/" class="btn btn-primario">Voltar para o Início</a>
  </section>
`;
