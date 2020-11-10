global.Discord = require('discord.js'); // The variable for Discord API.
global.client = new Discord.Client(); // Client
global.fetch = require('node-fetch');
global.cheerio = require('cheerio');
global.htmlToText = require('html-to-text');

let fs = require('fs'); // This is necessary for file system operations.
const { User } = require('discord.js');
const ChatAI = require('./chatai.js');

console.log('Booting up...'); //Note: console.log(); is System.out.println();

global.config = JSON.parse(fs.readFileSync('F:\\DiscordBots\\Dreadnot\\files\\config.json')); // The file for our information.
global.tokenfile = JSON.parse(fs.readFileSync(config.tokenf)); //The file with our token in it.
client.login(tokenfile.token); // Login with your token.

global.listening = true

global.commandsDirectory = config.commanddir; // Get commands from a given directory
console.log('Loading commands...');
global.commands = {}; // Create a collection of commands, to which we will add.
fs.readdir(commandsDirectory, (err, data) => { // Prereq: make a directory called commands. In it will be placed a new JS file for each command. This is the best method I currently have.
	if (err) { // Check for a file system error.
		console.log(err.stack);
		return;
	}
	let files = String(data).split(','); // Split files into an array.
	for (let x = 0; x < files.length; x++) {
		try {
			require(commandsDirectory + "\\" + files[x]);
			console.log(files[x]);
		} catch (error) {
			console.log(`Error fetching command file ${files[x]}... It doesn't appear to exist... Here's the stack: ${error.stack}`); // `text text ${var} text text` is the JS way of doing "text "+var+" text"
		}
	}
});

global.Command = function (tbl) {
	if (!tbl) throw new Error("Command: Table expected, got " + typeof tbl); // Just an error checker.
	if (!tbl.call instanceof Array) throw new Error("Command: call should be an array, got " + typeof tbl.call); // Making sure the command is actually a string.
	this.title = (typeof tbl.title === "string") ? tbl.title : "Undefined"; // Ternary operator for title
	this.id = (typeof tbl.id === "string") ? tbl.id : this.title.toLowerCase().replace(/ /g, '_'); //Replace spaces with underscores in the IDs
	this.description = (typeof tbl.description === "string") ? tbl.description : "No description.";
	this.calls = tbl.call; // Call the table's command.
	this.onCall = (typeof tbl.onCall === "function") ? tbl.onCall :
		function (message) { // Ternary that receives a function as a parameter (the commmand's function, located in the onCall section of the table js)
			message.channel.send('No action has been tied to this command yet...').catch(console.log); // Error if onCall is undef
		};

	commands[this.id] = this; // Register the command
	console.log(`Registered command: ${this.title}`); // Confirmation message
}



client.on('ready', () => { // This is the 'ready' event listener
	console.log(`Logged in as ${client.user.tag}!\nAuthors: ${config.authors}\nVersion: ${config.version}`); // As the client is considered ready, log to the console that the bot is on.
	client.user.setActivity("~help", {
		type: "LISTENING"
	});
});


global.parseArgs = function (str) { // This function will be used everywhere to parse arguments in commands ("!ping -arg1 --arg2", anything separated by space and not in a quotation markset)
	let out = []; // Output array of arguments
	let quote = false; // Is "" present
	let tempstr = '';
	for (let i = 0; i < str.length; i++) { // Some basic looping and splicing to split
		if (str[i] === " " && !quote && tempstr.trim().length > 0) {
			out.push(tempstr.trim());
			tempstr = '';
		} else if (str[i] === '"' && str[i - 1] !== "\\") {
			quote = !quote;
		} else {
			if (str[i] === "\\" && str[i + 1] === '"') continue;
			tempstr += str[i];
		}
	}
	if (tempstr.trim().length > 0) {
		out.push(tempstr.trim());
	}
	return out;
}

client.on('message', message => { // Message event listener... when any message is sent anywhere that this bot is listening to (all channels in which it has view channel and read message history permissions, including DMs)
	let prefix = '~'; // This can be changed any time
	let altPrefix = "～";
	let contents = message.content;
	if (!listening && (config.authorIDS.indexOf(message.author.id) === -1)) {
		message.channel.send("I'm not listening right now, I'm sorry. Developer can override this.").catch(console.log);
	} else if (contents.startsWith(prefix) && contents.trim().length > prefix.length) { // Checking to make sure the message is considered a command
		let args = parseArgs(contents.trim().substring(prefix.length, contents.length)); // Parse the command
		let cmd = args.shift().toLowerCase(); // The command
		let cmdKeys = Object.keys(commands); // Don't worry about this, just keymaps
		for (let i = 0; i < cmdKeys.length; i++) {
			if (commands[cmdKeys[i]].calls.includes(cmd)) { //cmd is input,
				try {
					if(message.channel.type === "text") message.delete({timeout: 100, reason: "Command prefixes are deleted automatically."});
					else console.log("I tried to delete a message, but was not in the correct channel type.");
					commands[cmdKeys[i]].onCall(message, args); // Run the onCall method which will be defined in the command_name.js file in ./commands/
				} catch (err) {
					message.channel.send(`Bug found! Reporting the stack to my programmer.`).catch(console.log);
					client.users.fetch("348235152972972042").then(d => d.send(`Bug found! Stack:\n\`\`\`${err.stack}\`\`\``).catch(console.log));	
				}
				break;
			}
		}
	}else if(contents.startsWith(altPrefix) && contents.trim().length > altPrefix.length){
		let args = parseArgs(contents.trim().substring(altPrefix.length, contents.length)); // Parse the command
		let cmd = args.shift().toLowerCase(); // The command
		let cmdKeys = Object.keys(commands); // Don't worry about this, just keymaps
		for (let i = 0; i < cmdKeys.length; i++) {
			if (commands[cmdKeys[i]].calls.includes(cmd)) { //cmd is input,
				try {
					if(message.channel.type === "text") message.delete({timeout: 100, reason: "Command prefixes are deleted automatically."});
					else console.log("I tried to delete a message, but was not in the correct channel type.");
					commands[cmdKeys[i]].onCall(message, args); // Run the onCall method which will be defined in the command_name.js file in ./commands/
				} catch (err) {
					message.channel.send(`Bug found! Reporting the stack to my programmer.`).catch(console.log);
					client.users.fetch("348235152972972042").then(d => d.send(`Bug found! Stack:\n\`\`\`${err.stack}\`\`\``).catch(console.log));	
				}
				break;
			}
		}
	}
	else{
		let ai = new ChatAI();
		ai.scanMessages(contents, message);
	}
});

process.on("unhandledRejection", error => {
    console.error("Unhandled promise rejection:", error);
});

client.on('rateLimit', rli => {
	console.log("We encountered a rate limit, unfortunately. Here's the info we got:\n" +
		"Timeout: " + rli.timeout +
		"\nLimit: " + rli.limit +
		"\nDelta T: " + rli.timeDifference +
		"\nPath: " + rli.path +
		"\nHTTP Method: " + rli.method);
});
