let bankTotal = 100;
const add = 25;
const sub = 25;

<<<<<<< HEAD
function addMoney() {
    bankTotal = bankTotal + addMoney;
=======
function addMoney() {
    bankTotal = bankTotal + add;
>>>>>>> 6a26a876b67481acfca5b4aa4b5b299616e165a5

<<<<<<< HEAD
    const depositText = document. getElementById("money-display");
=======
    const depositText = document.getElementById("money-display");
>>>>>>> 6a26a876b67481acfca5b4aa4b5b299616e165a5
    const statusText = document.getElementById("status-message");

    if(bankTotal > 0)
    {
<<<<<<< HEAD
        depositText.innerText = bankTotal;
        statusText.innerText = "Deposited Money!";
=======
        depositText.innerText = bankTotal;
        statusText.innerText = "Deposited Money!";

        document.body.style.backgroundColor = "#132359";
        document.getElementById("withdraw").disabled = false;
        document.getElementById("withdraw").innerText = "Withdraw $25";
>>>>>>> 6a26a876b67481acfca5b4aa4b5b299616e165a5
    }
<<<<<<< HEAD

}

function subtractMoney() {
    bankTotal = bankTotal - subtractMoney;

    const depositText = document. getElementById("money-display");
    const statusText = document.getElementById("status-message");

    if(bankTotal > 0)
    {
        depositText.innerText = bankTotal;
        statusText.innerText = "Withdrew Money!";
    }

=======

    const balanceText = document.getElementById ("money-display")

    balanceText.innerText = bankTotal

}

function subtractMoney() {
    bankTotal = bankTotal - sub;

    const depositText = document.getElementById("money-display");
    const statusText = document.getElementById("status-message");

    if(bankTotal > 0)
    {
        depositText.innerText = bankTotal;
        statusText.innerText = "Withdrew Money!";
    }

>>>>>>> 6a26a876b67481acfca5b4aa4b5b299616e165a5
    else
    {
        depositText.innerText = 0;
        statusText.innerText = "Uh Oh Bankrupt";
        statusText.style.color = "#c91804";
        statusText.style.fontWeight = "bold";

        document.body.style.backgroundColor = "#5a1a1a";

<<<<<<< HEAD
        document.querySelector("button").disabled = true;
        document.querySelector("button").innerText = "Bankrupt";
=======
        document.getElementById("button").disabled = true;
        document.getElementById("button").innerText = "No";
>>>>>>> 6a26a876b67481acfca5b4aa4b5b299616e165a5
    }
}