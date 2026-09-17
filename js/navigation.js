/* ================================
   Navegação da SPA
================================ */

export function configurarNavegacao(renderPage) {
  document.querySelectorAll("[data-route]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const path = event.currentTarget.dataset.route;

      history.pushState({}, "", path);

      renderPage(path);
    });
  });

  /* Voltar e avançar no navegador */

  window.addEventListener("popstate", () => {
    renderPage(window.location.pathname);
  });
}
