new Command({
    title: "Roll", 
    description: "Roll DnD dice.", 
    call: ["roll","r"], 
    onCall: function(message, args){
      if(args.length === 1){ // If at least one parameter exists...
        let diceThrow = [args[0]]; // Create list to act as storage for throw params ('1d20+3')
        let numberOfDice = 0; // Initiate number of dice to throw
        let specs = [];

        if(args[0].includes('d')){
          diceThrow = args[0].split('d');
          numberOfDice = diceThrow[0];

          if(diceThrow[1].includes('+')){
            specs = diceThrow[1].split('+');
          } // End includes '+' if
          else{
            specs[0] = diceThrow[1];
          }
        console.log(`Number of dice to throw: ${numberOfDice}`);
        console.log(`Die type: ${specs[0]}`);
        console.log(`Full extension of throw: ${diceThrow[1]}`);
        console.log('Adding to final ressult:' + (specs.length > 1) ? specs[1] : "No plus");

        let outcomes = [0];
        let mathString = ""
        for(i = 0; i < numberOfDice; i++){
          outcomes[i] = Math.floor(Math.random() * specs[0]) + 1;
          mathString += outcomes[i] + ' + ';
        }
        let outcome = outcomes.reduce((a,b)=>a+b,0);
        outcome += (specs.length > 1) ? parseInt(specs[1]) : 0;
        mathString += (specs.length > 1) ? ""+specs[1] : "0 (no modifier)";
        message.channel.send(`**${outcome}**: ${mathString} = ${outcome}`).catch(console.log);

        }// End includes 'd' if
      }else{
        message.channel.send('You did not provide correct arguments. Correct usage example: \'~r 1d20+3\' with no spaces in the dice throw or quotations; rolls one d20 and adds 3 to the result.').catch(console.log);
      }
    }
  })