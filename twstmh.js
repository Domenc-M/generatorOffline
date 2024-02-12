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
        typeName : "Tome",
        typeDamage : "3",
        typeRange : "Courte distance",
        typeVariations: ["Tome"],
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