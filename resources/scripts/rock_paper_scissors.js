const { random } = require("lodash");

class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];
   var randomNumber = Math.floor(Math.random()*3) + 1;


    return acceptedValues[randomNumber];
  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){
    let result = "lose";

    if(userSelection == cpuSelection)
    {
result = "tie";

    }
    else if (userSelection ==="rock" && cpuSelection ==="scissors")
    {
      result ="win";
    }
    else if (userSelection==="paper"&& cpuSelection==="rock")
    {
      result="win";
    }
    else if(userSelection==="scissors"&&cpuSelection==="paper")
    {
      result="win";
    }
    return result;
  }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){
    this.generateCPUResponse() = 0;
    if (this.determineWinner(userSelection,cpuSelection) === "win")  
    {
    this.score.user++; this.gameHistoryLog.add("William selected " + userSelection + ", CPU selected " + cpuSelection + ": Ben wins");
    
      this.score.user ++;
      
    }
    else if (this.determineWinner(userSelection,cpuSelection) === "lose")
    {
      this.score.cpu ++;
      this.gameHistoryLog.add("William selected " + userSelection + ", CPU selected " + cpuSelection + ": CPU wins");
    } 
    else  {
      this.score.cpu ++;
      this.score.user ++;
      this.gameHistoryLog

    }

  }

}