const addForm = $("#addForm");
const amountField = $("#amount");
const notesField = $("#notes");

addForm.on("submit", function(e) {
    e.preventDefault();
    const amount = amountField.val();
    const notes = notesField.val();
    console.log(amount, notes);
    addTransaction(amount, notes, new Date());
    window.location.href = "index.html";
});