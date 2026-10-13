//Creating variables for our code 
let linesofCode = 0;

let clickPower = 1;
let upgradeCost = 50;

let interns = 0;
let internCost = 100; 

function writeCode() 
{
    linesofCode = linesofCode + clickPower; 
    updateScreen();
}

function updateScreen()
{
    document.getElementById("score-display").innerText = linesofCode + "lines of code";

}