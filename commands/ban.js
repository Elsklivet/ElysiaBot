new Command({
    title: "Ban",
    description: "Ban a user.",
    call: ["ban"],
    onCall: function(message, args){
        if(!message.guild) return;

        // Initial permissions check
        if(!message.author.id=='348235152972972042' && !message.author.id=='135151101015097344' && !message.member.permissions.has("ADMINISTRATOR") && !message.member.permissions.has("BAN_MEMBERS")){
            message.channel.send('Invoker does not have permission to ban members. Execution terminated.').then(m => m.delete({timeout: 2000, reason: "Posted"})).catch(console.log);
            return;
        }

        const kickUser = message.mentions.users.first();
        if(!kickUser || kickUser.id == 619279373404602381){ 
            message.channel.send('You need to mention a user to ban!').then(m => m.delete({timeout: 2000, reason: "Posted"})).catch(console.log);
            return;
        }

        const kickMember = message.guild.member(kickUser);
        if(!kickMember){ 
            message.channel.send('That user isn\'t in this guild.').then(m => m.delete({timeout: 2000, reason: "Posted"})).catch(console.log);
            return;
        }

        kickMember
          .ban({reason: args[1] ? args[1] : 'No reason was supplied.',})
          .then(() => {
            message.channel.send(`Successfully banned ${kickUser.tag}`).then(m => m.delete({timeout: 2000, reason: "Posted"})).catch(console.log);
          })
          .catch(err => {
            message.channel.send(`I was unable to ban the member due to the role hierarchy or a lack of permissions by ${message.author}.`)
                .then(m => m.delete({timeout: 2000, reason: "Posted"})).catch(console.log);
            console.error(err);
          });
    }
})