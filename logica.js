function login() {
  // Valores fixos simulando um "banco de dados"
  const usuarioCorreto = "admin";
  const senhaCorreta = "1234";

  // Captura os valores digitados
  let usuario = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;
  let mensagem = document.getElementById("mensagem");

  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    mensagem.style.color = "green";
    mensagem.textContent = "Login realizado com sucesso!";
  } else {
    mensagem.style.color = "red";
    mensagem.textContent = "Usuário ou senha incorretos!";
  }
}

login();
