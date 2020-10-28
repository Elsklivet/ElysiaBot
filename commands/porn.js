new Command({
  title: "Porn",
  description: "Sauce me up daddy (but with real girls).",
  call: ["porn","p"],
  onCall: function(message, args){
    if(message.channel.type != "dm" && !message.channel.nsfw) {
      message.channel.send("We don't do that here...").then(msg => msg.delete(3000)).catch(console.log);
      return;
    }

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    let fs = require('fs');

    fs.readdir(config.deviantdir, (err, data) => { // Prereq: make a directory called commands. In it will be placed a new JS file for each command. This is the best method I currently have.
    	if(err){ // Check for a file system error.
    	 console.log(err.stack);
    	 return;
    	}
    	let files = String(data).split(','); // Split files into an array.
      let img = files[getRandomInt(files.length-1)];
        message.channel.send(`Here's some porn for you, ${message.author}...`,{files: [{attachment: config.deviantdir + "\\" + img, name:"SPOILER_"+img}]}).catch(error => {
          console.log(error.printStackTrace());
          return message.channel.send('It looks like the file I picked out at random was too big, and my developers should probably remove it from the get folder... Sorry.')
        });
    });
  }
})
