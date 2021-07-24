// Toggle the Tip Amount Field
function tipAmount() {
    document.getElementById("tip-amount").classList.add("active");
    document.getElementById("tip-percentage").classList.remove("active");
}

// Toggle the Tip Percentage Field
function tipPercent() {
    document.getElementById("tip-amount").classList.remove("active");
    document.getElementById("tip-percentage").classList.add("active");
}

// Toggle the No Tip Field
function noTip() {
    document.getElementById("tip-amount").classList.remove("active");
    document.getElementById("tip-percentage").classList.remove("active");
}

// Toggle the New Group Field
function newGroup() {
    document.getElementById("new-group").classList.add("active");
    document.getElementById("old-group").classList.remove("active");
}

// Toggle the Old Group Field
function oldGroup() {
    document.getElementById("new-group").classList.remove("active");
    document.getElementById("old-group").classList.add("active");
}