/**
* scythe.js
* @author Elsklivet
*
* The Scythe module is designed based off of the concept that is used by the Discord.JS bot Yukikaze: instead of scraping every website every time that an embed is needed, create an embed
* with the necessary information that can be sent directly into a message, making it possible to near instantly send an embed with basic information from a website in the same manner,
* no matter what the website is.
*/

const scrapeapi = require('./scraper');
let Scraper = scrapeapi;

function Scythe(options){
  // An example of an options object
  /*
  * {
  * url: `url`,
  * selectors: {
  *  author: 'h1.firstHeading',
  *  title: 'title',
  *  description: 'p',
  *  fields: ['ul']
  *},
  * iconurl: `iconurl`,
  * thumbnail: `thumburl`;
  *}
  */
  this.url = options.url ? options.url : `https://en.wikipedia.org/wiki/HTTP_404`;
  this.selectors = options.selectors ? options.selectors : {
    author: 'title',
    title:'h1',
    description: 'p',
    fields: [{name:'h2', value:'p'}]
  };
  this.iconurl = options.iconurl ? options.iconurl : `https://www.clker.com/cliparts/8/3/3/4/1195445190322000997molumen_red_round_error_warning_icon.svg.hi.png`;
  this.thumbnail = options.thumbnail ? options.thumbnail : `https://www.clker.com/cliparts/8/3/3/4/1195445190322000997molumen_red_round_error_warning_icon.svg.hi.png`;
}

Scythe.prototype.build = function(fieldNumber){
  // Should return an embed resolvable object
  let reader = new Scraper(this.url);
  let embed = {};
  embed = reader.getHTML().then(fullBody =>{
    embed.footer = `This embed was generated with the Scythe API`;
    embed.author = {name: reader.getNumText(fullBody, this.selectors.author, 0), icon_url: this.iconurl};
    embed.title = reader.getNumText(fullBody, this.selectors.title, 0);
    embed.url = this.url;
    if(fieldNumber){ // Let's assume this is unnecessary for now.
      let arrayFields = [];
      for(let i = 0; i<fieldNumber; i++){
        //TODO                                                                                                                                    > > > left off right here < < <
        // Add field objects in here, {name:reader.getNumText(fullBody, this.selectors.fields[i].name, i), value:reader.getNumText(fullBody, this.selectors.fields[i].value, i)}
      }
      embed.fields = [{}];
    }

    return embed;
  }).catch(console.log('The \'getHTML\' promise was rejected in the Scythe module.'));

  return embed;
}


module.exports = Scythe;

// An example of a message embed
//{"color":2266867,"author":{"name":"Discord.js Docs (stable)","url":"https://discord.js.org/#/docs/main/stable","icon_url":"https://discord.js.org/static/favicon.ico"},"description":"__**[Client](https://discord.js.org/#/docs/main/stable/class/Client)**__ (extends **EventEmitter**)\nThe main hub for interacting with the Discord API, and the starting point for any bot.","url":"https://discord.js.org/#/docs/main/stable/class/Client","fields":[{"name":"Properties","value":"`options` `shard` `users` `guilds` `channels` `presences` `token` `user` `readyAt` `broadcasts` `pings` `status` `uptime` `ping` `voiceConnections` `emojis` `readyTimestamp` `browser`"},{"name":"Methods","value":"`createVoiceBroadcast` `login` `destroy` `syncGuilds` `fetchUser` `fetchInvite` `fetchWebhook` `fetchVoiceRegions` `sweepMessages` `fetchApplication` `generateInvite` `setTimeout` `clearTimeout` `setInterval` `clearInterval`"},{"name":"Events","value":"`channelUpdate` `guildUnavailable` `emojiCreate` `emojiDelete` `emojiUpdate` `guildMemberRemove` `roleCreate` `roleDelete` `roleUpdate` `guildUpdate` `messageReactionAdd` `messageReactionRemove` `messageReactionRemoveAll` `messageUpdate` `userNoteUpdate` `warn` `debug` `guildCreate` `rateLimit` `channelCreate` `channelDelete` `channelPinsUpdate` `guildBanAdd` `guildBanRemove` `guildDelete` `guildIntegrationsUpdate` `guildMembersChunk` `message` `messageDelete` `messageDeleteBulk` `presenceUpdate` `userUpdate` `guildMemberAvailable` `resume` `typingStart` `typingStop` `clientUserGuildSettingsUpdate` `clientUserSettingsUpdate` `voiceStateUpdate` `webhookUpdate` `ready` `reconnecting` `error` `disconnect` `guildMemberAdd` `guildMemberUpdate` `guildMemberSpeaking`"},{"name":"​","value":"[View source](https://github.com/discordjs/discord.js/blob/stable/src/client/Client.js#L21)"}]}
