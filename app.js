const choices = document.querySelectorAll(".choice");
let userScore = 0;
let compScore = 0;
const user_score = document.querySelector("#user_score");
const comp_score = document.querySelector("#comp_score");
const msg = document.querySelector(".msg");

//3rd step
const getCompChoice = () =>{
    const elements = ["rock", "paper", "scissor"];
    let idx = Math.floor(Math.random() * 3);
    return elements[idx];
}

//2nd step
const checkWinner = (userChoice, compChoice) =>{
    if(userChoice === compChoice)
        {
            msg.style.backgroundColor = "rgb(206, 119, 48)";
            msg.innerText = "Match Draw";

        }
        else{
            if(userChoice === "rock")
            {
                if(compChoice === "paper")
                {
                    compScore++;
                    comp_score.innerText = compScore;
                    msg.style.backgroundColor = "red";
                    msg.innerText = `${compChoice} beats your ${userChoice}`;
                }
                else if(compChoice === "scissor")
                {
                    userScore++;
                    user_score.innerText = userScore;
                    msg.style.backgroundColor = "green";
                    msg.innerText = `your ${userChoice} beats ${compChoice}`
                }
            }
            else if(userChoice === "paper")
            {
                if(compChoice === "scissor")
                {
                    compScore++;
                    comp_score.innerText = compScore;
                    msg.style.backgroundColor = "red";
                    msg.innerText = `${compChoice} beats your ${userChoice}`;
                }
                else if(compChoice === "rock")
                {
                    userScore++;
                    user_score.innerText = userScore;
                    msg.style.backgroundColor = "green";
                    msg.innerText = `your ${userChoice} beats ${compChoice}`
                }
            }
            else if(userChoice === "scissor")
            {
                if(compChoice === "rock")
                {
                    compScore++;
                    comp_score.innerText = compScore;
                    msg.style.backgroundColor = "red";
                    msg.innerText = `${compChoice} beats your ${userChoice}`;
                }
                else if(compChoice === "paper")
                {
                    userScore++;
                    user_score.innerText = userScore;
                    msg.style.backgroundColor = "green";
                    msg.innerText = `your ${userChoice} beats ${compChoice}`;
                }
            }
        }
}
//1 step
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        const compChoice = getCompChoice();
        checkWinner(userChoice, compChoice);
        
    });
});

