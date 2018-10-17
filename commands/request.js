const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  console.log("request.js")
    let age = args[0];
    let link = args[args.length - 1];
    // Now get reason
    args.pop(); args.shift();
    let rreason = args.join(' ');
    if (!rreason) return message.channel.send('Please insert your reason!!')
    if (!age) return message.channel.send('Please insert your age!!')
    if (!link) return message.channel.send('Please insert your link!!')

    let reportEmbed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
    .setDescription(`**Reason:** ${rreason}\n**Age:** ${age}\n**Link:** ${link}`)
    .setFooter("")
    .setTimestamp(message.createdAt)
    .setColor(0xf44e42);

    let reportschannel = message.guild.channels.find(channels => channels.name === 'mod-logs');
    if(!reportschannel) return message.channel.send("Couldn't find mod-logs channel.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}
 
module.exports.help = {
  name: "reqlive"
}
