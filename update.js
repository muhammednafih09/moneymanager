const addForm = $("#updateForm");
const amountField = $("#amount");
const notesField = $("#notes");

const params = new URLSearchParams(window.location.search);
const index = Number(params.get("index"));

const allTrans = getTransactions();
console.log(allTrans[index])
amountField.val(allTrans[index].amount);
notesField.val(allTrans[index].notes);

addForm.on("submit", function(e) {
    e.preventDefault();
    const amount = amountField.val();
    const notes = notesField.val();
    console.log(amount, notes);
    editTransaction(index, amount, notes);
    window.location.href = "index.html";
});