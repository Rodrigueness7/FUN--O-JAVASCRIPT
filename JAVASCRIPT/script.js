function criarAluno(nome,n1,n2){
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,

        media: function(){
            return (this.nota1 + this.nota2) /2;
        }
    }
}

var turma = [
    criarAluno("Samuel", 9, 8),
    criarAluno("Danilo", 6, 7),
]

function passou(media){
   
    if( media > 7){
        return "Aprovado"
    }
    else{
        return "Reprovado"
    }
}

for(var aluno of turma){
   
   console.log(aluno.nome + " - " + aluno.media() + " - " +
   passou(aluno.media()));
}