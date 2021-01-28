const Discord = require("discord.js");
const gif = require('../../gifs/hug.json')

module.exports = {
    name: "hug",
    run: (client, message, args) => {
      message.delete()


var gif2 = gif[Math.round(Math.random() * (gif.length - 1))];
    
        
       
var user = message.mentions.members.first()
if(!user){
    message.reply(`You've to mention user you want to hug.`)
} else {
const embed = new Discord.MessageEmbed()
    .setColor(0xff0000)
    .setDescription(`${message.author} is hugging **${user}**`)
    .setImage(gif2);
message.channel.send({
    embed
});
}

    }
}