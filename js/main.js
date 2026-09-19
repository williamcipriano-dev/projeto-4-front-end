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
            <h2 id="contato-titulo">Contato</h2>

              <form id="contact-form" aria-labelledby="contato-titulo">

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

                <p id="form-message" aria-live="polite"></p>

            </form>
        </section>
    `,
};

/* ================================
   Alternância de tema
================================ */

const themeToggle = document.getElementById("theme-toggle");

const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "☀️ Modo claro";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("tema", "dark");
    themeToggle.textContent = "☀️ Modo claro";
  } else {
    localStorage.setItem("tema", "light");
    themeToggle.textContent = "🌙 Modo escuro";
  }
});

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
