const Discord = require("discord.js");
const gif = require('../../gifs/hold.json')

module.exports = {
    name: "hold",
    run: (client, message, args) => {
      message.delete()


var gif2 = gif[Math.round(Math.random() * (gif.length - 1))];
    
        
       
var user = message.mentions.members.first()
if(!user){
    message.reply(`You've to mention user you want to hold hands with.`)
} else {
const embed = new Discord.MessageEmbed()
    .setColor(0xff0000)
    .setDescription(`${message.author} is holding hands with **${user}**`)
    .setImage(gif2);
message.channel.send({
    embed
});
}

    }
}