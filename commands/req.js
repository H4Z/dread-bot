const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  console.log("req.js")
    let rreason = args.shift()
    let age = args.slice().join(' ')
    if (!rreason) return message.channel.send('Please enter your reason!!')
    let avatar = message.author.displayAvatarURL;
    
    let reportEmbed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
    .setDescription(`**Age:** ${rreason}\n**Reason:** ${age}`)
    .setFooter("")
    .setTimestamp(message.createdAt)
    .setColor(0xf44e42);

    let reportschannel = message.guild.channels.find(channels => channels.name === 'mod-logs');
    if(!reportschannel) return message.channel.send("Couldn't find mod-logs channel.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}
 
module.exports.help = {
  name: "clanreq"
}
