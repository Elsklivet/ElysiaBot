new Command({
    title: "Google",
    description: "Search Google.",
    call: ["google","g","search"],
    onCall: function(message, args){
    // Check permission if necessary here
  
      let arg = String(args[0]);
      //let embed = new Discord.MessageEmbed(); //Entirely unnecessary line as of now
  
      String.prototype.toTitleCase = function () {
      return this.replace(/\w\S*/g, function(text){return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();});
      };
  
      if(args.length === 1){ // Default to exact
        arg = arg.replace(/\s/g, '+');
        arg = arg.replace(/["]/g, '');
        arg = arg.replace(/[“]/g, '');
        arg = arg.replace(/[”]/g, '');
        console.log(arg);
  
        message.channel.send(`https://www.google.com/search?q=${arg}`);
      }else{
        message.channel.send('You did not provide correct arguments. Usage: \`~google \"search query\"\` where quotations are included.').catch(console.log);
      }
    }
  })
  