new Command({
    title: "Reddit",
    description: "Use Reddit to search or link a subreddit.",
    call: ["reddit", "red"],
    onCall: function(message, args){
  
      // Check permission if necessary here
  
      let arg = String(args[0]);
      let embed = new Discord.MessageEmbed();
  
      if(args.length === 1){
        arg = arg.replace(/\s/g, '+');
        arg = arg.replace(/['"]/g, '');
        arg = arg.replace(/[“]/g, '');
        arg = arg.replace(/[”]/g, '');
        console.log(arg);
  
        embed
        .setColor('#FF3A00')
        .setTitle(`www.reddit.com`, `https://www.crunchyroll.com/search?from=&q=${arg}`)
        .setAuthor('Search Reddit')
        .setURL(`https://www.reddit.com/search/?q=${arg}`)
        .setDescription(`Search for ${args[0]} in Reddit`)
        .setFooter(`Please report errors to Elsklivet#8867.`);
  
        message.channel.send(`https://www.reddit.com/search/?q=${arg}`,embed);
      }else if(args.length > 1){
        switch(args[1]){
         case '-r':
         case 'r':
          arg = arg.replace(/\s/g, '-');
          arg = arg.replace(/['"]/g, '');
          console.log(arg);
  
          embed
          .setColor('#FF3A00')
          .setTitle(`www.reddit.com`, `https://www.reddit.com/r/${arg}/`)
          .setAuthor('Reddit')
          .setURL(`https://www.reddit.com/r/${arg}/`)
          .setDescription(`Go to subreddit: ${args[0]} in Reddit (increased 404 risk)`)
          .setFooter(`Please report errors to Elsklivet#8867.`);
  
          message.channel.send(`https://www.reddit.com/r/${arg}/`,embed);
          break;
          case '-s':
          case 's':
            arg = arg.replace(/\s/g, '+');
            arg = arg.replace(/['"]/g, '');
            arg = arg.replace(/[“]/g, '');
            arg = arg.replace(/[”]/g, '');
            console.log(arg);
      
            embed
            .setColor('#FF3A00')
            .setTitle(`www.reddit.com`, `https://www.crunchyroll.com/search?from=&q=${arg}`)
            .setAuthor('Search Reddit')
            .setURL(`https://www.reddit.com/search/?q=${arg}`)
            .setDescription(`Search for ${args[0]} in Reddit`)
            .setFooter(`Please report errors to Elsklivet#8867.`);
      
            message.channel.send(`https://www.reddit.com/search/?q=${arg}`,embed);
           break;
          default:
           message.channel.send('You did not provide correct arguments. Usage: \`~reddit \"query or sub\" [-r | -s]\` where -r indicates exact subreddit and -s indicates search, and quotations are included.').catch(console.log);
           break;
        }
      }else{
        message.channel.send('You did not provide correct arguments. Usage: \`~reddit \"query or sub\" [-r | -s]\` where -r indicates exact subreddit and -s indicates search, and quotations are included.').catch(console.log);
      }
    }
  })
  