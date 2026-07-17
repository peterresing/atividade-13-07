let alunos = [
    {nome: "Sabor", nota: [5, 7, 4]},
    {nome: "Peter", nota: [10, 10, 10]},
    {nome: "Pessi", nota: [4, 6, 1]}
];

function buscarAluno(nome){
    for(let i = 0; i < alunos.length; i++){
        if(alunos[i].nome.toLowerCase() === nome.toLowerCase()){
            return alunos[i]
    }
  }
}



function calcularMedia(aluno){
    if(aluno.nota.length === 0){
        return 0
   }
   let soma = 0;
   for(let i = 0; i < aluno.nota.length; i++){
    soma = soma + aluno.nota[i]
   }
   return soma / aluno.nota.length
}

function aprovacao(aluno){
    if(aluno <= 4){
       return "REPROVADO"
}
    if(aluno > 4 && aluno < 6){
        return "RECUPERAÇÃO"
    }
    else{
        return "APROVADO"
    }

}


console.log(alunos[2].nome)
let media = calcularMedia(alunos[2])
console.log(aprovacao(media))