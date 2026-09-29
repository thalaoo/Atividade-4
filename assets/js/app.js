/**
 * app.js
 * Ponto de entrada da aplicação: inicialização, eventos de interface e sanitização de dados.
 */
import { navegar } from './router.js';

/**
 * Função utilitária de sanitização para prevenir vulnerabilidades DOM-based XSS
 * @param {string} str - Texto não confiável vindo do usuário
 * @returns {string} Texto seguro com caracteres HTML escapados
 */
function escaparHTML(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Configura eventos globais e delegação de eventos na página
 */
function configurarEventosGlobais() {
  const modalTermos = document.getElementById('modal-termos');

  // Delegação de cliques (abre modal, fecha modal, links)
  document.addEventListener('click', (event) => {
    // Abrir modal de termos
    if (event.target && event.target.id === 'btn-abrir-termos') {
      event.preventDefault();
      if (modalTermos && typeof modalTermos.showModal === 'function') {
        modalTermos.showModal();
      }
    }

    // Fechar modal de termos
    if (event.target && event.target.hasAttribute('data-close-modal')) {
      event.preventDefault();
      if (modalTermos && typeof modalTermos.close === 'function') {
        modalTermos.close();
      }
    }
  });

  // Interceptar envio do formulário de voluntariado com feedback dinâmico
  document.addEventListener('submit', (event) => {
    if (event.target && event.target.id === 'form-voluntario') {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const voluntario = {
        nome: formData.get('nome'),
        email: formData.get('email'),
        telefone: formData.get('telefone'),
        areaInteresse: formData.get('area-interesse'),
        mensagem: formData.get('mensagem'),
        dataCadastro: new Date().toISOString()
      };

      // Simulação de persistência (localStorage)
      try {
        const listaVoluntarios = JSON.parse(localStorage.getItem('voluntarios_sos') || '[]');
        listaVoluntarios.push(voluntario);
        localStorage.setItem('voluntarios_sos', JSON.stringify(listaVoluntarios));
      } catch (err) {
        console.warn('Não foi possível salvar no localStorage:', err);
      }

      // Sanitização defensiva da entrada do usuário contra DOM-based XSS
      const nomeSeguro = escaparHTML(voluntario.nome);

      // Exibe alerta de sucesso dinâmico substituindo o formulário
      const main = document.getElementById('conteudo');
      main.innerHTML = `
        <div class="alerta alerta-sucesso" role="status">
          ✓ Cadastro enviado com sucesso, <strong>${nomeSeguro}</strong>! Entraremos em contato via WhatsApp em breve.
        </div>
        <div class="card_conteudo" style="text-align: center; margin-top: var(--espacamento-3);">
          <h3>Obrigado por apoiar a SOS Animais Alfenas!</h3>
          <p style="margin: var(--espacamento-2) 0 var(--espacamento-4); color: var(--cor-texto-mutado);">
            Seus dados foram registrados com sucesso. Juntos salvaremos vidas!
          </p>
          <a href="#/" class="btn btn-primario">Voltar para o Início</a>
        </div>
      `;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}

// Ouvintes do ciclo de vida e histórico da SPA
window.addEventListener('hashchange', navegar);

window.addEventListener('DOMContentLoaded', () => {
  configurarEventosGlobais();

  // Define rota inicial padrão caso a URL venha sem hash
  if (!window.location.hash) {
    window.location.hash = '#/';
  } else {
    navegar();
  }
});