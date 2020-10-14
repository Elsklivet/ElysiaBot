new Command({
    title: "Merck",
    description: "Search the Merck Manual.",
    call: ["merck"],
    onCall: function(message, args){
    // Check permission if necessary here
  
      let arg = String(args[0]);
  
      String.prototype.toTitleCase = function () {
      return this.replace(/\w\S*/g, function(text){return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();});
      };
  
      if(args.length === 1){ // Default to professional
        arg = arg.replace(/\s/g, '+');
        arg = arg.replace(/["]/g, '');
        arg = arg.replace(/[“]/g, '');
        arg = arg.replace(/[”]/g, '');
        console.log(arg);

        message.channel.send(`https://www.merckmanuals.com/professional/SearchResults?query=${arg}`);
      }else if(args.length === 2){
        // Args parse
        arg = arg.replace(/\s/g, '+');
        arg = arg.replace(/["]/g, '');
        arg = arg.replace(/[“]/g, '');
        arg = arg.replace(/[”]/g, '');
        console.log(arg);

        switch(args[1]){
            case '-p':
            case 'p':

                message.channel.send(`https://www.merckmanuals.com/professional/SearchResults?query=${arg}`);
                break;
            
            case '-c':
            case 'c':
     
                message.channel.send(`https://www.merckmanuals.com/SearchResults?query=${arg}`);
                break;
            default:
                message.channel.send('You did not provide correct arguments. Usage: \`~merck \"search query\" [-p | -c]\` where quotations are included and -p means professional (default), -c means consumer.').catch(console.log);
                break;
           }
      }
      else{
        message.channel.send('You did not provide correct arguments. Usage: \`~merck \"search query\" [-p | -c]\` where quotations are included and -p means professional (default), -c means consumer.').catch(console.log);
      }
    }
  })
  