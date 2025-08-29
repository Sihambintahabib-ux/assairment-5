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



// ==========
//1st task : Heart Icons =========
// ===========

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




// ==========
//2nd task : Call Buttons and Call History Section and timing
//  =========


document.addEventListener("DOMContentLoaded", () => {
    const callBtns = document.querySelectorAll(".call-action-btn");
    const showCoin = document.getElementById("show-coin");
    const callHistory = document.getElementById("new-div-history");

    let coins = parseInt(showCoin.textContent, 10); // starting coin balance

    for (let i = 0; i < callBtns.length; i++) {
        callBtns[i].addEventListener("click", function () {
            const card = callBtns[i].parentNode.parentNode;

            const serviceName = card.querySelector(".call-info-heading").textContent;
            const serviceNum = card.querySelector(".call-num").textContent;

            if (coins < 20) {
                alert("Sorry :( You have Not enough coins to make a call");
                return;
            }

            coins -= 20;
            showCoin.textContent = coins;

            alert(`Calling ${serviceName} at ${serviceNum}`);

            const entry = document.createElement("div");
            entry.classList.add("history-entry", "w-full","flex", "justify-between", "items-center", "mb-2");
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
});




// ==========
//3rd task : Clear History button =========
// ===========

//delete history 
const clearHistoryBtn = document.getElementById("clear-action-btn");
const callHistory = document.getElementById("new-div-history");

clearHistoryBtn.addEventListener("click", function () {
    callHistory.innerHTML = "";  // remove all entries
});

// ==========
//4th task : copy =========
// ===========
// selector for navbar heart count
