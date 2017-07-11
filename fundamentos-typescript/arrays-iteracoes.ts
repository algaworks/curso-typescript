let notasAlunos: number[] = [10, 8, 8.5, 7];

// índices - in
for (let i in notasAlunos) {
    console.log(i);
}

// valores - of
for (let notaAluno of notasAlunos) {
    console.log(notaAluno);
}
