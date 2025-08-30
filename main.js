// coin
var showCoin = document.getElementById("show-coin");

// copy
var showBtnCopy = document.getElementById("show-btn-copy");
var copyActionBtn = document.querySelectorAll(".copy-action-btn");

// callBtns
// callActionBtn
// call
var callBtns = document.getElementById("call-action-btn");

// clean
var clearActionBtn = document.getElementById("clear-action-btn");

//clearhistory
var clearHistoryBtn = document.getElementById("clear-action-btn");

// newDivHistory
// history
// callHistory
var callHistory = document.getElementById("new-div-history");

// info-header
var serviceName = document.getElementById("call-info-heading");
var historyHeading = document.getElementById("history-heading");

// number
var serviceNum = document.getElementById("call-num");
var historyNum = document.getElementById("history-num");

// tag/badge
var callBadge = document.getElementById("call-badge");
var historyBadge = document.getElementById("history-badge");

// date
var historyDate = document.getElementById("history-date");

//heart
var showHeart = document.getElementById("show-heart");
var heartButtons = document.querySelectorAll(".heart-action-btn");


//  ==========
//code start ==========
//  ==========


// ==========
//1st task : Heart Icons =========
// ===========

// var showHeart = document.getElementById("show-heart");
// var heartButtons = document.querySelectorAll(".heart-action-btn");

// showHeart;
// heartButtons;
let heartCount = 0;

heartButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        heartCount++;
        showHeart.textContent = heartCount;
    });
});





// ==========
//3rd task : Clear History button =========
// ===========

var clearHistoryBtn = document.getElementById("clear-action-btn");
// var clearHistoryBtn;
// var callHistory;

clearHistoryBtn.addEventListener("click", function () {
    callHistory.innerHTML = "";
});

// ==========
//4th task : copy =========
// ===========
var copyCount = 0;
var showBtnCopy = document.getElementById("show-btn-copy");
var copyActionBtn = document.querySelectorAll(".copy-action-btn");

//  copyActionBtn.addEventListener("click", () => {
//     // e.preventDefault()
//     // copyCount ++
//     // showBtnCopy=showBtnCopy.textContent= copyCount;
// })


copyActionBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        // alert("none copy");
        copyCount++;
        showBtnCopy.textContent = copyCount + " copy";
    });
});
























// ==========
//2nd task : Call Buttons and Call History Section and timing
//  =========

// document.addEventListener("DOMContentLoaded", () => {
//     const callBtns = document.querySelectorAll(".call-action-btn");
//     const showCoin = document.getElementById("show-coin");
//     const callHistory = document.getElementById("new-div-history");

//     let coins = parseInt(showCoin.textContent, 10);

//     for (let i = 0; i < callBtns.length; i++) {
//         callBtns[i].addEventListener("click", function () {
//             const card = callBtns[i].parentNode.parentNode;

//             const serviceName = card.querySelector(".call-info-heading").textContent;
//             const serviceNum = card.querySelector(".call-num").textContent;

//             if (coins < 20) {
//                 alert("Sorry :( You have Not enough coins to make a call");
//                 return;
//             }

//             coins -= 20;
//             showCoin.textContent = coins;

//             alert(`Calling ${serviceName} at ${serviceNum}`);

//             const entry = document.createElement("div");
//             entry.classList.add("history-entry", "w-full", "flex", "justify-between", "items-center", "mb-2");
//             entry.innerHTML = `
//         <div class="info">
//           <h3 class="mb-1 text-sm font-medium">${serviceName}</h3>
//           <p>${serviceNum}</p>
//         </div>
//         <div class="date font-light text-sm">${new Date().toLocaleTimeString()}</div>
//       `;

//             callHistory.appendChild(entry);
//         });
//     }
// });





// =========

// =========




/*{ <div class="card">
  <div class="call-info">
    <h3 class="call-info-heading">Emergency Hotline</h3>
    <p class="call-num">12345</p>
  </div>
  <button class="call-action-btn">Call</button>
</div>

<div id="show-coin">100</div>
<div id="new-div-history"></div>

<script> }*/







var callBtns = document.querySelectorAll(".call-action-btn");
var showCoin = document.getElementById("show-coin");
var callHistory = document.getElementById("new-div-history");

let coins = parseInt(showCoin.textContent, 10);

for (let i = 0; i < callBtns.length; i++) {
    callBtns[i].addEventListener("click", function () {
        var card = callBtns[i].parentNode; // button’s parent is the card

        var serviceName = card.querySelectorAll(".call-info-heading").textContent;
        var serviceNum = card.querySelectorAll(".call-num").textContent;

        if (coins < 20) {
            alert("Sorry :( You don’t have enough coins to make a call");
            return;
        }

        coins -= 20;
        showCoin.textContent = coins;

        alert(`Calling ${serviceName} at ${serviceNum}`);

        var entry = document.createElement("div");
        entry.classList.add("history-entry", "w-full", "flex", "justify-between", "items-center", "mb-2");
        entry.innerHTML = `
              <div class="info">
                <h3 class="mb-1 text-sm font-medium">${serviceName}</h3>
                <p>${serviceNum}</p>
              </div>
              <div class="date font-light text-sm">${new Date().toLocaleTimeString()}</div>
            `;

        callHistory.appendChild(entry);
    });
}









