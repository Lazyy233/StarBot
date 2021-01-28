const Discord = require("discord.js");
const gif = require('../../gifs/punch.json')

module.exports = {
    name: "punch",
    run: (client, message, args) => {
      message.delete()


var gif2 = gif[Math.round(Math.random() * (gif.length - 1))];
    
        
       
var user = message.mentions.members.first()
if(!user){
    message.reply(`You've to mention user you want to punch.`)
} else {
const embed = new Discord.MessageEmbed()
    .setColor(0xff0000)
    .setDescription(`${message.author} punched **${user}**`)
    .setImage(gif2);
message.channel.send({
    embed
});
}

    }
}