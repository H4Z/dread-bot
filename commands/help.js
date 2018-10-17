const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    console.log("help.js")
    message.channel.send("Help sent.");

    let help2embed = new Discord.RichEmbed()
    .setTitle("_Dread Bot's Commands_")
    .setDescription("_All commands information about Dread Bot_")
    .setColor("#00fcf8")
    
    message.author.send(help2embed)

    let helpEmbed = new Discord.RichEmbed()
    .setTitle("_Moderation Commands_")
    .addField("_?clear_", `_?clear <value max 100>_`)
    .addField("_?warn_", `_?warn <@user> <reason>_`)
    .addField("_?tempmute_", `_?tempmute <@user> <time 1 s/m/h/d> <reason>_`)
    .addField("_?kick_", `_?kick <@user> <reason>_`)
    .addField("_?ban_", `_?ban <@user> <reason>_`)
    .addField("_?prefix_", `_?prefix <prefix to change>_`)
    .setColor("#00fcf8")
    
    message.author.send(helpEmbed);

    let help3Embed = new Discord.RichEmbed()
    .setTitle("_Music Commands_")
    .addField("_?mplay_", `_?mplay <Song name>_`)
    .addField("_?mstop_", `_?mstop <to stop the song>_`)
    .addField("_?mskip_", `_?tempmute <to skip the song>_`)
    .addField("_?mqueue_", `_?mqueue <to check queue list>_`)
    .addField("_?mpause_", `_?mpause <to pause the music>_`)
    .addField("_?mresume_", `_?mresume <to resume the song>_`)
    .addField("_?mnp_", `_?mnp <to check what's song currently playing>_`)
    .setColor("#00fcf8")
    
    message.author.send(help3Embed);

    let help4embed = new Discord.RichEmbed()
    .setTitle("_More Information_")
    .addField("_Our Discord Server!_", `_https://discord.gg/2vYXBCr_`)
    .setFooter("Powered By Dread eSports", bot.user.displayAvatarURL)
    .setTimestamp()
    .setColor("#00fcf8")
    
    message.author.send(help4embed)
}

module.exports.help = {
    name: "help"
}