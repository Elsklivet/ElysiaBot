new Command({
    title: "Unban",
    description: "Ban a user.",
    call: ["unban"],
    onCall: function(message, args){
        if(!message.guild) return;

        // Initial permissions check
        if(!message.author.id=='348235152972972042' && !message.author.id=='135151101015097344' && !message.member.permissions.has("ADMINISTRATOR") && !message.member.permissions.has("BAN_MEMBERS")){
            message.channel.send('Invoker does not have permission to unban members. Execution terminated.').then(m => m.delete({timeout: 2000, reason: "Posted"})).catch(console.log);
            return;
        }

        if(args.length >= 1){
            const user = args[0];
            message.guild.members.unban(user, args[1] ? args[1] : "No reason was provided.").then(() => {
                message.channel.send(`Successfully unbanned ${user}`).then(m => m.delete({timeout: 2000, reason: "Posted"})).catch(console.log)}).catch(console.log);
        }else{
            message.channel.send('You didn\'t ask to unban anyone. Remember: you have to use their ID, not their @.').then(m => m.delete({timeout: 2000, reason: "Posted"})).catch(console.log);
            return;
        }
    }
})