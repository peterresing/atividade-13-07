let alunos = [
    { nome: "Peter", nota: [8, 7, 9] },
    { nome: "Rodrigo", nota: [5, 10, 7] },
    { nome: "Sabooor", nota: [9, 7, 4] },
    { nome: "Ronaldo", nota: [] }

];

function calcularMedia(aluno) {

    if (aluno.nota.length === 0) {
        return 0
    }
    let soma = 0
    for (let nota of aluno.nota) {
        soma += nota
    }

    return soma / aluno.nota.length

}

function situacao(media) {

    if (media >= 6) {
        return "APROVADO"
    } else if (media >= 4 && media < 6) {
        return "RECUPERACAO"
    } else {
        return "REPROVADO"
    }

}

alunos.forEach(aluno => {

    let media = calcularMedia(aluno)

    let resultado = situacao(media)

    console.log(`${aluno.nome} Média: ${media.toFixed(1)} ${resultado}`)

});