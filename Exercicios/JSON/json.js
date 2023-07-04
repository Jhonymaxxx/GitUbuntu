let pessoa = {nome:"jhony",
                sexo:"masculino",
            idade:36};

pessoa.nome = "jhony Max";
pessoa.idade = 37;

console.log(pessoa)
console.log(pessoa.idade)
console.log(pessoa['sexo'])

let listaCompras = [777,"batata","tomate","cebola","laranja",
                    "uva","ovos",pessoa];
console.log(listaCompras.sort())