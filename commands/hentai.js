new Command({
  title: "Hentai",
  description: "Sauce me up daddy.",
  call: ["hentai","he","へ","変体"],
  onCall: function(message, args){
    if(message.channel.type != "dm" && !message.channel.nsfw) {
      message.channel.send("We don't do that here...").then(msg => msg.delete(3000)).catch(console.log);
      return;
    }

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    let fs = require('fs');

    fs.readdir(config.hentaidir, (err, data) => { // Prereq: make a directory called commands. In it will be placed a new JS file for each command. This is the best method I currently have.
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
