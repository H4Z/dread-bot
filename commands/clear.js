const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  console.log("clear.js")
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: **You must specify the number of messages to delete .**");
  if(!args[0]) return message.channel.send(":x: **You must specify the number of messages to delete .**");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`:pencil2: ${args[0]} messages have been deleted.`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "clear"
}