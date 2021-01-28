const Discord = require("discord.js");
const gif = require('../../gifs/slap.json')

module.exports = {
    name: "slap",
    run: (client, message, args) => {
      message.delete()


var gif2 = gif[Math.round(Math.random() * (gif.length - 1))];
    
        
       
var user = message.mentions.members.first()
if(!user){
    message.reply(`You've to mention user you want to slap.`)
} else {
const embed = new Discord.MessageEmbed()
    .setColor(0xff0000)
    .setDescription(`${message.author} slapped **${user}**`)
    .setImage(gif2);
message.channel.send({
    embed
});
}

    }
}