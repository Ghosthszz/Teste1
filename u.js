const usuários = [
    { usuário: "sea@gmail.com", senha: "Teste123", nome: "Sea" },
    { usuário: "design.sea@gmail.com", senha: "subsarino", nome: "Design Sea" },
    { usuário: "ghosthszz_", senha: "Gustavo16012008", nome: "Ghosthszz" },
    { usuário: "Thiagoanjos08", senha: "123Mudar", nome: "Thiago Anjos" },
    { usuário: "Teste.sea", senha: "Teste", nome: "Teste Sea" },
    { usuário: "supremolorde", senha: "Senha123", nome: "Supremo Lorde" },
    { usuário: "teste", senha: "teste12", nome: "Teste" },
    // Adicione mais usuários conforme necessário
];

function verificarCredenciais(usuário, senha) {
    const foundUser = usuários.find(u => u.usuário === usuário && u.senha === senha);
    return foundUser || null;
}

function login(usuário, senha) {
    const foundUser = verificarCredenciais(usuário, senha);
    return foundUser ? foundUser.nome : null;
}
