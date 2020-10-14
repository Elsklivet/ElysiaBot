new Command({
  title: "NHentai",
  description: "Get a hentai from NHentai.",
  call: ["nhentai"],
  onCall: function(message, args){
    if(!message.channel.nsfw) {
      message.channel.send("We don't do that here...").then(msg => msg.delete(3000)).catch(console.log);
      return;
    }

    // Check permission if necessary here


    let arg = String(args[0]);
    let embed = new Discord.MessageEmbed();

    if(args.length === 1){
      let chap = null;
      if(arg.indexOf(".") !== -1){
        splitted = arg.split('.');
        arg = splitted[0];
        chap = splitted[1];
        console.log("Found a .");
        console.log("CHAP: "+chap);
        console.log((chap) ? true : false);
      }
      arg = arg.replace(/\s/g, '+');
      arg = arg.replace(/['"]/g, '');
      console.log(arg);


      message.channel.send((!chap) ? `https://nhentai.net/g/${arg}/` : `https://nhentai.net/g/${arg}/${chap}/`);
    }else if(args.length > 1){
      switch(args[1]){
       case '-tag':
       case '-t':
        arg = arg.replace(/\s/g, '-');
        arg = arg.replace(/['"]/g, '');
        console.log(arg);

        message.channel.send(`https://nhentai.net/tag/${arg}/`);
        break;

       case '-s':
       case '-search':
         arg = arg.replace(/\s/g, '+');
         arg = arg.replace(/['"]/g, '');
         console.log(arg);

         message.channel.send(`https://nhentai.net/search/?q=${arg}`);
         break;
       default:
         message.channel.send('You did not provide correct arguments. Usage: \`~nhentai \"numbers#[chapter]/tag\" [-t | -s]\` where -t indicates tag, -s indicates search, and no extra option indicates goto, and quotations are included.').catch(console.log);
         break;
      }
    }else{
      message.channel.send('You did not provide enough arguments. Usage: \`~nhentai \"numbers[#chapter]/tag\" [-t | -s]\` where -t indicates tag, -s indicates search, and no extra option indicates goto, and quotations are included.').catch(console.log);
    }
  }
})
