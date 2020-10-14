new Command({
    title: "ICD-10 Codes",
    description: "Search the ICD.",
    call: ["icd"],
    onCall: function(message, args){
    // Check permission if necessary here
  
      let arg = String(args[0]);
  
      String.prototype.toTitleCase = function () {
      return this.replace(/\w\S*/g, function(text){return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();});
      };
  
      if(args.length === 1){ // Default to exact
        arg = arg.replace(/\s/g, '+');
        arg = arg.replace(/["]/g, '');
        arg = arg.replace(/[“]/g, '');
        arg = arg.replace(/[”]/g, '');
        console.log(arg);
  
        message.channel.send(`https://icd10coded.com/search/?q=${arg}`);
      }else{
        message.channel.send('You did not provide correct arguments. Usage: \`~icd \"search query\"\` where quotations are included.').catch(console.log);
      }
    }
  })
  