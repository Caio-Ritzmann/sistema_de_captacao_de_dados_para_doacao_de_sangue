document.addEventListener("DOMContentLoaded", function () {

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
            alert("Digite nome e sobrenome");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            alert("Email inválido");
            return;
        }

        if (idade < 16) {
            alert("Idade mínima é 16");
            return;
        }

        if (peso < 50) {
            alert("Peso mínimo é 50kg");
            return;
        }

        if (tipoSanguineo === "") {
            alert("Selecione um tipo sanguíneo");
            return;
        }

        telefone = telefone.trim();

        if (!/^[0-9]+$/.test(telefone)) {
            alert("Telefone deve conter apenas números");
            return;
        }

        if (!nome || !email || !idade || !peso || !telefone || !cidade || !estado) {
            alert("Preencha todos os campos");
            return;
        }

        alert("Cadastro realizado com sucesso!");

        let pessoa = {
            nome,
            email,
            idade,
            peso,
            tipoSanguineo,
            telefone,
            cidade,
            estado
        };

        listaPessoas.push(pessoa);

        formulario.reset();

        console.log(listaPessoas);
    });

});