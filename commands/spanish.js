new Command({
    title: "SpanishDict",
    description: "Open a word search in SpanishDict Spanish translator.",
    call: ["spanish"],
    onCall: function(message, args){
    // Check permission if necessary here
  
      let arg = String(args[0]);
  
      String.prototype.toTitleCase = function () {
      return this.replace(/\w\S*/g, function(text){return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();});
      };
  
      if(args.length === 1){ // Default to exact
        arg = arg.replace(/\s/g, '%20');
        arg = arg.replace(/["]/g, '');
        arg = arg.replace(/[“]/g, '');
        arg = arg.replace(/[”]/g, '');
        console.log(arg);
  
        message.channel.send(`https://www.spanishdict.com/translate/${arg}`);
      }else{
        message.channel.send('You did not provide correct arguments. Usage: \`~spanish \"word\"\` where quotations are included.').catch(console.log);
      }
    }
  })