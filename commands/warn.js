const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  console.log("warn.js")
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");
    let rreason = args.join(" ").slice(22);
    let avatar = message.author.displayAvatarURL;

    let reportEmbed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
    .setDescription(`**Member:** ${rUser.user.tag} (${rUser.id})\n**Action:** Warning\n**Reason:** ${rreason}`)
    .setFooter("")
    .setTimestamp(message.createdAt)
    .setColor(0xf44e42);

    let reportschannel = message.guild.channels.find(channels => channels.name === 'mod-logs');
    if(!reportschannel) return message.channel.send("Couldn't find mod-logs channel.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);
}
 
module.exports.help = {
  name: "warn"
}
