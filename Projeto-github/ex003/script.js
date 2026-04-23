function obterGenero() { 
    let genero;
    
    while (true) {
        genero = prompt("Digite seu gênero: masculino, feminino ou outro")
       
        if(genero === null) {
            alert("Cadastro cancelado.")
            return null;     
        }
        genero = genero.trim().toLowerCase();

        if (genero === "") {
            alert("O campo gênero não pode ficar vazio.")
            continue;
        }

        if (genero !== "masculino" && genero !== "feminino" && genero !== "outro") {
            alert("Digite apenas: masculino, feminino ou outro.")
            continue;
        }

        return genero;
    }
}
    
function iniciarCadastro() {
    let genero = obterGenero()
    
        if (genero === null) {
        document.getElementById("resultado").innerHTML =
        "<h2>Cadastro cancelado</h2><p>O usuário cancelou o preenchimento</p>"
        return;
        }

        document.getElementById("resultado").innerHTML =
        "<h2>Resultado</h2><p><strong>Gênero:</strong>" + genero + "</p>";
}            