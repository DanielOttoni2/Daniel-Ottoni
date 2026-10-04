window.playboxRenderMovieDetails = function (section, title, movie, localPosterPath) {
    const heading = document.createElement("h2");
    const poster = document.createElement("img");
    const fields = [
        ["Avaliação", movie.rating == null ? "Não informado" : `${movie.rating}/10`],
        ["Ano", movie.year ?? "Não informado"],
        ["Data de lançamento", movie.releaseDate || "Não informada"],
        ["Título original", movie.originalTitle || "Não informado"],
        ["Gênero", movie.genres?.length ? movie.genres.join(", ") : "Não informado"],
        ["Diretor", movie.director || "Não informado"]
    ];

    heading.textContent = title;
    poster.src = movie.poster || localPosterPath;
    poster.alt = `Pôster de ${title}`;
    poster.addEventListener("error", () => {
        const localPoster = new URL(localPosterPath, document.baseURI).href;
        if (movie.poster && poster.src !== localPoster) {
            poster.src = localPosterPath;
            return;
        }
        poster.remove();
        const placeholder = document.createElement("p");
        placeholder.className = "poster-indisponivel";
        placeholder.textContent = "Pôster ainda não disponível";
        section.insertBefore(placeholder, section.children[1] || null);
    });

    const content = [heading, poster];
    fields.forEach(([label, value]) => {
        const paragraph = document.createElement("p");
        const strong = document.createElement("strong");
        strong.textContent = `${label}: `;
        paragraph.append(strong, String(value));
        content.push(paragraph);
    });

    content.push(Object.assign(document.createElement("p"), {
        textContent: movie.overview || "Sinopse ainda não adicionada."
    }));

    if (movie.tmdbUrl) {
        const sourceLink = document.createElement("a");
        sourceLink.href = movie.tmdbUrl;
        sourceLink.target = "_blank";
        sourceLink.rel = "noopener noreferrer";
        sourceLink.textContent = "Ver este filme no TMDB";
        content.push(sourceLink);
    }

    section.replaceChildren(...content);
};

document.querySelectorAll(".detalhe").forEach(section => {
    const poster = section.querySelector("img");
    const match = poster && poster.getAttribute("src").match(/foto(\d+)\.jpg$/);
    if (!match) return;
    const movie = window.playboxMovieDetails?.[Number(match[1])];
    if (movie) {
        window.playboxRenderMovieDetails(section, movie.title, movie, poster.getAttribute("src"));
    }
});
