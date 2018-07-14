const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    //!addrole @user Ninja Clan 1
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Sorry pal, you can't do that~!")
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("Couldn't find that user, yo.");
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("Specify a role!");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("Couldn't find that role.")

    if(rMember.roles.has(gRole.id));
    await(rMember.addRole(gRole.id));

    message.reply(`Congrats, to <@${rMember.id}> for joining ${gRole.name}`)
}
module.exports.help = {
    name: "addrole"
}
