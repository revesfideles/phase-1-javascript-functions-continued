function saturdayFun(rollerSkate = "roller-skate") {
    const message = `This Saturday, I want to ${rollerSkate}!`;
    console.log(message);
    return(message);
    }

function mondayWork(goToTheOffice = "go to the office") {
    const mondayMessage = `This Monday, I will ${goToTheOffice}.`;
    console.log(mondayMessage);
    return(mondayMessage);
}

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }
  
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("a dedicated programmer")); // Output: "You are !!!a dedicated programmer!!!"