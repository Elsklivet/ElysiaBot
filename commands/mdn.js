new Command({
  title: "Get MDN Docs",
  description: "Get information from the MDN API.",
  call: ["mdn"],
  onCall: function(message, args){

    let arg = String(args)
    let paths = [arg];
    console.log(arg);
    if(arg.includes(".")){
      console.log("Found a .")
      paths = arg.split('.');
    }else if(arg.includes("#")){
      paths = arg.split('#');
    }

    //http://www.userlogos.org/files/mozilla-developer-network-logo.png

    if(paths[0]==='class' && paths.length > 1){

      message.channel.send(`https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/${paths[1]}`).catch(console.log);

    }else if(paths[0] === 'func' || paths[0] === 'function' && paths.length > 1){

      message.channel.send(`https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/${paths[1]}`).catch(console.log);
    }else if(paths[0] === 'statement' || paths[0] === 'statements' && paths.length > 1){

      message.channel.send(`https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/${paths[1]}`).catch(console.log);
    }else if(paths[0] === 'operator' || paths[0] === 'operators' || paths[0] === 'expression' || paths[0] === 'expressions' && paths.length > 1){

      message.channel.send(`https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/${paths[1]}`).catch(console.log);
    }else{
      message.channel.send(`It doesn't look like I could find ${arg} in the MDN docs... Sorry.`).catch(console.log);
    }
  }
})
