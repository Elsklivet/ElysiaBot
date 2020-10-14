new Command({
    title: "Duden",
    description: "Search or go to an article in Duden.",
    call: ["duden"],
    onCall: function(message, args){
    // Check permission if necessary here
  
      let arg = String(args[0]);
      let embed = new Discord.MessageEmbed();
  
      String.prototype.toTitleCase = function () {
      return this.replace(/\w\S*/g, function(text){return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();});
      };
  
      if(args.length === 1){ // Default to search
        arg = arg.replace(/\s/g, '%20');
        arg = arg.replace(/["]/g, '');
        arg = arg.replace(/[“]/g, '');
        arg = arg.replace(/[”]/g, '');
        console.log(arg);
  
        message.channel.send(`https://www.duden.de/suchen/dudenonline/${arg}`);
      }else if(args.length === 2){
        arg = arg.replace(/\s/g, '%20');
        arg = arg.replace(/["]/g, '');
        args[1] = args[1].replace(/['"]/g, '');
        console.log(arg);
  
        message.channel.send(`https://www.duden.de/rechtschreibung/${arg}`);
      }else{
        message.channel.send('You did not provide correct arguments. Usage: \`~duden \"[word]\" \"[word type]\"\` where word type is the part of speech in German (Verb, Adjektiv, excludes noun), which is optional, and quotations are included.').catch(console.log);
      }
    }
  })