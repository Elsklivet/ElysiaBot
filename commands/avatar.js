new Command({
  title: "Avatar",
  description: "Get the image of your avatar.",
  call: ["avatar"],
  onCall: function(message, args){
    if(!message.mentions.users.size){
      return message.channel.send(message.author.avatarURL);
      // /!\ "avatarURL" WILL BE CHANGED TO THE METHOD "avatarURL()" IN V12
    }
		const avatarList = message.mentions.users.map(user => {
			return message.channel.send(user.avatarURL);
      // /!\ "avatarURL" WILL BE CHANGED TO THE METHOD "avatarURL()" IN V12
		});
  }
})
