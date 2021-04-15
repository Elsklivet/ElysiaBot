const { MessageFlags } = require("discord.js");

class ChatAI{
constructor(){
    
} // End constructor
scanMessages=function(contents, message){
    let lowContents = contents.toLowerCase();
        if (lowContents.startsWith("elysia,")) {
            if (lowContents.includes("help")) {
                if (lowContents.includes("javascript")) {
                    const embed = new Discord.MessageEmbed()
                        .setTitle("MDN Documentation")
                        .setURL("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide")
                        .setAuthor("Mozilla Developer Network", 'http://www.userlogos.org/files/mozilla-developer-network-logo.png')
                        .setDescription("The JavaScript Guide shows you how to use JavaScript and gives an overview of the language. If you need exhaustive information about a language feature, have a look at the JavaScript reference.")
                        .setThumbnail('http://www.userlogos.org/files/mozilla-developer-network-logo.png')
                        .setFooter("Website © 2005-2019 Mozilla and individual contributors.", 'https://upload.wikimedia.org/wikipedia/uk/thumb/7/74/Mozilla_Foundation_logo.svg/1200px-Mozilla_Foundation_logo.svg.png')
    
                    message.channel.send('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide', embed).catch(console.log);
                } // /!\ MessageEmbedS WILL BE DEPRECATED IN V12 \V/ \V/ \V/ \V/
                else if (lowContents.includes("discord.js") || lowContents.includes("discord api")) {
                    const embed = new Discord.MessageEmbed()
                        .setTitle("The discord.js Documentation")
                        .setURL("https://discord.js.org/#/docs/main/stable/general/welcome")
                        .setAuthor("The discord.js Docs", 'https://i.imgur.com/wSTFkRM.png')
                        .setDescription("Welcome to the discord.js v11.5 documentation. The v11.5 release contains bugfixes from v11.4 and backports features from the in-development v12.\n\nv12 is still very much a work-in-progress, as we're aiming to make it the best it can possibly be before releasing. If you are fond of living life on the bleeding-edge, check out the master branch.")
                        .setThumbnail('https://i.imgur.com/wSTFkRM.png')
                        .setFooter("A powerful library for interacting with the Discord API.", 'https://i.imgur.com/wSTFkRM.png');
                    message.channel.send('https://discord.js.org/#/docs/main/stable/general/welcome', embed).catch(console.log);
                } else if (lowContents.includes("json")) {
                    const embed = new Discord.MessageEmbed()
                        .setTitle("JSON Tutorial")
                        .setURL("https://www.w3schools.com/js/js_json_intro.asp")
                        .setAuthor("w3schools", 'https://store-images.s-microsoft.com/image/apps.6007.13703813498146682.59ea0965-457f-440d-a02e-2a8fce6ff46e.a01e53fa-c330-43b5-9444-05b9d3efc6ca?mode=scale&q=90&h=1080&w=1920')
                        .setDescription(`When exchanging data between a browser and a server, the data can only be text.
    JSON is text, and we can convert any JavaScript object into JSON, and send JSON to the server.
    We can also convert any JSON received from the server into JavaScript objects.
    This way we can work with the data as JavaScript objects, with no complicated parsing and translations.`)
                        .setThumbnail('https://store-images.s-microsoft.com/image/apps.6007.13703813498146682.59ea0965-457f-440d-a02e-2a8fce6ff46e.a01e53fa-c330-43b5-9444-05b9d3efc6ca?mode=scale&q=90&h=1080&w=1920')
                        .setFooter("Website Copyright 1999-2019 by Refsnes Data.", 'https://store-images.s-microsoft.com/image/apps.6007.13703813498146682.59ea0965-457f-440d-a02e-2a8fce6ff46e.a01e53fa-c330-43b5-9444-05b9d3efc6ca?mode=scale&q=90&h=1080&w=1920');
                    message.channel.send('https://www.w3schools.com/js/js_json_intro.asp', embed).catch(console.log);
                } else if (lowContents.includes("python")) {
                    const embed = new Discord.MessageEmbed()
                        .setTitle("Python Docs")
                        .setURL("https://www.python.org/doc/")
                        .setAuthor("Python", 'http://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-python-icon.png')
                        .setDescription(`Python's documentation, tutorials, and guides are constantly evolving.
    Get started here, or scroll down for documentation broken out by type and subject.`)
                        .setThumbnail('http://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-python-icon.png')
                        .setFooter("Copyright ©2001-2019. Python Software Foundation", 'http://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-python-icon.png');
                    message.channel.send('https://www.python.org/doc/', embed).catch(console.log);
                } else if (lowContents.includes("java ") || lowContents.includes("java.") || lowContents.includes("java?")) {
                    const embed = new Discord.MessageEmbed()
                        .setTitle("Java 8 API Docs")
                        .setURL("https://docs.oracle.com/javase/8/docs/api/")
                        .setAuthor("Java", 'https://media.idownloadblog.com/wp-content/uploads/2016/05/Java-Mac-Icon.png')
                        .setDescription(`This document is the API specification for the Java™ Platform, Standard Edition.`)
                        .setThumbnail('https://media.idownloadblog.com/wp-content/uploads/2016/05/Java-Mac-Icon.png')
                        .setFooter("Copyright © 1993, 2018, Oracle and/or its affiliates. All rights reserved.", 'https://media.idownloadblog.com/wp-content/uploads/2016/05/Java-Mac-Icon.png');
                    message.channel.send('https://www.python.org/doc/', embed).catch(console.log);
                }
            }
            // End "elysia," only case
        }
        if(lowContents.includes("what ") && lowContents.includes(" does ") && contents.toLowerCase(" mean") && !lowContents.includes("mean ")){ 
            // What does x mean?
            let result = contents.match(/does (.*?) mean/gmi)[0];
            result = result.replace(/does /g, '').replace(/ mean/g, '');
            result = result.replace(/["]/g, '%22');
            result = result.replace(/[“]/g, '%22');
            result = result.replace(/[”]/g, '%22');
            
            if (result.includes(" ")){

                if (!result.toLowerCase().includes(" this ") && !result.toLowerCase().includes(" that ") && !result.toLowerCase().includes(" he ")
                    && !result.toLowerCase().includes(" she ") && !result.toLowerCase().includes(" it ")){
                        result = result.replace(/\s/g, '%20');
                        message.channel.send(`I looked that up for you. Here you go:\nhttps://www.google.com/search?q=${result}`).catch(console.log);
                    }
            }
            else{
                if (!result.toLowerCase().includes(" this ") && !result.toLowerCase().includes(" that ") && !result.toLowerCase().includes(" he ")
                    && !result.toLowerCase().includes(" she ") && !result.toLowerCase().includes(" it ")) 
                    message.channel.send(`Here is the definition of ${result}...\nhttps://www.merriam-webster.com/dictionary/${result}`).catch(console.log);
            }

        // End what does x mean case
        }
        else if((lowContents.includes("what's") ||lowContents.includes("whats") ||lowContents.includes("what is") || (lowContents.includes("what") && lowContents.includes("be") && lowContents.includes("will"))) 
        && lowContents.includes("weather")){
            // https://www.wunderground.com/weather/us/pa/bethel-park : today's weather
            // https://www.wunderground.com/forecast/us/pa/bethel-park : forecast
            // https://www.wunderground.com/hourly/us/pa/bethel-park/date/2020-07-31 : date specific
            if(lowContents.includes(" in ")){
                let location = contents.substring(lowContents.indexOf(" in ")+4);
                message.channel.send(`I think you were asking about the weather in \'${location}\', so I looked that up for you. Here you go:\nhttps://www.google.com/search?q=weather%20in%20${location.replace(/\s/g, '%20')}`).catch(console.log);
            }else{
                message.channel.send(`I think you were asking about the weather. Here's the weather for my hometown!\nhttps://www.wunderground.com/weather/us/pa/bethel-park`).catch(console.log);
            }
        } // End weather case
        else if(lowContents.includes("you have gotten in the way of art")){
            let imagePath = config.memedir+"\\classics\\1 ss tier\\recursion.png";
            message.channel.send("Now that's pig", {files: [{attachment: imagePath, name: 'recursion.png'}]}).catch(console.log);
        }
        else if(lowContents.includes("nigger") || lowContents.includes("n1gg3r") || lowContents.includes("nigga") || lowContents.includes("|\\|igger")){ // NO N-WORDS
            message.delete({timeout: 10, reason: "No n-words."});
        }
        else if(contents.includes("https://open.spotify.com/track/3z9TRtkRCHX4GM5rd78W5m?si=CjaQUwr7QZi3UmhG6F7Ulg") ||
                     contents.includes("https://open.spotify.com/track/6uKsrF9ejNeVy0lZvOQFdp?si=8VFHu4lpTkyvqTYkHoWMtg")){
            message.delete({timeout: 10, reason: "No n-word songs."});
        }
        // The grand "mention her name" trigger
        else if(lowContents.includes("elysia")){
            if(lowContents.includes("you like")){
                let interest = contents.substring(lowContents.indexOf("you like")+9, (lowContents.indexOf("elysia") < lowContents.indexOf("you like")) ? contents.length : lowContents.indexOf("elysia"));
                message.channel.send(`Sure, I like ${(interest.includes(", ")) ? interest.replace(/,/,'') : interest}. But I am a bot with no emotions, so take that with a grain of salt.`).catch(console.log);
            }
        }
    } // End method
} // End class

module.exports=ChatAI