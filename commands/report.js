const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("Couldn't find user.");
        let rreason = args.join(" ").slice(22);

        let reportEmbed = new Discord.RichEmbed()
        .setDescription("Reports")
        .setColor("#ff69b4")
        .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
        .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
        .addField("Time", message.createdAt)
        .addField("Reason", rreason);

        let reportschannel = message.guild.channels.find(`name`, "reports");
        if(!reportschannel) return message.channel.send("Couldn't find reports channel.");
        //reports will be sent to the reports channel

        message.delete().catch(O_o=>{});
        reportschannel.send(reportEmbed);
        //message of the report will be removed and sent to the Reports server
}

module.exports.help = {
    name: "report"
}