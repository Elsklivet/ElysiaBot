# ElysiaBot
Elysia (al LEE zhuh) is a Discord bot written in the [discord.js](https://github.com/discordjs/discord.js/) library for generic commands and some very minor chat AI functions. The bot is currently only used by a few personal servers. I really only made her for practice with making bots, using JavaScript, and concurrency. Soon she turned into a way to automate hentai and API documentation recalling. Hope you enjoy.

## Usage
Elysia responds to commands that begin with '~'. To check if she is online, you can `~ping` her. Most of Elysia's commands are formatted simply `~{command} {args}`, however some require the use of quotation marks to prevent argument splitting and some use `-arg` notation. Elysia will also respond to some chat functions, such as "Elysia, what does [word] mean?" She is mostly just a bot for automation of small tasks and searches. 

## Commands List:
(`[arg]` denotes an optional argument)

 **help**: `~help -f | -t | -txt | -file | -text` Sends you a help file of most of the commands.
 
 **ping**: `~ping` Pings Elysia.
 
 **avatar**: `~avatar [@mention]` show your avatar as an image, or those of anyone you mention.
 
 **hentai**: `~hentai` post random hentai
 
 **about**: `~about [@mention]` post your information by default, or the info of @mention
 
 **dev**: *Inaccessible to most users*
 
 ... -self: Post Elysia's information
 
 ... -setstatus: Set Elysia's online status
 
 ... -setafk: [boolean] Set Elysia as afk
 
 ... -setactivity: Set Elyia's playing activity
 
 ... -get
 
 ... ... changelog: Get the changelog
 
 **mdn**: `~mdn "{type}.{object}` e.g. `~mdn "class.Collection"` Get MDN documentation where class,operator,function/func,statement
 
 **djs**: `djs "{type}.{object}" | "{type}.{object}.{property/method}` Get DJS documentation where type is either class or typedef, object is the object, etc.
 
 **py/pydocs**: `~py "{type}#{object}" | "{nonstdobject}"` Get Python 3 Documentation where type is either stdtype, exceptions, or constants, and object is the subject or object, etc.
 
 **java/javadocs**: `~java "{pck1}#...#{obj}"` Get Java documentation.
 
 **anime**: `~anime "anime name" [-x | -s]` (INCLUDE QUOTATIONS)
 
 ... -x : find an exact anime with crunchyroll (increased risk of 404 error)
 
 ... -s : search for a given anime with crunchyroll
 
 **manga**: `~manga "manga name" [-x | -s]` (INCLUDE QUOTATIONS)
 
 ... -x : Find an exact manga with mangarock.club (increased risk of 404 error)
 
 ... -s : Search for a given manga with mangarock.club
 
 **wiki/wikipedia**: `~wiki "article name" [lang]` Goes to Wikipedia article with optional language (two character format)
 
 **wolfram/wolf/wolframalpha**: `~wolf "query"` Search Wolfram|Alpha™
 
 ... "query" is with quotations and NO SPACES (W|A does not parse well)
 
 **clean**: `~clean | purge -{flag} [args]` Delete messages under 14 days old
 
 ... -before/-b id: Delete up to 100 messages before the given id
 
 ... -after/-a id: Delete up to 100 messages after the given id
 
 ... -embeds: Delete up to 100 messages containing embeds
 
 ... -attach/-attachments: Delete up to 100 messages containing attachments
 
 ... -r/-react: Delete up to 100 messages that have been reacted to with a certain emoji
 
 ... -purge: deletes Up to 100 messages that are not pinned
 
 ... -text/-t/-txt: Deletes up to 100 messages that are not pinned and do not contain embeds or attachments
 
 ... -user/-u: Deletes up to 100 messages from the mentioned user / user with given ID, given they are not pinned
 
 **nhentai**: `~nhentai "numbers#chapter/tag"` Get a hentai from NHentai
 
 ... -tag/-t: Search for a tag
 
 ... -s/-search: Search the site for a hentai
 
 ... [none]: Go to the specified numbers, with a chapter optionally denoted by a pound sign.
 
 **google**: `~google "search query"` Search Google™
 
 **reddit**: `~redddit "query | sub" [-r | -s]` Use Reddit™
 
 ... -r: Go to the exact subreddit in quotes
 
 ... -s: Search all of reddit for the query
 
 **roll**: `~r | roll ${n}d${t}+${m}` No quotes or spaces after command, will break. Rolls a dice where n is number of rolls, 'd' is the letter d, t is max dice roll, and m is modifier. `~r 1d20+5`
 
 **dict**: `~dict "word"` Go to the given word in the Merriam-Webster dictionary.
 
 **leo**: `~leo "word"` Translate the given word in LEO.de German translator.
 
 **duden**: `~duden "word" "word type"` Search for a word in Duden online Worterbuch. Note, word type is optional, and is usually only present for adjectives and verbs that have noun versions. Searching is safer.
 
 **spanish**: `~spanish "word"` Translate the given word in Spanish using SpanishDict.

### Up-time
Unfortunately, as of now, I personally run the bot off of my own device. That means the bot is really only on when I am on my computer, which is admittedly often. Most common up-time hours will be 15:00 - 22:00 U.S. EST (UTC - 4:00/5:00).

### Adding Elysia to a server
If you're interested in adding Elysia to your own server, you can use [this link](https://discord.com/oauth2/authorize?client_id=619279373404602381&scope=bot) to do so. There may be some dependencies necessary. 

### Developer Contact
Other than using this GitHub, contact me on Discord itself via Elsklivet#8867, or at [untitleddev@protonmail.com](mailto:untitleddev@protonmail.com) (spam will be blacklisted permanently, please have a genuine issue or reason for contact). 
