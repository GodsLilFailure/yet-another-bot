const Discord = require("discord.js");
const config = require("./config.json");

var deck = [];
var explanations = [];
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

    explanations.push("Balance: The character must change to a radically different alignment. If the character fails to act according to the new alignment, she gains a negative level.");
    explanations.push("Comet: The character must single-handedly defeat the next hostile monster or monsters encountered, or the benefit is lost. If successful, the character gains enough XP to attain the next experience level.");
    explanations.push("Donjon: This card signifies imprisonment— either by the imprisonment spell or by some powerful being. All gear and spells are stripped from the victim in any case. Draw no more cards.");
    explanations.push("Euryale: The medusalike visage of this card brings a curse that only the fates card or a deity can remove. The –1 penalty on all saving throws is otherwise permanent.");
    explanations.push("Fates: This card enables the character to avoid even an instantaneous occurrence if so desired, for the fabric of reality is unraveled and respun. Note that it does not enable something to happen. It can only stop something from happening or reverse a past occurrence. The reversal is only for the character who drew the card; other party members may have to endure the situation.");
    explanations.push("Flames: Hot anger, jealousy, and envy are but a few of the possible motivational forces for the enmity. The enmity of the outsider can’t be ended until one of the parties has been slain. Determine the outsider randomly, and assume that it attacks the character (or plagues her life in some way) within 1d20 days.");
    explanations.push("Fool: The payment of XP and the redraw are mandatory. This card is always discarded when drawn, unlike all others except the jester.");
    explanations.push("Gem: This card indicates wealth. The jewelry is all gold set with gems, each piece worth 2,000 gp, the gems 1,000 gp value each.");
    explanations.push("Idiot: This card causes the drain of 1d4+1 points of Intelligence immediately. The additional draw is optional.");
    explanations.push("Jester: This card is always discarded when drawn, unlike all others except the fool. The redraws are optional.");
    explanations.push("Key: The magic weapon granted must be one usable by the character. It suddenly appears out of nowhere in the character’s hand.");
    explanations.push("Knight: The fighter appears out of nowhere and serves loyally until death. He or she is of the same race (or kind) and gender as the character.");
    explanations.push("Moon: This card sometimes bears the image of a moonstone gem with the appropriate number of wishes shown as gleams therein; sometimes it depicts a moon with its phase indicating the number of wishes (full=four; gibbous=three; half=two; quarter=one). These wishes are the same as those granted by the 9th-level wizard spell and must be used within a number of minutes equal to the number received.");
    explanations.push("Rogue: When this card is drawn, one of the character’s NPC friends (preferably a cohort) is totally alienated and forever after hostile. If the character has no cohorts, the enmity of some powerful personage (or community, or religious order) can be substituted. The hatred is secret until the time is ripe for it to be revealed with devastating effect.");
    explanations.push("Ruin: As implied by its name, when this card is drawn, all nonmagical possessions of the drawer are lost.");
    explanations.push("Skull: A dread wraith appears. Treat this creature as an unturnable undead. The character must fight it alone—if others help, they get dread wraiths to fight as well. If the character is slain, she is slain forever and cannot be revived, even with a wish or a miracle.");
    explanations.push("Star: The 2 points are added to any ability the character chooses. They cannot be divided among two abilities.");
    explanations.push("Sun: Roll for a medium wondrous item until a useful item is indicated.");
    explanations.push("Talons: When this card is drawn, every magic item owned or possessed by the character is instantly and irrevocably gone.");
    explanations.push("Throne: The character becomes a true leader in people’s eyes. The castle gained appears in any open area she wishes (but the decision where to place it must be made within 1 hour).");
    explanations.push("Vizier: This card empowers the character drawing it with the one-time ability to call upon a source of wisdom to solve any single problem or answer fully any question upon her request. The query or request must be made within one year. Whether the information gained can be successfully acted upon is another question entirely.");
    explanations.push("The Void: This black card spells instant disaster. The character’s body continues to function, as though comatose, but her psyche is trapped in a prison somewhere—in an object on a far plane or planet, possibly in the possession of an outsider. A wish or a miracle does not bring the character back, instead merely revealing the plane of entrapment. Draw no more cards.");




}





