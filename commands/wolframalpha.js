new Command({
  title: "WolframAlpha",
  description: "Search Wolfram | Alpha.",
  call: ["wolfram","wolframalpha","wolf"],
  onCall: function(message, args){
  // Check permission if necessary here
    let arg = String(args[0]);
    console.log(arg);
    let embed = new Discord.MessageEmbed();
    let src = `https://www.wolframalpha.com/input/?i=`;

    if(args.length === 1){ // Default to exact
      arg = arg.replace(/%/g, '%25')
      .replace(/\+/g, '%2B')
      .replace(/\s/g, '+')
      .replace(/\$/g, '%20')
      .replace(/&/g, '%26')
      .replace(/\^/g, '%5E')
      .replace(/`/g, '%60')
      .replace(/\//g, '%2F')
      .replace(/'/g, '%27')
      .replace(/\{/g, '%7B')
      .replace(/\}/g, '%7D')
      .replace(/,/g, '%2C')
      .replace(/"/g, '%22')
      .replace(/[“]/g, '%22')
      .replace(/[”]/g, '%22')
      .replace(/\|/g, '%7C')
      .replace(/=/g, '%3D')
      .replace(/:/g, '%3A')
      .replace(/</g, '%3C')
      .replace(/\(/g, '%28')
      .replace(/\)/g, '%29')
      .replace(/>/g, '%3E')
      .replace(/;/g, '%3B')
      .replace(/~/g, '%7E')
      .replace(/@/g, '%40');

      console.log(arg);

      message.channel.send(src+`${arg}`);
    }else{
      message.channel.send('You did not provide correct arguments. Usage: \`~wolf \"query\"\` where quotations ARE included around the query (not optional) and there are NO spaces.').catch(console.log);
    }
  }
})
