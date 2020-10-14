new Command({
  title: "Developer",
  description: "Developer options",
  call: ["dev"],
  onCall: function(message, args){
    if(message.author.id !== "348235152972972042" && message.author.id !== "135151101015097344"){
      console.log(message.author.id + " does not equal 348235152972972042 or 135151101015097344")
      message.channel.send('Only my devs can use that command.');
      return;
    }
    const arg = String(args).toLowerCase()
    if(arg==="-self"){ // entirely out of date
      let user = client.user;
      let member = message.channel.guild.members.cache.find(u => u.id === user.id);
      const embed = new Discord.MessageEmbed()
      .setTitle(`About ${user.username}`)
      .setColor("#58FAAC")
      .setImage(`${user.avatarURL}`)
      .addField("Tag:",`${user.tag}`)
      .addField("Nickname:", `${member.displayName}`)
      .addField("ID:", `${message.author.id}`)
      .addField("Voice Channel:",`${message.member.voiceChannel}`)
      .addField("Perms:",`${member.permissions.toArray()}`)
      .addField("Roles:",`${member.roles.cache.array()}`)
      .addField("Created:",`${user.createdAt}`)
      .addField("Ping:",`${user.client.ping}`)
      .setFooter(`Information fetched by ${client.user.username}`);
      message.channel.send(`About ${message.author}`,embed).catch(console.log);
    }else if(args.length === 3 && args[0].toLowerCase() === "-setactivity"){
      client.user.setActivity(args[1], {type: args[2].toUpperCase()});
    }else if(args.length > 1 && args[0].toLowerCase() === "-setstatus"){
      client.user.setStatus(args[1].toLowerCase());
      if(args[1].toLowerCase() === 'online') listening = true;
      else listening = false;
    }else if(args.length > 1 && args[0].toLowerCase() ==="-setafk"){
      client.user.setAFK((args[1].toLowerCase()==='true'));
    }else if(args.length > 1 && args[0].toLowerCase() === '-get'){
      switch(args[1]){
        case 'changelog':
        case 'abt':
        case 'abt.txt':
        case 'change':
          const attachment = new Discord.Attachment(config.changelogpath, 'abt.txt');
          message.channel.send(`${message.author}, here is the changelog and about file:`, attachment).catch(console.log);
        break;
      }
    }
  }
})
