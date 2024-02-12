typeList = [
    {
        typeName : "Arme à une main",
        typeDamage : "1",
        typeRange : "Mêlée",
        typeVariations: ["Epée", "Sabre", "Masse", "Hache", "Dague", "Rapière", "Katana"],
        tagsList: [
            {
            tagName: "Saignement",
            tagEffect: "Inflige 1 de dégât supplémentaire au début du tour suivant"
            },
            {
            tagName: "Parade",
            tagEffect: "Quand attaqué en mêlée, lancez 1d6 et évitez les dégâts sur un résultat de 5-6"
            },
            {
            tagName: "Combo",
            tagEffect: "Si vous avez déjà réussi une attaque avec une arme à une main, infligez 2 de dégât supplémentaire"
            },
            {
            tagName: "Lancer",
            tagEffect: "Peut être lancé pour attaquer à Courte distance"
            },
            {
            tagName: "Défensif",
            tagEffect: "Si utilisé avec un Bouclier, un 4 est considéré comme un 5-6"
            },
            {
            tagName: "Outil",
            tagEffect: "Possède une utilité secondaire qui garanti un succès hors-combat par session"
            },
        ]
    },
    {
        typeName : "Arme à deux mains",
        typeDamage : "3",
        typeRange : "Mêlée",
        typeVariations: ["Epée à deux mains", "Odachi", "Faux", "Lance", "Trident", "Glaive", "Marteau à deux mains", "Morgensterg", "Hache à deux mains"],
        tagsList: [
                {
                tagName: "Pourfendeur",
                tagEffect: "Ignore les boucliers"
                },
                {
                tagName: "Long",
                tagEffect: "Peut attaque à Courte Portée"
                },
                {
                tagName: "Etourdissant",
                tagEffect: "Sur un résultat 3-4, votre cible ne peut pas être celle qui contre-attaque"
                },
                {
                tagName: "Cavalerie",
                tagEffect: "Inflige +1 dégât si utilisé sur une monture"
                },
                {
                tagName: "Lourd",
                tagEffect: "Inflige +2 dégâts, mais un résultat de 1-2 provoque deux conséquences"
                },
                {
                tagName: "Destructeur",
                tagEffect: "Une fois par session, réussi gratuitement un jet pour détruire quelque chose d'inanimé"
                },
        ]
    },
    {
        typeName : "Arme à distance",
        typeDamage : "2",
        typeRange : "Courte distance / Longue distance",
        typeVariations: ["Arbalète", "Arc court", "Fusil", "Fronde", "Paire de pistolets", "Arc long", "Chakram", "Boomerang", "Shurikens", "Couteaux de lancer"],
        tagsList: [
            {
            tagName: "Dispersion",
            tagEffect: "+1 dégât à courte distance et -1 dégât à longue distance"
            },
            {
            tagName: "Précision",
            tagEffect: "-1 dégât à courte distance et +1 dégât à longue distance"
            },
            {
            tagName: "Parabolique",
            tagEffect: "Peut tirer au dessus des barrière sur des cibles hors du champs de vision"
            },
            {
            tagName: "Assuré",
            tagEffect: "Inflige tous de même 1 de dégât sur un 1-2"
            },
            {
            tagName: "Volée",
            tagEffect: "Au lieu d'infliger 2 à une cible, peut infliger 1 de dégât à chaque cible ennemie située à une distance précise"
            },
            {
            tagName: "Tête chercheuse",
            tagEffect: "Si vous touchez une cible, vous pouvez ensuite choisir d'obtenir un résultat de 4 sur tous les tirs suivant tant que vous gardez cette même cible"
            },
        ]
    },
    {
        typeName : "Tome",
        typeDamage : "3",
        typeRange : "Courte distance",
        typeVariations: ["Tome"],
        tagsList: [
            {
                tagName: "Souffle",
                tagEffect: "Repousse la cible d'une zone"
                },
                {
                tagName: "Feu",
                tagEffect: "Inflige +1 dégât aux cibles organiques"
                },
                {
                tagName: "Glace",
                tagEffect: "La cible ne peut pas se déplacer jusqu'au début de votre prochain tour"
                },
                {
                tagName: "Foudre",
                tagEffect: "Inflige +1 dégât si la cible tiens ou porte un objet métallique"
                },
                {
                tagName: "Lumière",
                tagEffect: "Inflige +1 dégât si la cible est mort-vivante ou démoniaque"
                },
                {
                tagName: "Ténèbres",
                tagEffect: "La cible ne peut pas être guérie jusqu'au début de votre prochain tour"
                },
        ]
    }
]

generalTagsList = [
    {
        tagName: "Puissant",
        tagEffect: "Inflige 1 de dégât supplémentaire quand utilisé avec Might"
    },
    {
        tagName: "Chef d'oeuvre",
        tagEffect: "Inflige 1 de dégât supplémentaire quand utilisé avec Mastery"
    },
    {
        tagName: "Mystérieux",
        tagEffect: "Inflige 1 de dégât supplémentaire quand utilisé avec Mischief"
    },
    {
        tagName: "Sanglant",
        tagEffect: "Quand vous ramassez un drop de PV, regagnez 1 PV supplémentaire"
    },
    {
        tagName: "Glorieux",
        tagEffect: "Quand vous ramassez un drop de SP, regagnez 1 SP supplémentaire"
    },
    {
        tagName: "Enchanté",
        tagEffect: "Quand vous ramassez un drop de Materia, gagnez 1 Materia supplémentaire"
    }
]

const generateWeapon = (type = null, tagNumber = 0) => {

}