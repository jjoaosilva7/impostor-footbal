// =====================================================
// IMPOSTOR FOOTBALL 2026 - script.js
// Titulares das seleções da Copa do Mundo 2026
// =====================================================

const JOGADORES = [
// ===== BRASILEIROS =====
{ name: “Ronaldo Fenômeno”, pos: “Brasil 🇧🇷 | Aposentado”, bio: “Extraterrestre”, wiki: “Ronaldo_(Brazilian_footballer)”, foot: “Destro”, pos_type: “Atacante”, continent: “Sul-americano” },
{ name: “Ronaldinho Gaúcho”, pos: “Brasil 🇧🇷 | Aposentado”, bio: “Freestyle”, wiki: “Ronaldinho”, foot: “Canhoto”, pos_type: “Meia”, continent: “Sul-americano” },
{ name: “Rivaldo”, pos: “Brasil 🇧🇷 | Aposentado”, bio: “Bicicleta”, wiki: “Rivaldo”, foot: “Canhoto”, pos_type: “Meia”, continent: “Sul-americano” },
{ name: “Romário”, pos: “Brasil 🇧🇷 | Aposentado”, bio: “Baixinho”, wiki: “Romário”, foot: “Destro”, pos_type: “Atacante”, continent: “Sul-americano” },
{ name: “Bebeto”, pos: “Brasil 🇧🇷 | Aposentado”, bio: “Bebê”, wiki: “Bebeto”, foot: “Destro”, pos_type: “Atacante”, continent: “Sul-americano” },
{ name: “Zico”, pos: “Brasil 🇧🇷 | Aposentado”, bio: “Galinho”, wiki: “Zico”, foot: “Destro”, pos_type: “Meia”, continent: “Sul-americano” },
{ name: “Pelé”, pos: “Brasil 🇧🇷 | Aposentado”, bio: “Rei”, wiki: “Pelé”, foot: “Destro”, pos_type: “Atacante”, continent: “Sul-americano” },
{ name: “Garrincha”, pos: “Brasil 🇧🇷 | Aposentado”, bio: “Tortas”, wiki: “Garrincha”, foot: “Destro”, pos_type: “Atacante”, continent: “Sul-americano” },
{ name: “Roberto Carlos”, pos: “Brasil 🇧🇷 | Aposentado”, bio: “Foguete”, wiki: “Roberto_Carlos_(footballer)”, foot: “Canhoto”, pos_type: “Defensor”, continent: “Sul-americano” },
{ name: “Cafu”, pos: “Brasil 🇧🇷 | Aposentado”, bio: “Overlap”, wiki: “Cafu”, foot: “Destro”, pos_type: “Defensor”, continent: “Sul-americano” },
{ name: “Neymar Jr.”, pos: “Brasil 🇧🇷 | Al-Hilal”, bio: “Passinho”, wiki: “Neymar”, foot: “Destro”, pos_type: “Atacante”, continent: “Sul-americano” },
{ name: “Vinicius Jr.”, pos: “Brasil 🇧🇷 | Real Madrid”, bio: “Dança”, wiki: “Vinicius_Junior”, foot: “Destro”, pos_type: “Atacante”, continent: “Sul-americano” },
{ name: “Raphinha”, pos: “Brasil 🇧🇷 | Barcelona”, bio: “Capitão”, wiki: “Raphinha”, foot: “Destro”, pos_type: “Atacante”, continent: “Sul-americano” },
{ name: “Rodrygo”, pos: “Brasil 🇧🇷 | Real Madrid”, bio: “Decisivo”, wiki: “Rodrygo”, foot: “Destro”, pos_type: “Atacante”, continent: “Sul-americano” },
{ name: “Endrick”, pos: “Brasil 🇧🇷 | Real Madrid”, bio: “Prodígio”, wiki: “Endrick”, foot: “Destro”, pos_type: “Atacante”, continent: “Sul-americano” },
{ name: “Casemiro”, pos: “Brasil 🇧🇷 | Manchester United”, bio: “Destruidor”, wiki: “Casemiro”, foot: “Destro”, pos_type: “Meia”, continent: “Sul-americano” },
{ name: “Bruno Guimarães”, pos: “Brasil 🇧🇷 | Newcastle”, bio: “Pitbull”, wiki: “Bruno_Guimarães”, foot: “Destro”, pos_type: “Meia”, continent: “Sul-americano” },
{ name: “Alisson Becker”, pos: “Brasil 🇧🇷 | Liverpool”, bio: “Cabeçada”, wiki: “Alisson_Becker”, foot: “Destro”, pos_type: “Goleiro”, continent: “Sul-americano” },
{ name: “Marquinhos”, pos: “Brasil 🇧🇷 | PSG”, bio: “Capitão”, wiki: “Marquinhos_(footballer)”, foot: “Destro”, pos_type: “Defensor”, continent: “Sul-americano” },

// ===== ARGENTINOS =====
{ name: “Diego Maradona”, pos: “Argentina 🇦🇷 | Aposentado”, bio: “Mão”, wiki: “Diego_Maradona”, foot: “Canhoto”, pos_type: “Meia”, continent: “Sul-americano” },
{ name: “Gabriel Batistuta”, pos: “Argentina 🇦🇷 | Aposentado”, bio: “Batigol”, wiki: “Gabriel_Batistuta”, foot: “Destro”, pos_type: “Atacante”, continent: “Sul-americano” },
{ name: “Hernán Crespo”, pos: “Argentina 🇦🇷 | Aposentado”, bio: “Milão”, wiki: “Hernán_Crespo”, foot: “Destro”, pos_type: “Atacante”, continent: “Sul-americano” },
{ name: “Javier Zanetti”, pos: “Argentina 🇦🇷 | Aposentado”, bio: “Capitano”, wiki: “Javier_Zanetti”, foot: “Destro”, pos_type: “Defensor”, continent: “Sul-americano” },
{ name: “Sergio Agüero”, pos: “Argentina 🇦🇷 | Aposentado”, bio: “Agüeroooo”, wiki: “Sergio_Agüero”, foot: “Destro”, pos_type: “Atacante”, continent: “Sul-americano” },
{ name: “Lionel Messi”, pos: “Argentina 🇦🇷 | Inter Miami”, bio: “Qatar”, wiki: “Lionel_Messi”, foot: “Canhoto”, pos_type: “Atacante”, continent: “Sul-americano” },
{ name: “Lautaro Martínez”, pos: “Argentina 🇦🇷 | Inter de Milão”, bio: “Toro”, wiki: “Lautaro_Martínez”, foot: “Destro”, pos_type: “Atacante”, continent: “Sul-americano” },
{ name: “Julián Álvarez”, pos: “Argentina 🇦🇷 | Atlético de Madrid”, bio: “Aranha”, wiki: “Julián_Álvarez”, foot: “Destro”, pos_type: “Atacante”, continent: “Sul-americano” },
{ name: “Enzo Fernández”, pos: “Argentina 🇦🇷 | Chelsea”, bio: “Melhor jovem”, wiki: “Enzo_Fernández”, foot: “Destro”, pos_type: “Meia”, continent: “Sul-americano” },
{ name: “Emiliano Martínez”, pos: “Argentina 🇦🇷 | Aston Villa”, bio: “Provocação”, wiki: “Emiliano_Martínez”, foot: “Destro”, pos_type: “Goleiro”, continent: “Sul-americano” },

// ===== FRANCESES =====
{ name: “Zinedine Zidane”, pos: “França 🇫🇷 | Aposentado”, bio: “Cabeçada”, wiki: “Zinedine_Zidane”, foot: “Destro”, pos_type: “Meia”, continent: “Europeu” },
{ name: “Thierry Henry”, pos: “França 🇫🇷 | Aposentado”, bio: “Invencível”, wiki: “Thierry_Henry”, foot: “Canhoto”, pos_type: “Atacante”, continent: “Europeu” },
{ name: “Patrick Vieira”, pos: “França 🇫🇷 | Aposentado”, bio: “Arsenal”, wiki: “Patrick_Vieira”, foot: “Destro”, pos_type: “Meia”, continent: “Europeu” },
{ name: “Robert Pires”, pos: “França 🇫🇷 | Aposentado”, bio: “Elegância”, wiki: “Robert_Pires”, foot: “Canhoto”, pos_type: “Meia”, continent: “Europeu” },
{ name: “Kylian Mbappé”, pos: “França 🇫🇷 | Real Madrid”, bio: “Foguete”, wiki: “Kylian_Mbappé”, foot: “Destro”, pos_type: “Atacante”, continent: “Europeu” },
{ name: “Antoine Griezmann”, pos: “França 🇫🇷 | Atlético de Madrid”, bio: “Fortnite”, wiki: “Antoine_Griezmann”, foot: “Destro”, pos_type: “Atacante”, continent: “Europeu” },
{ name: “Ousmane Dembélé”, pos: “França 🇫🇷 | PSG”, bio: “Lesão”, wiki: “Ousmane_Dembélé”, foot: “Destro”, pos_type: “Atacante”, continent: “Europeu” },
{ name: “Aurélien Tchouaméni”, pos: “França 🇫🇷 | Real Madrid”, bio: “Herdeiro”, wiki: “Aurélien_Tchouaméni”, foot: “Destro”, pos_type: “Meia”, continent: “Europeu” },

// ===== ESPANHÓIS =====
{ name: “Andrés Iniesta”, pos: “Espanha 🇪🇸 | Aposentado”, bio: “Joanesburgo”, wiki: “Andrés_Iniesta”, foot: “Canhoto”, pos_type: “Meia”, continent: “Europeu” },
{ name: “Xavi Hernández”, pos: “Espanha 🇪🇸 | Aposentado”, bio: “Tiki-taka”, wiki: “Xavi”, foot: “Destro”, pos_type: “Meia”, continent: “Europeu” },
{ name: “David Villa”, pos: “Espanha 🇪🇸 | Aposentado”, bio: “Guaje”, wiki: “David_Villa”, foot: “Canhoto”, pos_type: “Atacante”, continent: “Europeu” },
{ name: “Fernando Torres”, pos: “Espanha 🇪🇸 | Aposentado”, bio: “Niño”, wiki: “Fernando_Torres”, foot: “Destro”, pos_type: “Atacante”, continent: “Europeu” },
{ name: “Raúl González”, pos: “Espanha 🇪🇸 | Aposentado”, bio: “Dedo”, wiki: “Raúl_(footballer)”, foot: “Destro”, pos_type: “Atacante”, continent: “Europeu” },
{ name: “Sergio Ramos”, pos: “Espanha 🇪🇸 | Vissel Kobe”, bio: “Cabeçada”, wiki: “Sergio_Ramos”, foot: “Destro”, pos_type: “Defensor”, continent: “Europeu” },
{ name: “Carles Puyol”, pos: “Espanha 🇪🇸 | Aposentado”, bio: “Cabelo”, wiki: “Carles_Puyol”, foot: “Destro”, pos_type: “Defensor”, continent: “Europeu” },
{ name: “Iker Casillas”, pos: “Espanha 🇪🇸 | Aposentado”, bio: “San Iker”, wiki: “Iker_Casillas”, foot: “Destro”, pos_type: “Goleiro”, continent: “Europeu” },
{ name: “Lamine Yamal”, pos: “Espanha 🇪🇸 | Barcelona”, bio: “Milagre”, wiki: “Lamine_Yamal”, foot: “Destro”, pos_type: “Atacante”, continent: “Europeu” },
{ name: “Pedri”, pos: “Espanha 🇪🇸 | Barcelona”, bio: “Herdeiro”, wiki: “Pedri”, foot: “Destro”, pos_type: “Meia”, continent: “Europeu” },
{ name: “Gavi”, pos: “Espanha 🇪🇸 | Barcelona”, bio: “Raiva”, wiki: “Gavi_(footballer)”, foot: “Destro”, pos_type: “Meia”, continent: “Europeu” },
{ name: “Rodri”, pos: “Espanha 🇪🇸 | Manchester City”, bio: “Bola de Ouro”, wiki: “Rodri_(footballer)”, foot: “Destro”, pos_type: “Meia”, continent: “Europeu” },
{ name: “Álvaro Morata”, pos: “Espanha 🇪🇸 | Milan”, bio: “Polêmica”, wiki: “Álvaro_Morata”, foot: “Destro”, pos_type: “Atacante”, continent: “Europeu” },

// ===== PORTUGUESES =====
{ name: “Luís Figo”, pos: “Portugal 🇵🇹 | Aposentado”, bio: “Cabeça de porco”, wiki: “Luís_Figo”, foot: “Destro”, pos_type: “Meia”, continent: “Europeu” },
{ name: “Rui Costa”, pos: “Portugal 🇵🇹 | Aposentado”, bio: “Visão”, wiki: “Rui_Costa_(footballer,*born_1972)”, foot: “Destro”, pos_type: “Meia”, continent: “Europeu” },
{ name: “Eusébio”, pos: “Portugal 🇵🇹 | Aposentado”, bio: “Pantera”, wiki: “Eusébio”, foot: “Destro”, pos_type: “Atacante”, continent: “Africano” },
{ name: “Cristiano Ronaldo”, pos: “Portugal 🇵🇹 | Al-Nassr”, bio: “Siuuu”, wiki: “Cristiano_Ronaldo”, foot: “Destro”, pos_type: “Atacante”, continent: “Europeu” },
{ name: “Bruno Fernandes”, pos: “Portugal 🇵🇹 | Manchester United”, bio: “Pênalti”, wiki: “Bruno_Fernandes*(footballer,_born_1994)”, foot: “Destro”, pos_type: “Meia”, continent: “Europeu” },
{ name: “Rafael Leão”, pos: “Portugal 🇵🇹 | Milan”, bio: “Turbo”, wiki: “Rafael_Leão”, foot: “Canhoto”, pos_type: “Atacante”, continent: “Europeu” },
{ name: “Bernardo Silva”, pos: “Portugal 🇵🇹 | Manchester City”, bio: “Silencioso”, wiki: “Bernardo_Silva”, foot: “Destro”, pos_type: “Meia”, continent: “Europeu” },

// ===== INGLESES =====
{ name: “David Beckham”, pos: “Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿 | Aposentado”, bio: “Cueca”, wiki: “David_Beckham”, foot: “Destro”, pos_type: “Meia”, continent: “Europeu” },
{ name: “Wayne Rooney”, pos: “Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿 | Aposentado”, bio: “Raiva”, wiki: “Wayne_Rooney”, foot: “Destro”, pos_type: “Atacante”, continent: “Europeu” },
{ name: “Steven Gerrard”, pos: “Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿 | Aposentado”, bio: “Escorregão”, wiki: “Steven_Gerrard”, foot: “Destro”, pos_type: “Meia”, continent: “Europeu” },
{ name: “Frank Lampard”, pos: “Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿 | Aposentado”, bio: “Fantasma”, wiki: “Frank_Lampard”, foot: “Destro”, pos_type: “Meia”, continent: “Europeu” },
{ name: “Michael Owen”, pos: “Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿 | Aposentado”, bio: “France98”, wiki: “Michael_Owen”, foot: “Destro”, pos_type: “Atacante”, continent: “Europeu” },
{ name: “Paul Scholes”, pos: “Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿 | Aposentado”, bio: “Laranja”, wiki: “Paul_Scholes”, foot: “Destro”, pos_type: “Meia”, continent: “Europeu” },
{ name: “Jude Bellingham”, pos: “Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿 | Real Madrid”, bio: “Sevilha”, wiki: “Jude_Bellingham”, foot: “Destro”, pos_type: “Meia”, continent: “Europeu” },
{ name: “Harry Kane”, pos: “Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿 | Bayern de Munique”, bio: “Sem título”, wiki: “Harry_Kane”, foot: “Destro”, pos_type: “Atacante”, continent: “Europeu” },
{ name: “Phil Foden”, pos: “Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿 | Manchester City”, bio: “Stockport”, wiki: “Phil_Foden”, foot: “Canhoto”, pos_type: “Meia”, continent: “Europeu” },
{ name: “Bukayo Saka”, pos: “Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿 | Arsenal”, bio: “Pênalti perdido”, wiki: “Bukayo_Saka”, foot: “Canhoto”, pos_type: “Atacante”, continent: “Europeu” },
{ name: “Cole Palmer”, pos: “Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿 | Chelsea”, bio: “Gelo”, wiki: “Cole_Palmer”, foot: “Destro”, pos_type: “Meia”, continent: “Europeu” },

// ===== ALEMÃES =====
{ name: “Miroslav Klose”, pos: “Alemanha 🇩🇪 | Aposentado”, bio: “16 gols”, wiki: “Miroslav_Klose”, foot: “Destro”, pos_type: “Atacante”, continent: “Europeu” },
{ name: “Oliver Kahn”, pos: “Alemanha 🇩🇪 | Aposentado”, bio: “Gorila”, wiki: “Oliver_Kahn”, foot: “Destro”, pos_type: “Goleiro”, continent: “Europeu” },
{ name: “Michael Ballack”, pos: “Alemanha 🇩🇪 | Aposentado”, bio: “Capitão”, wiki: “Michael_Ballack”, foot: “Destro”, pos_type: “Meia”, continent: “Europeu” },
{ name: “Gerd Müller”, pos: “Alemanha 🇩🇪 | Aposentado”, bio: “Bomber”, wiki: “Gerd_Müller”, foot: “Destro”, pos_type: “Atacante”, continent: “Europeu” },
{ name: “Franz Beckenbauer”, pos: “Alemanha 🇩🇪 | Aposentado”, bio: “Kaiser”, wiki: “Franz_Beckenbauer”, foot: “Destro”, pos_type: “Defensor”, continent: “Europeu” },
{ name: “Florian Wirtz”, pos: “Alemanha 🇩🇪 | Bayer Leverkusen”, bio: “Invicto”, wiki: “Florian_Wirtz”, foot: “Destro”, pos_type: “Meia”, continent: “Europeu” },
{ name: “Jamal Musiala”, pos: “Alemanha 🇩🇪 | Bayern de Munique”, bio: “Bambi”, wiki: “Jamal_Musiala”, foot: “Destro”, pos_type: “Meia”, continent: “Europeu” },
{ name: “Toni Kroos”, pos: “Alemanha 🇩🇪 | Aposentado”, bio: “Metrônomo”, wiki: “Toni_Kroos”, foot: “Destro”, pos_type: “Meia”, continent: “Europeu” },
{ name: “Manuel Neuer”, pos: “Alemanha 🇩🇪 | Bayern de Munique”, bio: “Sweeper”, wiki: “Manuel_Neuer”, foot: “Destro”, pos_type: “Goleiro”, continent: “Europeu” },

// ===== ITALIANOS =====
{ name: “Francesco Totti”, pos: “Itália 🇮🇹 | Aposentado”, bio: “Puppone”, wiki: “Francesco_Totti”, foot: “Destro”, pos_type: “Atacante”, continent: “Europeu” },
{ name: “Roberto Baggio”, pos: “Itália 🇮🇹 | Aposentado”, bio: “Rabo de cavalo”, wiki: “Roberto_Baggio”, foot: “Destro”, pos_type: “Meia”, continent: “Europeu” },
{ name: “Andrea Pirlo”, pos: “Itália 🇮🇹 | Aposentado”, bio: “Barba”, wiki: “Andrea_Pirlo”, foot: “Destro”, pos_type: “Meia”, continent: “Europeu” },
{ name: “Gianluigi Buffon”, pos: “Itália 🇮🇹 | Aposentado”, bio: “GG”, wiki: “Gianluigi_Buffon”, foot: “Destro”, pos_type: “Goleiro”, continent: “Europeu” },
{ name: “Paolo Maldini”, pos: “Itália 🇮🇹 | Aposentado”, bio: “Dinastia”, wiki: “Paolo_Maldini”, foot: “Canhoto”, pos_type: “Defensor”, continent: “Europeu” },
{ name: “Alessandro Del Piero”, pos: “Itália 🇮🇹 | Aposentado”, bio: “Pintura”, wiki: “Alessandro_Del_Piero”, foot: “Destro”, pos_type: “Atacante”, continent: “Europeu” },
{ name: “Gianluigi Donnarumma”, pos: “Itália 🇮🇹 | PSG”, bio: “Traição”, wiki: “Gianluigi_Donnarumma”, foot: “Destro”, pos_type: “Goleiro”, continent: “Europeu” },
{ name: “Nicolo Barella”, pos: “Itália 🇮🇹 | Inter de Milão”, bio: “Coração”, wiki: “Nicolò_Barella”, foot: “Destro”, pos_type: “Meia”, continent: “Europeu” },
{ name: “Mateo Retegui”, pos: “Itália 🇮🇹 | Atalanta”, bio: “Argentina”, wiki: “Mateo_Retegui”, foot: “Destro”, pos_type: “Atacante”, continent: “Sul-americano” },

// ===== HOLANDESES =====
{ name: “Johan Cruyff”, pos: “Holanda 🇳🇱 | Aposentado”, bio: “Giro”, wiki: “Johan_Cruyff”, foot: “Destro”, pos_type: “Atacante”, continent: “Europeu” },
{ name: “Marco van Basten”, pos: “Holanda 🇳🇱 | Aposentado”, bio: “Voleio”, wiki: “Marco_van_Basten”, foot: “Destro”, pos_type: “Atacante”, continent: “Europeu” },
{ name: “Ruud van Nistelrooy”, pos: “Holanda 🇳🇱 | Aposentado”, bio: “Área”, wiki: “Ruud_van_Nistelrooy”, foot: “Destro”, pos_type: “Atacante”, continent: “Europeu” },
{ name: “Arjen Robben”, pos: “Holanda 🇳🇱 | Aposentado”, bio: “Esquerda”, wiki: “Arjen_Robben”, foot: “Canhoto”, pos_type: “Atacante”, continent: “Europeu” },
{ name: “Robin van Persie”, pos: “Holanda 🇳🇱 | Aposentado”, bio: “Mergulho”, wiki: “Robin_van_Persie”, foot: “Canhoto”, pos_type: “Atacante”, continent: “Europeu” },
{ name: “Wesley Sneijder”, pos: “Holanda 🇳🇱 | Aposentado”, bio: “Trilha”, wiki: “Wesley_Sneijder”, foot: “Destro”, pos_type: “Meia”, continent: “Europeu” },
{ name: “Virgil van Dijk”, pos: “Holanda 🇳🇱 | Liverpool”, bio: “Muralha”, wiki: “Virgil_van_Dijk”, foot: “Destro”, pos_type: “Defensor”, continent: “Europeu” },
{ name: “Frenkie de Jong”, pos: “Holanda 🇳🇱 | Barcelona”, bio: “DNA”, wiki: “Frenkie_de_Jong”, foot: “Destro”, pos_type: “Meia”, continent: “Europeu” },
{ name: “Cody Gakpo”, pos: “Holanda 🇳🇱 | Liverpool”, bio: “PSV”, wiki: “Cody_Gakpo”, foot: “Canhoto”, pos_type: “Atacante”, continent: “Europeu” },

// ===== OUTROS =====
{ name: “Samuel Eto’o”, pos: “Camarões 🇨🇲 | Aposentado”, bio: “Quatro vezes”, wiki: “Samuel_Eto’o”, foot: “Destro”, pos_type: “Atacante”, continent: “Africano” },
{ name: “Didier Drogba”, pos: “Costa do Marfim 🇨🇮 | Aposentado”, bio: “Munique”, wiki: “Didier_Drogba”, foot: “Destro”, pos_type: “Atacante”, continent: “Africano” },
{ name: “George Weah”, pos: “Libéria 🇱🇷 | Aposentado”, bio: “Presidente”, wiki: “George_Weah”, foot: “Destro”, pos_type: “Atacante”, continent: “Africano” },
{ name: “Riyad Mahrez”, pos: “Argélia 🇩🇿 | Al-Ahli”, bio: “Leicester”, wiki: “Riyad_Mahrez”, foot: “Canhoto”, pos_type: “Atacante”, continent: “Africano” },
{ name: “Mohamed Salah”, pos: “Egito 🇪🇬 | Al-Qadsiah”, bio: “Corrida”, wiki: “Mohamed_Salah”, foot: “Canhoto”, pos_type: “Atacante”, continent: “Africano” },
{ name: “Sadio Mané”, pos: “Senegal 🇸🇳 | Al-Nassr”, bio: “Humildade”, wiki: “Sadio_Mané”, foot: “Destro”, pos_type: “Atacante”, continent: “Africano” },
{ name: “James Rodríguez”, pos: “Colômbia 🇨🇴 | Rayo Vallecano”, bio: “Puskas”, wiki: “James_Rodríguez”, foot: “Destro”, pos_type: “Meia”, continent: “Sul-americano” },
{ name: “Carlos Valderrama”, pos: “Colômbia 🇨🇴 | Aposentado”, bio: “Cabelo”, wiki: “Carlos_Valderrama”, foot: “Destro”, pos_type: “Meia”, continent: “Sul-americano” },
{ name: “Falcão”, pos: “Brasil 🇧🇷 | Aposentado”, bio: “Futsal”, wiki: “Falcão_(futsal_player)”, foot: “Destro”, pos_type: “Atacante”, continent: “Sul-americano” },
{ name: “Enzo Francescoli”, pos: “Uruguai 🇺🇾 | Aposentado”, bio: “Príncipe”, wiki: “Enzo_Francescoli”, foot: “Destro”, pos_type: “Meia”, continent: “Sul-americano” },
{ name: “Lúcio”, pos: “Brasil 🇧🇷 | Aposentado”, bio: “Chegada”, wiki: “Lúcio_(footballer)”, foot: “Destro”, pos_type: “Defensor”, continent: “Sul-americano” },
{ name: “Erling Haaland”, pos: “Noruega 🇳🇴 | Manchester City”, bio: “Robô”, wiki: “Erling_Haaland”, foot: “Destro”, pos_type: “Atacante”, continent: “Europeu” },
{ name: “Martin Ødegaard”, pos: “Noruega 🇳🇴 | Arsenal”, bio: “Capitão”, wiki: “Martin_Ødegaard”, foot: “Destro”, pos_type: “Meia”, continent: “Europeu” },
{ name: “Luka Modrić”, pos: “Croácia 🇭🇷 | Real Madrid”, bio: “Bola de Ouro”, wiki: “Luka_Modrić”, foot: “Destro”, pos_type: “Meia”, continent: “Europeu” },
{ name: “Kevin De Bruyne”, pos: “Bélgica 🇧🇪 | Manchester City”, bio: “Passes”, wiki: “Kevin_De_Bruyne”, foot: “Destro”, pos_type: “Meia”, continent: “Europeu” },
{ name: “Romelu Lukaku”, pos: “Bélgica 🇧🇪 | Napoli”, bio: “Força”, wiki: “Romelu_Lukaku”, foot: “Destro”, pos_type: “Atacante”, continent: “Europeu” },
{ name: “Son Heung-min”, pos: “Coreia do Sul 🇰🇷 | Tottenham”, bio: “Militar”, wiki: “Son_Heung-min”, foot: “Canhoto”, pos_type: “Atacante”, continent: “Asiático” },
{ name: “Alphonso Davies”, pos: “Canadá 🇨🇦 | Bayern de Munique”, bio: “Refugiado”, wiki: “Alphonso_Davies”, foot: “Canhoto”, pos_type: “Defensor”, continent: “Norte-americano” },
{ name: “Federico Valverde”, pos: “Uruguai 🇺🇾 | Real Madrid”, bio: “Cañonero”, wiki: “Federico_Valverde”, foot: “Destro”, pos_type: “Meia”, continent: “Sul-americano” },
{ name: “Darwin Núñez”, pos: “Uruguai 🇺🇾 | Liverpool”, bio: “Cabeçada”, wiki: “Darwin_Núñez”, foot: “Destro”, pos_type: “Atacante”, continent: “Sul-americano” },
{ name: “Luis Díaz”, pos: “Colômbia 🇨🇴 | Liverpool”, bio: “Pai preso”, wiki: “Luis_Díaz_(footballer,*born_1997)”, foot: “Destro”, pos_type: “Atacante”, continent: “Sul-americano” },
{ name: “Savinho”, pos: “Brasil 🇧🇷 | Manchester City”, bio: “Revelação”, wiki: “Savinho*(footballer)”, foot: “Destro”, pos_type: “Atacante”, continent: “Sul-americano” },
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
const existingInputs = container.querySelectorAll(‘input’);
const existingValues = Array.from(existingInputs).map(i => i.value);

container.innerHTML = ‘’;
for (let i = 0; i < count; i++) {
const input = document.createElement(‘input’);
input.type = ‘text’;
input.placeholder = `Jogador ${i + 1}`;
input.maxLength = 20;
input.value = existingValues[i] || ‘’;
input.className = ‘name-input’;
container.appendChild(input);
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

// Inicializa campos ao carregar
atualizarCamposNomes();

async function iniciarJogo() {
const btn = document.getElementById(‘btn-start-game’);
btn.innerText = “CARREGANDO…”;
btn.disabled = true;

try {
const player = jogadorAleatorio();
const imgUrl = await buscarFotoWikipedia(player.name);
sharedPlayerIdentity = { …player, img: imgUrl };

```
totalPlayers = parseInt(document.getElementById('input-player-count').value) || 4;
let impostorCount = parseInt(document.getElementById('input-impostor-count').value) || 1;
impostorCount = Math.min(impostorCount, totalPlayers - 1);

// Captura nomes dos jogadores
const nameInputs = document.getElementById('player-names-container').querySelectorAll('input');
playerNames = Array.from(nameInputs).map((inp, i) => inp.value.trim() || `Jogador ${i + 1}`);

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
console.error(“Erro ao iniciar jogo:”, e);
btn.innerText = “INICIAR PARTIDA”;
btn.disabled = false;
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
if (label) label.innerText = ‘VEZ DE’;
if (action) action.innerText = nome.toUpperCase();
}

document.getElementById(‘player-card’).addEventListener(‘click’, () => {
if (!document.getElementById(‘card-inner’).classList.contains(‘hidden’)) return;

const isImpostor = impostorIndices.includes(currentPlayerIndex);
const data = isImpostor
? {
name: “VOCÊ É O IMPOSTOR”,
pos: “FARSANTE”,
bio: (() => {
const dicas = [sharedPlayerIdentity.foot, sharedPlayerIdentity.pos_type, sharedPlayerIdentity.continent];
const dica = dicas[Math.floor(Math.random() * dicas.length)];
return `Sua dica: "${dica}"`;
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
if (act) act.innerText = ‘DEBATE ABERTO!’;
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
impostorLabel.innerText = impostorIndices.length === 1 ? ‘O impostor era’ : ‘Os impostores eram’;
}
impostorIndices.forEach(i => {
const badge = document.createElement(‘span’);
badge.className = ‘impostor-badge’;
badge.innerText = playerNames[i] || `Jogador ${i + 1}`;
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
document.getElementById(‘btn-start-game’).innerText = ‘INICIAR PARTIDA’;
document.getElementById(‘btn-start-game’).disabled = false;
});

document.getElementById(‘btn-start-game’).addEventListener(‘click’, iniciarJogo);