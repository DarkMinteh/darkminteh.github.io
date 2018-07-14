const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    //!addrole @user Ninja School 1
    let pMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!pMember) return message.reply("Couldn't find that user.");
    let role = args.join(" ").slice(22);
    //if(!role) return message.reply("Specify a role!");
    let gRole = message.guild.roles.find(`name`, role);

    if(pMember.roles.has(gRole.id));
    await(pMember.addRole(gRole.id));
    message.reply(`Congrats, to <@${pMember.id}> for joining ${gRole.name}`)
}
module.exports.help = {
    name: "pickschool"
}