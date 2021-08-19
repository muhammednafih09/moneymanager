const transList = $("#transList");
const currentBal = $('#currentBal');
const balIn = $('#balIn');
const balOut = $('#balOut');

let currentBalAmnt = 0;
let transInAmt = 0;
let transOutAmt = 0;

const allTrans = getTransactions();


function showListItems() {
    // console.table(allTrans);
    currentBalAmnt = 0;
    transInAmt = 0;
    transOutAmt = 0;
    balIn.text(transInAmt);
    balOut.text(transOutAmt);
    currentBal.text(currentBalAmnt);
    for (var i = 0; i < allTrans.length; i++) {

        if (Number(allTrans[i].amount) > 0) {
            transInAmt += Number(allTrans[i].amount);
            balIn.text(transInAmt);
        } else {
            transOutAmt += Number(allTrans[i].amount);
            balOut.text(transOutAmt);
        }
        currentBalAmnt += Number(allTrans[i].amount);
        currentBal.text(currentBalAmnt);
        transList.append(`<div class="trans-item">
        <span class="description">${allTrans[i].notes}</span>
        <br>
        <span class="float-start pt-2 text-white">${Number(allTrans[i].amount) > 0 ? "+" : "-"}₹${Math.abs(Number(allTrans[i].amount))}</span>
        <button class="btn btn-sm btn-danger float-end ms-2" onclick="deleteTransItem(${i})">Delete</button>
        <button class="btn btn-sm btn-success float-end ms-2" onclick="editTransItem(${i})">Edit</button>
        <span class="float-end pt-2 text-white">${allTrans[i].date}</span>
        <br>
        <br>
    </div>`)
    }
}

showListItems();

function deleteTransItem(i) {
    allTrans.splice(i, 1);
    setTrans(allTrans);
    transList.empty();
    showListItems();

}

function editTransItem(i) {
    window.location.href = "edit_transaction.html?index=" + i;
}