new Command({
  title: "Help",
  description: "Display help.",
  call: ["help","h"],
  onCall: function(message, args){
    console.log(args.length);
    if(args[0]){
      switch(args[0]){
        case "-text":
        case "-txt":
        case "-t":
        case "-file":
        case "-f":
        const attachment = new Discord.MessageAttachment(config.helpf);
          message.channel.send(`${message.author}, here is the help file: `, attachment).catch(console.log);
        break;
        default:
        console.log("Hit a default??");
        message.channel.send(`Elysias Help:\`\`\`
          Commands:
           help: display help
           ... -text | -txt | -t | -file | -f : send help file as an attachment
           ping: ping the bot
           avatar: show your avatar as an image, or those of anyone you mention
           nsfw (-optin | -optout): opt into NSFW; opt out of NSFW
           hentai: post random hentai
           about: post your information by default, or the info of all @mentions
           dev ...: [inaccessible to most users]
           ... -self: post Elysia's information
           ... -setstatus: set Elysia's online status
           ... -setafk: [boolean] set Elysia as afk
           ... -setactivity: set Elyia's playing activity
           ... -get
           ... ... changelog: get the changelog
           mdn: get MDN documentation
           ... Formatted: \"{type}#{object}\" where type is either
           ... ... class,operator,function/func,statement
           djs: get DJS documentation
           ... Formatted: \"{type}.{object}\" or \"{type}.{object}.{property/method}\"
           ... ... where type is either class or typedef, object is the object, etc.
           py: get Python 3 Documentation
           ... Formatted: \"{type}#{object}\" or \"{nonstdobject}\"
           ... ... where type is either stdtype, exceptions, or constants, and object is the subject or object, etc.
           purge: not currently functional...
           For full command list, see help.txt, support for this command ends 9/11/2019\`\`\`\nNote: messaging \"Elysia, ...\" will sometimes elicit responses from her chat AI.`).catch(console.log);
          break;
      }
    }else{
      message.channel.send(`Elysias Help:\`\`\`
        Commands:
         help: display help
         ... -text | -txt | -t | -file | -f : send help file as an attachment
         ping: ping the bot
         avatar: show your avatar as an image, or those of anyone you mention
         nsfw (-optin | -optout): opt into NSFW; opt out of NSFW
         hentai: post random hentai
         about: post your information by default, or the info of all @mentions
         dev ...: [inaccessible to most users]
         ... -self: post Elysia's information
         ... -setstatus: set Elysia's online status
         ... -setafk: [boolean] set Elysia as afk
         ... -setactivity: set Elyia's playing activity
         ... -get
         ... ... changelog: get the changelog
         mdn: get MDN documentation
         ... Formatted: \"{type}#{object}\" where type is either
         ... ... class,operator,function/func,statement
         djs: get DJS documentation
         ... Formatted: \"{type}#{object}\" or \"{type}#{object}#{property/method}\"
         ... ... where type is either class or typedef, object is the object, etc.
         py: get Python 3 Documentation
         ... Formatted: \"{type}#{object}\" or \"{nonstdobject}\"
         ... ... where type is either stdtype, exceptions, or constants, and object is the subject or object, etc.
         purge: not currently functional...
         For full command list, see help.txt, support for this command ends 9/11/2019\`\`\`\nNote: messaging \"Elysia, ...\" will sometimes elicit responses from her chat AI.`).catch(console.log);
       }
  }
})
