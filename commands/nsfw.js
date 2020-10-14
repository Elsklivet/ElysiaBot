new Command({
  title: "Opt-In to Hentai",
  description: "Opt-in or out of the NSFW channels",
  call: ["nsfw"],
  onCall: function(message, args){
    // 756724875476992010 Ian
    // or
    // 617923909584551945 Me
    // 617923909584551945
    // 756724875476992010
    if(args.length > 0){
      if (String(args) ==="-optin") {
        console.log(`\tOpting ${message.author.username} in to the NSFW channels... ... ...`)
        let role = null;
        if(message.guild.id == 617466661942984744){
          role = message.channel.guild.roles.cache.get('617923909584551945'); // Most objects are gotten by ID
        }else if (message.guild.id == 302126700597084160){
          role = message.channel.guild.roles.cache.get('756724875476992010'); // Most objects are gotten by ID
        }
        console.log(`\tFinding role...`);
        message.member.roles.add(role).catch(console.log);
        message.channel.send(`Opted ${message.author.username} in to the NSFW channels.`).catch(console.log);

      }else if (String(args) ==="-optout"){
        console.log(`\tOpting ${message.author.username} out of the NSFW channels... ... ...`)
        let role = null;
        if(message.guild.id == 617466661942984744){
          role = message.channel.guild.roles.cache.get('617923909584551945'); // Most objects are gotten by ID
        }else if (message.guild.id == 302126700597084160){
          role = message.channel.guild.roles.cache.get('756724875476992010'); // Most objects are gotten by ID
        }
        console.log(`\tFinding role...`);
        message.member.roles.remove(role).catch(console.log);
          message.channel.send(`Opted ${message.author.username} out of the NSFW channels.`).catch(console.log);

      }else{
        message.channel.send("Unacceptable argument. Please use \"-optin\" to opt in, or \"-optout\" to opt out.").catch(console.log);
      }
    }else{
      message.channel.send("An argument was not provided. Please use \"-optin\" to opt in, or \"-optout\" to opt out.").catch(console.log);
    }

  }
})
