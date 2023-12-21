
const  usuários  =  [
    {  usuário : "sea@gmail.com" ,  senha : "Teste123"  } ,
    {  usuário : "design.sea@gmail.com" ,  senha : "subsarino"  } ,
    {  usuário : "ghosthszz_" ,  senha : "Nathalia260576"  } ,
     {  usuário : "Thiagoanjos08" ,  senha : "123Mudar"  } ,
    // Adicione mais usuários conforme necessário
] ;

function verificarCredenciais(usuário, senha) {
    const foundUser = usuários.find(u => u.usuário === usuário && u.senha === senha);
    return foundUser || null;
}
