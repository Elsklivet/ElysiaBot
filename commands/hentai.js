new Command({
  title: "Hentai",
  description: "Sauce me up daddy.",
  call: ["hentai","he","h","へ","変態"],
  onCall: function(message, args){
    // We might be able to serialize a database of servers/channels with NSFW commands allowed and block all else.
    if(message.channel.type != "dm" && !message.channel.nsfw) {
      message.channel.send("We don't do that here...").then(msg => msg.delete(3000)).catch(console.log);
      return;
    }

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    let fs = require('fs');

    fs.readdir(config.hentaidir, (err, data) => { 
    	if(err){ // Check for a file system error.
    	 console.log(err.stack);
    	 return;
    	}
    	let files = String(data).split(','); // Split files into an array.
      let img = files[getRandomInt(files.length-1)];
        message.channel.send(`Here's some hentai for you, ${message.author}... UwU`,{files: [{attachment: config.hentaidir + "\\" + img, name:"SPOILER_"+img}]}).catch(error => {
          console.log(error.stack());
          return message.channel.send('It looks like the file I picked out at random was too big, and my developers should probably remove it from the folder... Sorry.')
        });
    });
  }
})
