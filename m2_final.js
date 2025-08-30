// Elements
var showCoin = document.getElementById("show-coin");
var callHistory = document.getElementById("new-div-history");
var clearHistoryBtn = document.getElementById("clear-action-btn");
var showBtnCopy = document.getElementById("show-btn-copy");
var copyActionBtn = document.querySelectorAll(".copy-action-btn");
var showHeart = document.getElementById("show-heart");
var heartButtons = document.querySelectorAll(".heart-action-btn"); // use class instead of id
var callBtns = document.querySelectorAll(".call-action-btn");

// ========== Heart Buttons ==========
let heartCount = 0;
heartButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        heartCount++;
        showHeart.textContent = heartCount;
    });
});

// ========== Clear History ==========
clearHistoryBtn.addEventListener("click", () => {
    callHistory.innerHTML = "";
});

// ========== Copy Buttons ==========
let copyCount = 0;
copyActionBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        copyCount++;
        showBtnCopy.textContent = copyCount + " copy";
    });
});

// ========== Call Buttons ==========
let coins = parseInt(showCoin.textContent, 10);

callBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        var card = btn.closest(".card"); // parent card
        var serviceName = card.querySelector(".call-info-heading").textContent;
        var serviceNum = card.querySelector(".call-num").textContent;

        if (coins < 20) {
            alert("Sorry :( Not enough coins to make a call");
            return;
        }

        coins -= 20;
        showCoin.textContent = coins;

        alert(`Calling ${serviceName} at ${serviceNum}`);

        var entry = document.createElement("div");
        entry.className = "history-entry w-full flex justify-between items-center mb-2";
        entry.innerHTML = `
      <div class="info">
        <h3 class="mb-1 text-sm font-medium">${serviceName}</h3>
        <p>${serviceNum}</p>
      </div>
      <div class="date font-light text-sm">${new Date().toLocaleTimeString()}</div>
    `;

        callHistory.appendChild(entry);
    });
});
