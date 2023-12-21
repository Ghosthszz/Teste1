//usuários.js

const  usuários  =  [
    {  usuário : "usuário1" ,  senha : "senha123"  } ,
    {  usuário : "ghosthszz_" ,  senha : "Nathalia269576"  } ,
    {  usuário : "sea@gmail.com" ,  senha : "Teste123"  } ,
 {  usuário : "design.sea@gmail.com" ,  senha : "subsarino"  } ,
{  usuário : "Thiagoanjos08" ,  senha : "123Mudar"  } ,

] ;

function  verificarCredenciais ( usuário ,  senha )  {
    retornar  usuários . find ( u  =>  u . usuário  ===  usuário  &&  u . senha  ===  senha ) ;
}
