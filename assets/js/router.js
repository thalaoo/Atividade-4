/**
 * router.js
 * Gerenciador de rotas para Single Page Application (SPA).
 */
import {
  templateHome,
  templateProjetos,
  templateCadastro,
  template404
} from './templates.js';

// Mapeamento de rotas e seus respectivos geradores de template
const rotas = {
  '#/': {
    titulo: 'Início | SOS Animais Alfenas',
    render: templateHome
  },
  '#/projetos': {
    titulo: 'Projetos | SOS Animais Alfenas',
    render: templateProjetos
  },
  '#/cadastro': {
    titulo: 'Voluntário(a) | SOS Animais Alfenas',
    render: templateCadastro
  }
};

/**
 * Função responsável por resolver a rota atual e atualizar o DOM
 */
export function navegar() {
  const hashCompleta = window.location.hash || '#/';
  
  // Trata âncoras dentro de rotas (ex: #/projetos#resgate)
  const partes = hashCompleta.split('#');
  const rotaBase = partes[1] ? `#${partes[1]}` : '#/';
  const elementoId = partes[2] || null;

  const rota = rotas[rotaBase] || {
    titulo: '404 Não Encontrado | SOS Animais Alfenas',
    render: template404
  };

  // Atualiza título da página
  document.title = rota.titulo;

  // Atualiza área principal de conteúdo
  const container = document.getElementById('conteudo');
  if (container) {
    container.innerHTML = rota.render();
  }

  // Atualiza classe 'ativo' nos links de navegação
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === rotaBase || (rotaBase === '#/' && href === '#/')) {
      link.classList.add('ativo');
    } else {
      link.classList.remove('ativo');
    }
  });

  // Fecha o menu hambúrguer no mobile após clique
  const menuCheck = document.getElementById('menu-check');
  if (menuCheck && menuCheck.checked) {
    menuCheck.checked = false;
  }

  // Scroll suave para âncora de elemento ou topo da página
  if (elementoId) {
    setTimeout(() => {
      const elementoAlvo = document.getElementById(elementoId);
      if (elementoAlvo) {
        elementoAlvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Notifica alteração de rota
  window.dispatchEvent(new CustomEvent('rotaMudou', { detail: { rota: rotaBase } }));
}
