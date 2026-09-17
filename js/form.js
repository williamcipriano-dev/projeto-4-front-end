/* ================================
   Configuração do formulário
================================ */

export function configurarFormulario() {
  const form = document.getElementById("contact-form");
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const mensagem = document.getElementById("form-message");

  /* ================================
       Recupera dados do localStorage
    ================================ */

  const dadosSalvos = localStorage.getItem("dadosContato");

  if (dadosSalvos) {
    const dados = JSON.parse(dadosSalvos);

    nome.value = dados.nome;
    email.value = dados.email;
  }

  /* ================================
       Validação do nome
    ================================ */

  nome.addEventListener("input", () => {
    if (nome.value.trim().length >= 3) {
      nome.classList.add("input-success");
      nome.classList.remove("input-error");

      mensagem.textContent = "Nome preenchido corretamente.";

      mensagem.className = "form-success";
    } else {
      nome.classList.add("input-error");
      nome.classList.remove("input-success");

      mensagem.textContent = "Digite pelo menos 3 caracteres.";

      mensagem.className = "form-error";
    }
  });

  /* ================================
       Validação do e-mail
    ================================ */

  email.addEventListener("input", () => {
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);

    if (emailValido) {
      email.classList.add("input-success");
      email.classList.remove("input-error");
    } else {
      email.classList.add("input-error");
      email.classList.remove("input-success");
    }
  });

  /* ================================
       Envio do formulário
    ================================ */

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nomeValido = nome.value.trim().length >= 3;

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);

    /* Verifica os dados */

    if (!nomeValido || !emailValido) {
      mensagem.textContent = "Verifique os campos preenchidos.";

      mensagem.className = "form-error";

      return;
    }

    /* Organiza os dados */

    const dadosContato = {
      nome: nome.value.trim(),
      email: email.value.trim(),
    };

    /* Salva os dados no navegador */

    localStorage.setItem("dadosContato", JSON.stringify(dadosContato));

    mensagem.textContent = "Dados salvos com sucesso!";

    mensagem.className = "form-success";

    /* SweetAlert2 */

    Swal.fire({
      title: "Dados salvos!",
      text: "As informações foram armazenadas com sucesso.",
      icon: "success",
      confirmButtonText: "OK",
    });

    /* Remove os estados visuais */

    nome.classList.remove("input-success");
    email.classList.remove("input-success");
  });
}
