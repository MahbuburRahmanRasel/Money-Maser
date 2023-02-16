
function inputValue(inputId){
    const input = document.getElementById(inputId)
   const value =  parseInt(input.value)
    return value
}



function calculation(){

    const income =  inputValue('income-input')
    const food = inputValue('food-input')
    const rent = inputValue('rent-input')
    const clothes =  inputValue('clothes-input')
    const saveInput = inputValue('save-input');
    
    const totalExpense = food+rent+clothes
    const balance = income - totalExpense
    const saving = income*(saveInput/100)
    const remainingBalance = income -(saving + totalExpense)
    return value = {totalExpense:totalExpense,
        balance:balance, 
        saving:saving, 
        remainingBalance:remainingBalance}
}


document.getElementById('calculte-btn').addEventListener('click',()=>{
    
    calculation()
    const expense = document.getElementById('expense-output');
    expense.innerText = value.totalExpense;
    
    const balanceOutput = document.getElementById('balance-output');
    balanceOutput.innerText = value.balance;

   
})


document.getElementById('save-btn').addEventListener('click',()=>{
    
    calculation()
    const savingAmountOutput = document.getElementById('saving-amount-output');
    savingAmountOutput .innerText = value.saving ;

    const remainingBalanceOutput = document.getElementById('remaining-balance-output');
    remainingBalanceOutput .innerText = value.remainingBalance ;



})