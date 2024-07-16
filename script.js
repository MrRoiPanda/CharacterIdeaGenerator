function generateCharacter() {
    const genders = ["Masculin", "Féminin"];
    const ages = [
        5, 10, 15, 20, 25, 30, 35, 40,
        45, 50, 55, 60, 65, 70, 75, 80,
        85, 90, 95, 100
    ];
    const personalities = [
        "Courageux", "Timide", "Ambitieux", "Paresseux",
        "Créatif", "Empathique", "Rationnel", "Impulsif",
        "Optimiste", "Pessimiste", "Sociable", "Réservé",
        "Curieux", "Calme", "Dynamique", "Prudent"
    ];
    const hobbies = [
        "Peinture", "Musique", "Sport", "Lecture",
        "Cuisine", "Voyage", "Photographie", "Jardinage",
        "Danse", "Écriture", "Jeux vidéo", "Randonnée",
        "Pêche", "Équitation", "Bricolage", "Yoga",
        "Méditation", "Observation des étoiles", "Calligraphie", "Couture",
        "Poterie", "Collectionner des timbres", "Modélisme", "Escalade",
        "Surf", "Planche à voile", "Plongée sous-marine",
        "Théâtre", "Improvisation", "Chant", "Apiculture",
        "Astronomie", "Échecs", "Cartomagie", "Dessin", 
        "Quilting", "Filmmaking", "Restauration de meubles",
        "Lecture de bandes dessinées", "Cosplay", "Podcasting", "MMA"
    ];
    const mythologicalCreatures = [
        // Général
        "Dragon", "Phoenix", "Licorne", "Sirène",
        "Centaure", "Griffon", "Fée", "Loup-garou",
        "Vampire", "Chimère", "Sphinx", "Minotaure",
        "Hippogriffe", "Golem", "Kraken", "Basilic",

        // Japonais
        "Tengu", "Kitsune", "Oni", "Yuki-onna",
        "Kappa", "Tanuki", "Jorogumo", "Nue",
        "Bakeneko", "Tsuchigumo", "Gashadokuro", "Yurei",

        // Russe
        "Baba Yaga", "Koschei", "Domovoi", "Rusalka",
        "Leshy", "Zmey Gorynych", "Vodyanoy", "Alkonost",

        // Grecque
        "Cerbère", "Méduse", "Cyclope", "Hydre de Lerne",
        "Harpie", "Satyre", "Charybde", "Sirène (grecque)",

        // Nordique
        "Jörmungandr", "Fenrir", "Valkyrie", "Troll",
        "Draugr", "Kraken (nordique)", "Nidhogg", "Huldra",

        // Égyptienne
        "Anubis", "Bastet", "Sphinx (égyptien)", "Ammut",
        "Benu", "Serpopard", "Uraeus", "Sekhmet",

        // Fantasy
        "Mimic", "Beholder", "Gelatinous Cube", "Mind Flayer",
        "Balrog", "Gobelin", "Orc", "Troll des montagnes"
    ];
    const jobs = [
        "Guerrier", "Mage", "Archer", "Assassin",
        "Artisan", "Marchand", "Sorcier", "Prêtre",
        "Forgeron", "Alchimiste", "Éclaireur", "Chasseur",
        "Barde", "Mercenaire", "Explorateur", "Pirate",
        "Chevalier", "Érudit", "Guérisseur", "Druide"
    ];
    const ranks = [
        "Novice", "Apprenti", "Chevalier", "Baron",
        "Vicompte", "Comte", "Marquis", "Duc",
        "Prince/Princesse", "Roi/Reine",
        "Empereur/Impératrice", "Héros", "Légende",
        "Souverain", "Commandant", "Grand Maître", "Champion"
    ];
    const races = [
        "Humain", "Elfe", "Nain", "Orc",
        "Gnome", "Halfelin", "Dragonborn", "Tieffelin",
        "Géant", "Centaur", "Loup-garou", "Vampire",
        "Sirène", "Gobelin", "Fée", "Robot",
        "Hybride", "Alien", "Fantôme", "Zombie",
        "Succube", "Lamia", "Démon","Hobbit", 
        "Ange", "Satyre"
    ];

    const character = {
        gender: genders[Math.floor(Math.random() * genders.length)],
        age: ages[Math.floor(Math.random() * ages.length)],
        personality: personalities[Math.floor(Math.random() * personalities.length)],
        hobby: hobbies[Math.floor(Math.random() * hobbies.length)],
        mythologicalCreature: mythologicalCreatures[Math.floor(Math.random() * mythologicalCreatures.length)],
        job: jobs[Math.floor(Math.random() * jobs.length)],
        rank: ranks[Math.floor(Math.random() * ranks.length)],
        race: races[Math.floor(Math.random() * races.length)]
    };

    document.getElementById("characterDisplay").innerHTML = `
        <p><strong>Genre:</strong> ${character.gender}</p>
        <p><strong>Âge:</strong> ${character.age} ans</p>
        <p><strong>Race:</strong> ${character.race}</p>
        <p><strong>Rang:</strong> ${character.rank}</p>
        <p><strong>Métier:</strong> ${character.job}</p>
        <p><strong>Personnalité:</strong> ${character.personality}</p>
        <p><strong>Hobby:</strong> ${character.hobby}</p>
        <p><strong>Créature mythologique associée:</strong> ${character.mythologicalCreature}</p>
    `;
}
