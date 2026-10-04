const destaques2026 = [
    { titulo: "Devoradores de Estrelas", categoria: "Ficção científica" },
    { titulo: "The Super Mario Galaxy Movie", categoria: "Animação" },
    { titulo: "Toy Story 5", categoria: "Animação" },
    { titulo: "The Devil Wears Prada 2", categoria: "Comédia" },
    { titulo: "Homem-Aranha: Um Novo Dia", categoria: "Ação" },
    { titulo: "Avengers: Doomsday", categoria: "Ação" },
    { titulo: "Dune: Part Three", categoria: "Ficção científica" },
    { titulo: "The Odyssey", categoria: "Aventura" },
    { titulo: "Michael", categoria: "Drama" },
    { titulo: "Scream 7", categoria: "Terror" },
    { titulo: "Mortal Kombat II", categoria: "Ação" },
    { titulo: "Hoppers", categoria: "Animação" },
    { titulo: "The Mandalorian and Grogu", categoria: "Ficção científica" },
    { titulo: "Supergirl", categoria: "Ação" },
    { titulo: "Wuthering Heights", categoria: "Drama" },
    { titulo: "Ready or Not 2: Here I Come", categoria: "Terror" },
    { titulo: "The Bride!", categoria: "Drama" },
    { titulo: "Practical Magic 2", categoria: "Fantasia" },
    { titulo: "The Hunger Games: Sunrise on the Reaping", categoria: "Aventura" },
    { titulo: "Jumanji 3", categoria: "Aventura" },
    { titulo: "Disclosure Day", categoria: "Ficção científica" },
    { titulo: "The Cat in the Hat", categoria: "Animação" },
    { titulo: "Moana (live-action)", categoria: "Aventura" }
];

const filtroGenero = document.getElementById("filtro-genero");
const listaLeaderboard = document.getElementById("lista-leaderboard");
const contadorLeaderboard = document.getElementById("contador-leaderboard");

function exibirLeaderboard() {
    const categoria = filtroGenero.value;
    const confirmados = destaques2026.filter(filme =>
        window.playboxCatalog?.availableTitles.includes(filme.titulo)
    );
    const filtrados = confirmados
        .filter(filme => categoria === "Todos" || filme.categoria === categoria)
        .slice(0, 12);

    listaLeaderboard.replaceChildren();
    filtrados.forEach((filme, indice) => {
        const item = document.createElement("li");
        const numero = document.createElement("span");
        const titulo = document.createElement("strong");
        const etiqueta = document.createElement("span");
        const filmeNumero = window.playboxCatalog?.titles.indexOf(filme.titulo) + 1;
        const link = document.createElement("a");
        item.className = "item-leaderboard";
        numero.className = "numero-leaderboard";
        numero.textContent = String(indice + 1).padStart(2, "0");
        titulo.textContent = filme.titulo;
        etiqueta.className = "genero-leaderboard";
        etiqueta.textContent = filme.categoria;
        link.className = "link-leaderboard";
        link.href = window.playboxCatalog?.detailPages[filme.titulo]
            || (filmeNumero > 0 ? `paginas/item${String(filmeNumero).padStart(3, "0")}.html` : "#");
        link.append(numero, titulo);
        item.append(link, etiqueta);
        listaLeaderboard.append(item);
    });

    contadorLeaderboard.textContent = `${filtrados.length} de ${confirmados.length} destaques com informações`;
}

filtroGenero.addEventListener("change", exibirLeaderboard);
exibirLeaderboard();
