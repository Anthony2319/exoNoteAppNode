const yargs = require('yargs');
const fs = require("fs");

yargs.command({
    command: 'list',
    describe: 'Liste toutes mes notes',
    handler: () => {
        console.log("Voici la liste des notes");
    }
}).command({
    command: 'add',
    describe: "Ajoute une note",
    builder: {
        title: {
            describe: "Titre de ma note",
            demandOption: true,
            type: "string"
        },
        message: {
            describe: "Message de ma note",
            demandOption: false,
            type: "string"
        }
    },
    handler: (argv) => {
        const newNote = [{
            title: argv.title,
            message: argv.message
        }]

        const newNoteJSON = JSON.stringify(newNote);
        fs.writeFile("data.json",newNoteJSON,(err) => {
            if(err) console.log(err);
            else {
                console.log("La nouvelle note a été sauvegardée");
            }
        });
    }
}).command({
    command: 'remove',
    describe: "Supprime une note",
    handler: () => {
        console.log("Chaud pour supprimer une note");
    }
}).command({
    command: 'read',
    describe: "Affiche le détail d'une note",
    handler: () => {
        console.log("Voici le détail d'une note");
    }
}).argv;