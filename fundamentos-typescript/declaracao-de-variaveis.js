// var, let e const
// const
function iniciarTime(iniciaJogoEmUberlandia) {
    var nome = 'Messi e amigos';
    var cidade = 'em São Paulo';
    if (iniciaJogoEmUberlandia) {
        cidade = 'em Uberlândia';
    }
    // nome = 'Ronaldo e amigos';
    console.log(nome + " v\u00E3o jogar " + cidade);
}
iniciarTime(true);
