const detalheFilme = document.getElementById("detalhe-filme");
const numeroFilme = Number(new URLSearchParams(window.location.search).get("numero"));
const catalogo = window.playboxCatalog;

function criarParagrafo(texto) {
    const paragrafo = document.createElement("p");
    paragrafo.textContent = texto;
    return paragrafo;
}

function criarCampo(rotulo, valor) {
    const paragrafo = document.createElement("p");
    const tituloCampo = document.createElement("strong");
    tituloCampo.textContent = `${rotulo}: `;
    paragrafo.append(tituloCampo, valor);
    return paragrafo;
}

if (!catalogo || !Number.isInteger(numeroFilme) || numeroFilme < 1 || numeroFilme > catalogo.titles.length) {
    document.title = "Filme não encontrado | Playbox";
    detalheFilme.replaceChildren(
        Object.assign(document.createElement("h2"), { textContent: "Filme não encontrado" }),
        criarParagrafo("O número informado não corresponde a um filme do catálogo.")
    );
} else {
    const titulo = catalogo.titles[numeroFilme - 1];
    const dados = window.playboxMovieDetails?.[numeroFilme];
    const ano = catalogo.titles2026.has(titulo) ? "2026" : "Consulte o ano de lançamento";
    const imagemNome = numeroFilme === 12 ? "foto12.jpg" : `foto${String(numeroFilme).padStart(3, "0")}.jpg`;
    if (dados && window.playboxRenderMovieDetails) {
        document.title = `${dados.title} | Playbox`;
        window.playboxRenderMovieDetails(
            detalheFilme,
            dados.title,
            dados,
            `../img/${imagemNome}`
        );
    } else {
    const tituloPagina = document.createElement("h2");
    const imagem = document.createElement("img");
    const avaliacao = criarCampo("Avaliação", "Ainda não avaliado");
    const anoParagrafo = criarCampo("Ano", ano);
    const genero = criarCampo("Gênero", "Não informado");
    const diretor = criarCampo("Diretor", "Não informado");
    const sinopse = criarParagrafo("Sinopse ainda não adicionada.");

    document.title = `${titulo} | Playbox`;
    tituloPagina.textContent = titulo;
    imagem.src = `../img/${imagemNome}`;
    imagem.alt = `Pôster de ${titulo}`;
    imagem.addEventListener("error", () => {
        imagem.remove();
        const indisponivel = document.createElement("p");
        indisponivel.className = "poster-indisponivel";
        indisponivel.textContent = "Pôster ainda não disponível";
        detalheFilme.insertBefore(indisponivel, anoParagrafo);
    }, { once: true });
    detalheFilme.replaceChildren(tituloPagina, imagem, avaliacao, anoParagrafo, genero, diretor, sinopse);
    }
}
