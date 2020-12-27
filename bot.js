const Discord = require("discord.js");
const config = require("./config.json");

var deck = [];
var usedcards =[];


const client = new Discord.Client();

client.login(config.token);


preguica();
client.on('message', (receivedMessage) => {
    
//the bot only respond to the DM
    if (receivedMessage.author == client.user) {
        return
    }
    if (receivedMessage.author.id != "239847202963324928") {
        return
    }
    //boiolice
    if(receivedMessage.author.id=="298171140831051776" || receivedMessage.author.id=="691343301139497031" ){
        receivedMessage.react('❤️');
    }
    //fim da boiolice
    if (receivedMessage.author.id == "239847202963324928") {
        console.log(receivedMessage.author.username);
        

        if(receivedMessage.content=="deck"){
            
            if(deck.length>0){
            var random = Math.floor(Math.random()*deck.length);
            receivedMessage.reply(deck[random]);
            delete deck[random];deck.sort();
            deck.pop();
            console.log("you still have ",deck.length," cards left")
            }else{
                receivedMessage.reply("no more cards");

            }            
            
        }
        if(receivedMessage.content=="debug"){
            for (let i = 0; i < deck.length; i++) {
                console.log(deck[i]);
                
            }
        }
    }



})







function preguica() {
    // we don't talk about this
    deck.push("XI. Justice -- Change Alignment Instantly");
    deck.push("Two of swords -- Defeat the next monster you meet to gain one level.");
    deck.push("Four of swords -- You are imprisoned.");
    deck.push("Ten of swords -- –1 penalty on all saving throws henceforth.");
    deck.push("Three of cups -- Avoid any situation you choose . . . once.");
    deck.push("XV. The Devil -- Enmity between you and an outsider.");
    deck.push("0. The Fool -- Lose 10,000 experience points and you must draw again.");
    deck.push("Seven of cups -- Gain your choice of twenty-five pieces of jewelry or fifty gems.");
    deck.push("Two of pentacles -- Lose Intelligence (permanent drain). You may draw again.");
    deck.push("XII. The Hanged Man -- Gain 10,000 XP or two more draws from the deck.");
    deck.push("V. The Hierophant -- Gain a major magic weapon.");
    deck.push("Page of swords -- Gain the service of a 4th-level fighter.");
    deck.push("XVIII. The Moon -- You are granted 1d4 wishes.");
    deck.push("Five of swords -- One of your friends turns against you.");
    deck.push("XVI. The Tower -- Immediately lose all wealth and real property.");
    deck.push("XIII. Death -- Defeat dread wraith or be forever destroyed.");
    deck.push("XVII. The Star -- Immediately gain a +2 inherent bonus to one ability score.");
    deck.push("XIX. The Sun -- Gain beneficial medium wondrous item and 50,000 XP.");
    deck.push("Queen of pentacles -- All magic items you possess disappear permanently.");
    deck.push("Four of staves -- Gain a +6 bonus on Diplomacy checks plus a small keep.");
    deck.push("IX. The Hermit -- Know the answer to your next dilemma.");
    deck.push("Eight of swords -- Body functions, but soul is trapped elsewhere.");


}





