// Module wrapper
var calculatorModule = function() {
    // variables
    let total = 0;
    let balance = 0;
    let memory = [];

    // takes in user input 
    // if input is an operator, if the total isnt zero, & if the last input wasn't another operator
    // adds input to display
    // if input is an integer, adds input to display
    const load = (x) => {
        if (parseInt(x) === NaN) {
            if (total !== 0 && parseInt(total[total.length]) !== NaN) {
                total += x;
            }
        } else {
            if (total === 0) {
                total = x;
            } else {
                total += x;
            }
        }
    } 

    // utility function for accessing value of total
    const getTotal = () => {
        return total;
    };
    
    // sets total back to zero to take in new input
    const clearTotal = () => {
        total = 0;
        clearMemory();
    };

    // resets memory array to take in new input
    const clearMemory = () => {
        memory.length = 0;
    };
    
    // clears previous input in memory
    // clears current total and reassigns the value of balance to total
    // adds balance as the first item in memory array for further expressions
    const getBalance = () => {
        clearTotal();
        total = balance;
        if (total > 0) {
            memory.push(total);
        }
    };

    // utility function for accessing value of balance
    const fetchBalance = () => {
        return balance;
    };

    // adds the current input/display-total to balance and resets total
    const deposit = () => {
        balance = balance + eval(memory.join(''));
        clearTotal();
    };

    // subtracts the current input/display-total from balance and resets total
    const withdraw = () => {
        balance = balance - eval(memory.join(''));
        clearTotal();
    };

    // concatenates all input into 1 mathematical expression, evaluates it, and assigns the value total
    // resets memory and adds the new value to memory for further expressions
    const calculate = () => {
        total = eval(memory.join(''));
        clearMemory();
        memory.push(total);
    };
    
    // Module exports
    return {
        load,
        getTotal,
        clearTotal,
        getBalance,
        deposit,
        withdraw,
        calculate,
        fetchBalance,
        clearMemory,
        memory
    };

};
 