// ATM Program

// Declaring Global Variable for totalBalance
totalBalance = 0

// First we need to Verify user Credentials //
function verifyCred(user, pass){
    // Check if the userName and PIN code are matching 
    if (user == 'user' && pass == '1234'){
        console.log('Welcome to Marianos Bank ', userName);
        chooseAccount();
    }else{
        // If they dont match
        console.log('The PIN code is incorrect!');
    }
}

// User can chooose which account to open first
function chooseAccount(){
    // User action - Deposit or Withdraw money
    let ChooseAccount = prompt('Do you want to Deposit or Withdraw? dep or with');
    if(ChooseAccount == 'dep'){
        depositAcc();
    }else if(ChooseAccount == 'with');
        Withdraw();
}

// Deposit Function
function depositAcc(){
    // How many $ user want to deposit 
    let depAmount = prompt('How much do you want to deposit?');
    // Total balance was 0. Now we increment the total Balance with Deposite Amount or depAmount
    totalBalance = totalBalance + parseInt(depAmount);
    // Message with the deposited amount
    console.log('Your deposit is complete!', depAmount);
    // We will ask the user if he want to do another transaction 
    let anotherTrans = prompt('Do you want to do another transaction? yes or no');
    if (anotherTrans == 'yes'){        
        anotherTransaction();
    }else{
        // If he doesn't want we will greet him
        console.log('Thank you for using Marianos Bank!');
        console.log('Your balance is ', totalBalance);
        console.log('Have a nice day', userName);
    }
}

// Withdraw Fucntion
function Withdraw(){
    // How many $ user want to withdraw
    let transaction = prompt('How much do you want to withdraw?');
    // Check if the user has enough money on his account
    if(totalBalance < transaction){
        // In case he is broke
        console.log('Insufficient funds!');
    }else{
        // Reducing his total balance
        totalBalance = totalBalance - transaction;
        anotherTransaction();
        console.log('Thank you for using Marianos Bank');
        console.log('Your current balance is', totalBalance);
    } 
}

// If user choose yes line32 for another transaction 
function anotherTransaction(){
    // We are asking the user if he want to Deposit money or to Withdraw
    let chooseAccount = prompt('Do you want to Deposit or Withdraw? dep or with');
    // If he choose deposit
    if(chooseAccount == 'dep'){
        let SecondDeposit = prompt('How much do you want to deposit?');
        console.log('You deposited another', SecondDeposit, '$');
        totalBalance = depAmount + SecondDeposit;
        console.log('Your deposit is complete!', totalBalance);
    // If he choose withdraw
    }else if (chooseAccount == 'with'){
        Withdraw();
    }else{
        console.log('Invalid Input');
    }
}

// User - Username
let userName = prompt('Enter your username');
// User - PIN Code
let pinCode = prompt('Enter your PIN');

// Calling the first function to check if the userName and the PIN Code is ok
verifyCred(userName, pinCode);
