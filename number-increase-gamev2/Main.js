let levelDifficulty = 1;
let mainRandomNumber;
let randomNumber1, randomNumber2, randomNumber3;
let sumRandomNumbers, productRandomNumbers;
let userInputs = [];
let validUserInputs = [];
let invalidUserInputs = [];



let commencingLevelOne = () =>{
    const continueButton = document.getElementById("continue-btn");
    continueButton.addEventListener("click", () =>{
        continueButton.style.borderWidth = "0";
        continueButton.style.boxShadow = "none";

        const userInstructions = document.querySelector(".user-instructions");
        userInstructions.textContent = "";
        userInstructions.style.color = "red";
        userInstructions.innerHTML = `<p><br>********You are a secret agent breaking into a level 1 safe********<br><br>Find the 3 numbers that add up to: <br><br> And multiply to:</p>`;
    })
}

function sumOfRandomNumbers()
{
    "hello my nameis ale"
}

commencingLevelOne();

function creatingTheRandomNumber(){
    mainRandomNumber = document.getElementById("main-random-number");
    
    randomNumber1 = Math.ceil(Math.random() * (1 + levelDifficulty));
    randomNumber2 = Math.ceil(Math.random() * (1 + levelDifficulty));
    randomNumber3 = Math.ceil(Math.random() * (1 + levelDifficulty));

    sumRandomNumbers = randomNumber1 + randomNumber2 + randomNumber3;
    productRandomNumbers = randomNumber1 * randomNumber2 * randomNumber3;

}

creatingTheRandomNumber();





const enteredNumbers = document.getElementById("enterNumbers-btn")
enteredNumbers.addEventListener("click", validateUserInputs);






function validateUserInputs(){
    const firstUserInput = document.getElementById("first-number-input")
    const secondUserInput = document.getElementById("second-number-input");
    const thirdUserInput = document.getElementById("third-number-input");

    userInputs.push(firstUserInput.value, secondUserInput.value, thirdUserInput.value);

    userInputs.forEach(element =>{
        if(element < 0){
            invalidUserInputs.push(element);
        }else{
            validUserInputs.push(element);
        }
    })
    if(invalidUserInputs.length > 0){
        
    }
    
}