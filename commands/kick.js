new Command({
    title: "Kick",
    description: "Kick a user.",
    call: ["kick"],
    onCall: function(message, args){
        if(!message.guild) return;

        // Initial permissions check
        if(!message.author.id=='348235152972972042' && !message.author.id=='135151101015097344'&& !message.member.permissions.has("ADMINISTRATOR") && !message.member.permissions.has("KICK_MEMBERS")){
            message.channel.send('Invoker does not have permission to kick members. Execution terminated.').then(m => m.delete({timeout: 2000, reason: "Posted"})).catch(console.log);
            return;
        }

        const kickUser = message.mentions.users.first();
        if(!kickUser){ 
            message.channel.send('You need to mention a user to kick!').then(m => m.delete({timeout: 2000, reason: "Posted"})).catch(console.log);
            return;
        }

        const kickMember = message.guild.member(kickUser);
        if(!kickMember){ 
            message.channel.send('That user isn\'t in this guild.').then(m => m.delete({timeout: 2000, reason: "Posted"})).catch(console.log);
            return;
        }

        kickMember
          .kick(args[1] ? args[1] : 'No reason was supplied.')
          .then(() => {
            message.channel.send(`Successfully kicked ${kickUser.tag}`).then(m => m.delete({timeout: 2000, reason: "Posted"})).catch(console.log);
          })
          .catch(err => {
            message.channel.send(`I was unable to kick the member due to the role hierarchy or a lack of permissions by ${message.author}.`)
                .then(m => m.delete({timeout: 2000, reason: "Posted"})).catch(console.log);
            console.error(err);
          });
    }
})