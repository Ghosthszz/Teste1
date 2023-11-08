//usuários.js

const  usuários  =  [
    {  usuário : "usuário1" ,  senha : "senha123"  } ,
    {  usuário : "usuario2" ,  senha : "senha456"  } ,
    {  usuário : "sea@gmail.com" ,  senha : "Teste123"  } ,
 {  usuário : "design.sea@gmail.com" ,  senha : "subsarino"  } ,
{  usuário : "Thiagoanjos08" ,  senha : "123Mudar"  } ,
    // Adicione mais usuários conforme necessário
] ;

function  verificarCredenciais ( usuário ,  senha )  {
    retornar  usuários . find ( u  =>  u . usuário  ===  usuário  &&  u . senha  ===  senha ) ;
}