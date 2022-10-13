// Capturando os campos da página SignUp
const myUsername = document.getElementById("usernameSignUp");
const myPassword = document.getElementById("passwordField1");
const myConfirmPassword = document.getElementById("passwordField2");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");


// Quando o usuário clicar no campo de senha,
// mostre a caixa de mensagem com os requisitos da senha
myPassword.onfocus = function () {
    document.getElementById("message").style.display = "block";
}

// Quando o usuário começa a digitar algo dentro do campo de senha
myPassword.onkeyup = function () {

    // Transforma o padrão (pattern) de confirmação igual a senha digitada
    myConfirmPassword.pattern = myPassword.value;

    // Valida letras minúsculas
    let lowerCaseLetters = /[a-z]/g;
    if (myPassword.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Valida letras maiúsculas
    let upperCaseLetters = /[A-Z]/g;
    if (myPassword.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Valida números
    let numbers = /[0-9]/g;
    if (myPassword.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Valida comprimento (mínimo 8 caracteres)
    if (myPassword.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

// Quando o usuário começa a digitar algo dentro do campo de confirmação
myConfirmPassword.onkeyup = function () {

    // Transforma o padrão (pattern) de confirmação igual a senha digitada
    myConfirmPassword.pattern = myPassword.value;
}

// Quando o botão de Criar Conta é clicado
function setRegistration() {

    // Se o usuário estiver vazio
    if (myUsername.value == "") {
        alert("O usuário não pode estar vazio!");
        return;
    }

    // Se a confirmação não estiver igual a senha
    if (myConfirmPassword.value != myPassword.value) {
        alert("A confirmação precisa ser igual a senha!");
        return;
    }

    if (letter.classList == "valid" &&
        capital.classList == "valid" &&
        number.classList == "valid" &&
        length.classList == "valid") {

        /* sessionStorage grava nome e senha nos arquivos temporários da sessão.
        Os dados são mantidos até que o navegador seja fechado (ao finalizar a sessão).
        */
        sessionStorage.setItem('userName', myUsername.value);
        sessionStorage.setItem('password', myPassword.value);

        alert("Usuário e senha gravados com sucesso!");

        // Carrega a página login
        window.location.href = "../login/login.html";

    } else {
        alert("Preencha a senha corretamente!");
    }
}