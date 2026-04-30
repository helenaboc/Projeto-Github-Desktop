function iniciar() {
    const nome = prompt("Digite seu nome:");

    if (nome) {
        alert(`Bem-vindo(a), ${nome}!\nFaça sua pesquisa no glossário.`);
        console.log("Nome digitado:", nome);
    }
}

window.addEventListener("load", iniciar);

// =========================
// 🔎 ELEMENTOS
// =========================
const input = document.getElementById("searchInput");
const termos = document.querySelectorAll("dt");
const btn = document.getElementById("btnVoltar");
const links = document.querySelectorAll("nav a");

// =========================
// 🔤 NORMALIZA TEXTO
// =========================
function normalizar(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

// =========================
// 🎯 HIGHLIGHT
// =========================
function destacarTexto(elemento, filtro) {
    const textoOriginal = elemento.textContent;

    if (!filtro) {
        elemento.innerHTML = textoOriginal;
        return;
    }

    const regex = new RegExp(`(${filtro})`, "gi");

    elemento.innerHTML = textoOriginal.replace(
        regex,
        `<span class="highlight">$1</span>`
    );
}

// =========================
// 🔎 BUSCA
// =========================
function buscar(filtroOriginal) {
    const filtro = normalizar(filtroOriginal);

    let encontrou = false;
    let primeiroResultado = null;

    termos.forEach(dt => {
        const dd = dt.nextElementSibling;

        const textoDT = normalizar(dt.textContent);
        const textoDD = normalizar(dd.textContent);

        const corresponde =
            textoDT.includes(filtro) || textoDD.includes(filtro);

        dt.style.display = corresponde ? "" : "none";
        dd.style.display = corresponde ? "" : "none";

        destacarTexto(dt, filtroOriginal);
        destacarTexto(dd, filtroOriginal);

        if (corresponde && !primeiroResultado) {
            encontrou = true;
            primeiroResultado = dt;
        }
    });

    // 🧠 mensagem sem resultado
    let msg = document.getElementById("noResult");

    if (!encontrou) {
        if (!msg) {
            msg = document.createElement("p");
            msg.id = "noResult";
            msg.textContent = "Nenhum resultado encontrado 😕";
            document.body.appendChild(msg);
        }
    } else if (msg) {
        msg.remove();
    }

    // 📍 scroll até primeiro resultado
    if (primeiroResultado) {
        setTimeout(() => {
            primeiroResultado.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 100);
    }
}

// =========================
// 📍 NAVEGAÇÃO POR LETRA
// =========================
function navegarParaLetra(letra) {
    const secao = document.getElementById(letra);

    if (secao) {
        secao.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

// =========================
// 🔎 INPUT (BUSCA + LETRAS)
// =========================
let timeout;

input.addEventListener("input", () => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
        const valor = input.value.trim();

        // 📍 navegação por letra
        if (valor.length === 1 && /[a-zA-Z]/.test(valor)) {
            navegarParaLetra(valor.toUpperCase());
            return;
        }

        // 🔎 busca normal
        buscar(valor);

    }, 300);
});

// =========================
// ⬆️ BOTÃO VOLTAR AO TOPO
// =========================
window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
});

btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});