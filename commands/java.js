new Command({
  title: "Get Java SE 8 Docs",
  description: "Get information from the Java SE API.",
  call: ["java","javadocs"],
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

    let source = "https://docs.oracle.com/javase/8/docs/api/";
    paths.forEach(function(argument) {
      source = source + argument + "/"
    });
    source = source.slice(0,-1);
    source += ".html";
    console.log(source);

    message.channel.send(source).catch(console.log);
}
})
