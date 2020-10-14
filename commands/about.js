new Command({
  title: "About",
  description: "Get your own information.",
  call: ["about"],
  onCall: function(message, args){ // THIS DOES NOT THROW AN ERROR
      if(!message.mentions.users.size && args.length < 1){
        const embed = new Discord.MessageEmbed()
        .setTitle(`About ${message.author.username}`)
        .setColor("#58FAAC")
        .setImage(`${message.author.avatarURL()}`)
        .addField("Tag:",`${message.author.tag}`)
        .addField("Nickname:", `${message.member.displayName}`)
        .addField("ID:", `${message.author.id}`)
        .addField("Voice Channel:",`${message.member.voiceChannel}`)
        .addField("Perms:",`${message.channel.guild.members.cache.find(user => user.id).permissions.toArray()}`)
        .addField("Roles:",`${message.channel.guild.members.cache.find(user => user.id).roles.cache.array()}`)
        .addField("Created:",`${message.author.createdAt}`)
        .addField("Ping:",`${message.author.client.ping}`)
        .addField("MFA?: ",`${message.author.client.user.mfaEnabled}`)
        .setFooter(`Information fetched by ${client.user.username}`);
        message.channel.send(`About ${message.author}`,embed).catch(console.log);

      }else if(args.length==1){ // THIS IS WHERE THE ERROR THROWS
        let id = args[0].replace(/[<@!>]/g, '');

        client.users.fetch(id).then(user => {
          let member = message.channel.guild.members.cache.find(use => use.id === user.id);
          const embed = new Discord.MessageEmbed()
          .setTitle(`About ${user.username}`)
          .setColor("#58FAAC")
          .setImage(`${user.avatarURL()}`)
          .addField("Tag:",`${user.tag}`)
          .addField("Nickname:", (member) ? `${member.displayName}` : `User not in this guild.`)
          .addField("ID:", `${user.id}`)
          .addField("Voice Channel:", (member) ? `${member.voiceChannel}` : `User not in this guild.`)
          .addField("Perms:", (member) ? `${member.permissions.toArray()}` : `User not in this guild.`)
          .addField("Roles:",(member) ? `${member.roles.cache.array()}` : `User not in this guild.`)
          .addField("Created:",`${user.createdAt}`)
          .addField("Ping:",`${user.client.ping}`)
          .addField("MFA?: ",`${user.client.user.mfaEnabled}`)
          .setFooter(`Information fetched by ${client.user.username}`);
          return message.channel.send((member) ? `About ${user}` : `About ${user.tag}`,embed).catch(console.log("Message failed to send."));
        }).catch(console.log("Something went wrong creating the embed and sending it..."));

      }else{

      const avatarList = message.mentions.users.map(user => {
        let member = message.channel.guild.members.cache.find(use => use.id === user.member.id);
        const embed = new Discord.MessageEmbed()
        .setTitle(`About ${user.username}`)
        .setColor("#58FAAC")
        .setImage(`${user.avatarURL()}`)
        .addField("Tag:",`${user.tag}`)
        .addField("Nickname:", `${member.displayName}`)
        .addField("ID:", `${user.id}`)
        .addField("Voice Channel:",`${member.voiceChannel}`)
        .addField("Perms:",`${member.permissions.toArray()}`)
        .addField("Roles:",`${member.roles.cache.array()}`)
        .addField("Created:",`${user.createdAt}`)
        .addField("Ping:",`${user.client.ping}`)
        .addField("MFA?: ",`${user.client.user.mfaEnabled}`)
        .setFooter(`Information fetched by ${client.user.username}`);
        return message.channel.send(`About ${user}`,embed).catch(console.log("Message failed to send."));
      }).catch(console.log("Something went wrong creating an embed and sending it..."));
    }
  }
})
