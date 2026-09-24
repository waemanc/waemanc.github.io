let bankTotal = 100;
const addMoney = 25;
const subtractMoney = 25;

function addMoney() {
    bankTotal = bankTotal + addMoney;

    const depositText = document. getElementById("money-display");
    const statusText = document.getElementById("status-message");

    if(bankTotal > 0)
    {
        depositText.innerText = bankTotal;
        statusText.innerText = "Deposited Money!";
    }

}

function subtractMoney() {
    bankTotal = bankTotal - subtractMoney;

    const depositText = document. getElementById("money-display");
    const statusText = document.getElementById("status-message");

    if(bankTotal > 0)
    {
        depositTextText.innerText = bankTotal;
        statusText.innerText = "Withdrew Money!";
    }

    else
    {
        depositTextText.innerText = 0;
        statusText.innerText = "Uh Oh Bankrupt";
        statusText.style.color = "#c91804";
        statusText.style.fontWeight = "bold";

        document.body.style.backgroundColor = "#5a1a1a";

        document.querySelector("button").disabled = true;
        document.querySelector("button").innerText = "Bankrupt";
    }
}