// creating an array and passing the number, questions, options, and options

let questions = [{
    numb: 1,
    question: "What is the name of the fictional setting in which The Lord of the Rings takes place?",
    answer: "Middle Earth",
    options: [
        "Narnia",
        "Middle Earth",
        "Hogwarts",
        "Westeros"
    ]
}, {
    numb: 2,
    question: "Who is entrusted with the quest to destroy The One Ring?",
    answer: "A Hobbit, Frodo Baggins of the Shire",
    options: [
        "A Witcher, Geralt of Rivia",
        "A member of the Tribunal, Lord Vivec of Morrowind",
        "A Hobbit, Frodo Baggins of the Shire",
        "The Human Ranger, Minsc of Rasheman alongside his trusty hamster, Boo"
    ]
}, {
    numb: 3,
    question: "How many rings of power were made for the Elves, Dwarves, and Men?",
    answer: "Three for the Elves, Seven for Dwarves, and Nine for Men",
    options: [
        "Three for the Elves, Seven for Dwarves, and Nine for Men",
        "Six for the ELves, Six for the Dwarves, and Six for Men",
        "Trick Question. No Rings were made other than The ONE Ring",
        "One thousand for the army of Elven Warriors, Nineteen-Thousand for the Dwarven Warlords under The Misty Mountain, and the Race of Men were given nothing"
    ]
}, {
    numb: 4,
    question: "What is the name of the mountain where the Master Ring was made?",
    answer: "Mount Doom",
    options: [
        "Mount Devious", 
        "Mount Dreary", 
        "Mount Death", 
        "Mount Doom"
    ]
}, {
    numb: 5,
    question: "What was the name of Sauron's Fortress in Mordor?",
    answer: "Barad-dûr",
    options: [
        "Minas Morgul",  
        "Barad-dûr", 
        "Orthanc", 
        "Cirith Ungol"
    ]
}, {
    numb: 6,
    question: "What is the name of the bridge that Gandalf destroys in the battle with the Balrog of Moria?",
    answer: "The Bridge of Khazad-dûm",
    options: [
        "The Morgul Bridge", 
        "Tharbad",
        "The Bridge of Khazad-dûm",
        "The Brandywine Bridge"
    ]
}, {
    numb: 7,
    question: "Who owned the Ring of Power until Bilbo Baggins picked it up in the cave?",
    answer: "Gollum/Sméagol",
    options: [
        "The Witch-King of Angmar",
        "Gollum/Sméagol",
        "The Mouth of Sauron",
        "Boromir of Gondor"
    ]
}, {
    numb: 8,
    question: "What was the name of the demonic spider that lived in the caves of Cirith Ungol?",
    answer: "Shelob",
    options: [
        "Shelob", 
        "Aragog", 
        "Lolth", 
        "Chaos Witch Quelaag"
    ]
}, {
    numb: 9,
    question: "In 'The Lord of the Rings: The Return of the King', which army does Aragorn summon using the Sword of Elendil?",
    answer: "The Army of the Dead",
    options: [
        "The Rohirrim", 
        "The Night's Watch", 
        "The Army of Darkness",
        "The Army of the Dead",
    ]
}, {
    numb: 10,
    question: "What does Gollum call the Ring of Power?",
    answer: "My Precious", 
    options: [
        "My Precious", 
        "My Wedding Band",
        "My Only Friendses",
        "Sally"
    ]
}, {
    numb: 11,
    question: "What group composed the Fellowship of the Ring?",
    answer: "Frodo Baggins of the Shire, Samwise Gamgee, Meridoc Brandybuck, Peregrin Took, the ranger Aragorn, Boromir of Gondor, Legolas of the Woodland Realm, the dwarf Gimli, and Gandalf the Grey", 
    options: [
        "Geralt of Rivia, Dandelion the bard, the sorceresses Triss Merigold and Yennefer of Vengerberg, and the dwarf Zoltan Chivay",
        "Knight Lautrec of Carim, Andre and Solaire of Astora, Siegmeyer of Catarina, and Patches the Hyena",
        "Frodo Baggins of the Shire, Samwise Gamgee, Meridoc Brandybuck, Peregrin Took, the ranger Aragorn, Boromir of Gondor, Legolas of the Woodland Realm, the dwarf Gimli, and Gandalf the Grey", 
        "Jon Snow of Winterfell, Tyrion Lannister, Gregor and Sandor 'The Hound' Clegane, Daenerys Targaryen, and Lord Eddard Stark"
    ]
}, {
    numb: 12,
    question: "What is the name of the reforged version of the 'sword that was broken'?",
    answer: "Andúril, the Flame of the West",
    options: [
        "Sting, the Spider's Bane",
        "Glamdring, the Foe-Hammer",
        "Andúril, the Flame of the West",
        "Orcrist, the Goblin-Cleaver"
    ]
}, {
    numb: 13,
    question: "What does Aragorn say right before charging into the last battle in Mordor?",
    answer: "'For Frodo!'",
    options: [
        "'DEATH!'",
        "'For Frodo!'",
        "'I'll kill everyone one of you damned dirty orcs!'",
        "'Elendil!'"
    ]
}, {
    numb: 14,
    question: "Who is Isildur's heir, also heir to the throne of Gondor, and known as 'Strider' and 'Dunadan'?",
    answer: "Aragorn, son of Arathorn",
    options: [
        "Boromir of Gondor",
        "Aragorn, son of Arathorn",
        "Samwise Gamgee, Frodo's gardener",
        "The humble student, Maxwell, on of Leland"
    ]
}, {
    numb: 15,
    question: "What are potatoes, and what are they good for?",
    answer: "'PO-TA-TOES? Boil 'em, mash 'em, stick 'em in a stew. Lovely big golden chips with a nice piece of fried fish.",
    options: [
        "Absolutely nothing",
        "A root vegetable; they have plenty of uses",
        "'PO-TA-TOES? Boil 'em, mash 'em, stick 'em in a stew. Lovely big golden chips with a nice piece of fried fish.",
        "A tuber, generally cooked until soft and prepared as a side dish"
    ]
}, {
    numb: 16,
    question: "Which is NOT one of Gandalf's many nicknames?",
    answer: "Flame of Udun",
    options: [
        "The Grey Pilgrim", 
        "Gandalf Greyhame", 
        "Gandalf Stormcrow",  
        "Flame of Udun"
    ]
}, {
    numb: 17,
    question: "What does the Elvish word 'Mellon' mean?",
    answer: "Friend",
    options: [
        "Friend",
        "Watermelon",
        "Lord of the Woodland Realm",
        "A measurement of distance, '...as the crow flies'"
    ] 
}, {
    numb: 18,
    question: "What unusual property does Frodo notice about the Ring?",
    answer: "It grows heavier",
    options: [
        "It makes his ring finger swell up",
        "It grows heavier",
        "He can see long distances when peering through it",
        "It makes Samwise find him particularly attractive"
    ]
}, {
    numb: 19,
    question: "Where are they taking the Hobbits?",
    answer: "To Isengard",
    options: [
        "To Fangorn Forest",
        "To The Lands Between",
        "To Isengard",
        "To Rohan"
    ]
}, {
    numb: 20,
    question: "What do the Uruk-Hai of Isengard bear upon their helms?",
    answer: "The White Hand of Saruman",
    options: [
        "The White Hand of Saruman",
        "A Flaming Ring on a Black Crest",
        "The White Tree of Gondor", 
        "The Leaves of Lothlorien"
    ]
}]