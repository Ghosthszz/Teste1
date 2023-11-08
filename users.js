// usuários.js

const usuarios = [
    { usuario: "sea@gmail.com", senha: "Teste123" },
    { usuario: "design.sea@gmail.com", senha: "subsarino" },
    { usuario: "ghosthszz_", senha: "Nathalia260576" },
     { usuario: "Thiagoanjos08", senha: "123Mudar" },
    // Adicione mais usuários conforme necessário
];

function verificarCredenciais(usuario, senha) {
    return usuarios.find(u => u.usuario === usuario && u.senha === senha);
}
