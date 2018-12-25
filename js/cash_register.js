// Instantiate calculator module
const register = calculatorModule();

const display = document.getElementById('total');
const nums = document.querySelectorAll('.num');
const ops = document.querySelectorAll('.op');
const clear = document.querySelector('#clear');
const getBalanceButton = document.querySelector('#balance');
const depositButton = document.querySelector('#deposit');
const withdrawButton = document.querySelector('#withdraw');
const equals = document.querySelector('#equal');

// Event listeners for Number buttons
for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener('click', (e) => {
        register.load(e.target.textContent);
        register.memory.push(e.target.textContent);
        display.textContent = register.getTotal();
    });
}

// Event listeners for Operator buttons
for (let i = 0; i < ops.length; i++) {
    ops[i].addEventListener('click', (e) => {
        register.load(e.target.textContent);
        register.memory.push(e.target.id);
        display.textContent = register.getTotal();
    });
}

// Event listener for Clear button
clear.addEventListener('click', () => {
    register.clearTotal();
    display.textContent = register.getTotal();
});

// Event listener for Get Balance button
getBalanceButton.addEventListener('click', () => {
    register.getBalance();
    display.textContent = register.getTotal();
});

// Event listener for Deposit button
depositButton.addEventListener('click', () => {
    register.deposit();
    display.textContent = register.getTotal();
});

// Event listener for Withdraw button
withdrawButton.addEventListener('click', () => {
    register.withdraw();
    display.textContent = register.getTotal();
});

// Event listener for Equals button
equals.addEventListener('click', () => {
    register.calculate();
    display.textContent = register.getTotal();
});


