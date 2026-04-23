// 1. Dados
const glossario = {
    "API": "Conjunto de rotinas e padrões.",
    "DOM": "Estrutura de objetos que representa o HTML.",
    "JavaScript": "Linguagem de programação.",
    "Variável": "Espaço na memória para armazenar dados."
};

// 2. Função para exibir o glossário
function exibirGlossario() {
    const container = document.getElementById('container-glossario');
    let html = '<dl>'; // <dl> - lista de definição

    // 3. Ordenar os termos alfabeticamente
    const termosOrdenados = Object.keys(glossario).sort();

    // 4. Estruturar os dados
    termosOrdenados.forEach(termo => {
        html += `<dt><strong>${termo}</strong></dt>`;
        html += `<dd>${glossario[termo]}</dd>`;
    });

    html += '</dl>';
    container.innerHTML = html;
}

// Executa a função
exibirGlossario();