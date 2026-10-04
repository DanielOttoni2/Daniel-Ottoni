const filmesAtuais = [
    ["O Poderoso Chefão", "foto001.jpg", "paginas/item01.html"],
    ["Vingadores: Ultimato", "foto002.jpg", "paginas/item02.html"],
    ["A Ilha do Medo", "foto003.jpg", "paginas/item03.html"],
    ["Devoradores de Estrelas", "foto004.jpg", "paginas/item04.html"],
    ["Homem-Aranha: Um Novo Dia", "foto005.jpg", "paginas/item05.html"],
    ["Enrolados", "foto006.jpg", "paginas/item06.html"],
    ["Guardiões da Galáxia Vol. 2", "foto007.jpg", "paginas/item07.html"],
    ["Kung Fu Panda 2", "foto008.jpg", "paginas/item08.html"],
    ["Velozes & Furiosos 7", "foto009.jpg", "paginas/item09.html"],
    ["Rocky IV", "foto010.jpg", "paginas/item10.html"],
    ["Esposa de Mentirinha", "foto011.jpg", "paginas/item11.html"],
    ["Mistério no Mediterrâneo", "foto12.jpg", "paginas/item12.html"]
];

const filmes2026 = [
    "Devoradores de Estrelas", "The Super Mario Galaxy Movie", "Toy Story 5",
    "The Devil Wears Prada 2", "Homem-Aranha: Um Novo Dia", "Avengers: Doomsday",
    "Dune: Part Three", "The Odyssey", "Michael", "Scream 7", "Mortal Kombat II",
    "Hoppers", "The Mandalorian and Grogu", "Supergirl", "Wuthering Heights",
    "Ready or Not 2: Here I Come", "The Bride!", "Practical Magic 2",
    "The Hunger Games: Sunrise on the Reaping", "Jumanji 3", "Disclosure Day",
    "The Cat in the Hat", "Moana (live-action)"
];

const outrosFilmes = [
    "The Shawshank Redemption", "The Godfather Part II", "The Dark Knight",
    "12 Angry Men", "Schindler's List", "The Lord of the Rings: The Return of the King",
    "Pulp Fiction", "The Good, the Bad and the Ugly", "The Lord of the Rings: The Fellowship of the Ring",
    "Fight Club", "Forrest Gump", "The Lord of the Rings: The Two Towers",
    "Inception", "Star Wars: Episode V - The Empire Strikes Back", "The Matrix",
    "Goodfellas", "One Flew Over the Cuckoo's Nest", "Seven Samurai",
    "It's a Wonderful Life", "The Silence of the Lambs", "Saving Private Ryan",
    "City of God", "Life Is Beautiful", "The Green Mile", "Interstellar",
    "Terminator 2: Judgment Day", "Back to the Future", "Spirited Away",
    "Psycho", "The Pianist", "Parasite", "Gladiator", "The Lion King",
    "The Departed", "Whiplash", "The Prestige", "The Usual Suspects",
    "Casablanca", "Grave of the Fireflies", "Cinema Paradiso", "The Intouchables",
    "Modern Times", "Rear Window", "Once Upon a Time in the West", "Alien",
    "City Lights", "Apocalypse Now", "Django Unchained", "Memento",
    "Raiders of the Lost Ark", "The Lives of Others", "WALL-E", "Sunset Boulevard",
    "Paths of Glory", "The Shining", "The Great Dictator", "Avengers: Infinity War",
    "Witness for the Prosecution", "Aliens", "American Beauty", "Dr. Strangelove",
    "Oldboy", "Coco", "Amadeus", "Toy Story", "Braveheart", "Joker",
    "Princess Mononoke", "Your Name", "Once Upon a Time in America", "3 Idiots",
    "Good Will Hunting", "Inglourious Basterds", "Requiem for a Dream", "Come and See",
    "Toy Story 3", "The Hunt", "Eternal Sunshine of the Spotless Mind", "The Truman Show",
    "The Wolf of Wall Street", "Green Book", "Snatch", "A Separation",
    "Lawrence of Arabia", "The Kid", "The Father", "Incendies", "Heat",
    "The Grand Budapest Hotel", "Pan's Labyrinth", "My Neighbor Totoro", "Up",
    "The Third Man", "The Secret in Their Eyes", "The Treasure of the Sierra Madre",
    "Monty Python and the Holy Grail", "There Will Be Blood", "Rashomon",
    "No Country for Old Men", "The Apartment", "The Seventh Seal", "A Beautiful Mind",
    "The Bridge on the River Kwai", "Die Hard", "The Big Lebowski", "Blade Runner",
    "The Thing", "Full Metal Jacket", "The Elephant Man", "Fargo",
    "The Terminator", "Groundhog Day", "The Iron Giant", "Mary and Max",
    "The Sound of Music", "The Breakfast Club", "Stand by Me", "The Princess Bride",
    "Amélie", "City of Women", "The Lives of Others", "The King's Speech",
    "Slumdog Millionaire", "Black Swan", "The Social Network", "The Pianist",
    "The Curious Case of Benjamin Button", "The Imitation Game", "Dunkirk",
    "1917", "The Revenant", "Mad Max: Fury Road", "Spider-Man: Into the Spider-Verse",
    "Spider-Man: Across the Spider-Verse", "Finding Nemo", "Inside Out",
    "Inside Out 2", "Ratatouille", "Monsters, Inc.", "Finding Dory",
    "The Incredibles", "Incredibles 2", "Shrek", "Shrek 2", "How to Train Your Dragon",
    "How to Train Your Dragon 2", "Kung Fu Panda", "Despicable Me", "Minions",
    "Frozen", "Frozen II", "Moana", "Zootopia", "Encanto", "Luca",
    "Soul", "Turning Red", "The Lego Movie", "Coraline", "Kubo and the Two Strings",
    "Fantastic Mr. Fox", "Isle of Dogs", "The Nightmare Before Christmas",
    "The Little Mermaid", "Beauty and the Beast", "Aladdin", "Mulan",
    "The Jungle Book", "Pinocchio", "Dumbo", "Cinderella", "Snow White and the Seven Dwarfs",
    "The Wizard of Oz", "E.T. the Extra-Terrestrial", "Jaws", "Jurassic Park",
    "The Lost World: Jurassic Park", "King Kong", "Godzilla", "The Mummy",
    "Pirates of the Caribbean: The Curse of the Black Pearl", "The Bourne Identity",
    "The Bourne Supremacy", "Mission: Impossible", "Mission: Impossible - Fallout",
    "Top Gun", "Top Gun: Maverick", "Rocky", "Creed", "Raging Bull",
    "The Karate Kid", "Million Dollar Baby", "Ford v Ferrari", "Rush",
    "The Blind Side", "Remember the Titans", "Moneyball", "The Big Short",
    "Catch Me If You Can", "The Terminal", "Cast Away", "The Sixth Sense",
    "Unbreakable", "Signs", "The Village", "The Exorcist", "The Conjuring",
    "A Nightmare on Elm Street", "Halloween", "Friday the 13th", "Get Out",
    "Us", "A Quiet Place", "The Babadook", "Hereditary", "Midsommar",
    "The Blair Witch Project", "The Ring", "It", "The Shining",
    "The Grand Budapest Hotel", "La La Land", "Whiplash", "Birdman",
    "Moonlight", "12 Years a Slave", "The Shape of Water", "Spotlight",
    "Argo", "The Artist", "Slumdog Millionaire", "The King's Speech",
    "The Help", "Hidden Figures", "Little Women", "Pride & Prejudice",
    "Sense and Sensibility", "Atonement", "The Notebook", "Before Sunrise",
    "Before Sunset", "Before Midnight", "When Harry Met Sally", "Notting Hill",
    "Four Weddings and a Funeral", "The Holiday", "Crazy Rich Asians",
    "The Devil Wears Prada", "Legally Blonde", "Mean Girls", "Clueless",
    "Groundhog Day", "The 40-Year-Old Virgin", "Bridesmaids", "The Hangover",
    "Superbad", "Ferris Bueller's Day Off", "Home Alone", "Paddington 2",
    "The Goonies", "Ghostbusters", "Back to the Future Part II",
    "The Fifth Element", "Edge of Tomorrow", "Arrival", "The Martian",
    "Gravity", "Dune", "Dune: Part Two", "Blade Runner 2049", "Ex Machina",
    "Her", "District 9", "Children of Men", "The Hunger Games", "The Maze Runner",
    "Harry Potter and the Sorcerer's Stone", "Harry Potter and the Prisoner of Azkaban",
    "Harry Potter and the Deathly Hallows: Part 2", "Fantastic Beasts and Where to Find Them",
    "The Hobbit: An Unexpected Journey", "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    "Pirates of the Caribbean: Dead Man's Chest", "The Avengers", "Avengers: Age of Ultron",
    "Captain America: The Winter Soldier", "Captain America: Civil War", "Black Panther",
    "Doctor Strange", "Thor: Ragnarok", "Iron Man", "Guardians of the Galaxy",
    "Ant-Man", "Shang-Chi and the Legend of the Ten Rings", "Logan", "Deadpool",
    "X-Men: Days of Future Past", "Spider-Man: No Way Home", "Spider-Man: Homecoming",
    "The Batman", "Batman Begins", "The Dark Knight Rises", "Joker: Folie à Deux",
    "Superman", "Wonder Woman", "Aquaman", "The Suicide Squad", "V for Vendetta",
    "Watchmen", "300", "Sin City", "Kill Bill: Vol. 1", "Kill Bill: Vol. 2",
    "Reservoir Dogs", "Jackie Brown", "The Hateful Eight", "Once Upon a Time in Hollywood",
    "The Irishman", "The Curious Case of Benjamin Button", "The Grand Budapest Hotel",
    "The Royal Tenenbaums", "Lost in Translation", "Almost Famous", "The Big Short",
    "The Social Network", "Steve Jobs", "Oppenheimer", "Barbie", "The Notebook",
    "The Sound of Metal", "Everything Everywhere All at Once", "The Whale",
    "The Banshees of Inisherin", "The Fabelmans", "Past Lives", "Anatomy of a Fall",
    "Poor Things", "The Zone of Interest", "The Holdovers", "Killers of the Flower Moon",
    "The Florida Project", "Lady Bird", "Call Me by Your Name", "The Farewell",
    "Jojo Rabbit", "The Grand Budapest Hotel", "The Menu", "Knives Out",
    "Glass Onion", "The Nice Guys", "Kiss Kiss Bang Bang", "Baby Driver",
    "Drive", "Nightcrawler", "Prisoners", "Zodiac", "Gone Girl",
    "Shutter Island", "The Girl with the Dragon Tattoo", "Memories of Murder",
    "The Handmaiden", "Decision to Leave", "Train to Busan", "The Wailing",
    "Oldboy", "Lady Vengeance", "The Host", "The Raid", "The Raid 2",
    "Crouching Tiger, Hidden Dragon", "Hero", "House of Flying Daggers",
    "Ip Man", "Infernal Affairs", "The Farewell", "Everything Everywhere All at Once",
    "The Motorcycle Diaries", "Roma", "Y Tu Mamá También", "Amores Perros",
    "The Secret in Their Eyes", "Wild Tales", "The Lives of Others", "Run Lola Run",
    "Good Bye, Lenin!", "The Intouchables", "Amélie", "The Diving Bell and the Butterfly",
    "The 400 Blows", "Breathless", "The Grand Illusion", "Jean de Florette",
    "Cinema Paradiso", "Life Is Beautiful", "The Great Beauty", "La Dolce Vita",
    "8½", "Bicycle Thieves", "The Leopard", "The Battle of Algiers",
    "The Passion of Joan of Arc", "Metropolis", "The Cabinet of Dr. Caligari",
    "Nosferatu", "The General", "City Lights", "Modern Times",
    "The Gold Rush", "Singin' in the Rain", "Some Like It Hot",
    "12 Angry Men", "To Kill a Mockingbird", "The Graduate", "Network",
    "One Flew Over the Cuckoo's Nest", "The Deer Hunter", "Platoon",
    "The Color Purple", "Do the Right Thing", "Boyz n the Hood",
    "Thelma & Louise", "Unforgiven", "Dances with Wolves", "The Last of the Mohicans",
    "Braveheart", "Troy", "Kingdom of Heaven", "Master and Commander: The Far Side of the World",
    "The Last Samurai", "Crouching Tiger, Hidden Dragon", "The Revenant",
    "The Grand Budapest Hotel", "The Artist", "The Shape of Water",
    "A Star Is Born", "Bohemian Rhapsody", "Rocketman", "Walk the Line",
    "Amadeus", "Ray", "Whiplash", "Almost Famous", "School of Rock",
    "The Blues Brothers", "Inside Llewyn Davis", "Once", "Sing Street",
    "The Greatest Showman", "Les Misérables", "Chicago", "Moulin Rouge!",
    "West Side Story", "Fiddler on the Roof", "The Sound of Music",
    "The Rocky Horror Picture Show", "Hairspray", "Mamma Mia!",
    "The Princess Diaries", "The Parent Trap", "Matilda", "Babe",
    "The Iron Giant", "The Secret Garden", "The NeverEnding Story",
    "The Muppet Movie", "Who Framed Roger Rabbit", "The Lego Batman Movie",
    "Puss in Boots: The Last Wish", "The Mitchells vs. the Machines",
    "The Wild Robot", "Klaus", "The Boy and the Heron", "Weathering with You",
    "A Silent Voice", "Perfect Blue", "Akira", "Ghost in the Shell",
    "Paprika", "The Tale of the Princess Kaguya", "Wolf Children",
    "The Girl Who Leapt Through Time", "Howl's Moving Castle",
    "Castle in the Sky", "Nausicaä of the Valley of the Wind",
    "The Wind Rises", "Porco Rosso", "Whisper of the Heart",
    "The Secret World of Arrietty", "Ponyo", "The Red Turtle",
    "Fantastic Beasts: The Crimes of Grindelwald", "The Lord of the Rings",
    "The Hobbit: The Desolation of Smaug", "The Hobbit: The Battle of the Five Armies",
    "Star Wars", "Star Wars: Episode IV - A New Hope", "Star Wars: Episode VI - Return of the Jedi",
    "Star Wars: The Force Awakens", "Rogue One: A Star Wars Story",
    "Star Wars: The Last Jedi", "Star Wars: The Rise of Skywalker",
    "The Empire Strikes Back", "The Return of the King", "The Fellowship of the Ring",
    "The Two Towers", "The Godfather", "The Godfather Part III",
    "The French Connection", "The Sting", "Chinatown", "Dog Day Afternoon",
    "Taxi Driver", "Raging Bull", "The Conversation", "Serpico",
    "A Clockwork Orange", "Barry Lyndon", "Full Metal Jacket", "Eyes Wide Shut",
    "2001: A Space Odyssey", "Dr. Strangelove", "Paths of Glory",
    "The Bridge on the River Kwai", "Lawrence of Arabia", "Doctor Zhivago",
    "Ben-Hur", "Spartacus", "The Ten Commandments", "Cleopatra",
    "The Great Escape", "The Dirty Dozen", "The Thin Red Line",
    "Letters from Iwo Jima", "Hacksaw Ridge", "Jojo Rabbit", "The Pianist",
    "The Imitation Game", "Darkest Hour", "The King's Speech",
    "A Beautiful Mind", "The Theory of Everything", "The Big Short",
    "The Pursuit of Happyness", "Erin Brockovich", "Philadelphia",
    "Rain Man", "Kramer vs. Kramer", "Ordinary People",
    "The Shawshank Redemption", "The Green Mile", "Mystic River",
    "Gran Torino", "Million Dollar Baby", "Unforgiven", "Mystic River",
    "The Bridges of Madison County", "A River Runs Through It",
    "The Secret Life of Walter Mitty", "The Pursuit of Happyness",
    "The Curious Case of Benjamin Button", "The Truman Show",
    "Eternal Sunshine of the Spotless Mind", "Being John Malkovich",
    "Adaptation", "The Lobster", "The Favourite", "The Killing of a Sacred Deer",
    "The Lighthouse", "The Witch", "The Northman", "The Green Knight",
    "The Fall", "Pan's Labyrinth", "The Shape of Water", "Edward Scissorhands",
    "Beetlejuice", "Big Fish", "The Nightmare Before Christmas",
    "Coraline", "Beetlejuice", "Labyrinth", "The Dark Crystal",
    "The Princess Bride", "Stardust", "The NeverEnding Story",
    "The Secret of NIMH", "The Last Unicorn", "The Muppet Christmas Carol",
    "A Christmas Story", "It's a Wonderful Life", "Miracle on 34th Street",
    "Home Alone 2: Lost in New York", "Elf", "The Polar Express",
    "National Lampoon's Christmas Vacation", "Love Actually",
    "The Holiday", "About Time", "Groundhog Day", "Palm Springs",
    "The Big Sick", "500 Days of Summer", "10 Things I Hate About You",
    "The Perks of Being a Wallflower", "Almost Famous",
    "The Edge of Seventeen", "The Spectacular Now", "Juno",
    "Little Miss Sunshine", "The Royal Tenenbaums", "Rushmore",
    "Moonrise Kingdom", "Frances Ha", "Lady Bird", "Booksmart",
    "The Grand Budapest Hotel", "The Darjeeling Limited", "The French Dispatch",
    "The Life Aquatic with Steve Zissou", "Fantastic Mr. Fox",
    "The Royal Tenenbaums", "The Big Lebowski", "O Brother, Where Art Thou?",
    "Fargo", "Burn After Reading", "A Serious Man", "Inside Llewyn Davis",
    "No Country for Old Men", "True Grit", "The Ballad of Buster Scruggs",
    "The Assassination of Jesse James by the Coward Robert Ford",
    "The Place Beyond the Pines", "Blue Valentine", "Manchester by the Sea",
    "Marriage Story", "The Squid and the Whale", "The Wrestler",
    "Black Swan", "Requiem for a Dream", "The Fountain", "Pi",
    "The Grand Budapest Hotel", "The Tree of Life", "The Thin Red Line",
    "A Hidden Life", "The New World", "The Last Emperor",
    "Crouching Tiger, Hidden Dragon", "Hero", "The Farewell",
    "Minari", "The Florida Project", "Moonlight", "If Beale Street Could Talk",
    "The Hate U Give", "Selma", "Malcolm X", "12 Years a Slave",
    "The Color Purple", "Hidden Figures", "The Help",
    "The Pursuit of Happyness", "Remember the Titans", "Coach Carter",
    "The Blind Side", "Creed II", "The Fighter", "Warrior",
    "The Wrestler", "Foxcatcher", "I, Tonya", "The Iron Claw",
    "Chariots of Fire", "Cool Runnings", "Rudy", "Hoosiers",
    "A League of Their Own", "Field of Dreams", "The Sandlot",
    "Rush", "Senna", "Free Solo", "Hoop Dreams",
    "March of the Penguins", "Man on Wire", "Searching for Sugar Man",
    "Won't You Be My Neighbor?", "Apollo 11", "Free Solo",
    "The Act of Killing", "13th", "My Octopus Teacher",
    "Jiro Dreams of Sushi", "Icarus", "The Cove", "Grizzly Man"
];

const imagensAtuais = new Map(filmesAtuais.map(([titulo, imagem, pagina]) => [titulo, { imagem, pagina }]));
const todosOsFilmes = [...new Set([...filmesAtuais.map(([titulo]) => titulo), ...filmes2026, ...outrosFilmes])].slice(0, 250);
const filmesComDados = todosOsFilmes
    .map((titulo, indice) => ({ titulo, numero: indice + 1 }))
    .filter(filme => window.playboxMovieDetails?.[filme.numero]);
window.playboxCatalog = {
    titles: todosOsFilmes,
    detailPages: Object.fromEntries(filmesAtuais.map(([titulo, , pagina]) => [titulo, pagina])),
    titles2026: new Set(filmes2026),
    availableTitles: filmesComDados.map(filme => filme.titulo)
};
const listaCatalogo = document.getElementById("lista-catalogo");
const buscaFilmes = document.getElementById("busca-filmes");
const contadorFilmes = document.getElementById("contador-filmes");

function exibirCatalogo() {
    if (!listaCatalogo || !buscaFilmes || !contadorFilmes) {
        return;
    }

    const busca = buscaFilmes.value.trim().toLocaleLowerCase("pt-BR");
    const filtrados = filmesComDados.filter(filme =>
        filme.titulo.toLocaleLowerCase("pt-BR").includes(busca)
    );
    listaCatalogo.replaceChildren();

    filtrados.forEach(({ titulo, numero: numeroFilme }) => {
        const filmeAtual = imagensAtuais.get(titulo);
        const item = document.createElement("li");
        const link = document.createElement("a");
        const capa = document.createElement("span");
        const nome = document.createElement("strong");
        const numero = document.createElement("span");

        item.className = "item-catalogo";
        link.className = "cartao-catalogo";
        link.href = filmeAtual
            ? filmeAtual.pagina
            : `paginas/item${String(numeroFilme).padStart(3, "0")}.html`;
        capa.className = "capa-catalogo";
        const imagem = document.createElement("img");
        imagem.src = `img/${filmeAtual ? filmeAtual.imagem : `foto${String(numeroFilme).padStart(3, "0")}.jpg`}`;
        imagem.alt = `Pôster de ${titulo}`;
        imagem.loading = "lazy";
        imagem.addEventListener("error", () => {
            imagem.remove();
            capa.textContent = titulo;
        }, { once: true });
        capa.append(imagem);
        nome.textContent = titulo;
        numero.className = "numero-catalogo";
        numero.textContent = `#${numeroFilme}`;
        link.append(capa, nome, numero);
        item.append(link);
        listaCatalogo.append(item);
    });

    contadorFilmes.textContent = `${filtrados.length} de ${filmesComDados.length} filmes com informações`;
}

if (buscaFilmes) {
    buscaFilmes.addEventListener("input", exibirCatalogo);
    exibirCatalogo();
}
