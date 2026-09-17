/* ================================
   Template dos projetos
================================ */

export function projetoTemplate(projeto) {
  return `
        <article class="card-projeto">
            <span class="badge">${projeto.categoria}</span>
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
        </article>
    `;
}
