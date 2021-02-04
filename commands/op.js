const { Guild } = require("discord.js");

new Command({
    title: "Op",
    description: "Give a user op status, as long as the bot has it.",
    call: ["op"],
    onCall: function(message, args){
        if(!message.guild) return;

        // Initial permissions check
        if(!message.author.id=='348235152972972042' && !message.author.id=='135151101015097344'&& !message.member.permissions.has("ADMINISTRATOR") && !message.member.permissions.has("MANAGE_ROLES")){
            message.channel.send('Invoker does not have permission to give admin status. Execution terminated.').then(m => m.delete({timeout: 2000, reason: "Posted"})).catch(console.log);
            return;
        }
    }
})