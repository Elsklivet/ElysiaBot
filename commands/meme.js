const { send } = require('process');

new Command({
    title: "Classics",
    description: "Get a meme from the classics.",
    call: ["meme","c","classics","m"],
    onCall: function(message, args){
      /*if(message.channel.type != "dm" && !message.channel.nsfw) {
        message.channel.send("We don't do that here...").then(msg => msg.delete(3000)).catch(console.log);
        return;
      }*/
  
      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

      function choose(choices) {
        var index = Math.floor(Math.random() * choices.length);
        return choices[index];
      }
  
      let fs = require('fs');

      if(args.length > 0){
        if(args[0]=="-ss")
            sendTheMeme("1 ss tier")
        else if(args[0]=="-s")
            sendTheMeme("2 s tier")
        else if(args[0]=="-a")
            sendTheMeme("3 a tier")
        else if(args[0]=="-b")
            sendTheMeme("4 b tier")
        else if(args[0]=="-c")
            sendTheMeme("5 c tier")
        else if(args[0]=="-shit")
            sendTheMeme("6 shit tier")
      }else{
        let tier = choose(["-ss","-s","-a","-b","-c","-shit"])
        if(tier=="-ss")
            sendTheMeme("1 ss tier")
        else if(tier=="-s")
            sendTheMeme("2 s tier")
        else if(tier=="-a")
            sendTheMeme("3 a tier")
        else if(tier=="-b")
            sendTheMeme("4 b tier")
        else if(tier=="-c")
            sendTheMeme("5 c tier")
        else if(tier=="-shit")
            sendTheMeme("6 shit tier")
      }


      function sendTheMeme(tier){
        fs.readdir(config.memedir+"\\"+tier, (err, data) => { 
            if(err){ // Check for a file system error.
             console.log(err.stack);
             return;
            }
            let files = String(data).split(','); // Split files into an array.
          let img = files[getRandomInt(files.length-1)];
            message.channel.send(`Here's a ${tier.substring(2)} classic for you, ${message.author}`,{files: [{attachment: config.memedir + "\\" + tier + "\\" + img, name:img}]}).catch(error => {
              console.log(error.stack());
              return message.channel.send('It looks like the file I picked out at random was too big, and my developers should probably remove it from the folder... Sorry.')
            });
        });
      }
    }
  })
  