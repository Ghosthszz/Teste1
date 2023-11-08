//usuários.js

const  usuarios  =  [
    {  usuario : "usuário1" ,  senha : "senha123"  } ,
    {  usuario : "usuario2" ,  senha : "senha456"  } ,
    {  usuario : "sea@gmail.com" ,  senha : "Teste123"  } ,
 {  usuario : "design.sea@gmail.com" ,  senha : "subsarino"  } ,
{  usuario : "Thiagoanjos08" ,  senha : "123Mudar"  } ,
   

function  verificarCredenciais ( usuario ,  senha )  {
    retornar  usuários . find ( u  =>  u . usuário  ===  usuário  &&  u . senha  ===  senha ) ;
}