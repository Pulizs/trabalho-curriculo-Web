// Capturando os campos da página Login
const myUserName = document.getElementById("username");
const myPassword = document.getElementById("password");

// Quando o botão Entrar é clicado
function isValidLogin() {

  // Buscando no sessionStorage o nome e a senha registrados na tela de SignUp.
  let registeredUsername = sessionStorage.getItem('userName');
  let registeredPassword = sessionStorage.getItem('password');

  // Se usuário e senha digitados são iguais aos registrados no sessionStorage
  if (myUserName.value == registeredUsername && myPassword.value == registeredPassword) {
    // Carrega a página list
    window.location.href = "../list/list.html";
  } else {
    alert("Usuário e/ou senha inválidos");
  }
}

