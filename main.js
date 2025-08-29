// heart
// const showHeart = document.getElementById("show-heart");
// const heartActionBtn = document.getElementById("heart-action-btn");

// coin
const showCoin = document.getElementById("show-coin");

// copy
const showBtnCopy = document.getElementById("show-btn-copy");
const copyActionBtn = document.getElementById("copy-action-btn");

// call
const callActionBtn = document.getElementById("call-action-btn");

// clean
const clearActionBtn = document.getElementById("clear-action-btn");

// history
const newDivHistory = document.getElementById("new-div-history");

// info
const callInfoHeading = document.getElementById("call-info-heading");
const historyHeading = document.getElementById("history-heading");

// number
const callNum = document.getElementById("call-num");
const historyNum = document.getElementById("history-num");

// tag/badge
const callBadge = document.getElementById("call-badge");
const historyBadge = document.getElementById("history-badge");

// date
const historyDate = document.getElementById("history-date");




//  ==========
//code start ==========
//  ==========


// heartActionBtn.addEventListener(click , function name(params) {
//    alert("geafgad")
// })



// selector for navbar heart count
 showHeart = document.getElementById("show-heart");

// get all heart buttons
 heartButtons = document.querySelectorAll("#heart-action-btn");

let heartCount = 0;

// loop over all buttons
heartButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        heartCount++;
        showHeart.textContent = heartCount;
    });
});
