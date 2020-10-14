new Command({
  title: "Clean",
  description: "Delete messages up to a certain number.",
  call: ["clean","purge"],
  onCall: function(message, args){
    // Initial permissions check
    if(!message.member.permissions.has("MANAGE_MESSAGES")){
      message.channel.send('Invoker does not have permission to manage messages. Execution terminated.').catch(console.log);
      return;
    }

    // First if block makes sure there are two arguments at least.
    if(args.length === 2){ // TWO ARGS
      console.log('2 args');
      // Second if block checks to see if the option chosen is to delete messages before a certain ID.
      if(args[0].toLowerCase()==='-before' || args[0].toLowerCase()==='-b'){
        // Via: @appellation: Use messages.fetch with a before query to get all messages as a collection (async)

        // This line assumes that args[1] is a messageID (String -> Snowflake)
        message.channel.messages.fetch({limit: 100}).then(allMsgs => {
          console.log(`Fetched ${allMsgs.size} messages successfully.`);
          let wipeMsgs = allMsgs.filter(msg => msg.pinned===false && (msg.id<args[1]));

          message.channel.bulkDelete(wipeMsgs, true).then(() => {
          message.channel.send('Deleted messages.').then(m => m.delete({timeout: 2000, reason: "Posted"}))});
        }).catch(console.error);

      }else if(args[0].toLowerCase()==='-after' || args[0].toLowerCase()==='-a'){
        message.channel.messages.fetch({limit: 100}).then(allMsgs => {
          console.log(`Fetched ${allMsgs.size} messages successfully.`);
          let wipeMsgs = allMsgs.filter(msg => msg.pinned===false && (msg.id>args[1]));

          message.channel.bulkDelete(wipeMsgs, true).then(() => {
          message.channel.send('Deleted messages.').then(m => m.delete({timeout: 2000, reason: "Posted"}))});
        }).catch(console.error);

      }else if(args[0].toLowerCase()==='-reacted' || args[0].toLowerCase()==='-r' || args[0].toLowerCase()==='-reaction'){
        // Via: @appellation: Use messages.fetch with a before query to get all messages as a collection (async)
        message.channel.messages.fetch({limit: 100}).then(allMsgs => {
          console.log(`Fetched ${allMsgs.size} messages successfully.`);
          let wipeMsgs = allMsgs.filter(msg => msg.reactions.cache.has(args[1]) && msg.pinned===false);

          message.channel.bulkDelete(wipeMsgs, true).then(() => {
          message.channel.send('Deleted messages.').then(m => m.delete({timeout: 2000, reason: "Posted"}))});
        }).catch(console.error);

      }else if(args[0].toLowerCase()==='-user' || args[0].toLowerCase()==='-u'){
        message.channel.messages.fetch({limit: 100}).then(allMsgs => {
          console.log(`Fetched ${allMsgs.size} messages successfully.`);
          let wipeMsgs = allMsgs.filter(msg => msg.pinned===false && (`<@!${msg.author.id}>`===args[1] || msg.author.id===args[1]));


          message.channel.bulkDelete(wipeMsgs, true).then(() => {
          message.channel.send('Deleted messages.').then(m => m.delete({timeout: 2000, reason: "Posted"}))});
        }).catch(console.error);

      }else if(args[0].toLowerCase()==='-starts' || args[0].toLowerCase()==='-command' || args[0].toLowerCase()==='-startswith'){
        message.channel.messages.fetch({limit: 100}).then(allMsgs => {
          console.log(`Fetched ${allMsgs.size} messages successfully.`);
          let wipeMsgs = allMsgs.filter(msg => msg.pinned===false && (msg.content.toLowerCase().startsWith(args[1])));


          message.channel.bulkDelete(wipeMsgs, true).then(() => {
          message.channel.send('Deleted messages.').then(m => m.delete({timeout: 2000, reason: "Posted"}))});
        }).catch(console.error);
      }else if(args[0].toLowerCase()==='-contains' || args[0].toLowerCase()==='-in' || args[0].toLowerCase()==='-conts'){
        message.channel.messages.fetch({limit: 100}).then(allMsgs => {
          console.log(`Fetched ${allMsgs.size} messages successfully.`);
          let wipeMsgs = allMsgs.filter(msg => msg.pinned===false && (msg.content.toLowerCase().includes(args[1])));


          message.channel.bulkDelete(wipeMsgs, true).then(() => {
          message.channel.send('Deleted messages.').then(m => m.delete({timeout: 2000, reason: "Posted"}))});
        }).catch(console.error);
      }else{ // Invalid arg.
        message.channel.send('A valid argument was not supplied.').catch(console.log);
      }
      
    }else if(args.length === 1){ // ONE ARG
      console.log('1 arg');
      if(args[0].toLowerCase()==='-bot'){
        // Via: @appellation: Use messages.fetch with a before query to get all messages as a collection (async)
        message.channel.messages.fetch({limit: 100}).then(allMsgs => {
          console.log(`Fetched ${allMsgs.size} messages successfully.`);
          let wipeMsgs = allMsgs.filter(msg => msg.author.bot===true && msg.pinned===false);

          message.channel.bulkDelete(wipeMsgs, true).then(() => {
          message.channel.send('Deleted messages.').then(m => m.delete({timeout: 2000, reason: "Posted"}))});
        }).catch(console.error);
      }else if(args[0].toLowerCase()==='-embeds'){
        // Via: @appellation: Use messages.fetch with a before query to get all messages as a collection (async)
        message.channel.messages.fetch({limit: 100}).then(allMsgs => {
          console.log(`Fetched ${allMsgs.size} messages successfully.`);
          let wipeMsgs = allMsgs.filter(msg => msg.embeds.length>0 && msg.pinned===false);

          message.channel.bulkDelete(wipeMsgs, true).then(() => {
          message.channel.send('Deleted messages.').then(m => m.delete({timeout: 2000, reason: "Posted"}))});
        }).catch(console.error);
      }else if(args[0].toLowerCase()==='-attach' || args[0].toLowerCase()==='-attachments'){
        // Via: @appellation: Use messages.fetch with a before query to get all messages as a collection (async)
        message.channel.messages.fetch({limit: 100}).then(allMsgs => {
          console.log(`Fetched ${allMsgs.size} messages successfully.`);
          let wipeMsgs = allMsgs.filter(msg => msg.attachments.first() && msg.pinned===false);
          console.log(wipeMsgs);

          message.channel.bulkDelete(wipeMsgs, true).then(() => {
          message.channel.send('Deleted messages.').then(m => m.delete({timeout: 2000, reason: "Posted"}))});
        }).catch(console.error);

      }else if(args[0].toLowerCase()==='-purge' || args[0].toLowerCase()==='-all'){
        message.channel.messages.fetch({limit: 100}).then(allMsgs => {
          console.log(`Fetched ${allMsgs.size} messages successfully.`);
          let wipeMsgs = allMsgs.filter(msg => msg.pinned===false);
          console.log(wipeMsgs);

          message.channel.bulkDelete(wipeMsgs, true).then(() => {
          message.channel.send('Deleted messages.').then(m => m.delete({timeout: 2000, reason: "Posted"}))});
        }).catch(console.error);

      }else if(args[0].toLowerCase()==='-text' || args[0].toLowerCase()==='-txt' || args[0].toLowerCase()==='-t'){
        message.channel.messages.fetch({limit: 100}).then(allMsgs => {
          console.log(`Fetched ${allMsgs.size} messages successfully.`);
          let wipeMsgs = allMsgs.filter(msg => msg.embeds.length===0 && !msg.attachments.first() && msg.pinned===false);

          message.channel.bulkDelete(wipeMsgs, true).then(() => {
          message.channel.send('Deleted messages.').then(m => m.delete({timeout: 2000, reason: "Posted"}))});
        }).catch(console.error);
      }
    }
    else{ //Less than two args.
      message.channel.send('Not enough arguments were supplied.').catch(console.log);
    }
  }
})
