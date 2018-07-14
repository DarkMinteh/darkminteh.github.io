const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    client.on(`guildCreate`, guild => (

        guild.defaultChannel.sendMessage(`Hi <@{$user}>! Please check the rules before creating a character. Enjoy your stay :3`)

    ));

}

module.exports.help = {
    name: "welcome"
}