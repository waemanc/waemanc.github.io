let bankTotal = 100;
const add = 25;
const sub = 25;

function addMoney() {
    bankTotal = bankTotal + add;

    const depositText = document.getElementById("money-display");
    const statusText = document.getElementById("status-message");

    if(bankTotal > 0)
    {
        depositText.innerText = bankTotal;
        statusText.innerText = "Deposited Money!";
    }

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

    else
    {
        depositText.innerText = 0;
        statusText.innerText = "Uh Oh Bankrupt";
        statusText.style.color = "#c91804";
        statusText.style.fontWeight = "bold";

        document.body.style.backgroundColor = "#5a1a1a";

        document.querySelector("button").disabled = true;
        document.querySelector("button").innerText = "Bankrupt";
    }
}