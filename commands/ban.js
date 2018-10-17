const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  console.log("ban.js")
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");

    let banEmbed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
    .setDescription(`**Member:** ${bUser.user.tag} (${bUser.id})\n**Action :**Ban\n**Reason :** ${bReason}`)
    .setFooter("")
    .setTimestamp(message.createdAt)
    .setColor(0xf44e42);

    let incidentchannel = message.guild.channels.find(channels => channels.name === 'reports');
    if(!incidentchannel) return message.channel.send("Can't find reports channel.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}
