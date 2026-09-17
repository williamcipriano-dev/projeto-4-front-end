/* ================================
   Importação dos módulos
================================ */

import { projetos } from "./data.js";
import { projetoTemplate } from "./templates.js";
import { configurarFormulario } from "./form.js";
import { configurarNavegacao } from "./navigation.js";

/* ================================
   Elemento principal da aplicação
================================ */

const app = document.getElementById("app");

/* ================================
   Renderização dos projetos
================================ */

function renderProjetos() {
  const container = document.getElementById("projects-list");

  if (container) {
    container.innerHTML = projetos.map(projetoTemplate).join("");
  }
}

/* ================================
   Conteúdo das páginas
================================ */

const pages = {
  "/": `
        <section>
            <h2>Início</h2>
            <p>Bem-vindo à plataforma social.</p>
        </section>
    `,

  "/projetos": `
        <section>
            <h2>Projetos</h2>
            <p>Conheça os projetos desenvolvidos pela organização.</p>

            <div id="projects-list" class="projetos-grid"></div>
        </section>
    `,

  "/contato": `
        <section>
            <h2>Contato</h2>

            <form id="contact-form">

                <label for="nome">Nome</label>

                <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                >

                <label for="email">E-mail</label>

                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                >

                <button type="submit">
                    Enviar mensagem
                </button>

                <p id="form-message"></p>

            </form>
        </section>
    `,
};

/* ================================
   Renderização das páginas
================================ */

function renderPage(path) {
  const content = pages[path] || pages["/"];

  app.innerHTML = content;

  if (path === "/projetos") {
    renderProjetos();
  }

  if (path === "/contato") {
    configurarFormulario();
  }
}

/* ================================
   Inicialização da aplicação
================================ */

configurarNavegacao(renderPage);

renderPage(window.location.pathname);
