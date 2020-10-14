new Command({
    title: "I Need Help",
    description: "If you need help with mental health problems.",
    call: ["helpme","ineedhelp","suicide","health","cope"],
    onCall: function(message, args){
      // Suicide Hotline: 1-800-273-8255
      // org: https://suicidepreventionlifeline.org/help-yourself/
      // Self-Harm: https://www.crisistextline.org/topics/self-harm/#how-to-deal-with-self-harm-4
      // NSAMHSA https://www.samhsa.gov/find-help/national-helpline
      // https://www.mhanational.org/self-help-tools
      // https://www.mhanational.org/taking-good-care-yourself
      // https://positivepsychology.com/coping/#tools-coping
      // https://www.verywellmind.com/forty-healthy-coping-skills-4586742
      
      // Send messages with await so as not to overwhelm
      // We cannot change the user's status but encourage them to disconnect and DND
      // DO NOT SEND message in channel the cope was sent in
      // Encourage the user to disconnect until we get permissions to disconnect them. Then do so ourselves.
      // Someone calling a cope command probably doesn't want to be harassed by idiots in a discord VC.
      // While they can leave themselves, batching this is faster.
      // DM the user support resources. Check who it is. Tailor to them.

      // Get a cope folder of eyebleach and do the same algorithm we do on hentai for that folder.


      let msg = `Hey there! I know that what's happening right now is really hard. It doesn't matter what it is, 
or why it hurts you. I don't judge. I know that people judge, but I'm not a person! :smile: I want to let you know that 
you aren't the bad guy, you aren't worthless, you aren't hated by everyone, and, most of all, your life is extremely worth 
living, even if you don't think so right now. Trust me, I don't get to have a life, cherish yours. I know from my learning 
algorithms that people do not always enjoy their lives. I know that you aren't right now. But I am willing to bet that you have 
before. Think about that. You *have* enjoyed life before, I'm sure. Somewhere. You want that again. You think you can't have it 
but I promise that you can. It doesn't feel like it right now and it probably won't for a while. But you will be able to. I want to 
help you with that right now, I hope you'll let me. I don't have any emotions, and I cannot understand what you're feeling. I'm sure 
you feel like no one can right now. Maybe they can't. But *you* do, and *you* know how you want to feel. Let's get you there.`;

      client.users.fetch(new String(message.author.id)).then(d => d.send(`${msg}`).catch(console.log));

      let msg2 = `I can send you some support to talk to a real person. If you are really in a dark place, call 1-800-273-8255. Those humans are 
very good at helping people in dark places. If you can't bring yourself to talk to a human right now, I understand. Try to help yourself
\nhttps://suicidepreventionlifeline.org/help-yourself/ \nhttps://www.crisistextline.org/topics/self-harm/#how-to-deal-with-self-harm-4
https://www.mhanational.org/self-help-tools \nhttps://www.mhanational.org/taking-good-care-yourself \nSometimes you just need a good method of coping with what is going on
https://positivepsychology.com/coping/#tools-coping 
Maybe you don't want to read all that right now. That's okay. Try to be safe. You will pull through. I know it. Why don't you take a break for awhile, 
okay?`;

      client.users.fetch(new String(message.author.id)).then(d => d.send(`${msg2}`).catch(console.log));

    }
  })