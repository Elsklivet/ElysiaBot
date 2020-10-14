new Command({
  title: "Wikipedia",
  description: "Search Wikipedia.",
  call: ["wiki","wikipedia"],
  onCall: function(message, args){
  // Check permission if necessary here

    let arg = String(args[0]);
    let embed = new Discord.MessageEmbed();

    String.prototype.toTitleCase = function () {
    return this.replace(/\w\S*/g, function(text){return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();});
    };

    if(args.length === 1){ // Default to exact
      arg = arg.replace(/\s/g, '_');
      arg = arg.replace(/["]/g, '');
      arg = arg.replace(/[“]/g, '');
      arg = arg.replace(/[”]/g, '');
      console.log(arg);

      message.channel.send(`https://en.wikipedia.org/wiki/${arg}`);
    }else if(args.length === 2){
      arg = arg.replace(/\s/g, '_');
      arg = arg.replace(/["]/g, '');
      args[1] = args[1].replace(/['"]/g, '');
      console.log(arg);

      message.channel.send(`https://${args[1]}.wikipedia.org/wiki/${arg}`);
    }else{
      message.channel.send('You did not provide correct arguments. Usage: \`~wiki \"article name\" [lang]\` where lang is the two character language code, and quotations are included.').catch(console.log);
    }
  }
})
