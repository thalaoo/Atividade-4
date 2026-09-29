# 🐾 SOS Animais Alfenas

Site institucional da **ONG SOS Animais Alfenas**, criada em Alfenas-MG para promover a adoção de cães e gatos resgatados. O site apresenta a ONG, seus projetos e permite o cadastro de voluntários.

> *[Cole aqui o link do site publicado, se houver]*

![Banner da SOS Animais Alfenas](assets/img/caes_gatos.jpg)

## 📋 Sumário

- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Como executar](#-como-executar)
- [Acessibilidade](#-acessibilidade)
- [Estratégia de branching (GitFlow)](#-estratégia-de-branching-gitflow)
- [Autor](#-autor)

## ✨ Funcionalidades

- **Single Page Application (SPA)** com navegação por hash (`#/`, `#/projetos`, `#/cadastro`), sem recarregar a página.
- **Página inicial** com quem somos, missão, visão e valores.
- **Página de projetos** com cards gerados dinamicamente a partir de uma lista de dados: Resgate e Acolhimento, Feiras de Adoção e Castração Solidária.
- **Formulário de cadastro de voluntários** com validação nativa e mensagem de confirmação (os dados são guardados no `localStorage` do navegador, como simulação).
- **Modal de termos de voluntariado** com o elemento nativo `<dialog>`.
- **Menu responsivo** com botão hambúrguer e submenu de projetos.
- **Página 404** para rotas inexistentes.

## 🛠 Tecnologias

- HTML5 semântico
- CSS3 (variáveis CSS, layout responsivo)
- JavaScript (ES6+ com módulos)
- Git e GitHub, com fluxo de trabalho GitFlow

Não há dependências nem etapa de build.

## 📁 Estrutura do projeto

```
.
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── img/
    │   ├── caes_gatos.jpg
    │   ├── resgate.jpg
    │   ├── feira.jpg
    │   └── castracao.jpg
    └── js/
        ├── app.js         # ponto de entrada e eventos globais
        ├── router.js      # roteador da SPA
        └── templates.js   # dados dos projetos e templates HTML
```

## 🚀 Como executar

O projeto usa módulos ES6, que **não funcionam abrindo o `index.html` com duplo clique**. É preciso servir os arquivos por um servidor local.

**Opção 1: VS Code com Live Server**

1. Instale a extensão **Live Server** (Ritwick Dey).
2. Abra a pasta do projeto no VS Code.
3. Clique com o botão direito em `index.html` → **Open with Live Server**.

**Opção 2: Python**

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## ♿ Acessibilidade

O projeto busca seguir a **WCAG 2.1, nível AA**. Práticas aplicadas:

- Estrutura semântica (`header`, `nav`, `main`, `footer`) e `lang="pt-BR"`.
- Texto alternativo (`alt`) descritivo nas imagens, incluindo o texto presente no banner.
- Campos de formulário com `label` associado e atributos `autocomplete`.
- Região `aria-live` para anunciar mudanças de conteúdo e alertas com `role="status"`.
- Menu e modal com rótulos acessíveis (`aria-label`).

Verificações recomendadas: Lighthouse (Chrome DevTools), extensão axe DevTools e teste manual com teclado.

## 🌿 Estratégia de branching (GitFlow)

O projeto foi iniciado na `main` e passou a seguir o modelo **GitFlow** depois de pronto. As alterações posteriores seguem o fluxo abaixo.

| Branch | Origem | Destino | Função |
|---|---|---|---|
| `main` | — | — | Código estável, versões lançadas e marcadas com tags |
| `develop` | `main` | — | Integração do desenvolvimento contínuo |
| `feature/*` | `develop` | `develop` | Novas funcionalidades e melhorias |
| `release/*` | `develop` | `main` e `develop` | Preparação de uma versão (versão, changelog) |
| `hotfix/*` | `main` | `main` e `develop` | Correções urgentes em produção |

**Regras adotadas**

- Nenhum commit direto em `main` ou `develop`: as mudanças entram por **Pull Request**.
- Os merges usam **commit de merge** (sem squash ou rebase), para preservar o histórico das branches.
- Versões marcadas com **tags** semânticas (`v1.0.0`).
- Mensagens de commit no padrão **Conventional Commits**: `feat:`, `fix:`, `docs:`, `chore:`.

Exemplos de features deste projeto:

- `feature/acessibilidade-wcag`: melhoria de contraste e textos alternativos das imagens.
- *[Liste aqui as outras features que você criar]*

Para ver o histórico das branches: `git log --oneline --graph --all --decorate` ou a extensão **Git Graph** do VS Code.

## 👤 Autor

**Thales de Faria César**

---

© 2026 ONG SOS Animais Alfenas. Todos os direitos reservados.
