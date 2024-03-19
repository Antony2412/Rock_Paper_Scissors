 let userScore=0;
 let compScore=0;

 const choices=document.querySelectorAll(".choice");
 const msg=document.querySelector("#msg");
 const userScorePara=document.querySelector("#user-score");
 const compScorePara=document.querySelector("#comp-score"); 

const genCompChoice=()=>{
    const options=["rock","paper","sissors"];
    const randIdx=Math.floor(Math.random()*3);
    //rock,paper,sissors
    return options[randIdx];
};
const drawGame =()=>{
    console.log("The Game was draw ");
    msg.innerText="Game is Draw! Play Again ";
    msg.style.backgroundColor="#081b31 ";
    
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin) 
    {
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win");
        msg.innerText=`You Win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        
    }
    else  
    {
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You lose");
        msg.innerText=`You Lose ! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red  ";
    }
}
 const playGame=(userChoice)=>{
    console.log("User Choice =",userChoice);
    //Generate the computer choice
    const compChoice=genCompChoice();
    console.log("Computer Choice =",compChoice);

    if(userChoice===compChoice)
    {
        //Draw Game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock")//sissors,paper
        { userWin=compChoice==="paper"?false:true;}
        else if(userChoice==="paper")//rock,sissors
        { userWin=compChoice==="sissors"?false:true;}
        else{//paper,rock
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }


};
 choices.forEach((choice)=>{
    console.log(choice);    
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    });
 });