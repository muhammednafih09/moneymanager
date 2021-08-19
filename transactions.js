function getTransactions() {
    const transactions = localStorage.getItem("transactions") ? JSON.parse(localStorage.getItem("transactions")) : [];
    return transactions;
}

// const getTransactions = () => localStorage.getItem("transactions") ? JSON.parse(localStorage.getItem("transactions")) : [];

const allTransactions = getTransactions();
console.log(allTransactions);

function addTransaction(amount, notes, date) {
    // console.log(date)
    const currentTransactions = getTransactions();
    currentTransactions.push({ amount, notes, date: date.toDateString() });
    localStorage.setItem("transactions", JSON.stringify(currentTransactions));
}

function editTransaction(index, amount, notes) {
    const currentTransactions = getTransactions();
    currentTransactions[index].amount = amount;
    currentTransactions[index].notes = notes;
    localStorage.setItem("transactions", JSON.stringify(currentTransactions));
    // localStorage.setItem("transactions", JSON.stringify(allTrans))
}

function setTrans(allTrans) {
    localStorage.setItem("transactions", JSON.stringify(allTrans));
}