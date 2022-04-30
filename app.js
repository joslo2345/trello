require('dotenv').config()

if(!process.env.TOKEN && !process.env.KEY){
    throw new Error('No hay configuración con Api Key y con Token')
  }

const Trello = require("./main");
let trello = new Trello(process.env.KEY, process.env.TOKEN);
let cardTitle = `Card Nueva 1 ${new Date()}`;

console.log("Ejecutando!");

trello.addCard(cardTitle, "LaunchX Card Description 2", "626d7d16c0350f436b8ce1ad",
    function (error, trelloCard) {
        if (error) {
        console.log('Could not add card:', error);
        }
        else {
        console.log('Added card:', trelloCard);
        }
     });