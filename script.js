// =====================================================
// IMPOSTOR FOOTBALL 2026 - script.js
// Titulares das seleções da Copa do Mundo 2026
// =====================================================

const JOGADORES = [
// ===== BRASILEIROS =====
{ name: “Ronaldo Fenômeno”, pos: “Brazil 🇧🇷 | Retired”, bio: “Extraterrestre”, wiki: “Ronaldo_(Brazilian_footballer)”, foot: “Right foot”, pos_type: “Forward”, continent: “South American” },
{ name: “Ronaldinho Gaúcho”, pos: “Brazil 🇧🇷 | Retired”, bio: “Freestyle”, wiki: “Ronaldinho”, foot: “Left foot”, pos_type: “Midfielder”, continent: “South American” },
{ name: “Rivaldo”, pos: “Brazil 🇧🇷 | Retired”, bio: “Bicicleta”, wiki: “Rivaldo”, foot: “Left foot”, pos_type: “Midfielder”, continent: “South American” },
{ name: “Romário”, pos: “Brazil 🇧🇷 | Retired”, bio: “Baixinho”, wiki: “Romário”, foot: “Right foot”, pos_type: “Forward”, continent: “South American” },
{ name: “Bebeto”, pos: “Brazil 🇧🇷 | Retired”, bio: “Bebê”, wiki: “Bebeto”, foot: “Right foot”, pos_type: “Forward”, continent: “South American” },
{ name: “Zico”, pos: “Brazil 🇧🇷 | Retired”, bio: “Galinho”, wiki: “Zico”, foot: “Right foot”, pos_type: “Midfielder”, continent: “South American” },
{ name: “Pelé”, pos: “Brazil 🇧🇷 | Retired”, bio: “Rei”, wiki: “Pelé”, foot: “Right foot”, pos_type: “Forward”, continent: “South American” },
{ name: “Garrincha”, pos: “Brazil 🇧🇷 | Retired”, bio: “Tortas”, wiki: “Garrincha”, foot: “Right foot”, pos_type: “Forward”, continent: “South American” },
{ name: “Roberto Carlos”, pos: “Brazil 🇧🇷 | Retired”, bio: “Foguete”, wiki: “Roberto_Carlos_(footballer)”, foot: “Left foot”, pos_type: “Defender”, continent: “South American” },
{ name: “Cafu”, pos: “Brazil 🇧🇷 | Retired”, bio: “Overlap”, wiki: “Cafu”, foot: “Right foot”, pos_type: “Defender”, continent: “South American” },
{ name: “Neymar Jr.”, pos: “Brazil 🇧🇷 | Al-Hilal”, bio: “Passinho”, wiki: “Neymar”, foot: “Right foot”, pos_type: “Forward”, continent: “South American” },
{ name: “Vinicius Jr.”, pos: “Brazil 🇧🇷 | Real Madrid”, bio: “Dança”, wiki: “Vinicius_Junior”, foot: “Right foot”, pos_type: “Forward”, continent: “South American” },
{ name: “Raphinha”, pos: “Brazil 🇧🇷 | Barcelona”, bio: “Capitão”, wiki: “Raphinha”, foot: “Right foot”, pos_type: “Forward”, continent: “South American” },
{ name: “Rodrygo”, pos: “Brazil 🇧🇷 | Real Madrid”, bio: “Decisivo”, wiki: “Rodrygo”, foot: “Right foot”, pos_type: “Forward”, continent: “South American” },
{ name: “Endrick”, pos: “Brazil 🇧🇷 | Real Madrid”, bio: “Prodígio”, wiki: “Endrick”, foot: “Right foot”, pos_type: “Forward”, continent: “South American” },
{ name: “Casemiro”, pos: “Brazil 🇧🇷 | Manchester United”, bio: “Destruidor”, wiki: “Casemiro”, foot: “Right foot”, pos_type: “Midfielder”, continent: “South American” },
{ name: “Bruno Guimarães”, pos: “Brazil 🇧🇷 | Newcastle”, bio: “Pitbull”, wiki: “Bruno_Guimarães”, foot: “Right foot”, pos_type: “Midfielder”, continent: “South American” },
{ name: “Alisson Becker”, pos: “Brazil 🇧🇷 | Liverpool”, bio: “Cabeçada”, wiki: “Alisson_Becker”, foot: “Right foot”, pos_type: “Goalkeeper”, continent: “South American” },
{ name: “Marquinhos”, pos: “Brazil 🇧🇷 | PSG”, bio: “Capitão”, wiki: “Marquinhos_(footballer)”, foot: “Right foot”, pos_type: “Defender”, continent: “South American” },

// ===== ARGENTINOS =====
{ name: “Diego Maradona”, pos: “Argentina 🇦🇷 | Retired”, bio: “Mão”, wiki: “Diego_Maradona”, foot: “Left foot”, pos_type: “Midfielder”, continent: “South American” },
{ name: “Gabriel Batistuta”, pos: “Argentina 🇦🇷 | Retired”, bio: “Batigol”, wiki: “Gabriel_Batistuta”, foot: “Right foot”, pos_type: “Forward”, continent: “South American” },
{ name: “Hernán Crespo”, pos: “Argentina 🇦🇷 | Retired”, bio: “Milão”, wiki: “Hernán_Crespo”, foot: “Right foot”, pos_type: “Forward”, continent: “South American” },
{ name: “Javier Zanetti”, pos: “Argentina 🇦🇷 | Retired”, bio: “Capitano”, wiki: “Javier_Zanetti”, foot: “Right foot”, pos_type: “Defender”, continent: “South American” },
{ name: “Sergio Agüero”, pos: “Argentina 🇦🇷 | Retired”, bio: “Agüeroooo”, wiki: “Sergio_Agüero”, foot: “Right foot”, pos_type: “Forward”, continent: “South American” },
{ name: “Lionel Messi”, pos: “Argentina 🇦🇷 | Inter Miami”, bio: “Qatar”, wiki: “Lionel_Messi”, foot: “Left foot”, pos_type: “Forward”, continent: “South American” },
{ name: “Lautaro Martínez”, pos: “Argentina 🇦🇷 | Inter Milan”, bio: “Toro”, wiki: “Lautaro_Martínez”, foot: “Right foot”, pos_type: “Forward”, continent: “South American” },
{ name: “Julián Álvarez”, pos: “Argentina 🇦🇷 | Atlético Madrid”, bio: “Aranha”, wiki: “Julián_Álvarez”, foot: “Right foot”, pos_type: “Forward”, continent: “South American” },
{ name: “Enzo Fernández”, pos: “Argentina 🇦🇷 | Chelsea”, bio: “Melhor jovem”, wiki: “Enzo_Fernández”, foot: “Right foot”, pos_type: “Midfielder”, continent: “South American” },
{ name: “Emiliano Martínez”, pos: “Argentina 🇦🇷 | Aston Villa”, bio: “Provocação”, wiki: “Emiliano_Martínez”, foot: “Right foot”, pos_type: “Goalkeeper”, continent: “South American” },

// ===== FRANCESES =====
{ name: “Zinedine Zidane”, pos: “France 🇫🇷 | Retired”, bio: “Cabeçada”, wiki: “Zinedine_Zidane”, foot: “Right foot”, pos_type: “Midfielder”, continent: “European” },
{ name: “Thierry Henry”, pos: “France 🇫🇷 | Retired”, bio: “Invencível”, wiki: “Thierry_Henry”, foot: “Left foot”, pos_type: “Forward”, continent: “European” },
{ name: “Patrick Vieira”, pos: “France 🇫🇷 | Retired”, bio: “Arsenal”, wiki: “Patrick_Vieira”, foot: “Right foot”, pos_type: “Midfielder”, continent: “European” },
{ name: “Robert Pires”, pos: “France 🇫🇷 | Retired”, bio: “Elegância”, wiki: “Robert_Pires”, foot: “Left foot”, pos_type: “Midfielder”, continent: “European” },
{ name: “Kylian Mbappé”, pos: “France 🇫🇷 | Real Madrid”, bio: “Foguete”, wiki: “Kylian_Mbappé”, foot: “Right foot”, pos_type: “Forward”, continent: “European” },
{ name: “Antoine Griezmann”, pos: “France 🇫🇷 | Atlético Madrid”, bio: “Fortnite”, wiki: “Antoine_Griezmann”, foot: “Right foot”, pos_type: “Forward”, continent: “European” },
{ name: “Ousmane Dembélé”, pos: “France 🇫🇷 | PSG”, bio: “Lesão”, wiki: “Ousmane_Dembélé”, foot: “Right foot”, pos_type: “Forward”, continent: “European” },
{ name: “Aurélien Tchouaméni”, pos: “France 🇫🇷 | Real Madrid”, bio: “Herdeiro”, wiki: “Aurélien_Tchouaméni”, foot: “Right foot”, pos_type: “Midfielder”, continent: “European” },

// ===== ESPANHÓIS =====
{ name: “Andrés Iniesta”, pos: “Spain 🇪🇸 | Retired”, bio: “Joanesburgo”, wiki: “Andrés_Iniesta”, foot: “Left foot”, pos_type: “Midfielder”, continent: “European” },
{ name: “Xavi Hernández”, pos: “Spain 🇪🇸 | Retired”, bio: “Tiki-taka”, wiki: “Xavi”, foot: “Right foot”, pos_type: “Midfielder”, continent: “European” },
{ name: “David Villa”, pos: “Spain 🇪🇸 | Retired”, bio: “Guaje”, wiki: “David_Villa”, foot: “Left foot”, pos_type: “Forward”, continent: “European” },
{ name: “Fernando Torres”, pos: “Spain 🇪🇸 | Retired”, bio: “Niño”, wiki: “Fernando_Torres”, foot: “Right foot”, pos_type: “Forward”, continent: “European” },
{ name: “Raúl González”, pos: “Spain 🇪🇸 | Retired”, bio: “Dedo”, wiki: “Raúl_(footballer)”, foot: “Right foot”, pos_type: “Forward”, continent: “European” },
{ name: “Sergio Ramos”, pos: “Spain 🇪🇸 | Vissel Kobe”, bio: “Cabeçada”, wiki: “Sergio_Ramos”, foot: “Right foot”, pos_type: “Defender”, continent: “European” },
{ name: “Carles Puyol”, pos: “Spain 🇪🇸 | Retired”, bio: “Cabelo”, wiki: “Carles_Puyol”, foot: “Right foot”, pos_type: “Defender”, continent: “European” },
{ name: “Iker Casillas”, pos: “Spain 🇪🇸 | Retired”, bio: “San Iker”, wiki: “Iker_Casillas”, foot: “Right foot”, pos_type: “Goalkeeper”, continent: “European” },
{ name: “Lamine Yamal”, pos: “Spain 🇪🇸 | Barcelona”, bio: “Milagre”, wiki: “Lamine_Yamal”, foot: “Right foot”, pos_type: “Forward”, continent: “European” },
{ name: “Pedri”, pos: “Spain 🇪🇸 | Barcelona”, bio: “Herdeiro”, wiki: “Pedri”, foot: “Right foot”, pos_type: “Midfielder”, continent: “European” },
{ name: “Gavi”, pos: “Spain 🇪🇸 | Barcelona”, bio: “Raiva”, wiki: “Gavi_(footballer)”, foot: “Right foot”, pos_type: “Midfielder”, continent: “European” },
{ name: “Rodri”, pos: “Spain 🇪🇸 | Manchester City”, bio: “Bola de Ouro”, wiki: “Rodri_(footballer)”, foot: “Right foot”, pos_type: “Midfielder”, continent: “European” },
{ name: “Álvaro Morata”, pos: “Spain 🇪🇸 | Milan”, bio: “Polêmica”, wiki: “Álvaro_Morata”, foot: “Right foot”, pos_type: “Forward”, continent: “European” },

// ===== PORTUGUESES =====
{ name: “Luís Figo”, pos: “Portugal 🇵🇹 | Retired”, bio: “Cabeça de porco”, wiki: “Luís_Figo”, foot: “Right foot”, pos_type: “Midfielder”, continent: “European” },
{ name: “Rui Costa”, pos: “Portugal 🇵🇹 | Retired”, bio: “Visão”, wiki: “Rui_Costa_(footballer,*born_1972)”, foot: “Right foot”, pos_type: “Midfielder”, continent: “European” },
{ name: “Eusébio”, pos: “Portugal 🇵🇹 | Retired”, bio: “Pantera”, wiki: “Eusébio”, foot: “Right foot”, pos_type: “Forward”, continent: “African” },
{ name: “Cristiano Ronaldo”, pos: “Portugal 🇵🇹 | Al-Nassr”, bio: “Siuuu”, wiki: “Cristiano_Ronaldo”, foot: “Right foot”, pos_type: “Forward”, continent: “European” },
{ name: “Bruno Fernandes”, pos: “Portugal 🇵🇹 | Manchester United”, bio: “Pênalti”, wiki: “Bruno_Fernandes*(footballer,_born_1994)”, foot: “Right foot”, pos_type: “Midfielder”, continent: “European” },
{ name: “Rafael Leão”, pos: “Portugal 🇵🇹 | Milan”, bio: “Turbo”, wiki: “Rafael_Leão”, foot: “Left foot”, pos_type: “Forward”, continent: “European” },
{ name: “Bernardo Silva”, pos: “Portugal 🇵🇹 | Manchester City”, bio: “Silencioso”, wiki: “Bernardo_Silva”, foot: “Right foot”, pos_type: “Midfielder”, continent: “European” },

// ===== INGLESES =====
{ name: “David Beckham”, pos: “England 🏴󠁧󠁢󠁥󠁮󠁧󠁿 | Retired”, bio: “Cueca”, wiki: “David_Beckham”, foot: “Right foot”, pos_type: “Midfielder”, continent: “European” },
{ name: “Wayne Rooney”, pos: “England 🏴󠁧󠁢󠁥󠁮󠁧󠁿 | Retired”, bio: “Raiva”, wiki: “Wayne_Rooney”, foot: “Right foot”, pos_type: “Forward”, continent: “European” },
{ name: “Steven Gerrard”, pos: “England 🏴󠁧󠁢󠁥󠁮󠁧󠁿 | Retired”, bio: “Escorregão”, wiki: “Steven_Gerrard”, foot: “Right foot”, pos_type: “Midfielder”, continent: “European” },
{ name: “Frank Lampard”, pos: “England 🏴󠁧󠁢󠁥󠁮󠁧󠁿 | Retired”, bio: “Fantasma”, wiki: “Frank_Lampard”, foot: “Right foot”, pos_type: “Midfielder”, continent: “European” },
{ name: “Michael Owen”, pos: “England 🏴󠁧󠁢󠁥󠁮󠁧󠁿 | Retired”, bio: “France98”, wiki: “Michael_Owen”, foot: “Right foot”, pos_type: “Forward”, continent: “European” },
{ name: “Paul Scholes”, pos: “England 🏴󠁧󠁢󠁥󠁮󠁧󠁿 | Retired”, bio: “Laranja”, wiki: “Paul_Scholes”, foot: “Right foot”, pos_type: “Midfielder”, continent: “European” },
{ name: “Jude Bellingham”, pos: “England 🏴󠁧󠁢󠁥󠁮󠁧󠁿 | Real Madrid”, bio: “Sevilha”, wiki: “Jude_Bellingham”, foot: “Right foot”, pos_type: “Midfielder”, continent: “European” },
{ name: “Harry Kane”, pos: “England 🏴󠁧󠁢󠁥󠁮󠁧󠁿 | Bayern de Munique”, bio: “Sem título”, wiki: “Harry_Kane”, foot: “Right foot”, pos_type: “Forward”, continent: “European” },
{ name: “Phil Foden”, pos: “England 🏴󠁧󠁢󠁥󠁮󠁧󠁿 | Manchester City”, bio: “Stockport”, wiki: “Phil_Foden”, foot: “Left foot”, pos_type: “Midfielder”, continent: “European” },
{ name: “Bukayo Saka”, pos: “England 🏴󠁧󠁢󠁥󠁮󠁧󠁿 | Arsenal”, bio: “Pênalti perdido”, wiki: “Bukayo_Saka”, foot: “Left foot”, pos_type: “Forward”, continent: “European” },
{ name: “Cole Palmer”, pos: “England 🏴󠁧󠁢󠁥󠁮󠁧󠁿 | Chelsea”, bio: “Gelo”, wiki: “Cole_Palmer”, foot: “Right foot”, pos_type: “Midfielder”, continent: “European” },

// ===== ALEMÃES =====
{ name: “Miroslav Klose”, pos: “Germany 🇩🇪 | Retired”, bio: “16 gols”, wiki: “Miroslav_Klose”, foot: “Right foot”, pos_type: “Forward”, continent: “European” },
{ name: “Oliver Kahn”, pos: “Germany 🇩🇪 | Retired”, bio: “Gorila”, wiki: “Oliver_Kahn”, foot: “Right foot”, pos_type: “Goalkeeper”, continent: “European” },
{ name: “Michael Ballack”, pos: “Germany 🇩🇪 | Retired”, bio: “Capitão”, wiki: “Michael_Ballack”, foot: “Right foot”, pos_type: “Midfielder”, continent: “European” },
{ name: “Gerd Müller”, pos: “Germany 🇩🇪 | Retired”, bio: “Bomber”, wiki: “Gerd_Müller”, foot: “Right foot”, pos_type: “Forward”, continent: “European” },
{ name: “Franz Beckenbauer”, pos: “Germany 🇩🇪 | Retired”, bio: “Kaiser”, wiki: “Franz_Beckenbauer”, foot: “Right foot”, pos_type: “Defender”, continent: “European” },
{ name: “Florian Wirtz”, pos: “Germany 🇩🇪 | Bayer Leverkusen”, bio: “Invicto”, wiki: “Florian_Wirtz”, foot: “Right foot”, pos_type: “Midfielder”, continent: “European” },
{ name: “Jamal Musiala”, pos: “Germany 🇩🇪 | Bayern de Munique”, bio: “Bambi”, wiki: “Jamal_Musiala”, foot: “Right foot”, pos_type: “Midfielder”, continent: “European” },
{ name: “Toni Kroos”, pos: “Germany 🇩🇪 | Retired”, bio: “Metrônomo”, wiki: “Toni_Kroos”, foot: “Right foot”, pos_type: “Midfielder”, continent: “European” },
{ name: “Manuel Neuer”, pos: “Germany 🇩🇪 | Bayern de Munique”, bio: “Sweeper”, wiki: “Manuel_Neuer”, foot: “Right foot”, pos_type: “Goalkeeper”, continent: “European” },

// ===== ITALIANOS =====
{ name: “Francesco Totti”, pos: “Italy 🇮🇹 | Retired”, bio: “Puppone”, wiki: “Francesco_Totti”, foot: “Right foot”, pos_type: “Forward”, continent: “European” },
{ name: “Roberto Baggio”, pos: “Italy 🇮🇹 | Retired”, bio: “Rabo de cavalo”, wiki: “Roberto_Baggio”, foot: “Right foot”, pos_type: “Midfielder”, continent: “European” },
{ name: “Andrea Pirlo”, pos: “Italy 🇮🇹 | Retired”, bio: “Barba”, wiki: “Andrea_Pirlo”, foot: “Right foot”, pos_type: “Midfielder”, continent: “European” },
{ name: “Gianluigi Buffon”, pos: “Italy 🇮🇹 | Retired”, bio: “GG”, wiki: “Gianluigi_Buffon”, foot: “Right foot”, pos_type: “Goalkeeper”, continent: “European” },
{ name: “Paolo Maldini”, pos: “Italy 🇮🇹 | Retired”, bio: “Dinastia”, wiki: “Paolo_Maldini”, foot: “Left foot”, pos_type: “Defender”, continent: “European” },
{ name: “Alessandro Del Piero”, pos: “Italy 🇮🇹 | Retired”, bio: “Pintura”, wiki: “Alessandro_Del_Piero”, foot: “Right foot”, pos_type: “Forward”, continent: “European” },
{ name: “Gianluigi Donnarumma”, pos: “Italy 🇮🇹 | PSG”, bio: “Traição”, wiki: “Gianluigi_Donnarumma”, foot: “Right foot”, pos_type: “Goalkeeper”, continent: “European” },
{ name: “Nicolo Barella”, pos: “Italy 🇮🇹 | Inter Milan”, bio: “Coração”, wiki: “Nicolò_Barella”, foot: “Right foot”, pos_type: “Midfielder”, continent: “European” },
{ name: “Mateo Retegui”, pos: “Italy 🇮🇹 | Atalanta”, bio: “Argentina”, wiki: “Mateo_Retegui”, foot: “Right foot”, pos_type: “Forward”, continent: “South American” },

// ===== HOLANDESES =====
{ name: “Johan Cruyff”, pos: “Netherlands 🇳🇱 | Retired”, bio: “Giro”, wiki: “Johan_Cruyff”, foot: “Right foot”, pos_type: “Forward”, continent: “European” },
{ name: “Marco van Basten”, pos: “Netherlands 🇳🇱 | Retired”, bio: “Voleio”, wiki: “Marco_van_Basten”, foot: “Right foot”, pos_type: “Forward”, continent: “European” },
{ name: “Ruud van Nistelrooy”, pos: “Netherlands 🇳🇱 | Retired”, bio: “Área”, wiki: “Ruud_van_Nistelrooy”, foot: “Right foot”, pos_type: “Forward”, continent: “European” },
{ name: “Arjen Robben”, pos: “Netherlands 🇳🇱 | Retired”, bio: “Esquerda”, wiki: “Arjen_Robben”, foot: “Left foot”, pos_type: “Forward”, continent: “European” },
{ name: “Robin van Persie”, pos: “Netherlands 🇳🇱 | Retired”, bio: “Mergulho”, wiki: “Robin_van_Persie”, foot: “Left foot”, pos_type: “Forward”, continent: “European” },
{ name: “Wesley Sneijder”, pos: “Netherlands 🇳🇱 | Retired”, bio: “Trilha”, wiki: “Wesley_Sneijder”, foot: “Right foot”, pos_type: “Midfielder”, continent: “European” },
{ name: “Virgil van Dijk”, pos: “Netherlands 🇳🇱 | Liverpool”, bio: “Muralha”, wiki: “Virgil_van_Dijk”, foot: “Right foot”, pos_type: “Defender”, continent: “European” },
{ name: “Frenkie de Jong”, pos: “Netherlands 🇳🇱 | Barcelona”, bio: “DNA”, wiki: “Frenkie_de_Jong”, foot: “Right foot”, pos_type: “Midfielder”, continent: “European” },
{ name: “Cody Gakpo”, pos: “Netherlands 🇳🇱 | Liverpool”, bio: “PSV”, wiki: “Cody_Gakpo”, foot: “Left foot”, pos_type: “Forward”, continent: “European” },

// ===== OUTROS =====
{ name: “Samuel Eto’o”, pos: “Cameroon 🇨🇲 | Retired”, bio: “Quatro vezes”, wiki: “Samuel_Eto’o”, foot: “Right foot”, pos_type: “Forward”, continent: “African” },
{ name: “Didier Drogba”, pos: “Ivory Coast 🇨🇮 | Retired”, bio: “Munique”, wiki: “Didier_Drogba”, foot: “Right foot”, pos_type: “Forward”, continent: “African” },
{ name: “George Weah”, pos: “Liberia 🇱🇷 | Retired”, bio: “Presidente”, wiki: “George_Weah”, foot: “Right foot”, pos_type: “Forward”, continent: “African” },
{ name: “Riyad Mahrez”, pos: “Algeria 🇩🇿 | Al-Ahli”, bio: “Leicester”, wiki: “Riyad_Mahrez”, foot: “Left foot”, pos_type: “Forward”, continent: “African” },
{ name: “Mohamed Salah”, pos: “Egypt 🇪🇬 | Al-Qadsiah”, bio: “Corrida”, wiki: “Mohamed_Salah”, foot: “Left foot”, pos_type: “Forward”, continent: “African” },
{ name: “Sadio Mané”, pos: “Senegal 🇸🇳 | Al-Nassr”, bio: “Humildade”, wiki: “Sadio_Mané”, foot: “Right foot”, pos_type: “Forward”, continent: “African” },
{ name: “James Rodríguez”, pos: “Colombia 🇨🇴 | Rayo Vallecano”, bio: “Puskas”, wiki: “James_Rodríguez”, foot: “Right foot”, pos_type: “Midfielder”, continent: “South American” },
{ name: “Carlos Valderrama”, pos: “Colombia 🇨🇴 | Retired”, bio: “Cabelo”, wiki: “Carlos_Valderrama”, foot: “Right foot”, pos_type: “Midfielder”, continent: “South American” },
{ name: “Falcão”, pos: “Brazil 🇧🇷 | Retired”, bio: “Futsal”, wiki: “Falcão_(futsal_player)”, foot: “Right foot”, pos_type: “Forward”, continent: “South American” },
{ name: “Enzo Francescoli”, pos: “Uruguay 🇺🇾 | Retired”, bio: “Príncipe”, wiki: “Enzo_Francescoli”, foot: “Right foot”, pos_type: “Midfielder”, continent: “South American” },
{ name: “Lúcio”, pos: “Brazil 🇧🇷 | Retired”, bio: “Chegada”, wiki: “Lúcio_(footballer)”, foot: “Right foot”, pos_type: “Defender”, continent: “South American” },
{ name: “Erling Haaland”, pos: “Norway 🇳🇴 | Manchester City”, bio: “Robô”, wiki: “Erling_Haaland”, foot: “Right foot”, pos_type: “Forward”, continent: “European” },
{ name: “Martin Ødegaard”, pos: “Norway 🇳🇴 | Arsenal”, bio: “Capitão”, wiki: “Martin_Ødegaard”, foot: “Right foot”, pos_type: “Midfielder”, continent: “European” },
{ name: “Luka Modrić”, pos: “Croatia 🇭🇷 | Real Madrid”, bio: “Bola de Ouro”, wiki: “Luka_Modrić”, foot: “Right foot”, pos_type: “Midfielder”, continent: “European” },
{ name: “Kevin De Bruyne”, pos: “Belgium 🇧🇪 | Manchester City”, bio: “Passes”, wiki: “Kevin_De_Bruyne”, foot: “Right foot”, pos_type: “Midfielder”, continent: “European” },
{ name: “Romelu Lukaku”, pos: “Belgium 🇧🇪 | Napoli”, bio: “Força”, wiki: “Romelu_Lukaku”, foot: “Right foot”, pos_type: “Forward”, continent: “European” },
{ name: “Son Heung-min”, pos: “South Korea 🇰🇷 | Tottenham”, bio: “Militar”, wiki: “Son_Heung-min”, foot: “Left foot”, pos_type: “Forward”, continent: “Asian” },
{ name: “Alphonso Davies”, pos: “Canada 🇨🇦 | Bayern de Munique”, bio: “Refugiado”, wiki: “Alphonso_Davies”, foot: “Left foot”, pos_type: “Defender”, continent: “North American” },
{ name: “Federico Valverde”, pos: “Uruguay 🇺🇾 | Real Madrid”, bio: “Cañonero”, wiki: “Federico_Valverde”, foot: “Right foot”, pos_type: “Midfielder”, continent: “South American” },
{ name: “Darwin Núñez”, pos: “Uruguay 🇺🇾 | Liverpool”, bio: “Cabeçada”, wiki: “Darwin_Núñez”, foot: “Right foot”, pos_type: “Forward”, continent: “South American” },
{ name: “Luis Díaz”, pos: “Colombia 🇨🇴 | Liverpool”, bio: “Pai preso”, wiki: “Luis_Díaz_(footballer,*born_1997)”, foot: “Right foot”, pos_type: “Forward”, continent: “South American” },
{ name: “Savinho”, pos: “Brazil 🇧🇷 | Manchester City”, bio: “Revelação”, wiki: “Savinho*(footballer)”, foot: “Right foot”, pos_type: “Forward”, continent: “South American” },
];

let sharedPlayerIdentity;
let impostorIndices = [];
let currentPlayerIndex = 0;
let totalPlayers = 0;
let playerNames = [];

const IMPOSTOR_IMG = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
<defs>
<radialGradient id="bg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#1a0000"/><stop offset="100%" stop-color="#000"/></radialGradient>
<radialGradient id="glow" cx="50%" cy="40%" r="50%"><stop offset="0%" stop-color="#ef4444" stop-opacity="0.25"/><stop offset="100%" stop-color="#ef4444" stop-opacity="0"/></radialGradient>
<filter id="bl"><feGaussianBlur stdDeviation="3"/></filter>
</defs>
<rect width="800" height="500" fill="url(#bg)"/>
<rect width="800" height="500" fill="url(#glow)"/>
<g stroke="#ef4444" stroke-opacity="0.06" stroke-width="1">
<line x1="0" y1="100" x2="800" y2="100"/><line x1="0" y1="200" x2="800" y2="200"/>
<line x1="0" y1="300" x2="800" y2="300"/><line x1="0" y1="400" x2="800" y2="400"/>
<line x1="100" y1="0" x2="100" y2="500"/><line x1="200" y1="0" x2="200" y2="500"/>
<line x1="300" y1="0" x2="300" y2="500"/><line x1="400" y1="0" x2="400" y2="500"/>
<line x1="500" y1="0" x2="500" y2="500"/><line x1="600" y1="0" x2="600" y2="500"/><line x1="700" y1="0" x2="700" y2="500"/>
</g>
<ellipse cx="400" cy="185" rx="155" ry="175" fill="none" stroke="#ef4444" stroke-width="2" stroke-opacity="0.2" filter="url(#bl)"/>
<path d="M295 270 Q320 250 370 245 L400 248 L430 245 Q480 250 505 270 L520 420 L280 420 Z" fill="#0d0d0d"/>
<rect x="378" y="225" width="44" height="30" rx="8" fill="#0d0d0d"/>
<ellipse cx="400" cy="175" rx="68" ry="78" fill="#0d0d0d"/>
<text x="400" y="200" text-anchor="middle" font-size="72" font-family="Georgia,serif" fill="#ef4444" fill-opacity="0.9" font-weight="bold">?</text>
<path d="M340 148 Q360 132 400 130 Q440 132 460 148 L462 190 Q440 215 400 218 Q360 215 338 190 Z" fill="#1a0000" stroke="#ef4444" stroke-width="1.5" stroke-opacity="0.7"/>
<ellipse cx="373" cy="168" rx="16" ry="7" fill="#ef4444" fill-opacity="0.85"/>
<ellipse cx="427" cy="168" rx="16" ry="7" fill="#ef4444" fill-opacity="0.85"/>
<ellipse cx="373" cy="168" rx="16" ry="7" fill="#ff0000" fill-opacity="0.4" filter="url(#bl)"/>
<ellipse cx="427" cy="168" rx="16" ry="7" fill="#ff0000" fill-opacity="0.4" filter="url(#bl)"/>
<ellipse cx="400" cy="422" rx="130" ry="18" fill="#ef4444" fill-opacity="0.08" filter="url(#bl)"/>
<text x="400" y="468" text-anchor="middle" font-size="22" font-family="Georgia,serif" letter-spacing="12" fill="#ef4444" fill-opacity="0.9" font-weight="bold">IMPOSTOR</text>
<path d="M0 0 L60 0 L0 60 Z" fill="#ef4444" fill-opacity="0.08"/>
<path d="M800 0 L740 0 L800 60 Z" fill="#ef4444" fill-opacity="0.08"/>
<path d="M0 500 L60 500 L0 440 Z" fill="#ef4444" fill-opacity="0.08"/>
<path d="M800 500 L740 500 L800 440 Z" fill="#ef4444" fill-opacity="0.08"/>
</svg>`)}`;

let jogadoresDisponiveis = [];

function jogadorAleatorio() {
// Reset pool when empty
if (jogadoresDisponiveis.length === 0) {
jogadoresDisponiveis = […JOGADORES];
}
const idx = Math.floor(Math.random() * jogadoresDisponiveis.length);
const player = jogadoresDisponiveis[idx];
jogadoresDisponiveis.splice(idx, 1); // remove from pool
return player;
}

async function buscarFotoWikipedia(wikiSlug) {
try {
const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${wikiSlug}`);
if (!res.ok) throw new Error(‘Wiki falhou’);
const data = await res.json();
return data.thumbnail?.source || imagemFallback();
} catch {
return imagemFallback();
}
}

function imagemFallback() {
const fallbacks = [
“https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800”,
“https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800”,
“https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=800”,
“https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800”,
];
return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}

// =====================================================
// SETUP DINÂMICO DE NOMES
// =====================================================
function atualizarCamposNomes() {
const count = parseInt(document.getElementById(‘input-player-count’).value) || 4;
const container = document.getElementById(‘player-names-container’);
const inputs = container.querySelectorAll(‘input’);

// Show/hide existing inputs based on count
inputs.forEach((input, i) => {
if (i < count) {
input.style.display = ‘block’;
input.placeholder = `Player ${i + 1}`;
} else {
input.style.display = ‘none’;
}
});

// Add more inputs if needed
if (inputs.length < count) {
for (let i = inputs.length; i < count; i++) {
const input = document.createElement(‘input’);
input.type = ‘text’;
input.placeholder = `Player ${i + 1}`;
input.maxLength = 20;
input.className = ‘name-input’;
container.appendChild(input);
}
}
}

document.getElementById(‘btn-plus’).addEventListener(‘click’, () => {
const input = document.getElementById(‘input-player-count’);
if (parseInt(input.value) < 12) {
input.value = parseInt(input.value) + 1;
atualizarCamposNomes();
}
});

document.getElementById(‘btn-minus’).addEventListener(‘click’, () => {
const input = document.getElementById(‘input-player-count’);
if (parseInt(input.value) > 2) {
input.value = parseInt(input.value) - 1;
atualizarCamposNomes();
}
});

// Init on load
atualizarCamposNomes();

async function iniciarJogo() {
const btn = document.getElementById(‘btn-start-game’);
btn.innerText = “LOADING…”;
btn.disabled = true;

try {
const player = jogadorAleatorio();

```
// Try to get photo but don't block the game if it fails
let imgUrl = imagemFallback();
try {
  imgUrl = await Promise.race([
    buscarFotoWikipedia(player.wiki),
    new Promise((_, reject) => setTimeout(() => reject('timeout'), 5000))
  ]);
} catch(photoErr) {
  console.log('Photo failed, using fallback');
}

sharedPlayerIdentity = { ...player, img: imgUrl };

totalPlayers = parseInt(document.getElementById('input-player-count').value) || 4;
let impostorCount = parseInt(document.getElementById('input-impostor-count').value) || 1;
impostorCount = Math.min(impostorCount, totalPlayers - 1);

const nameInputs = document.getElementById('player-names-container').querySelectorAll('input');
playerNames = Array.from(nameInputs).map((inp, i) => inp.value.trim() || `Player ${i + 1}`);

impostorIndices = [];
while (impostorIndices.length < impostorCount) {
  let r = Math.floor(Math.random() * totalPlayers);
  if (!impostorIndices.includes(r)) impostorIndices.push(r);
}

currentPlayerIndex = 0;
document.getElementById('setup-screen').classList.add('hidden');
document.getElementById('game-screen').classList.remove('hidden');
prepararVez();
```

} catch (e) {
console.error(“Game error:”, e);
btn.innerText = “START GAME”;
btn.disabled = false;
alert(“Something went wrong. Please try again.”);
}
}

function prepararVez() {
const card = document.getElementById(‘player-card’);
card.classList.remove(‘hidden’);
card.style.borderColor = ‘rgba(255,255,255,0.2)’;
document.getElementById(‘card-inner’).classList.add(‘hidden’);
document.getElementById(‘card-back’).classList.remove(‘hidden’);
document.getElementById(‘btn-next-turn’).classList.add(‘hidden’);
const nome = playerNames[currentPlayerIndex] || `Jogador ${currentPlayerIndex + 1}`;
const label = document.getElementById(‘instruction-label’);
const action = document.getElementById(‘instruction-text’);
if (label) label.innerText = “IT’S”;
if (action) action.innerText = nome.toUpperCase() + “’S TURN”;
}

document.getElementById(‘player-card’).addEventListener(‘click’, () => {
if (!document.getElementById(‘card-inner’).classList.contains(‘hidden’)) return;

const isImpostor = impostorIndices.includes(currentPlayerIndex);
const data = isImpostor
? {
name: “YOU ARE THE IMPOSTOR”,
pos: “FAKER”,
bio: (() => {
const dicas = [sharedPlayerIdentity.foot, sharedPlayerIdentity.pos_type, sharedPlayerIdentity.continent];
const dica = dicas[Math.floor(Math.random() * dicas.length)];
return `Your clue: "${dica}"`;
})(),
img: IMPOSTOR_IMG
}
: { …sharedPlayerIdentity, bio: “” };

document.getElementById(‘player-name’).innerText = data.name;
document.getElementById(‘player-position’).innerText = data.pos;
document.getElementById(‘player-bio’).innerText = data.bio;
document.getElementById(‘player-image’).src = data.img;

document.getElementById(‘card-back’).classList.add(‘hidden’);
document.getElementById(‘card-inner’).classList.remove(‘hidden’);
document.getElementById(‘btn-next-turn’).classList.remove(‘hidden’);
document.getElementById(‘player-card’).style.borderColor = isImpostor ? “#ef4444” : “#3b82f6”;
});

document.getElementById(‘btn-next-turn’).addEventListener(‘click’, () => {
currentPlayerIndex++;
if (currentPlayerIndex < totalPlayers) {
prepararVez();
} else {
// Todos viram a carta — iniciar debate com timer
const lbl = document.getElementById(‘instruction-label’);
const act = document.getElementById(‘instruction-text’);
if (lbl) lbl.innerText = ‘🗣️’;
if (act) act.innerText = ‘OPEN DEBATE!’;
document.getElementById(‘player-card’).classList.add(‘hidden’);
document.getElementById(‘btn-next-turn’).classList.add(‘hidden’);
document.getElementById(‘debate-area’).classList.remove(‘hidden’);
iniciarTimer();
}
});

// =====================================================
// TIMER DE DEBATE
// =====================================================
let timerInterval = null;

function iniciarTimer() {
const totalSegundos = parseInt(document.getElementById(‘input-timer’).value) || 60;
let restante = totalSegundos;
const circumference = 276.5;
const ring = document.getElementById(‘timer-ring’);
const display = document.getElementById(‘timer-display’);

display.innerText = restante;
ring.style.strokeDashoffset = 0;

timerInterval = setInterval(() => {
restante–;
display.innerText = restante;

```
// Atualiza o anel
const progress = (totalSegundos - restante) / totalSegundos;
ring.style.strokeDashoffset = circumference * progress;

// Muda cor conforme o tempo
if (restante <= 10) {
  ring.style.stroke = '#ef4444';
  display.style.color = '#ef4444';
} else if (restante <= 20) {
  ring.style.stroke = '#f97316';
  display.style.color = '#f97316';
}

if (restante <= 0) {
  clearInterval(timerInterval);
  display.innerText = '0';
  // Pisca o botão de revelar
  document.getElementById('btn-reveal').classList.add('animate-pulse');
}
```

}, 1000);
}

// =====================================================
// TELA DE REVELAÇÃO FINAL
// =====================================================
document.getElementById(‘btn-reveal’).addEventListener(‘click’, () => {
clearInterval(timerInterval);

// Preenche dados do jogador revelado
document.getElementById(‘reveal-image’).src = sharedPlayerIdentity.img;
document.getElementById(‘reveal-name’).innerText = sharedPlayerIdentity.name;
document.getElementById(‘reveal-pos’).innerText = sharedPlayerIdentity.pos;

// Lista os impostores com label correto
const container = document.getElementById(‘reveal-impostors’);
container.innerHTML = ‘’;
const impostorLabel = document.querySelector(’.reveal-impostors-label’);
if (impostorLabel) {
impostorLabel.innerText = impostorIndices.length === 1 ? ‘The impostor was’ : ‘The impostors were’;
}
impostorIndices.forEach(i => {
const badge = document.createElement(‘span’);
badge.className = ‘impostor-badge’;
badge.innerText = playerNames[i] || `Player ${i + 1}`;
container.appendChild(badge);
});

// Troca de tela
document.getElementById(‘game-screen’).classList.add(‘hidden’);
document.getElementById(‘reveal-screen’).classList.remove(‘hidden’);
});

// =====================================================
// NOVA PARTIDA
// =====================================================
document.getElementById(‘btn-new-game’).addEventListener(‘click’, () => {
currentPlayerIndex = 0;
impostorIndices = [];
sharedPlayerIdentity = null;
playerNames = [];
jogadoresDisponiveis = [];
clearInterval(timerInterval);

// Reset timer visual
document.getElementById(‘timer-ring’).style.strokeDashoffset = 0;
document.getElementById(‘timer-ring’).style.stroke = ‘#eab308’;
document.getElementById(‘timer-display’).style.color = ‘#facc15’;
document.getElementById(‘debate-area’).classList.add(‘hidden’);
document.getElementById(‘btn-reveal’).classList.remove(‘animate-pulse’);

document.getElementById(‘reveal-screen’).classList.add(‘hidden’);
document.getElementById(‘setup-screen’).classList.remove(‘hidden’);
document.getElementById(‘btn-start-game’).innerText = ‘START GAME’;
document.getElementById(‘btn-start-game’).disabled = false;
});

document.getElementById(‘btn-start-game’).addEventListener(‘click’, iniciarJogo);