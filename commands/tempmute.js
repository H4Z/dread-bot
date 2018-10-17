const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  console.log("tempmute.js")
  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let muterole = message.guild.roles.find(roles => roles.name === 'Muted');
  let rreason = args.join(' ').slice(22);

  let tempMute = new Discord.RichEmbed()
  .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
  .setDescription(`**Member:** ${tomute} (${tomute.id})\n**Action:** Tempmute\n**Reason:** ${rreason} `)
  .setFooter("")
  .setTimestamp(message.createdAt)
  .setColor(0xf44e42);

  let tmuteChannels = message.guild.channels.find(channels => channels.name === 'mod-logs');
  if(!tmuteChannels) return message.channel.send("Couldn't find mod-logs channel.");


  message.delete().catch(O_o=>{});
  tmuteChannels.send(tempMute);

  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify a time!");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "tempmute"
}
