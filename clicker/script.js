//Creating variables for our code 
let linesofCode = 0;

let clickPower = 1;
let upgradeCost = 50;

let interns = 0;
let internCost = 100; 

let gamingKeyboards = 0;
let gamingKeyboardCost = 500;

let codeWizards = 0;
let codeWizardCost = 1000;

function writeCode() 
{
    linesofCode = linesofCode + clickPower; 
    updateScreen();
}

function buyKeyboard() 
{
    if(linesofCode >= upgradeCost) 
    {
        linesofCode = linesofCode - upgradeCost;
        clickPower = clickPower + 1;
        upgradeCost = upgradeCost * 1.5;
        updateScreen();
    }
}

function buyGamingKeyboard()
{
    if(linesofCode >= gamingKeyboardCost)
    {
    gamingKeyboards = gamingKeyboards + 1;
    clickPower = clickPower + 5;
    gamingKeyboardCost = Math.ceil(gamingKeyboardCost *1.5);
    updateSCreen();
    }
}

function buyIntern() 
{
    if(linesofCode >= internCost)
    {
        linesofCode = linesofCode - internCost;
        interns = interns + 1;
        internCost = internCost *1.5;
        updateScreen();
    }
}

function updateScreen()
{
    document.getElementById("score-display").innerText = linesofCode + " lines of code";

    document.getElementById("power-display").innerText = clickPower; 
    document.getElementById("cost-display").innerText = upgradeCost;

    document.getElementById("intern-display").innerText = interns;
    document.getElementById("intern-display-cost").innerText = internCost;
}

setInterval(function() {
    if(interns > 0)
    {
        linesofCode = linesofCode + interns;
        updateScreen();
    }
}, 
1000
);