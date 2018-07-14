const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!bUser) return message.channel.send("Couldn't find user.");
let bReason = args.join(" ").slice(22);
if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Bruh, no.");
if(bUser.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Nuh uh")

let reportEmbed = new Discord.RichEmbed()
.setDescription("Reports")
.setColor("#c40909")
.addField("Banned User", `${rUser} with ID: ${rUser.id}`)
.addField("Banned By", `${message.author} with ID: ${message.author.id}`)
.addField("Time", message.createdAt)
.addField("Reason", reason);

//Ban channel
let incidentChannel = message.guild.channels.find(`name`, "incidents");
if(!incidentChannel) return message.channel.send("Can't find incidents channel.");

message.guild.member(bUser).ban(bReason);
incidentchannel.send(banEmbed);
return;
}

module.exports.help = {
    name: "ban"
}