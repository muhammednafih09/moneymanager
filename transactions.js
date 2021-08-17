function getTransactions() {
    const transactions = localStorage.getItem("transactions") ? JSON.parse(localStorage.getItem("transactions")) : [];
    return transactions;
}

const allTransactions = getTransactions();
console.log(allTransactions);

function addTransaction(amount, notes, date) {
    // console.log(date)
    const currentTransactions = getTransactions();
    currentTransactions.push({ amount, notes, date: date.toDateString() });
    localStorage.setItem("transactions", JSON.stringify(currentTransactions));
}

function setTrans(allTrans) {
    localStorage.setItem("transactions", JSON.stringify(allTrans));
}