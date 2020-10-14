new Command({
  title: "Get Manga",
  description: "Search for a manga from mangarock.club.",
  call: ["manga"],
  onCall: function(message, args){
  // Check permission if necessary here


    let arg = String(args[0]);
    let embed = new Discord.MessageEmbed();

    if(args.length === 1){ // Default to search
      arg = arg.replace(/\s/g, '+');
      arg = arg.replace(/['"]/g, '');
      console.log(arg);

      embed
      .setColor('#2E64FE')
      .setTitle(`www.mangarock.club`, `http://mangarock.club/search?q=${arg}`)
      .setAuthor('Search MangaRock.club')
      .setURL(`http://mangarock.club/search?q=${arg}`)
      .setDescription(`Search for ${args[0]} in mangarock.club`)
      .addField("Source","Unfortunately, mangarock.com has been taken down, and we can no longer use it as a source. Therefore, we will use MangaRock.Club for now.")
      .setFooter(`Have a better source? Let Elsklivet know.`);

      message.channel.send(`http://mangarock.club/search?q=${arg}`,embed);
    }else if(args.length > 1){
      switch(args[1]){
       case '-x':
       case 'x':
        arg = arg.replace(/\s/g, '-');
        arg = arg.replace(/['"]/g, '');
        console.log(arg);

        embed
        .setColor('#2E64FE')
        .setTitle(`www.mangarock.club`, `http://mangarock.club/read-manga/${arg}`)
        .setAuthor('MangaRock.club')
        .setURL(`http://mangarock.club/read-manga/${arg}`)
        .setDescription(`Go to ${args[0]} in mangarock.club (404 risk)`)
        .addField("Source","Unfortunately, mangarock.com has been taken down, and we can no longer use it as a source. Therefore, we will use MangaRock.Club for now.")
        .setFooter(`Have a better source? Let Elsklivet know.`);

        message.channel.send(`http://mangarock.club/read-manga/${arg}`,embed);
        break;
        case '-s':
        case 's':
         arg = arg.replace(/\s/g, '+');
         arg = arg.replace(/['"]/g, '');
         console.log(arg);

         embed
         .setColor('#2E64FE')
         .setTitle(`www.mangarock.club`, `http://mangarock.club/search?q=${arg}`)
         .setAuthor('Search MangaRock.club')
         .setURL(`http://mangarock.club/search?q=${arg}`)
         .setDescription(`Search for ${args[0]} in mangarock.club`)
         .addField("Source","Unfortunately, mangarock.com has been taken down, and we can no longer use it as a source. Therefore, we will use MangaRock.Club for now.")
         .setFooter(`Have a better source? Let Elsklivet know.`);

         message.channel.send(`http://mangarock.club/search?q=${arg}`,embed);
         break;
        default:
         message.channel.send('You did not provide correct arguments. Usage: \`~manga \"manga name\" [-x | -s]\` where -x indicates exact and -s indicates search, and quotations are included.').catch(console.log);
         break;
      }
    }else{
      message.channel.send('You did not provide enough arguments. Usage: \`~manga \"manga name\" [-x | -s]\` where -x indicates exact and -s indicates search, and quotations are included.').catch(console.log);
    }
  }
})
