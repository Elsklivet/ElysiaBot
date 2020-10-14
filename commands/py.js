new Command({
  title: "Get Python Docs",
  description: "Get information from the Python 3 API.",
  call: ["py","pydocs"],
  onCall: function(message, args){
    if((!message.channel.type === 'dm' || !message.channel.type === 'group') && (!message.member.roles.has("620409576944173057") || !message.member.hasPermission('ADMINISTRATOR'))){
      message.channel.send("You cannot use that command without the \"developer\" role or administrative capabilities...");
      return;
    }

    let arg = String(args)
    let paths = [arg];
    console.log(arg);
    if(arg.includes(".")){
      console.log("Found a .")
      paths = arg.split('.');
    }else if(arg.includes("#")){
      console.log("Found a #")
      paths = arg.split('#');
    }

    if(paths.length === 2){
      let url = `https://docs.python.org/3/library/${paths[0]}.html#${paths[1]}`;

      message.channel.send(url).catch(console.log);

    }else if(paths.length === 1){
      let url = `https://docs.python.org/3/library/${paths[0]}.html`;

      message.channel.send(url).catch(console.log);
    }else{
      message.channel.send(`It doesn't look like I could find ${arg} in the Py3 docs... Sorry.`).catch(console.log);
    }
  }
})
