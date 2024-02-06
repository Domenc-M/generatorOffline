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
                
            }
        ]
    },
    {
        typeName : "Arme à deux mains",
        typeDamage : "3",
        typeRange : "Mêlée",
        typeVariations: ["Epée à deux mains", "Odachi", "Faux", "Lance", "Trident", "Glaive", "Marteau à deux mains", "Morgensterg", "Hache à deux mains"]
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