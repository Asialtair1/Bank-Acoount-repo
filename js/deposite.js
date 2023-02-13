document.getElementById('deposite-button').addEventListener('click',function(){
    const depositeField =document.getElementById('deposite-field')
    const newdepositeString=depositeField.value;
    const newdepositeAmount = parseFloat(newdepositeString);
    
    const cureentTotal =document.getElementById('deposite-total')
    const predepositetotalstring = cureentTotal.innerText;
    const predepositetotal =parseFloat(predepositetotalstring);
    
    const currentDeposite = predepositetotal + newdepositeAmount;
    cureentTotal.innerText=currentDeposite;

    const balanceTotal = document.getElementById('Balance-total')
    const balanceTotalString=balanceTotal.innerText;
    const Balance=parseFloat(balanceTotalString);

    const balanceHave = newdepositeAmount + Balance;
    balanceTotal.innerText=balanceHave;
    

    depositeField.value='';
    
    
})