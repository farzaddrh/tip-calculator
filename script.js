"use strict";
const btnTipContainer = document.querySelector(".tip-container");
const bill = document.getElementById("bill");
const person = document.getElementById("person");
const tipAmountEl = document.querySelector(".amount-tip");
const totalAmountEl = document.querySelector(".amount-total");
const btnCustom = document.querySelector(".btn-custom");
const customTip = document.querySelector(".custom-tip");
const btnReset = document.querySelector(".btn-reset");
////////////////////////////EVENTS///////////////////////////////////
btnTipContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-tip")) {
        calcBill(e);
    }
});

btnCustom.addEventListener("click", function () {
    this.classList.add("hidden");
    customTip.classList.remove("hidden");
});

customTip.addEventListener("input", function (e) {
    calcBill(e);
});

btnReset.addEventListener("click", function () {
    tipAmountEl.textContent = "$0.00";
    totalAmountEl.textContent = "$0.00";
    bill.value = "";
    person.value = "";
    btnCustom.classList.remove("hidden");
    customTip.classList.add("hidden");
});
/////////////////////////////BILL CALCULATION//////////////////////
function calcBill(e) {
    const billValue = +bill.value;
    const personValue = +person.value;
    const tipValue = +parseInt(e.target.value);
    checkNumPerson(personValue);
    if (!billValue || !personValue || !tipValue) return;

    const tipAmount = +((billValue * (tipValue / 100)) / personValue).toFixed(
        2
    );
    const totalAmount = billValue / personValue + tipAmount;
    tipAmountEl.textContent = `$${tipAmount}`;
    totalAmountEl.textContent = `$${totalAmount.toFixed(2)}`;
}
//////////////////////CHECK NUMBER OF PERSONS////////////////////////
function checkNumPerson(personValue) {
    personValue === 0
        ? person.closest(".form-control").classList.add("notValid")
        : person.closest(".form-control").classList.remove("notValid");
}
