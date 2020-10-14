new Command({
  title: "Get Anime",
  description: "Search for an anime from crunchyroll.",
  call: ["anime"],
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
      .setColor('#FF8000')
      .setTitle(`www.crunchyroll.com`, `https://www.crunchyroll.com/search?from=&q=${arg}`)
      .setAuthor('Search Crunchyroll', 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Crunchyroll_Logo.svg/1200px-Crunchyroll_Logo.svg.png')
      .setURL(`https://www.crunchyroll.com/search?from=&q=${arg}`)
      .setDescription(`Search for ${args[0]} in Crunchyroll`)
      .setThumbnail('https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Crunchyroll_Logo.svg/1200px-Crunchyroll_Logo.svg.png')
      .setFooter(`Please report errors to Elsklivet#8867.`);

      message.channel.send(`https://www.crunchyroll.com/search?from=&q=${arg}`,embed);
    }else if(args.length > 1){
      switch(args[1]){
       case '-x':
       case 'x':
        arg = arg.replace(/\s/g, '-');
        arg = arg.replace(/['"]/g, '');
        console.log(arg);

        embed
        .setColor('#FF8000')
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
    }else{
      message.channel.send('You did not provide enough arguments. Usage: \`~anime \"anime name\" [-x | -s]\` where -x indicates exact and -s indicates search, and quotations are included.').catch(console.log);
    }
  }
})
