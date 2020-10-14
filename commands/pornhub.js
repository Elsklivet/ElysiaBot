new Command({
    title: "PornHub Search",
    description: "Search for a video on PornHub.",
    call: ["pornhub"],
    onCall: function(message, args){
  
      // Check permission if necessary here
      if(message.channel.type != "dm" && !message.channel.nsfw) {
        message.channel.send("We don't do that here...").then(msg => msg.delete(3000)).catch(console.log);
        return;
      }
  
      let arg = String(args[0]);
      let embed = new Discord.MessageEmbed();
  
      if(args.length === 1){
        arg = arg.replace(/\s/g, '+');
        arg = arg.replace(/['"]/g, '');
        arg = arg.replace(/[“]/g, '');
        arg = arg.replace(/[”]/g, '');
        console.log(arg);
  
        embed
        .setColor('#EA9A1F')
        .setTitle(`www.pornhub.com`, `https://www.pornhub.com/video/search?search=${arg}`)
        .setAuthor('Search PornHub', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Pornhub-logo.svg/640px-Pornhub-logo.svg.png')
        .setURL(`https://www.pornhub.com/video/search?search=${arg}`)
        .setDescription(`Search for ${args[0]} in PornHub`)
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Pornhub-logo.svg/640px-Pornhub-logo.svg.png')
        .setFooter(`Please report errors to Elsklivet#8867.`);
  
        message.channel.send(`https://www.pornhub.com/video/search?search=${arg}`,embed);
      }/*else if(args.length > 1){
        switch(args[1]){
         case '-x':
         case 'x':
          arg = arg.replace(/\s/g, '-');
          arg = arg.replace(/['"]/g, '');
          console.log(arg);
  
          embed
          .setColor('#EA9A1F')
          .setTitle(`www.crunchyroll.com`, `https://www.crunchyroll.com/${arg}`)
          .setAuthor('Crunchyroll', 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Crunchyroll_Logo.svg/1200px-Crunchyroll_Logo.svg.png')
          .setURL(`https://www.crunchyroll.com/${arg}`)
          .setDescription(`Go to ${args[0]} in Crunchyroll (increased 404 risk)`)
          .setThumbnail('https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Crunchyroll_Logo.svg/1200px-Crunchyroll_Logo.svg.png')
          .setFooter(`Please report errors to Elsklivet#8867.`);
  
          message.channel.send(`https://www.crunchyroll.com/${arg}`,embed); //deprecated line
          break;
          case '-s':
          case 's':
           arg = arg.replace(/\s/g, '+');
           arg = arg.replace(/['"]/g, '');
           console.log(arg);
  
           embed
           .setColor('#FF8000')
           .setTitle(`www.crunchyroll.com`, `https://www.crunchyroll.com/search?from=&q=${arg}`)
           .setAuthor('Search Crunchyroll', 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Crunchyroll_Logo.svg/1200px-Crunchyroll_Logo.svg.png')
           .setURL(`https://www.crunchyroll.com/search?from=&q=${arg}`)
           .setDescription(`Search for ${args[0]} in Crunchyroll`)
           .setThumbnail('https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Crunchyroll_Logo.svg/1200px-Crunchyroll_Logo.svg.png')
           .setFooter(`Please report errors to Elsklivet#8867.`);
  
           message.channel.send(`https://www.crunchyroll.com/search?from=&q=${arg}`,embed); //deprecated line
           break;
          default:
           message.channel.send('You did not provide correct arguments. Usage: \`~anime \"anime name\" [-x | -s]\` where -x indicates exact and -s indicates search, and quotations are included.').catch(console.log);
           break;
        }
      }*/else{
        message.channel.send('You did not provide enough arguments. Usage: \`~anime \"anime name\" [-x | -s]\` where -x indicates exact and -s indicates search, and quotations are included.').catch(console.log);
      }
    }
  })
  