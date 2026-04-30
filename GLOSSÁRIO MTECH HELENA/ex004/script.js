document.addEventListener("DOMContentLoaded", () => {
    const campoBusca = document.getElementById("campoBusca");
    const listaItens = document.getElementById("listaItens").getElementsByTagName("li");

    // Adiciona o evento de escuta para cada tecla solta (keyup)
    campoBusca.addEventListener("keyup", (event) => {
        const termoBusca = event.target.value.toLowerCase();

        // Loop por todos os itens da lista
        for (let i = 0; i < listaItens.length; i++) {
            const item = listaItens[i];
            const textoItem = item.textContent.toLowerCase();

            // Verifica se o texto do item inclui o termo buscado
            if (textoItem.includes(termoBusca)) {
                item.classList.remove("escondido"); // Mostra
            } else {
                item.classList.add("escondido"); // Esconde
            }
        }
    });
});