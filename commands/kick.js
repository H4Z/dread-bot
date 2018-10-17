const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  console.log("kick.js")
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    let kickChannel = message.guild.channels.find(channels => channels.name === 'mod-logs');
    if(!kickChannel) return message.channel.send("Couldn't find mod-logs channel.");
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");
    let rreason = args.join(" ").slice(22);

    let kickEmbed = new Discord.RichEmbed()
    .setTitle("Kick")
    .setDescription(`**Member:** ${kUser}\n**Action:** Kick\n**Reason:** ${rreason}`)
    .setTimestamp(message.createdAt)
    .setColor(0xf44e42);

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}
