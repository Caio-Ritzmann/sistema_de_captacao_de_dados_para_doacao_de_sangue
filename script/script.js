let listaPessoas = [];

const formulario = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;
    let peso = document.getElementById("peso").value;
    let tipoSanguineo = document.getElementById("tipoSanguineo").value;
    let telefone = document.getElementById("telefone").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;

    if (!nome.includes(" ")) {
        mensagem.innerText = "Digite nome e sobrenome";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        mensagem.innerText = "Email inválido";
        return;
    }

    if (idade < 16) {
        mensagem.innerText = "Idade mínima é 16";
        return;
    }

    if (peso < 50) {
        mensagem.innerText = "Peso mínimo é 50kg";
        return;
    }
});