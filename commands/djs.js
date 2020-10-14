new Command({
  title: "Get Discord.js Docs",
  description: "Get information from the Discord.js API.",
  call: ["djs"],
  onCall: function(message, args){

    if((!message.channel.type === 'dm' || !message.channel.type === 'group') && (!message.member.roles.has("620409576944173057") || !message.member.hasPermission('ADMINISTRATOR'))){
      message.channel.send("You cannot use that command without the \"developer\" role or administrative capabilities...");
      return;
    }

    function gembed(src, q){
      return fetch(`https://djsdocs.sorta.moe/v2/embed?src=${src}&q=${q}`).then(r => r.text());
    }

    let source = 'stable';
    if (args.length === 2){
      source = args[1];
    }
    let paths = [args[0]];
    if(args[0].includes(".")){
      paths = args[0].split('.');
    }else if (args[0].includes("#")){
      paths = args[0].split('#');
    }


    if(paths.length > 2 && paths.length < 4){
      let host = `https://discord.js.org/#/docs/main/`;
      let path = `${source}/${paths[0]}/${paths[1]}?scrollTo=${paths[2]}`
      let url = host + path;
      let query = paths[1] + '.' + paths[2];

      gembed(source,query).then(embed =>{
        console.log(JSON.parse(embed));
        message.channel.send(url, {embed: JSON.parse(embed)}).catch(console.log);
      });

    }else if(paths.length > 1 && paths.length < 3){
      let host = `https://discord.js.org/#/docs/main/`;
      let path = `${source}/${paths[0]}/${paths[1]}`
      let url = host + path;
      let query = paths[1];

      gembed(source,query).then(embed =>{
        console.log(JSON.parse(embed));
        message.channel.send(url, {embed: JSON.parse(embed)}).catch(console.log);
      });

    }else{
      message.channel.send(`It doesn't look like I could find ${args[0]} in the DJS docs... Sorry.`).catch(console.log);
    }
  }
})
