document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawField=document.getElementById('withdraw-field');
    const withdrawString = withdrawField.value;
    const withdraw = parseFloat(withdrawString);


    const withdrawBalanceElement = document.getElementById('withdraw-balance')
    const withdrawBalanceString = withdrawBalanceElement.innerText;
    const withdrawBalance =parseFloat( withdrawBalanceString)
    
    const withdrawBalanceTotal = withdrawBalance + withdraw;
    withdrawBalanceElement.innerText= withdrawBalanceTotal;
    
    const balanceTotal = document.getElementById('Balance-total')
    const balanceTotalString=balanceTotal.innerText;
    const Balance=parseFloat(balanceTotalString);

    const balanceHave = Balance - withdraw;
    balanceTotal.innerText=balanceHave;


    withdrawField.value='';
})