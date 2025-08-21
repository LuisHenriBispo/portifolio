document.addEventListener('DOMContentLoaded', function () {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const formulario = document.querySelector('#formulario');

  formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const campoNome = document.querySelector('#nome');
    const errNome = document.querySelector('#errNome');

    if (campoNome.value.length < 3) {
      errNome.innerHTML = 'O Nome deve ter no mínimo 3 caracteres.';
      campoNome.focus();
      return;
    } else {
      errNome.innerHTML = '';
    }

    const campoEmail = document.querySelector('#email');
    const errEmail = document.querySelector('#errEmail');

    if (!emailRegex.test(campoEmail.value)) {
      errEmail.innerHTML = 'Digite um E-mail válido.';
      campoEmail.focus();
      return;
    } else {
      errEmail.innerHTML = '';
    }

    const campoAssunto = document.querySelector('#assunto');
    const errAssunto = document.querySelector('#errSubject');

    if (campoAssunto.value.length < 5) {
      errAssunto.innerHTML = 'O Assunto deve ter no mínimo 5 caracteres.';
      campoAssunto.focus();
      return;
    } else {
      errAssunto.innerHTML = '';
    }

    const campoMensagem = document.querySelector('#mensagem');

    window.alert("Formulário enviado com sucesso!");

    campoNome.value = '';
    campoEmail.value = '';
    campoAssunto.value = '';
    campoMensagem.value = '';
  });
});
