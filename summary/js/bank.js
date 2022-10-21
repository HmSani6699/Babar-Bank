//get deposit amound and new amount
document.getElementById('deposit-button').addEventListener('click', function () {
    // get deposit input
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const DepositTotalAmount = parseFloat(depositInputText)
    //get deposit amount
    const depositAmount = document.getElementById('deposit-amount');
    const previausDepositText = depositAmount.innerText;
    const previousDepositAmount = parseFloat(previausDepositText)
    //update deposit
    const newDepositTotal = previousDepositAmount + DepositTotalAmount
    depositAmount.innerText = newDepositTotal
    // update acount balance
    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountText = balanceAmount.innerText;
    const balanceAmountTotal = parseFloat(balanceAmountText);
    const newBalanceTotal = balanceAmountTotal + DepositTotalAmount;
    balanceAmount.innerText = newBalanceTotal;
    //clear input
    depositInputText.value = '';
})

// get amount witdrow
document.getElementById('witdrow-button').addEventListener('click', function () {
    const witdrowInput = document.getElementById('witdrow-input');
    const witdrowInputtext = witdrowInput.value;
    const witdrowInpuAmout = parseFloat(witdrowInputtext);
    //get witdrow amount
    const witdrowAmouts = document.getElementById('witdrow-amouts');
    const witdrowAmoutsText = witdrowAmouts.innerText;
    const witdrowAmoutstotal = parseFloat(witdrowAmoutsText);
    //update witdrow amount
    const newWitdorwAmountTotal = witdrowAmoutstotal + witdrowInpuAmout;
    //set your witdrow amount
    witdrowAmouts.innerText = newWitdorwAmountTotal
    //cear input
    witdrowInput.value = '';
    // get update acount balance
    const acountBalance = document.getElementById('balance-amount');
    const acountBalanceText = acountBalance.innerText;
    //get convart a number
    const acountBalancetotal = parseFloat(acountBalanceText);
    // update balance
    const updateBalanceAcount = acountBalancetotal - witdrowInpuAmout;
    //set balance
    acountBalance.innerText = updateBalanceAcount;

})
