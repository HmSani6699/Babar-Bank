
document.getElementById('deposit-button').addEventListener('click', function () {
    // get user deposit input
    const depositInput = document.getElementById('deposit-input');
    const newDeposittotal = depositInput.value;
    const newDepositText = parseFloat(newDeposittotal);


    // get user deposit amount
    const depositAmound = document.getElementById('deposit-amount');
    const carendDepositAmound = depositAmound.innerText;
    const newDepositAmountText = parseFloat(carendDepositAmound)
    const newDepositAmound = newDepositAmountText + newDepositText;
    depositAmound.innerText = newDepositAmound;

    // update acount balance

    const balanceDeposit = document.getElementById('balance-deposit');
    const authorbaance = balanceDeposit.innerText;
    const authorBalanceText = parseFloat(authorbaance);
    const newBalance = authorBalanceText + newDepositText
    balanceDeposit.innerText = newBalance;
    //clear deposit input
    depositInput.value = '';

})

// get the witdraw
document.getElementById('witdraw-button').addEventListener('click', function () {
    //get the deposit input
    const WitdrawDepositInput = document.getElementById('witdraw-input');
    const depositWitdrawText = WitdrawDepositInput.value;
    const newDepositAmound = parseFloat(depositWitdrawText);
    //get the deposit Amount
    const depositWitdrawAmount = document.getElementById('deposit-Witdarw');
    const depositAmountText = depositWitdrawAmount.innerText;
    const previuseDepositAmpund = parseFloat(depositAmountText);
    const newDeposittotalAmount = previuseDepositAmpund + newDepositAmound
    depositWitdrawAmount.innerText = newDeposittotalAmount;
    console.log(previuseDepositAmpund);

    //update acount balance
    const creatDepositAcountAmount = document.getElementById('balance-deposit');
    const creatDepositAcount = creatDepositAcountAmount.innerText;
    const creatDepositAmountText = parseFloat(creatDepositAcount);
    const creatANewAmount = creatDepositAmountText - newDepositAmound;
    creatDepositAcountAmount.innerText = creatANewAmount;

    //clear diposit input
    WitdrawDepositInput.value = '';
})


