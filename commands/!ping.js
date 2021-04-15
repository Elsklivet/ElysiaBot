// An example of a command_name.js file
// Each file can store its own command
// Alternatively, write every single command in one file like a sociopath.
new Command({
  title: "Ping", // The title of the command
  description: "Check to see if the bot is responsive.", // A Description. You could use this in a help command.
  call: ["ping"], // This is vital: this is what must be typed after the prefix for the command to be called. This is referred to as call in the global.Command function
  onCall: function(message, args){
    message.channel.send('Pinging in progress...').then(newMsg => { // Read docs for the intricacies of this stuff. This is an asynchronous function (promise). I hate them.
      newMsg.edit(`Pong! Took ${newMsg.createdTimestamp - message.createdTimestamp} milliseconds to respond to ${message.author.username}.`);
    }).catch(console.log);
  }
})
